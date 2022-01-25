import React from "react";
import styles from './button-primary.module.css';

function ButtonPrimary({
  buttonText,
  clickHandler,
  buttonWidth='max-content',
  buttonHeight='max-content',
  children,
}) {
  return (
    <button 
      style={{
        width: buttonWidth,
        height: buttonHeight
      }}
      type="button"
      onClick={clickHandler}
      className={`${styles.button} text-button `}
    >
      {children && children}
      <span className={styles.text}>{buttonText}</span>
    </button>
  )
}

export default ButtonPrimary;
