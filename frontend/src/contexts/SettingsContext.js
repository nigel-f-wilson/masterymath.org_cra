import React, { useState, createContext } from "react";

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
  
  return (
    <SettingsContext.Provider 
      value={settingsContext} 
      children={props.children}
    />
  )
};