import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-card.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-card.svg';
import IconWrap from './icon-wrap';

function CardIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default CardIcon;
