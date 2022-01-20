import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-search.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-search.svg';
import IconWrap from './icon-wrap';

function SearchIcon({ constTheme=false }) {

  return (
    <IconWrap light={lightVersion} dark={darkVersion} constTheme={constTheme} />
  )
}

export default SearchIcon;
