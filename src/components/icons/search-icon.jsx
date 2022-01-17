import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-search.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-search.svg';

function SearchIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? darkVersion : lightVersion}/>
  )
}

export default SearchIcon;
