import React from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './styles/index.css';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter } from "react-router-dom";
import '@cloudscape-design/global-styles/index.css';
import { App } from './pages/App';

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
