import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-delete.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-delete.svg';
import IconWrap from './icon-wrap';

function DeleteIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default DeleteIcon;
