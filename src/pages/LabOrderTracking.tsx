import { useAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import PatientCreateForm from '../ui-components/PatientCreateForm';
import { AppLayout } from '@cloudscape-design/components';
// import { LabTestCreateForm, LabTestUpdateForm } from '../ui-components';

function LabOrderTracking({ user }: { user: any }) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);

    return (
        <AppLayout
            navigation={<Navigation signOut={signOut} />}
            content={
                <>  
                    {/* <LabTestCreateForm/>
                    <LabTestUpdateForm/> */}
                </>
            }
            tools={<>Tools panel</>}
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            toolsOpen={toolsOpen}
        />
    );
}

export default LabOrderTracking;
