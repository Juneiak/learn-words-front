import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-about.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-about.svg';
import IconWrap from './icon-wrap';

function AboutIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default AboutIcon;
