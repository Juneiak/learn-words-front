import React from 'react';
import aboutIconL from '../../images/Icons/nav-tab/light/light-about.svg';
import aboutIconD from '../../images/Icons/nav-tab/dark/dark-about.svg';

function AboutIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? aboutIconD : aboutIconL}/>
  )
}

export default AboutIcon;
