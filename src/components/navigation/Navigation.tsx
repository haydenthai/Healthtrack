import { AuthEventData } from '@aws-amplify/ui';
import { Button } from '@aws-amplify/ui-react';

import * as React from 'react';
import { Link } from 'react-router-dom';
import type { AmplifyUser } from '@aws-amplify/ui';
import { SpaceBetween } from '@cloudscape-design/components';

export interface NavigationProps {
    signOut: (event: AuthEventData) => void;
    user?: AmplifyUser;
}

export function Navigation({ signOut, user }: NavigationProps) {
    return (
        <div>
            <SpaceBetween direction="horizontal" size="xs">

            {user?.attributes?.['custom:role'] === 'Physician' ?  
                <Button>
                         <Link to="/">Admin</Link>
                </Button>
                : <>Not Admin</>
                }
                <Button className="Signout" onClick={signOut}>
                    Sign out
                </Button>
            </SpaceBetween>
        </div>
    );
}
