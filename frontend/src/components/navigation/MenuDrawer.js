import React, { useContext, useState } from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { Box, Drawer , IconButton, Typography } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { SettingsContext } from '../../SettingsContext';
import { LayoutContext } from '../../LayoutContext';
import { Title, Subtitle } from "../type";
import { LightDarkModeToggle } from "./";


export default function MenuDrawer(props) {
  const { drawerOpen, toggleDrawer } = props

  const { colorTheme } = useContext(SettingsContext)
  const { navbarHeightPx } = useContext(LayoutContext)

  
  const fontColor = (colorTheme === "light") ? "black" : "white"
  const bgColor = (colorTheme === "light") ? "lightGrey" : "darkGrey"

  return (
   <Drawer 
      open={drawerOpen} 
      anchor='right' 
      role="navigation"
      // onClick={toggleDrawer}
      // onKeyDown={toggleDrawer}
    >
      
      <Box
        width='320px'
        height='100vh'
        color={fontColor}
        bgcolor={bgColor} 
        paddingX='1rem'
        // display='flex'
        // flexDirection='column'
      >

        <Box display='flex' justifyContent='end' height={`${navbarHeightPx}px`}   >
          <IconButton 
            onClick={toggleDrawer}
            children={<FontAwesomeIcon icon={faTimes} color={fontColor} />}
            aria-controls="main-menu"
            aria-haspopup="true"
            sx={{ padding: 0 }}
          />
        </Box>

        <Box width='100%' border='solid red 1px' height='8rem' >
          PROFILE AREA
          You are signed in as: 
          
        </Box>

        <Typography variant='h3' children='About' />

        <Typography variant='h3' children='Services' />
        
        <Typography variant='h3' children='Resources' />
        
        <LightDarkModeToggle />
      
      </Box>
    </Drawer>
  )
}