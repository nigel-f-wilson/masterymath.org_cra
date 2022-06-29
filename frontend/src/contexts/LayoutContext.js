import React, { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "../hooks"

export const LayoutContext = createContext();

export const LayoutContextProvider = props => {
  
  const [navbarHidden, setNavbarHidden] = useState(false)


  // SCREEN LAYOUT
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  let narrowScreen = screenWidth < 900

  let navbarStyle = navbarHidden ? 'hidden' : narrowScreen ? 'mobile' : 'desktop'
  
  let navbarHeightPx = (navbarStyle === 'hidden') ? 0 : (navbarStyle === 'mobile') ? 40 : 80


  let availableHeight = screenHeight - navbarHeightPx
  let availableWidth = screenWidth

  let maxSquareSideLength = (availableHeight < availableWidth) ? availableHeight : availableWidth
  
  const layoutAndColorContext = {
    screenWidth,
    // screenHeight,
    narrowScreen,
    availableHeight, 
    availableWidth,
    maxSquareSideLength,


    navbarStyle,
    navbarHeightPx,
    navbarHidden,
    setNavbarHidden
  }

  // console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <LayoutContext.Provider 
      value={layoutAndColorContext} 
      children={props.children}
    />
  )
};