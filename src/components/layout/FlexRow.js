import React from 'react'

// THIRD PARTY
import { Box } from '@mui/material';

export default function FlexRow(props) {
  let {
    children,
    width = '100%',
    height = "auto",
    border = false
  } = props
  
  border = border ? "solid red 1px" : "none"
  
  return (
   <Box 
    width={width}
    height={height}
    border={border}
    display="flex"
    flexDirection="row"
    alignItems="center"
    children={children}
   />
  )
}