import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-burger.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-burger.svg';
import IconWrap from './icon-wrap';

function BurgerIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default BurgerIcon;
