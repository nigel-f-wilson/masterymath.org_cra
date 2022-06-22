import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { SettingsContext } from "../../SettingsContext";

export default function Subtitle(props) {
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
        fontSize: '1.8rem',
        lineHeight: '3.0rem',
        letterSpacing: '2px',
        // '@media (min-width: 450px)': {
        //   fontSize: '3.8rem',
        //   lineHeight: '4.3rem',
        // },
        // '@media (min-width: 600px)': {
        //   fontSize: '4.2rem',
        //   lineHeight: '4.7rem',
        // },
        '@media (min-width: 900px)': {
          fontSize: '4.0rem',
          lineHeight: '5.0rem', 
          letterSpacing: '3px',
        },
      }}
    >
      { text }
    </Typography>
  )
}