import React from "react";

// THIRD PARTY
import { Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

// ICONS
// import { fasArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'  // NOT FREE ??
import LogoutIcon from '@mui/icons-material/Logout';

// INTERNAL
import { ButtonWrapper, ButtonLabel } from "./";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <ButtonWrapper 
      id="logout-button-wrapper"
      onClick={() => logout()}
    >
      <ButtonLabel text="Log Out"  />
      <Box pr={1} />
      <LogoutIcon />
    </ButtonWrapper>
  );
};