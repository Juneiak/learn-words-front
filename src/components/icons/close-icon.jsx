import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-close.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-close.svg';
import IconWrap from './icon-wrap';

function CloseIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default CloseIcon;
