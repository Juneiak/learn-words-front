import React from "react";
import styles from './header.module.css';
import ThemeButton from "../theme-button/theme-button";
import NavTab from "../nav-tab/nav-tab";
import ButtonPrimary from '../buttons/button-primary/button-primary';

function Header({onThemeChangeClick, themeStatus}) {
  const logged = false;
  function clickHandler() {
    return true
  }
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <ThemeButton onClick={onThemeChangeClick} themeStatus={themeStatus}/>
          <NavTab />
          <div>
            {
              logged 
              ? <button className={styles.profileButton}>profile</button>
              : <ButtonPrimary
                  buttonText='ligin via tg'
                  buttonHeight='48px'
                  buttonWidth='160px'
                  clickHandler={clickHandler} />
            }
          </div>
        </div>
      </header>
    )
}

export default Header;
