import React from "react";
import styles from './header.module.css';

function Header({onThemeChangeClick}) {
  
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>hi world header</h1>
        <button onClick={onThemeChangeClick}><h2>click on me!</h2></button>
      </div>
    )
}

export default Header;
