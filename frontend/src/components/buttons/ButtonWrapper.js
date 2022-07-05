import React, { useContext } from "react";

// THIRD PARTY
import { Box } from '@mui/material';

// INTERNAL
import { SettingsContext } from "../../contexts";

export default function ButtonWrapper(props) {
  const { children, onClick } = props

  const { colorTheme } = useContext(SettingsContext)
  const fontColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Box 
      onClick={onClick}
      border={`solid ${fontColor} 1px`} 
      borderRadius={4} 
      height='2.7rem' 
      width='100%' 
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
    >
      { children }
    </Box>
  );
};