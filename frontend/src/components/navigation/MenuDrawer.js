import React, { useContext, useState } from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Box, Grid, Container, Card, CardHeader, CardMedia, Drawer , IconButton, Typography } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faXmark } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import theme from '../../theme';
import { SettingsContext } from '../../SettingsContext';
import { Title, Subtitle } from "../type";
import { LightDarkModeToggle } from "./";


export default function MenuDrawer(props) {
  const { drawerOpen, toggleDrawer } = props

  const { colorTheme, toggleColorTheme } = useContext(SettingsContext)
  
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
        width='280px'
        height='100vh'
        color={fontColor}
        bgcolor={bgColor} 
        paddingLeft='1rem'
        // display='flex'
        // flexDirection='column'
      >

        <Box display='flex' justifyContent='end' px='0.25rem'  >
          <IconButton 
            onClick={toggleDrawer}
            children={<FontAwesomeIcon icon={faTimes} color={fontColor} />}
            aria-controls="main-menu"
            aria-haspopup="true"
          />
        </Box>

        <Box border='solid red 1px' height='8rem' >
          PROFILE AREA
          You are signed in as: 
          
        </Box>

        <Typography variant='h3' children='About' />

        <Typography variant='h3' children='Services' />
        
        <Typography variant='h3' children='Resources' />
        
        <Box >
          <LightDarkModeToggle />
        </Box>
      </Box>
    </Drawer>
  )
}