import React from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height }
}

const useWindowDimensions = () => {
  const {windowDimensions, setWindowDimensions} = React.useState(getWindowDimensions())
  
  React.useEffect = () => {
    const handleWindowResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }
  return windowDimensions
}

export default useWindowDimensions;
