import React from 'react';
import cardIconL from '../../images/Icons/nav-tab/light/light-card.svg';
import cardIconD from '../../images/Icons/nav-tab/dark/dark-card.svg';

function CardIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? cardIconD : cardIconL}/>
  )
}

export default CardIcon;
