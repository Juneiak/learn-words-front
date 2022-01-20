import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-delete.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-delete.svg';

function DeleteIcon({ constTheme=false }) {

  const appDarkThemeStatus = false; // it is app var, take it from redux

  const darkThemeOn = constTheme ? (constTheme === 'dark' ? true : false) : appDarkThemeStatus;

  return (
    <img src={darkThemeOn ? lightVersion : darkVersion}/>
  )
}

export default DeleteIcon;
