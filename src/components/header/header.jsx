import React from "react";
import styles from './header.module.css';
import ThemeButton from "../theme-button/theme-button";
import NavTab from "../nav-tab/nav-tab";
import ButtonPrimary from '../buttons/button-primary/button-primary';
import { ProfileIcon, BurgerIcon } from "../icons";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import ButtonIcon from "../buttons/button-icon/button-icon";

function Header() {
  const logged = true;
  const { width } = useWindowDimensions();

    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <ThemeButton />
          {width > 1200 && <NavTab />}
          <div>
            {
              logged 
              ? 
                width > 1200 
                  ? 
                  <ButtonIcon handleButtonClick={() => false}>
                    <ProfileIcon />
                  </ButtonIcon>
                  :
                  <ButtonIcon handleButtonClick={() => false}>
                    <BurgerIcon />
                  </ButtonIcon>  
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
