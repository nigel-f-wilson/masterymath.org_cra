import React, { useContext, useState } from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar , IconButton } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { SettingsContext, LayoutContext } from '../../contexts';
import { MenuDrawer } from "./";
import { LoginButton, LogoutButton } from '../auth';

export default function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { colorTheme } = useContext(SettingsContext)
  const { navbarHeightPx } = useContext(LayoutContext)


  const bgColor = (colorTheme === "dark") ? "darkGrey" : "lightGrey"
  const fontColor = (colorTheme === "dark") ? "white" : "black"

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen((prev) => !prev)
  };

  return (
    <AppBar position='sticky' >
      <Box height={`${navbarHeightPx}px`} bgcolor={bgColor} display='flex' justifyContent='end' alignItems='center' paddingX='0.5rem' >
        <IconButton 
          onClick={toggleDrawer}
          children={<FontAwesomeIcon icon={faBars} color={fontColor} />}
          aria-controls="main-menu"
          aria-haspopup="true"
        />
        <MenuDrawer 
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </AppBar>
  )
}