import React from "react";
import { Link as RouterLink } from "react-router-dom";

// THIRD PARTY
// ICONS
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { ButtonWrapper, ButtonLabel } from "./";

export default function PageLinkButton(props) {
  const { to, text } = props
  return (
    <RouterLink to={to} style={{ textDecoration: 'none', width: "100%" }} >
      <ButtonWrapper id="link-to-page-button-wrapper" >
        <ButtonLabel text={text} endIcon={faArrowCircleRight} />
      </ButtonWrapper>
    </RouterLink>
  );
};