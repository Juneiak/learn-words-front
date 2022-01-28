import React from "react";
import styles from './button-icon.module.css';

function  ButtonIcon({ handleButtonClick, children}) {
  
  return (
    <button 
      type="button"
      onClick={handleButtonClick}
      className='button-animation'
    >
      {children}
    </button>
  )
}

export default ButtonIcon;
