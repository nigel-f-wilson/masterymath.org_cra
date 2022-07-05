import React, { useContext } from 'react'

// THIRD PARTY
import { Box } from '@mui/material';

// INTERNAL
import { ScrollToTopButton } from "../buttons";
import { SettingsContext } from "../../contexts";

export default function ScrollingPage(props) {
  const { colorTheme } = useContext(SettingsContext)
  const bgColor = (colorTheme === "dark") ? "black" : "white"
  // const fontColor = (colorTheme === "dark") ? "white" : "black"
  return (
    <Box bgcolor={bgColor} display="flex" flexDirection="column" alignItems="center" >
      {props.children}
      <ScrollToTopButton />
    </Box>
  )
}
