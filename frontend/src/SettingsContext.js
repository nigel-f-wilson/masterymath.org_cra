import React, { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "./hooks/hooks"

export const SettingsContext = createContext();

export const SettingsContextProvider = props => {
  // COLOR THEME
  const [colorTheme, setColorTheme] = useState("dark")  // or "light"  

  function toggleColorTheme(event) {
    event.preventDefault()
    setColorTheme((prev) => (prev === "light") ? "dark" : "light")
  }

  
  const settingsContext = {
    colorTheme,
    toggleColorTheme,
    
  }

  // console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <SettingsContext.Provider 
      value={settingsContext} 
      children={props.children}
    />
  )
};