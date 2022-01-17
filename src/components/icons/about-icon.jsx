import React from 'react';
import aboutIconL from '../../images/icons/nav-tab/light/light-about.svg';
import aboutIconD from '../../images/icons/nav-tab/dark/dark-about.svg';

function AboutIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? aboutIconD : aboutIconL}/>
  )
}

export default AboutIcon;
