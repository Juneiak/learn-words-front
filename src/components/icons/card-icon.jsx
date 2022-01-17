import React from 'react';
import cardIconL from '../../images/icons/nav-tab/light/light-card.svg';
import cardIconD from '../../images/icons/nav-tab/dark/dark-card.svg';

function CardIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? cardIconD : cardIconL}/>
  )
}

export default CardIcon;
