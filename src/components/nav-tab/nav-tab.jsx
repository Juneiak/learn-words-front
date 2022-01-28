import React from "react";
import styles from './nav-tab.module.css';
import NavTabLink from "./nav-tab-link";
import {
  AboutIcon,
  CardIcon,
  DocumentIcon,
  DocumentSetIcon,
  SettingsIcon,
} from '../icons/index';

function NavTab({ isVertical=false }) {
  const isLogin = true;
  
    return (
      <nav className={styles.nav}>
        <ul className={`${styles.list} ${isVertical && styles.verticalList}`}>
          <NavTabLink linkName='About' linkTo='/about' icon={AboutIcon} />
          {isLogin && <NavTabLink linkTo='/word-sets' icon={DocumentSetIcon} linkName='Word sets' />}
          {isLogin && <NavTabLink linkTo='/' icon={DocumentIcon} linkName='My words' />}
          {isLogin && <NavTabLink linkTo='/study' icon={CardIcon} linkName='Study word' />}
          {isLogin && <NavTabLink linkTo='/settings' icon={SettingsIcon} linkName='Settings' />}
        </ul>
      </nav>
    )
}

export default NavTab;
