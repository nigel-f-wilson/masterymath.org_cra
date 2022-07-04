import React, { useContext } from 'react'

// THIRD PARTY
import { Box } from '@mui/material';

// CUSTOM
import { ScrollToTopButton } from "../navigation";
import { SettingsContext } from "../../contexts";

export default function ScrollingPage(props) {
  const { colorTheme } = useContext(SettingsContext)
  const bgColor = (colorTheme === "dark") ? "black" : "white"
  // const fontColor = (colorTheme === "dark") ? "white" : "black"
  return (
    <Box bgcolor={bgColor} >
      {props.children}
      <ScrollToTopButton />
    </Box>
  )
}
