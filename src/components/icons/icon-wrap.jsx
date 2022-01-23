import React from 'react';
import { useSelector } from 'react-redux'
function IconWrap({ light, dark, constTheme, customStyle={} }) {

  const isDarkThemeOn = useSelector(store => store.isDarkThemeOn)

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : isDarkThemeOn;

  return (
    <img style={customStyle} src={darkThemeOn ? dark : light} alt='ui icon'/>
  )
}

export default IconWrap;
