import React, { useState, useContext } from 'react'

// THIRD PARTY
// import { Link as RouterLink } from 'react-router-dom';
import { axios } from "axios";
import { Box, Grid, Button } from '@mui/material';

// INTERNAL
import { Title, Subtitle, Paragraph } from "../components/text";
import { Navbar } from "../components/navigation";
import { LayoutContext } from "../contexts";
import { ScrollingPage } from "../components/layout";
import { useFetchClubs, useCreateClub, useFetchRestaurants } from '../hooks';

import { CreateNewClubModal } from "../components/modals";

export default function TestPage() {

  
  const { clubData, isLoading } = useFetchClubs()

  // const { createdClub, isLoading } = 

  // const handleClick = () => {
  //   const { createdClub, status } = useCreateClub()
  // }


  return (
    <Box>
      <Navbar />
      <ScrollingPage >
        <Box pt={3}  >
          <Title text="Test"  />

          <div>
          {isLoading ? <Subtitle text="Loading..." /> :
            <div>
              {clubData.map((item, index) => (<Subtitle key={index} text={item.name} />))}
            </div>
          }
          {/* {loading ? <div>Loading...</div> :
            <div>
              {data.map((item, index) => (<Subtitle key={index} text={item.name} />))}
            </div>
          } */}
          </div>
          <CreateNewClubModal 

          />
        </Box>
      </ScrollingPage>

      
    </Box>
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

