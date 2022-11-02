import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './Context/Settings/Settings';
import { MantineProvider } from '@mantine/core';
import App from './app.jsx';
import ToDo from './Components/ToDo/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Settings>
        <App/>
      </Settings>
    </MantineProvider>
  </React.StrictMode>
);
