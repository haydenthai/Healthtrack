import React from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './styles/index.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import customSignUpFields from './components/authenticator/FormFields';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Router } from './pages/Router';
import Nurse from './pages/Nurse';
import Physician from './pages/PhysicianScheduler';
import Admin from './pages/Admin';
import PhysicianAssistant from './pages/PhysicianAssistant';
import Pharmacist from './pages/Pharmacist';
import Patient from './pages/ElectronicPatientRecord';
import '@cloudscape-design/global-styles/index.css';
import InsuranceBilling from './pages/InsuranceBilling';
import DetailsView from './pages/DetailedPatient';

Amplify.configure(awsExports);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    children: [
      {
        path: '/insurancebilling',
        element: <InsuranceBilling />,
      },
      {
        path: '/patientdetails',
        element: <DetailsView />,
      },
      {
        path: '/nurse',
        element: <Nurse />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/physician',
        element: <Physician user={undefined} />,
      },
      {
        path: '/technician',
        element: <Physician user={undefined} />,
      },
      {
        path: '/physicianassistant',
        element: <PhysicianAssistant />,
      },
      {
        path: '/pharmacist',
        element: <Pharmacist />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/nurse/patient',
        element: <Patient />,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
