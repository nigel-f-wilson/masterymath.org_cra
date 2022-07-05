import React, { useContext } from "react";

// THIRD PARTY
import { HashLink } from 'react-router-hash-link';
import { Box, Fade } from '@mui/material';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { ButtonLabel } from "./";
import { LayoutContext, SettingsContext } from "../../contexts";
import { useScrollPosition } from "../../hooks";

export default function ScrollToTopButton() {
  const { narrowScreen } = useContext(LayoutContext)
  const { colorTheme } = useContext(SettingsContext)

  let iconSize = narrowScreen ? "2x" : "4x"
  let insetFromCorner = narrowScreen ? "1.0rem" : "2.0rem"
  let scrolledDown = (useScrollPosition() > 500)

  const bgColor = (colorTheme === "dark") ? "black" : "white"
  
  return (
    <Fade in={scrolledDown} >
      <Box 
        display="flex"
        position='fixed' 
        bottom={insetFromCorner} 
        right={insetFromCorner} 
      >
        <HashLink smooth to="#top" style={{ borderRadius: "50%", backgroundColor: bgColor }} >
          <ButtonLabel startIcon={faArrowCircleUp} iconSize={iconSize} />
        </HashLink>
      </Box>
    </Fade>
  );
}