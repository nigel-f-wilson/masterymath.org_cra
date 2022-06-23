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

  const fontColor = (colorTheme === "dark") ? "white" : "black"
  const fontWeight = (colorTheme === "dark") ? 400 : 700


  return (
    <Typography 
      color={fontColor}
      align={align}
      fontFamily={fontFamily}
      sx={{
        padding: padding, 
        fontWeight: fontWeight,
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
          fontSize: '3.25rem',
          lineHeight: '3.5rem', 
          letterSpacing: '3px',
        },
      }}
    >
      { text }
    </Typography>
  )
}