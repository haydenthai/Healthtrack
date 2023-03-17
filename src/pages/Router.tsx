// import * as React from 'react';
// import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
// import { Routes, Route } from 'react-router-dom';
// import customSignUpFields from '../components/authenticator/FormFields';
// import { Authenticator } from '@aws-amplify/ui-react';
// import Nurse from './Nurse';
// import Technician from './LabOrderTracking';
// import Pharmacist from './Pharmacist';
// import Physician from './PhysicianScheduler';
// import { Link } from 'react-router-dom';

// import { ElectronicPatientRecord } from './ElectronicPatientRecord';

// import {
//     Container,
//     Header,
//     ColumnLayout,
//     Button,
// } from '@cloudscape-design/components';
// import Admin from './Admin';
// import InsuranceBilling from './InsuranceBilling';
// import DetailsView from './DetailedPatient';

// const components = {
//     SignUp: { FormFields: customSignUpFields },
// };

// export interface RouterProps {
//     user?: AmplifyUser;
//     signOut?: (event?: AuthEventData) => void;
// }

// function Nav() {
//     return (
//         <div>
//             <Container
//                 header={
//                     <Header
//                         variant="h2"
//                         description="header description placeholder"
//                     >
//                         Header Placeholder
//                     </Header>
//                 }
//             >
//                 <ColumnLayout>
//                     <Link to="/patientdetails">Detailed Patient View</Link>
//                     <Link to="/nurse">Electronic Patient Record Detailed Patient View</Link>
//                     <Link to="/physician">Physician Scheduler</Link>
//                     <Link to="/technician">Lab Order Tracking</Link>
//                     <Link to="/pharmacist">Pharmacy Order Tracking</Link>
//                     <Link to="/nurse/patient">Electronic Patient Record</Link>
//                     <Link to="/insurancebilling">Insurance Billing</Link>
//                 </ColumnLayout>
//             </Container>
//         </div>
//     );
// }

// export function Router({ user }: RouterProps) {
//     return (
//         <>
//             <Authenticator.Provider>
//                 <Authenticator components={components}>
//                     {({ user }: RouterProps) => (
//                         <Routes>
//                             <Route path="/*" element={<Nav />} />
//                             <Route path="/patientdetails" element={<DetailsView/>}/>
//                             <Route
//                                 path="/nurse"
//                                 element={<Nurse user={user} />}
//                             />
//                             <Route
//                                 path="/admin"
//                                 element={<Admin user={user} />}
//                             />
//                             <Route
//                                 path="/technician"
//                                 element={<Technician user={user} />}
//                             />
//                             <Route
//                                 path="/pharmacist"
//                                 element={<Pharmacist user={user} />}
//                             />
//                             <Route
//                                 path="/physician"
//                                 element={<Physician user={user} />}
//                             />
//                             <Route
//                                 path="/physicianassistant"
//                                 element={<Physician user={user} />}
//                             />
//                             <Route
//                                 path="/nurse/patient"
//                                 element={<ElectronicPatientRecord />}
//                             />
//                             <Route
//                                 path="/insurancebilling"
//                                 element={<InsuranceBilling />}
//                             />
//                         </Routes>
//                     )}
//                 </Authenticator>
//             </Authenticator.Provider>
//         </>
//     );
// }
