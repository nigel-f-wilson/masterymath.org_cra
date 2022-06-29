import React, { useContext } from 'react'

// THIRD PARTY
// import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Box, Grid, MenuItem  } from '@mui/material';

// ICONS
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { Title, Subtitle, ButtonLabel } from "../components/text";
import { Navbar, ScrollToTopButton } from "../components/navigation";
import { SettingsContext, LayoutContext } from "../contexts";

const sectionLinks = [
    {
      label: "What?",
      to: "#what",
    },
    {
      label: "Who?",
      to: "#who",
    },
    {
      label: "How?",
      to: "#how",
    },
    {
      label: "Why?",
      to: "#why",
    },
  ]


export default function WelcomePage() {
  return (
    <Box>
      <Navbar />
      <ScrollingPage   >
        <TitleSection id='' />
        <LandingSection id='what' />
        <LandingSection id='who' />
        <LandingSection id='how' />
        <LandingSection id='why' />
      </ScrollingPage>
    </Box>
  )
}

function ScrollingPage(props) {
  const { colorTheme } = useContext(SettingsContext)
  const bgColor = (colorTheme === "dark") ? "black" : "white"
  // const fontColor = (colorTheme === "dark") ? "white" : "black"
  return (
    <Box bgcolor={bgColor} >
      {props.children}
      <ScrollToTopButton />
    </Box>
  )
  
}

function TitleSection(props) {
  const { id } = props
  return (
    <Box id={id} sx={{ height: '100vh' }}  >
      <Header />
      <ScrollLinks height="20vh" />
    </Box>
  )
}

function Header() {
  return (
    <Box padding='5vh 0 7vh' >
      <Title text="Mastery" fontFamily="Amatic SC"  />
      <Title text="Math" fontFamily="Amatic SC" gutterBottom />
      <Subtitle text="Your step-by-step guide" fontFamily="Amatic SC"  />
      <Subtitle text="to a strong foundation" fontFamily="Amatic SC"  />
      <Subtitle text="in mental computation." fontFamily="Amatic SC"  />
    </Box>
  )
}

function ScrollLinks(props) {
  const { height } = props
  const { colorTheme } = useContext(SettingsContext)
  const fontColor = (colorTheme === "dark") ? "white" : "black"
  
  const ScrollLink = React.forwardRef((props, ref) => (
    <MenuItem component={HashLink} to={props.to} smooth ref={ref} >
      <Box border={`solid ${fontColor} 1px`} borderRadius={4} height='2.7rem' width='100%' display='flex' justifyContent='center' alignItems='center' >
        <ButtonLabel text={props.label} fontFamily="roboto" startIcon={faArrowCircleDown} />
      </Box>
    </MenuItem>
  ))

  return (
    <Box 
      height={height} 
      display='flex'
      justifyContent='space-evenly'    
    >
      <Grid container px={2} spacing={2} maxWidth='800px' >
        {
          sectionLinks.map((item) => {
            const { label, to } = item
            return (
              <Grid item xs={6} sm={3} key={`grid-link-to-${item.to}`} >
                <ScrollLink label={label} to={to} />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

function LandingSection(props) {
  const { id } = props
  const { navbarHeightPx } = useContext(LayoutContext)

  return (
    <Box id={id} height='100vh' paddingTop={`${navbarHeightPx}px`} >
      <Title text={id} />
          
      Content of each landing page



    </Box>
  )
}