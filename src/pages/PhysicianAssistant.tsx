import { Button, View, useAuthenticator } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';


import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { Navigation } from '../components/navigation/Navigation';
import { AppLayout } from '@cloudscape-design/components';

export interface PhysicianAssistantProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function PhysicianAssistant({ user }: PhysicianAssistantProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);

    return (
        <AppLayout
            navigation={
                <>
                   <Navigation signOut={signOut}/>
                </>
            }
            content={<>Physician Assistant View</>}
        />
    );
}

export default PhysicianAssistant;
