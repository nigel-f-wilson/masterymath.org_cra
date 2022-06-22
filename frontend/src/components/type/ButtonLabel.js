import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { SettingsContext } from "../../SettingsContext";

export default function ButtonLabel(props) {
  const { text, 
    gutterBottom = false, 
    fontFamily= 'roboto', 
    align = 'center' 
  } = props
  
  const { colorTheme } = useContext(SettingsContext)

  const padding = (gutterBottom) ? "0 0 3rem" : "0"

  const textColor = (colorTheme === "dark") ? "white" : "black"


  return (
    <Typography 
      color={textColor}
      align={align}
      fontFamily={fontFamily}
      sx={{
        padding: padding, 
        fontWeight: 700,
        // letterSpacing: '2px',
        fontSize: '1.2rem',
        lineHeight: '2.0rem',
        // '@media (min-width: 450px)': {
        //   fontSize: '3.8rem',
        //   lineHeight: '4.3rem',
        // },
        // '@media (min-width: 600px)': {
        //   fontSize: '4.2rem',
        //   lineHeight: '4.7rem',
        // },
        // '@media (min-width: 900px)': {
        //   fontSize: '5.0rem',
        //   lineHeight: '6.0rem', 
        // },
      }}
    >
      { text }
    </Typography>
  )
}