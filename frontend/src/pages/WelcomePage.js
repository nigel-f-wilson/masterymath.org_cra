import React, { useContext } from 'react'

// THIRD PARTY
// import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Box, Grid, MenuItem  } from '@mui/material';

// ICONS
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import { Title, Subtitle, Paragraph, ButtonLabel } from "../components/text";
// INTERNAL
import { Navbar } from "../components/navigation";
import { SettingsContext, LayoutContext } from "../contexts";
import { ScrollingPage } from "../components/layout";
import { LoginButton, LandingScrollDownButtons, PageLinkButton } from '../components/buttons';

export default function WelcomePage() {
  return (
    <Box>
      <Navbar />
      <ScrollingPage >
        <TitleSection id='top' />
        <WhatSection id='what' />
        <HowSection id='how' />
        <LandingSection id='who' />
        <LandingSection id='why' />
      </ScrollingPage>
    </Box>
  )
}

function TitleSection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} >
      <Box pb={4} >
        <Title text="Mastery" fontFamily="Amatic SC"  />
        <Title text="Math" fontFamily="Amatic SC" gutterBottom />
        <Subtitle text="Your step-by-step guide" fontFamily="Amatic SC"  />
        <Subtitle text="to a strong foundation" fontFamily="Amatic SC"  />
        <Subtitle text="in mental computation." fontFamily="Amatic SC"  />
      </Box>
      <Box pb={4} >
        <LoginButton />
      </Box>
      <ScrollDownLinks height="20vh" />
    </FullscreenLandingSection>
  )
}

function WhatSection(props) {
  const { id } = props
  const { navbarHeightPx } = useContext(LayoutContext)
  const navHeight = `${navbarHeightPx}px`

  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />
      <Subtitle 
        fontFamily="Amatic SC" 
        text="A checklist of math skills" 
        gutterBottom
      />

      <Paragraph 
        text="At its core, Mastery Math is simply a list of skills combined with a dashboard that enables learners to easily track their progress and decide what to practice next."
      />
      <Paragraph 
        text="These skills relate to basic numeracy and they build on one another. Like a video game, Mastery Math prevents users from moving on to the next level until they beat the ones that come before it."
      />
      <Paragraph 
        text="In order to set students up for success, Mastery Math does not take into account a learner's age or grade level in school. In Mastery Math everyone starts at the beginning. Like a video game, Mastery Math prevents users from moving on to the next level until they beat the ones that come before it."
      />
    </FullscreenLandingSection>
  )
}

function HowSection(props) {
  const { id } = props
  const { navbarHeightPx } = useContext(LayoutContext)

  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />
      <Subtitle 
        fontFamily="Amatic SC" 
        text="A checklist of math skills" 
        gutterBottom
      />

      <Paragraph 
        text="At its core, Mastery Math is simply a list of skills combined with a dashboard that enables learners to easily track their progress and decide what to practice next."
      />
      <Paragraph 
        text="These skills relate to basic numeracy and they build on one another. The number one reason that people start to dislike math is that they are pushed to move on to the next topic before fully mastering what came before. Doing this gives kids the sense that even basic computation is shrouded in mystery. Even if you can do basic arithmetic on paper,   The important thing is not a learner's age or grade in school"
      />
          

    </FullscreenLandingSection>
  )
}

function FullscreenLandingSection(props) {
  const { id, children } = props
  const { navbarHeightPx } = useContext(LayoutContext)
  return (
    <Box id={id} 
      height='100vh' 
      paddingX={2}
      paddingTop={`${navbarHeightPx}px`}
    >
      {children}
    </Box>
  )
}

function LandingSection(props) {
  const { id } = props
  const { navbarHeightPx } = useContext(LayoutContext)

  return (
    <FullscreenLandingSection>
      <Title text={id} />
      <Subtitle fontFamily="Amatic SC" text="Mastery Math is a checklist of math skills." />
          



    </FullscreenLandingSection>
  )
}

// function PhilosophySection(props) {
//   const { id } = props
//   const { navbarHeightPx } = useContext(LayoutContext)
//   const navHeight = `${navbarHeightPx}px`

//   return (
//     <Box id={id} 
//       height='100vh' 
//       paddingTop={navHeight}
//     >
//       <Title text={id} />
//       <Subtitle 
//         fontFamily="Amatic SC" 
//         text="A checklist of math skills" 

//       />

//       <Paragraph 
//         text="We have a saying at Mastery Math, \"It's Ok to move Fast, as long as you're not in a Hurry."
//       />
          

//     </Box>
//   )
// }