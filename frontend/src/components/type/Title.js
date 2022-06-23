import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { SettingsContext } from "../../SettingsContext";

export default function Title(props) {
  const { text, gutterBottom, fontFamily } = props
  
  const { colorTheme } = useContext(SettingsContext)

  const padding = (gutterBottom) ? "0 0 1rem" : "0"

  const textColor = (colorTheme === "dark") ? "white" : "black"


  return (
    <Typography 
      color={textColor}
      align="center" 
      fontFamily={fontFamily}
      sx={{
        padding: padding, 
        fontWeight: 700,
        letterSpacing: '5px',
        fontSize: '6.0rem',
        lineHeight: '6.5rem',
        // '@media (min-width: 450px)': {
        //   fontSize: '3.8rem',
        //   lineHeight: '4.3rem',
        // },
        // '@media (min-width: 600px)': {
        //   fontSize: '4.2rem',
        //   lineHeight: '4.7rem',
        // },
        '@media (min-width: 900px)': {
          fontSize: '9.0rem',
          lineHeight: '9.3rem', 
        },
      }}
    >
      { text }
    </Typography>
  )
}