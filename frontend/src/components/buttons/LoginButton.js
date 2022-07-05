import React from "react";

// THIRD PARTY
import { useAuth0 } from "@auth0/auth0-react";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { ButtonWrapper, ButtonLabel } from "./";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <ButtonWrapper 
      id="login-button-wrapper"
      onClick={() => loginWithRedirect()}
    >
      <ButtonLabel 
        text="Log In" 
        endIcon={faArrowCircleRight} 
      />
    </ButtonWrapper>
  );
};