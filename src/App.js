import React from "react";
import Router from './Router'

// Theme
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// User Authentication 
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from "./config";
import history from "./utils/history";


// Contact Form 
import { FormspreeProvider } from '@formspree/react';

// App Context
import { SettingsContextProvider, LayoutContextProvider } from './contexts';


// User Authentication
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};
const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
  onRedirectCallback,
};

export default function App() {
  return (
    <React.Fragment>
      <Auth0Provider {...providerConfig}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <SettingsContextProvider >
            <LayoutContextProvider >
              <FormspreeProvider project="1960964562039602920" >
                {/* <FormspreeProvider project={process.env.REACT_APP_FORMSPREE_PROJECT_ID} > */}
                <Router />
              </FormspreeProvider>
            </LayoutContextProvider>
          </SettingsContextProvider>
        </ThemeProvider>
      </Auth0Provider>
    </React.Fragment>
  );
}

