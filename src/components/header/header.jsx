import React from "react";
import styles from './header.module.css';

function Header({onModeChangeClick}) {
  
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>hi world header</h1>
        <button onClick={onModeChangeClick}><h2>click on me!</h2></button>
      </div>
    )
}

export default Header;
