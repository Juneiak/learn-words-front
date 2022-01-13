import React from "react";
import styles from './nav-tab.module.css';
import NavTabLink from "./nav-tab-link";

function NavTab() {
  
    return (
      <nav className={styles.nav}>
        <ul className={styles.nav-container}>
          <NavTabLink linkTo='/about' linkPicture={} linkText='About' />
          <NavTabLink linkTo='/word-sets' linkPicture={} linkText='Word sets' />
          <NavTabLink linkTo='/main' linkPicture={} linkText='My words' />
          <NavTabLink linkTo='/statistic' linkPicture={} linkText='Statistic' />
          <NavTabLink linkTo='/settings' linkPicture={} linkText='Settings' />
        </ul>
      </nav>
    )
}

export default NavTab;
