import React from 'react';
import addIconL from '../../images/icons/ui-images/light/light-add.svg';
import addIconD from '../../images/icons/ui-images/dark/dark-add.svg';

function AddIcon({ isDarkTheme=false }) {
  return (
    <img src={isDarkTheme ? addIconD : addIconL}/>
  )
}

export default AddIcon;
