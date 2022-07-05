import React, { useContext } from 'react'

// THIRD PARTY
// import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid} from '@mui/material';

// INTERNAL
import { Title, Subtitle, Paragraph } from "../components/text";
import { Navbar } from "../components/navigation";
import { LayoutContext } from "../contexts";
import { ScrollingPage } from "../components/layout";
import { LoginButton, LandingScrollDownButtons, PageLinkButton } from '../components/buttons';

export default function WelcomePage() {
  return (
    <Box >
      <Navbar />
      <ScrollingPage >
        <TitleSection id='top' />
        <WhatSection id='what' />
        <WhoSection id='who' />
        <HowSection id='how' />
        <WhySection id='why' />
      </ScrollingPage>
    </Box>
  )
}

function TitleSection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} disableNavbarPadding >
      <Box pt={3} pb={4} >
        <Title text="Mastery"  />
        <Title text="Math" gutterBottom />
        <Subtitle text="Your step-by-step guide"  />
        <Subtitle text="to a strong foundation"  />
        <Subtitle text="in mental computation."  />
      </Box>
      <Box pb={4} >
        <LoginButton />
      </Box>
      <LandingScrollDownButtons height="20vh" />
    </FullscreenLandingSection>
  )
}

function WhatSection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />
      <Subtitle text="Two Sides to Learning Math"  />
      <Paragraph gutterBottom
        text="There are two sides to learning Math. Throughout history they have taken turns being popular and ignored. The truth is they depend on each other and both are important. The first is Creative Problem Solving and the second is Efficient Computation. Mastery Math supports learners from both sides."
      />
      {/* <Paragraph gutterBottom
        text="Learning creative problem solving means learning what to do when you don't know what to do. It is about bravely confronting the unfamiliar, and looking at it from different angles until you find one that suddenly makes it appear much more familiar."
      />
      <Paragraph gutterBottom
        text="The other side of math deals with the things that we know beyond any shadow of a doubt. The stuff that has been point blank proven. Learning efficient computation means acquiring the ability to know certain things with less work."
      /> */}

      <Subtitle text="A Checklist of Math Skills"  />
      <Paragraph gutterBottom
        text="At its core, Mastery Math is simply a list of skills combined with a dashboard that enables learners to easily track their progress and decide what to practice next. This part of Mastery Math is designed to help students master efficient strategies for mental computation. It focusses on one skill at a time and features accuracy guages and timers."
      />
      {/* <Subtitle text="An Emphasis on Mental Math"  />
      <Paragraph gutterBottom
        text="Mastery Math's lessons guide students to think differently about arithmetic concepts. It focusses on developing students skill thinking flexibly and "
      /> */}
      <Subtitle text="A Library of Puzzles"  />
      <Paragraph 
        text="To support students developing their creative problem solving abilities we offer a library of puzzles. I have been a lover of puzzles all my life and these are the best of the best that I have cherry picked from dozens of books. I accept submissions from anyone via the embeded form and I personally give feedback on all answers I recieve to these puzzles. I plan on building a gallery to showcase the best submissions I recieve."
      />
      {/* <Paragraph 
        text="To support students developing their creative problem solving abilities we offer a library of puzzles. I have been a lover of puzzles all my life and these are the best of the best that I have cherry picked from dozens of books. These puzzles are more open ended. While some have specific prerequisties like the Pythagorean Theorem, most of them are suitable for student at a wide range of skill levels. It is a good idea to present the same puzzle to a student at several year intervals and compare the strategies they employed I personally give feedback on answers anyone submits to these puzzles and I plan on building a gallery to showcase the best submissions I recieve."
      /> */}
    </FullscreenLandingSection>
  )
}

function WhoSection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />
      <Subtitle  text="Who is it for?"  />

      <Paragraph 
        text="Mastery Math is for anyone who wants to learn math. It is a tool to help you map out your journey and track your progress. Teachers are encouraged to use it, but please understand that it is not a tool for overseeing classes. You will not be able to give groups of kids the same assignment all at once. Mastery Math is about meeting each learner where they are and progressing without skipping steps. "
      />
      <Grid container py={2} spacing={1} >
        <Grid item xs={12} sm={6} >
          <PageLinkButton to="for-students" text="For Students" />
        </Grid>
        <Grid item display={{xs: 'none', sm: 'flex'}} width="100%" xs={6} >
          <PageLinkButton to="for-parents" text="For Parents" />
        </Grid>
        <Grid item xs={12} sm={6} >
          <PageLinkButton to="for-teachers" text="For Teachers" />
        </Grid>
        <Grid item display={{xs: 'none', sm: 'flex'}} width="100%" xs={6} >
          <PageLinkButton to="for-school-administrators" text="For Schools" />
        </Grid>
      </Grid>

      <Subtitle  text="Who built it?" />
      <Paragraph 
        text="Right now Mastery Math is a solo project by a teacher named Nigel. All the code is open source new contributors are welcome!"
      />
      <Grid container py={2} spacing={1} >
        <Grid item xs={12} sm={6} >
          <PageLinkButton to="meet-nigel" text="Meet Nigel" />
        </Grid>
        <Grid item xs={12} sm={6} >
          <PageLinkButton to="contact-form" text="Get Involved" />
        </Grid>
      </Grid>
      {/* <Paragraph 
        text="My name is Nigel Wilson, and I started as a classroom-based math teacher in New Orleans in 2016. Some of the games that I invented to help my students have fun while practicing math skills were so popular with kids that it inspiried me to build free online versions so that these games could be accessible to more learners."
      /> */}
    </FullscreenLandingSection>
  )
}

function HowSection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />

      <Subtitle text="Start at the Beginning" />
      <Paragraph gutterBottom
        text="Masery Math does not base your starting point on your age or grade level in school. Gaps in math learning can happen at any point and lots of people have gaps they aren't aware of. To set every student up for success, we don't take anything for granted. Everyone starts at the beginning."
      />

      <Subtitle text="Take It One Step At A Time" />
      <Paragraph gutterBottom
        text="In School, groups of kids are made to move through the curriculum at the same pace. This means kids are often forced to move on to the next topic before they have really mastered what came before. This set up ensures that most people will accumulate gaps in thier understanding of math, even as they earn passing grades and advance through school."
      />
      <Paragraph gutterBottom
        text="Mastery Math is built more like a video game than a school. You can only advance to the next level when you beat the ones that come before it. You have as much time and as many tries as you want, but you do have to earn the right to challenge the boss."
      />
      <Paragraph gutterBottom
        text={"The skills Mastery Math aims to teach build on one another. More advanced skills require you to get creative and to come up with multi-step processes where you put together the earlier \"skills\". You must keep practicing the early skills until you have mastered them, only then will you be able to use them as building blocks in your creative endeavors. So, how will you know when you have \"mastered\" a skill?"}
      />

      <Subtitle text="What is Mastery?" />
      <Paragraph gutterBottom
        text={"Everything in math starts out difficult and becomes easy with practice. Mastery is when you have practiced a math skill so much that it feels \"easy\" to you. Broadly speaking, there are two steps to mastering any math skill."}
      />

      <Subtitle text="Accuracy Comes First" />
      <Paragraph gutterBottom
        text={"The first step to mastering a math skill is figuring out a way to get an answer that you are completely sure is right. This is the heart and soul math: being able to prove something must be true. For elementary arithmetic, \"proof\" can look a lot of different ways. The strategy one kid devises to prove something to themself may not be the one that makes the most sense to another kid. That's ok! What matters is that each kid find a strategy that enables them to be 100% accurate."}
      />

      <Subtitle text="Speed Comes Second" />
      <Paragraph 
        text="The second step to mastering a math skill is practicing it. You refine your strategy. You discover short cuts and their limitations. After many repetitions, answers that once took a lot of work to convince yourself of start to appear instantaneously and appear obvious. Once you cross this bridge its hard to go back. This is why many adults struggle to support young kids who are learning math for the first time: the answers just seem so... obvious."
      />

      <Subtitle text="Play Makes Practice Fun" />
      <Paragraph gutterBottom
        text={"Every Skill on Mastery Math has at least two ways that you can engage with it. The first is a very simple \"quiz\" where questions are asked with no frills and progress data is collected. The second is a game. It is an unavoidable fact that mastering math skills takes lots of repetetive precice. That doesn't mean that practice can't be fun! Different skills will be matched up with different games. Eventually, I'll add some multiplayer games where you can challenge your friends to live competitions."}
      />

      {/* Add button to /how-it-works Page */}
          
    </FullscreenLandingSection>
  )
}

function WhySection(props) {
  const { id } = props
  return (
    <FullscreenLandingSection id={id} >
      <Title text={id} />

      <Subtitle text="Why Mastery Matters" />
      <Paragraph gutterBottom
        text=""
      />

      <Subtitle text="Why I Built This" />
      <Paragraph gutterBottom
        text={"I love Math. I have lots of fun doing it, and I'm not even a \"mathematician.\" The primary goal of Mastery Math is to help undo some of the feelings of fear, hatred, and avoidance that are so commonly felt toward mathematics today."}
      />
      <Paragraph gutterBottom
        text={"Mastery Math isn't designed to help you ace the SAT, though it will almost certainly help your score. It is designed to get you limbered up a bit, to help you stretch your muscles in preparation for a more playful relationship with mathematics."}
      />
      <Paragraph gutterBottom
        text="I have worked as a math teacher, tutor, and interventionist since 2016. Through this work I have realized that math anxitey extremely common. I have also had an oportunity to explore its root causes and have seen that it is preventable."
      />

    </FullscreenLandingSection>
  )
}

function FullscreenLandingSection(props) {
  const { id, children, disableNavbarPadding } = props
  const { navbarHeightPx } = useContext(LayoutContext)
  const paddingTop = (disableNavbarPadding) ? "0" : `${navbarHeightPx}px`
  
  return (
    <Box id={id} 
      height="auto"
      minHeight='100vh'
      width="100%"
      maxWidth='600px'
      paddingX={2}
      paddingTop={paddingTop}
    >
      {children}
    </Box>
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
// // }

// rying to force someone else to do math - there is already an abundance of EdTech that does supports that aim. Mastery Math is all about building a strong math foundation. The first block in that foundation is the belief that math can be a fun and interesting thing to explore.

// TOO hard means you skipped steps


// In order to include everyone, we don't take any previos mastery for granted.Don't worry if the early levels seem 'too easy'.  it won't take long to beat them and find a good challenge.