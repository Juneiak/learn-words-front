import React from "react";
import styles from './theme-button.module.css';

function ThemeButton({ onClick, themeStatus }) {

  const isDarkTheme = themeStatus === 'dark' ? true : false

  return (
    <label className={styles.container}>
      <input
        checked={isDarkTheme}
        className={styles.checkBox}
        onChange={onClick}
        type='checkbox'
      />
      <div className={styles.pseudo}></div>
      <div className={styles.dot}></div>
      <span className={`${styles.text} text-caption`}>
        {isDarkTheme ? 'Dark mode' : 'Light mode' }
      </span>
    </label>
  )
}

export default ThemeButton;

