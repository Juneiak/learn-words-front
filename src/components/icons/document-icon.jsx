import React from 'react';
import documentIconL from '../../images/icons/nav-tab/light/light-document.svg';
import documentIconD from '../../images/icons/nav-tab/dark/dark-document.svg';

function DocumentIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? documentIconD : documentIconL}/>
  )
}

export default DocumentIcon;
