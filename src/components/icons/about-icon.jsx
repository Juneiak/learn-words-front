import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-about.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-about.svg';

function AboutIcon({ constTheme=false }) {

  const appDarkThemeStatus = false; // it is app var, take it from redux

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : appDarkThemeStatus;

  return (
    <img src={darkThemeOn ? lightVersion : darkVersion}/>
  )
}

export default AboutIcon;
