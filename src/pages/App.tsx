import { AuthenticatorProvider } from '@aws-amplify/ui-react-core';
import {
    Container,
    Header,
    ColumnLayout,
    TopNavigation,
} from '@cloudscape-design/components';
import * as React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ElectronicPatientRecord from './ElectronicPatientRecord';
import InsuranceBilling from './InsuranceBilling';
import LabOrderTracking from './LabOrderTracking';
import { Authenticator } from '@aws-amplify/ui-react';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import customSignUpFields from '../components/authenticator/FormFields';
import PhysicianScheduler from './PhysicianScheduler';
import { createContext, useEffect, useState } from 'react';
import PatientDetail from './DetailedPatient';


export interface AppProps {}

const components = {
    SignUp: { FormFields: customSignUpFields },
};

export interface RouterProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

export const UserContext = createContext<AmplifyUser | undefined>(undefined);

export function App() {
    return (
        <div>
            <Authenticator.Provider>
                <Authenticator components={components}>
                    {({ user, signOut }: RouterProps) => (
                        <UserContext.Provider value={user}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Nav user={user} signOut={signOut} />
                                    }
                                >
                                    <Route
                                        index
                                        element={
                                            <button onClick={signOut}>
                                                Sign Out
                                            </button>
                                        }
                                    />
                                    <Route
                                        path="electronic-patient-record/:id"
                                        element={<PatientDetail />}
                                    />
                                    <Route
                                        path="/electronic-patient-record"
                                        element={<ElectronicPatientRecord />}
                                    />

                                    <Route
                                        path="/pharmacy-tracking"
                                        element={<>Pharmacy Tracking</>}
                                    />
                                    <Route
                                        path="/lab-order-tracking"
                                        element={
                                            <LabOrderTracking
                                                user={undefined}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/insurance-billing"
                                        element={<InsuranceBilling />}
                                    />
                                    <Route
                                        path="/physician-scheduler"
                                        element={<PhysicianScheduler />}
                                    />

                                    {/* <Route path="dashboard" element={<Dashboard />} /> */}

                                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
            routes for. */}
                                    <Route path="*" element={<>no match</>} />
                                </Route>
                            </Routes>
                        </UserContext.Provider>
                    )}
                </Authenticator>
            </Authenticator.Provider>
        </div>
    );
}
export interface NavigationProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}
function Nav({ user, signOut }: NavigationProps) {
    const signOutOfAmplify = () => signOut;
    const [signedIn, setSignedIn] = useState(true);
    useEffect(() => {
        if (!signedIn) signOut;
    }, [signedIn]);
    return (
        <div>
            <TopNavigation
                identity={{
                    href: '/',
                    title: 'Home',
                    logo: {
                        src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=',
                        alt: 'Service',
                    },
                }}
                utilities={[
                    {
                        type: 'button',
                        text: 'Electronic Patient Record',
                        href: `/electronic-patient-record`,
                        external: false,
                        externalIconAriaLabel:
                            ' (opens Electronic Patient Record)',
                    },
                    {
                        type: 'button',
                        text: 'Pharmacy Tracking',
                        href: `/pharmacy-tracking`,
                        external: false,
                        externalIconAriaLabel: ' (opens Pharmacy Tracking)',
                    },
                    {
                        type: 'button',
                        text: 'Lab Order Tracking',
                        href: `/lab-order-tracking`,
                        external: false,
                        externalIconAriaLabel: ' (opens Lab Order Tracking)',
                    },
                    {
                        type: 'button',
                        text: 'Insurance Billing',
                        href: `/insurance-billing`,
                        external: false,
                        externalIconAriaLabel: ' (opens Insurance Billing)',
                    },
                    {
                        type: 'button',
                        text: 'Physician Scheduler',
                        href: `/physician-scheduler`,
                        external: false,
                        externalIconAriaLabel: ' (opens Lab Order Tracking)',
                    },
                    {
                        type: 'button',
                        iconName: 'notification',
                        title: 'Notifications',
                        ariaLabel: 'Notifications (unread)',
                        badge: true,
                        disableUtilityCollapse: false,
                    },
                    {
                        type: 'menu-dropdown',
                        iconName: 'settings',
                        ariaLabel: 'Settings',
                        title: 'Settings',
                        items: [
                            {
                                id: 'settings-org',
                                text: 'Organizational settings',
                            },
                            {
                                id: 'settings-project',
                                text: 'Project settings',
                            },
                        ],
                    },
                    {
                        type: 'menu-dropdown',
                        text: user?.attributes?.email,
                        description: `role: ${
                            user?.attributes?.['custom:role'] == undefined
                                ? `Admin`
                                : `${user?.attributes?.['custom:role']}}`
                        }`,
                        iconName: 'user-profile',
                        items: [
                            { id: 'profile', text: 'Profile' },
                            { id: 'preferences', text: 'Preferences' },
                            { id: 'security', text: 'Security' },
                            {
                                id: 'support-group',
                                text: 'Support',
                                items: [
                                    {
                                        id: 'documentation',
                                        text: 'Documentation',
                                        href: '#',
                                        external: true,
                                        externalIconAriaLabel:
                                            ' (opens in new tab)',
                                    },
                                    { id: 'support', text: 'Support' },
                                    {
                                        id: 'feedback',
                                        text: 'Feedback',
                                        href: '#',
                                        external: true,
                                        externalIconAriaLabel:
                                            ' (opens in new tab)',
                                    },
                                ],
                            },
                            { id: 'signout', text: 'Sign out' },
                        ],
                        onItemClick: ({ detail }) => {},
                    },
                ]}
                i18nStrings={{
                    searchIconAriaLabel: 'Search',
                    searchDismissIconAriaLabel: 'Close search',
                    overflowMenuTriggerText: 'More',
                    overflowMenuTitleText: 'All',
                    overflowMenuBackIconAriaLabel: 'Back',
                    overflowMenuDismissIconAriaLabel: 'Close menu',
                }}
            />
            <Outlet />
        </div>
    );
}
