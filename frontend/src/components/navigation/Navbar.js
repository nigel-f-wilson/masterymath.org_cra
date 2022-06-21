import React, { useContext, useState } from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Box, Grid, Container, Card, CardHeader, CardMedia, Drawer , IconButton, Typography } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import theme from '../../theme';
import { SettingsContext } from '../../SettingsContext';
import { Title, Subtitle } from "../type";
import { MenuDrawer } from "./";


export default function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { colorTheme, setColorTheme } = useContext(SettingsContext)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen((prev) => !prev)
  };

  return (
    <Box height='2.5rem' bgcolor='darkGrey' display='flex' justifyContent='end' alignItems='center' paddingX='0.25rem' >
      <IconButton 
        onClick={toggleDrawer}
        children={<FontAwesomeIcon icon={faBars} color='white' size='sm' />}
        aria-controls="main-menu"
        aria-haspopup="true"
      />
      <MenuDrawer 
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
      />

    </Box>
  )
}