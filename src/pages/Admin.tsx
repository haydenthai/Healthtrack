import {
    Divider,
    Link,
    useAuthenticator,
} from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import Nurse from './Nurse';
import Pharmacist from './Pharmacist';
import Physician from './PhysicianScheduler';
import PhysicianAssistant from './PhysicianAssistant';
import Technician from './LabOrderTracking';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { AppLayout, Container } from '@cloudscape-design/components';
import { Patient } from '../models';
import { DataStore } from 'aws-amplify';

import DetailsView from './DetailedPatient';

export interface AdminProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function Admin({ user }: AdminProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [page, setPage] = useState<string>('nurse');

    function showView() {
        // show DetailsView
        return (<section>
            <DetailsView />
        </section>);
    }

    function switchView() {
        switch (page) {
            case 'nurse':
                return (<Container>
                    <Nurse user={user} />
                </Container>);
            case 'technician':
                return <Technician user={user} />;
            case 'pharmacist':
                return <Pharmacist user={user} />;
            case 'physician':
                return <Physician user={user} />;
            case 'physicianassistant':
                return <PhysicianAssistant user={user} />;
        }
    }
    function handleNurse() {
        setPage('nurse');
    }
    return (
        <AppLayout
            navigation={
                <>
                    <Link onClick={handleNurse}>Nurse View</Link>
                    <br />
                    <Link onClick={() => setPage('technician')}>
                        Technician View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('pharmacist')}>
                        Pharmacist View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('physician')}>
                        Physician View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('physicianassistant')}>
                        Physician Assistant View
                    </Link>
                    <Divider />
                    <Link isDisabled onClick={() => alert('Delete')}>
                        Delete
                    </Link>
                    <Link onClick={() => alert('Attend a workshop')}>
                        Attend a workshop
                    </Link>
                </>
            }
            content={

                <>
                {showView()}
                 </>

            }
            tools={<>Tools panel</>}
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            toolsOpen={toolsOpen}
        />
    );
}
export default Admin;
