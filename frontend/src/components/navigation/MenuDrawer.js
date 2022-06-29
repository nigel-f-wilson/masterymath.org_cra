import React, { useContext } from 'react'

// THIRD PARTY
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Drawer , IconButton, Typography } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { LightDarkModeToggle } from "./";
import { LoginButton, LogoutButton, ProfileSummary } from '../auth';
import { SettingsContext, LayoutContext } from '../../contexts';


export default function MenuDrawer(props) {
  const { drawerOpen, toggleDrawer } = props

  const { isAuthenticated } = useAuth0()
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
        paddingX='1rem'
        color={fontColor}
        bgcolor={bgColor}
      >
        <Box display='flex' justifyContent='end' height={`${navbarHeightPx}px`}   >
          <IconButton 
            onClick={toggleDrawer}
            children={<FontAwesomeIcon icon={faTimes} color={fontColor} size='lg' />}
            aria-controls="main-menu"
            aria-haspopup="true"
            sx={{ padding: 0 }}
          />
        </Box>

        <ProfileSummary />
          

        <Typography variant='h3' children='About' />

        <Typography variant='h3' children='Services' />
        
        <Typography variant='h3' children='Resources' />

        <Box width='100%' border='solid red 1px' height='8rem' >
          
          {!isAuthenticated && ( <LoginButton /> )}
          {isAuthenticated && ( <LogoutButton /> )}
        </Box>
        
        <LightDarkModeToggle />
      
      </Box>
    </Drawer>
  )
}