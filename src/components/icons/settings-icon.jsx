import React from 'react';
import settingsIconL from '../../images/Icons/nav-tab/light/light-settings.svg';
import settingsIconD from '../../images/Icons/nav-tab/dark/dark-settings.svg';

function SettingsIcon({ isDarkTheme=false }) {
  
  return (
    <img alt='icon image' src={isDarkTheme ? settingsIconD : settingsIconL}/>
  )
}

export default SettingsIcon;
