import React from 'react';
import lightVersion from '../../images/icons/nav-tab/light/light-document-set.svg';
import darkVersion from '../../images/icons/nav-tab/dark/dark-document-set.svg';
import IconWrap from './icon-wrap';

function DocumentSetIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default DocumentSetIcon;
