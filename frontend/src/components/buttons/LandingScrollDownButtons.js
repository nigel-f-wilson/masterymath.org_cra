import React, { useContext } from 'react'

// THIRD PARTY
import { HashLink } from 'react-router-hash-link';
import { Box, Grid, MenuItem  } from '@mui/material';

// ICONS
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { ButtonLabel } from "./";
import { SettingsContext } from "../../contexts";

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


export default function LandingScrollDownButtons(props) {
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
      <Grid container spacing={2} >
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