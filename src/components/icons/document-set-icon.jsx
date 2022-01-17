import React from 'react';
import documentSetIconL from '../../images/Icons/nav-tab/light/light-document-set.svg';
import documentSetIconD from '../../images/Icons/nav-tab/dark/dark-document-set.svg'

function DocumentSetIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? documentSetIconD : documentSetIconL}/>
  )
}

export default DocumentSetIcon;
