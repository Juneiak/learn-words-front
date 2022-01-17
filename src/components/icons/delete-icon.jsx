import React from 'react';
import deleteIconL from '../../images/icons/ui-images/light/light-delete.svg';
import deleteIconD from '../../images/icons/ui-images/dark/dark-delete.svg';

function DeleteIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? deleteIconD : deleteIconL}/>
  )
}

export default DeleteIcon;
