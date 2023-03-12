import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { AppLayout } from '@cloudscape-design/components';

export interface PharmacistProps {
  user?: AmplifyUser;
  signOut?: (event?: AuthEventData) => void;
}

function Pharmacist({ user }: PharmacistProps) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);


  return (
    <AppLayout
      navigation={
        <>
          <Navigation signOut={signOut} />
        </>
      }
      content={<>Pharmacist</>}
    />
  );
}
export default Pharmacist;
