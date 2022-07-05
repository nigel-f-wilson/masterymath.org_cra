// in your theme file that you call `createTheme()`
// import { Theme } from '@mui/material/styles';

// declare module '@mui/styles' {
//     interface DefaultTheme extends Theme { }
// }

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    transparent: 'rgba(0, 0, 0, 0)',
  
    white: '#FFF',
    lightGrey: '#EEE',
    darkGrey: '#222',
    black: '#000',

    light: {
      white: '#FFF',
      lightGrey: '#EEE',
      darkGrey: '#222',
      black: '#000',
    },
    dark: {
      white: '#FFF',
      lightGrey: '#EEE',
      darkGrey: '#222',
      black: '#000',
    },


    
    action: {
        disabledBackground: '#2e6b12',
        disabledOpacity: '0.5'
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 14,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 200,
    },
    pageHeader: { 
      textAlign: "center",
      textShadow: '0.15rem 0.15rem 0.3rem black',
      fontWeight: 200,
    },
    cardHeader: { 
      textShadow: '0.15rem 0.15rem 0.3rem black',
      fontWeight: 200,
    },
    button: {
      fontSize: '1.0rem',
      fontWeight: '700'
    }
  },
  status: {

  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  transitions: {    },
  zIndex: { }

});

theme.typography.navbarBrand = {
  color: theme.palette.common.white,
  fontWeight: 400,
  fontFamily: 'Perantent Marker, cursive',
  fontSize: 32,
}
theme.typography.pageTitle = {
  color: theme.palette.common.white,
  textAlign: "center",
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '2.4rem',
  // lineHeight: '2.6rem',
    '@media (min-width:450px)': {
      fontSize: '3.0rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5.0rem',
      // lineHeight: '2.6rem',

    },
}
theme.typography.pageSubheader = {
  color: theme.palette.common.white,
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '1.7rem',
  lineHeight: '1.9rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
    },

}

theme.typography.cardHeader = {
  color: theme.palette.common.white,
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '1.4rem',
  lineHeight: '1.6rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
      lineHeight: '2.3rem',
    },
}

export default responsiveFontSizes(theme, 2)