// Source --> https://www.youtube.com/watch?v=ad9f-EYtWPo&ab_channel=WebDevEducation
import React, { useContext } from "react";
import "./lightDarkModeToggle.css";

import { SettingsContext } from '../../SettingsContext';

export default function LightDarkModeToggle(props) {
  const { colorTheme, toggleColorTheme } = useContext(SettingsContext)
  let toggled = (colorTheme === "dark") ? true : false

  return (
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
  );
}