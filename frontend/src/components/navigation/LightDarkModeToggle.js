// Source --> https://www.youtube.com/watch?v=ad9f-EYtWPo&ab_channel=WebDevEducation
import React, { useContext } from "react";
import "./lightDarkModeToggle.css";

import { Box } from '@mui/material';

import { SettingsContext } from '../../SettingsContext';
import { ButtonLabel } from "../type";

export default function LightDarkModeToggle(props) {
  const { colorTheme, toggleColorTheme } = useContext(SettingsContext)
  
  let toggled = (colorTheme === "dark") ? true : false
  let label = (colorTheme === "dark") ? "Dark Theme" : "Light Theme"

  return (
    <Box position='absolute' bottom='1.0rem' width='100%' display='flex' flexDirection='row' justifyContent='start' alignItems='center' >
      <Box width='50px' >
        <div onClick={toggleColorTheme} className={`toggle${toggled ? " night" : ""}`}>
          <div className="notch">
              <div className="crater" />
              <div className="crater" />
          </div>
          <div>
              <div className="shape sm" />
              <div className="shape sm" />
              <div className="shape md" />
              <div className="shape lg" />
          </div>
        </div>
      </Box>
      <ButtonLabel text={label} />
    </Box>
  );
}