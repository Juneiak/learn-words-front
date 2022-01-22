import React from 'react';

function IconWrap({ light, dark, constTheme, customStyle={} }) {

  const appDarkThemeStatus = false; // it is app var, take it from redux

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : appDarkThemeStatus;

  return (
    <img style={customStyle} src={darkThemeOn ? dark : light} alt='ui icon'/>
  )
}

export default IconWrap;
