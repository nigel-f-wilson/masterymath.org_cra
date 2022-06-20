import React from "react";
import { CssBaseline } from '@mui/material';
import { FormspreeProvider } from '@formspree/react';

import Router from './Router'
// import Navbar from './components/navigation/Navbar';

// THEME & Layout Context
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';
import { SettingsContextProvider } from './SettingsContext';




export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SettingsContextProvider >
          <FormspreeProvider project="1960964562039602920" >
          {/* <FormspreeProvider project={process.env.REACT_APP_FORMSPREE_PROJECT_ID} > */}
            <Router />
          </FormspreeProvider>
        </SettingsContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
