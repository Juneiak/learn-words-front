import React from "react";
import styles from './button-primary.module.css';

function ButtonPrimary({
  buttonText,
  clickHandler,
  buttonIcon: Icon = false,
  buttonWidth='max-content',
  buttonHeight='max-content',
}) {
  return (
    <button 
      style={{width: buttonWidth,
      height: buttonHeight}}
      type="button"
      onClick={clickHandler}
      className={`${styles.button} text-button `}
    >
      {Icon && <div style={{marginRight: '10px'}}><Icon className={styles.margin} isDarkTheme={true}/></div> }
      <span className={styles.text}>{buttonText}</span>
    </button>
  )
}

export default ButtonPrimary;
