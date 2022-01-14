import React from "react";
import styles from './header.module.css';
import ThemeButton from "../theme-button/theme-button";
import NavTab from "../nav-tab/nav-tab";

function Header({onThemeChangeClick}) {
  const logged = true;

    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <ThemeButton onClick={onThemeChangeClick}/>
          <NavTab />
          <div>
            {
              logged 
              ? <button className={styles.profileButton}>profile</button>
              : <button>login via tg</button>
            }
          </div>
        </div>
        
      </header>
    )
}

export default Header;
