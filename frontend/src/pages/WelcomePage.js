import React from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Box, Grid, Container, Card, CardHeader, CardMedia, Button, Typography } from '@mui/material';


// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
// import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { Title, Subtitle, ButtonLabel } from "../components/type";
import { Navbar } from "../components/navigation";


export default function WelcomePage() {
  return (
    <Box>
      <Navbar />
      <TitleSection id='title-section' />
      <LandingSection id='what' />
      <LandingSection id='who' />
      <LandingSection id='how' />
      <LandingSection id='why' />
    </Box>
  )
}

function TitleSection(props) {
  const { id } = props
  return (
    <Box id="title-section" sx={{ backgroundColor: '#000',  height: '100vh' }}  >
      <Header />
      <ScrollLinks />
    </Box>
  )
}

function LandingSection(props) {
  const { id } = props
  return (
    <Box sx={{ backgroundColor: '#D0D0D0', padding: '2.5vw 3.5vw 12vh 3.5vw',  height: '100vh' }} id="section-three">
        <Title text={id} />
        <h2>Section Three</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#section-one'}>
              Section One
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#section-two'}>
              Section Two
            </HashLink>
          </li>
          
          <li>
            <HashLink smooth to="#top">
              Top of Page
            </HashLink>
          </li>
        </ul>
      </Box>
  )
}


function Header() {
  return (
    <Box border='solid red 1px' padding='5vh 0 7vh' >
      <Title text="Mastery" fontFamily="Amatic SC"  />
      <Title text="Math" fontFamily="Amatic SC" gutterBottom />
      <Subtitle text="Your step by step guide " fontFamily="Amatic SC"  />
      <Subtitle text="to a strong foundation" fontFamily="Amatic SC"  />
      <Subtitle text="in mental computation." fontFamily="Amatic SC"  />
    </Box>
  )
}

function ScrollLinks(props) {
  // const {  } = props
  
  
  return (
    <Box >
      <Button 
        variant="outlined"
        component="HashLink"
        to={'/#section-one'}

        // sx={{ color: 'white'}}
        startIcon={<FontAwesomeIcon icon={faArrowCircleDown} size='sm' color="white" />}
        children={<ButtonLabel text="Who?" fontFamily="roboto" color="white" />}
      >
        
      </Button>
      


    </Box>
  )

}