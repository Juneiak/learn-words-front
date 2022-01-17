import React from 'react';
import settingsIconL from '../../images/icons/nav-tab/light/light-settings.svg';
import settingsIconD from '../../images/icons/nav-tab/dark/dark-settings.svg';

function SettingsIcon({ isDarkTheme=false }) {
  
  return (
    <img alt='icon image' src={isDarkTheme ? settingsIconD : settingsIconL}/>
  )
}

export default SettingsIcon;
