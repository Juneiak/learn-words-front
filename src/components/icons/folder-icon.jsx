import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-folder.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-folder.svg';
import IconWrap from './icon-wrap';

function FolderIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default FolderIcon;
