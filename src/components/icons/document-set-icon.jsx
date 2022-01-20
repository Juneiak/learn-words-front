import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-document-set.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-document-set.svg';

function DocumentSetIcon({ constTheme=false }) {

  const appDarkThemeStatus = false; // it is app var, take it from redux

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : appDarkThemeStatus;

  return (
    <img src={darkThemeOn ? lightVersion : darkVersion}/>
  )
}

export default DocumentSetIcon;
