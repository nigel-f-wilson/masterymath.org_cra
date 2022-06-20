import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';


import { Box, Grid, Container, Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import Footer from '../components/Footer';
import { Title, Subtitle } from "../components/type";


function NavDrawer(props) {
  return (
    <FontAwesomeIcon icon={faCoffee}  />
  )
}


function Header(props) {
  // const {  } = props
  return (
    <Box >
      <Title text="Mastery" fontFamily="Amatic SC"  />
      <Title text="Math" fontFamily="Amatic SC" gutterBottom />

      <Subtitle text="Your step by step guide " fontFamily="Amatic SC"  />
      <Subtitle text="to a strong foundation" fontFamily="Amatic SC"  />
      <Subtitle text="in mental computation." fontFamily="Amatic SC"  />


    </Box>
  )

}

export default function WelcomePage() {
  return (
    <div>
      {/* <section style={{ backgroundColor: '#F0F0F0' }} id="section-one">
        <h2>Section One</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink smooth to={'/welcome#section-two'}>
              Section Two
            </HashLink>
          </li>
          <li>
            <HashLink
              // example of custom scroll function using the scroll prop
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              to={'/welcome#section-three'}
            >
              Section Three
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#focusable-heading'}>
              Focusable Heading
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#focusable-input'}>
              Text Input
            </HashLink>
          </li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#E0E0E0' }} id="section-two">
        <h2>Section Two</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#section-one'}>
              Section One
            </HashLink>
          </li>
          
          <li>
            <HashLink smooth to={'/welcome#section-three'}>
              Section Three
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#top'}>
              Top of Page
            </HashLink>
          </li>
        </ul>

        <h3 id="focusable-heading" tabIndex={-1}>
          This is a <code>h3</code> with a <code>tabindex</code> of{' '}
          <code>-1</code> (linked to from Section One)
        </h3>

        <input
          type="text"
          id="focusable-input"
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '4px',
            margin: '10px 0',
            padding: '4px 6px',
            width: '50%',
          }}
        />
      </section> */}
      <NavDrawer />
      <TitleSection id='title-section' />
      <LandingSection id='section-one' />
      <LandingSection id='section-two' />
      <LandingSection id='section-three' />
    </div>
  )
}

function TitleSection(props) {
  const { id } = props
  return (
    <Box id="title-section" sx={{ backgroundColor: '#000',  height: '100vh' }}  >
        <Header />
        {/* <h2>Section Three</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#section-one'}>
              Section One
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#section-two'}>
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
            <HashLink smooth to={'/welcome#section-one'}>
              Section One
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/welcome#section-two'}>
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
