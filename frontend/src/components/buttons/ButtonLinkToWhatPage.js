import React from "react";
import { Link as RouterLink } from "react-router-dom";

// THIRD PARTY
import { Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

// ICONS
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'  // NOT FREE ??
// import LogoutIcon from '@mui/icons-material/Logout';

// INTERNAL
import { ButtonWrapper, ButtonLabel } from "./";

export default function ButtonLinkToWhatPage() {

  return (
    <ButtonWrapper 
      id="logout-button-wrapper"
      onClick={() => logout()}
    >
      <ButtonLabel text="Log Out" endIcon={faCircleInfo} />
      {/* <Box pr={1} />
      <LogoutIcon /> */}
    </ButtonWrapper>
  );
};