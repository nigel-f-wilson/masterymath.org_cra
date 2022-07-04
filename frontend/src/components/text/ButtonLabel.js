import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { SettingsContext } from "../../contexts";

export default function ButtonLabel(props) {
  const { text, 
    gutterBottom = false, 
    fontFamily = 'roboto', 
    align = 'center',
    startIcon,
    endIcon, 
    iconSize = 'lg'
  } = props
  
  const { colorTheme } = useContext(SettingsContext)

  const padding = (gutterBottom) ? "0 0 3rem" : "0"

  const textColor = (colorTheme === "dark") ? "white" : "black"


  return (
    <React.Fragment>
      {
        startIcon ? (
          <FontAwesomeIcon icon={startIcon} color={textColor} size={iconSize} />
        ) : (
          <></>
        )
      }
        <Box px={1} >
          <Typography 
            children={text}
            color={textColor}
            align={align}
            fontFamily={fontFamily}
            sx={{
              padding: padding, 
              fontWeight: 700,
              // letterSpacing: '2px',
              fontSize: '1.4rem',
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
          />
        </Box>
      {
        endIcon ? (
          <FontAwesomeIcon icon={endIcon} color={textColor} size={iconSize} />
        ) : (
          <></>
        )
      }
    </React.Fragment>
  )
}