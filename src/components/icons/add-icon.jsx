import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-add.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-add.svg';
import IconWrap from './icon-wrap';

function AddIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default AddIcon;
