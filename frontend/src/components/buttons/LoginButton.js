import React, { useContext } from "react";

// THIRD PARTY
import { Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

// ICONS
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { SettingsContext } from "../../contexts";
import { ButtonLabel } from "../text";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const { colorTheme } = useContext(SettingsContext)
  const fontColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Box 
      onClick={() => loginWithRedirect()}
      border={`solid ${fontColor} 1px`} 
      borderRadius={4} 
      height='2.7rem' 
      width='100%' 
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
    >
      <ButtonLabel text="Log In" endIcon={faArrowCircleRight} />
    </Box>
  );
};