import React, { useContext } from "react";

import { HashLink } from 'react-router-hash-link';
import { Box, Fade } from '@mui/material';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

import { useScrollPosition } from "../../hooks";
import { ButtonLabel } from "../text";
import { LayoutContext } from "../../contexts";

export default function ScrollToTopButton() {
  const { narrowScreen } = useContext(LayoutContext)
  let iconSize = narrowScreen ? "2x" : "4x"
  let insetFromCorner = narrowScreen ? "1.0rem" : "2.0rem"
  let scrolledDown = (useScrollPosition() > 500)
  
  return (
    <Fade in={scrolledDown} >
      <Box 
        display="flex"
        position='fixed' 
        bottom={insetFromCorner} 
        right={insetFromCorner} 
      >
        <HashLink smooth to="#top">
          <ButtonLabel startIcon={faArrowCircleUp} iconSize={iconSize} />
        </HashLink>
      </Box>
    </Fade>
  );
}