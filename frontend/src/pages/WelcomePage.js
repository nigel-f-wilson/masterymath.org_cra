import React from 'react'

// THIRD PARTY
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Box, Grid, MenuItem  } from '@mui/material';


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
      <TitleSection id='' />
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
      <ScrollLinks height="20vh" />
    </Box>
  )
}

function LandingSection(props) {
  const { id } = props
  return (
    <Box sx={{ backgroundColor: '#D0D0D0', padding: '2.5vw 3.5vw 12vh 3.5vw',  height: '100vh' }} id={id} >
        <Title text={id} />
        <h2>Section Three</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#why'}>
              why
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#what'}>
              what
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
  const links = [
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
  
  const ScrollLink = React.forwardRef((props, ref) => (
    <MenuItem component={HashLink} to={props.to} smooth ref={ref} >
      <Box border='solid white 1px' borderRadius={4} height='2.7rem' width='100%' display='flex' justifyContent='center' alignItems='center' >
        <ButtonLabel text={props.label} fontFamily="roboto" icon={faArrowCircleDown} />
      </Box>
    </MenuItem>
  ))

  return (
    <Box 
      height={height} 
      display='flex'
      justifyContent='space-evenly'    
    >
      <Grid container px={2} spacing={2} maxWidth='900px' >
        {
          links.map((item) => {
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