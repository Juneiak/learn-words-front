import React from 'react';

function IconWrap({ light, dark, constTheme }) {

  const appDarkThemeStatus = false; // it is app var, take it from redux

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : appDarkThemeStatus;

  return (
    <img src={darkThemeOn ? dark : light} alt='ui icon'/>
  )
}

export default IconWrap;
