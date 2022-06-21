import React from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Box, Grid, Container, Card, CardHeader, CardMedia, Button } from '@mui/material';


// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
// import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { Title, Subtitle } from "../components/type";
import { Navbar } from "../components/navigation";


export default function WelcomePage() {
  return (
    <Box>
      <Navbar />
      <TitleSection id='title-section' />
      <LandingSection id='section-one' />
      <LandingSection id='section-two' />
      <LandingSection id='section-three' />
    </Box>
  )
}

function TitleSection(props) {
  const { id } = props
  return (
    <Box id="title-section" sx={{ backgroundColor: '#000',  height: '100vh' }}  >
        <Header />
        <ScrollLinks />
        {/* <h2>Section Three</h2>
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
        </ul> */}
      </Box>
  )
}

function LandingSection(props) {
  const { id } = props
  return (
    <Box sx={{ backgroundColor: '#D0D0D0', padding: '2.5vw 3.5vw 12vh 3.5vw',  height: '100vh' }} id="section-three">
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
      {/* <Button 
        variant="outlined"
        color="white"
      >
        <FontAwesomeIcon icon={faArrowCircleDown} color='white' size='sm' />
      </Button> */}
      


    </Box>
  )

}