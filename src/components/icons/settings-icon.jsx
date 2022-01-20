import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-settings.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-settings.svg';
import IconWrap from './icon-wrap';

function SettingsIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default SettingsIcon;
