import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-document.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-document.svg';
import IconWrap from './icon-wrap';

function DocumentIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default DocumentIcon;
