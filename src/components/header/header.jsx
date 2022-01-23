import React from "react";
import styles from './header.module.css';
import ThemeButton from "../theme-button/theme-button";
import NavTab from "../nav-tab/nav-tab";
import ButtonPrimary from '../buttons/button-primary/button-primary';
import { ProfileIcon } from "../icons";

function Header({ handleOpenPopUp }) {
  const logged = true;


    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <ThemeButton />
          <NavTab />
          <div>
            {
              logged 
              ? <button onClick={handleOpenPopUp} className='button-animation '>
                  <ProfileIcon />
                </button>
              : <ButtonPrimary
                  buttonText='ligin via tg'
                  buttonHeight='48px'
                  buttonWidth='160px'
                  clickHandler={() => false} />
            }
          </div>
        </div>
      </header>
    )
}

export default Header;
