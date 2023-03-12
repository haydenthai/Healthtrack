import { Autocomplete, Heading, useAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import type { AmplifyUser } from '@aws-amplify/ui';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/base.scss';
import { AppLayout, Tabs } from '@cloudscape-design/components';
import PatientCreateForm from '../ui-components/PatientCreateForm';
import {
    ServiceProvidedByClinicCreateForm,
    VitalSignCreateForm,
} from '../ui-components';


export interface NurseProps {
    user?: AmplifyUser;
}

function Nurse({ user }: NurseProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = useState(false);
    console.log(user?.attributes);

    return (
        <>
            <AppLayout
                headerSelector="#header"
                navigation={
                    <>
                        <Navigation signOut={signOut} user={user} />
                    </>
                }
                content={
                    <>
                        <Tabs
                            tabs={[
                                {
                                    label: 'Patient',
                                    id: 'patient',
                                    content: <PatientCreateForm />,
                                },
                                {
                                    label: 'Service Provided By Clinic',
                                    id: 'serviceProvidedByClinic',
                                    content: (
                                        <ServiceProvidedByClinicCreateForm />
                                    ),
                                },
                                {
                                    label: 'Vital Sign',
                                    id: 'vitalSign',
                                    content: <VitalSignCreateForm />,
                                },

                            ]}
                        />
                    </>
                }
            />
        </>
    );
}

export default Nurse;
