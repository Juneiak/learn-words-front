import React from "react";
import styles from './header.module.css';
import ThemeButton from "../theme-button/theme-button";
import NavTab from "../nav-tab/nav-tab";

function Header({onThemeChangeClick}) {
  const logged = true;

    return (
      <header className={styles.header}>
        <ThemeButton onClick={onThemeChangeClick}/>
        <NavTab />
        <div>
          {
            logged 
            ? <button className={styles.prodile-button}>profile</button>
            : <button>login via tg</button>
          }
        </div>
      </header>
    )
}

export default Header;
