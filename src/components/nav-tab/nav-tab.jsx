import React from "react";
import styles from './nav-tab.module.css';
import NavTabLink from "./nav-tab-link";
import aboutIconL from '../../images/Icons/nav-tab/light/light-about.svg';
import wordSetsIconL from '../../images/Icons/nav-tab/light/light-my-words.svg';
import myWordsIconL from '../../images/Icons/nav-tab/light/light-word-sets.svg';
import statisticIconL from '../../images/Icons/nav-tab/light/light-statistic.svg';
import settingsIconL from '../../images/Icons/nav-tab/light/light-settings.svg';

import aboutIconD from '../../images/Icons/nav-tab/dark/dark-about.svg';
import wordSetsIconD from '../../images/Icons/nav-tab/dark/dark-word-sets.svg';
import myWordsIconD from '../../images/Icons/nav-tab/dark/dark-my-words.svg';
import statisticIconD from '../../images/Icons/nav-tab/dark/dark-statistic.svg';
import settingsIconD from '../../images/Icons/nav-tab/dark/dark-settings.svg';

function NavTab() {
  const isLogin = false;

    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <NavTabLink linkTo='/about' linkIcon={aboutIconL} darkLinkIcon={aboutIconD} linkName='About' />}
          {isLogin && <NavTabLink linkTo='/word-sets' linkIcon={wordSetsIconL} darkLinkIcon={wordSetsIconD} linkName='Word sets' />}
          {isLogin && <NavTabLink linkTo='/main' linkIcon={myWordsIconL} darkLinkIcon={myWordsIconD} linkName='My words' />}
          {isLogin && <NavTabLink linkTo='/statistic' linkIcon={statisticIconL} darkLinkIcon={statisticIconD} linkName='Statistic' />}
          {isLogin && <NavTabLink linkTo='/settings' linkIcon={settingsIconL} darkLinkIcon={settingsIconD} linkName='Settings' />}
        </ul>
      </nav>
    )
}

export default NavTab;
