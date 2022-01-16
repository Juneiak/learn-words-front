import React from "react";
import styles from './nav-tab-link.module.css';
import { NavLink } from 'react-router-dom';

function NavTabLink({ linkTo, linkIcon, darkLinkIcon, linkName }) {
  const isDarkTheme = true;

    return (
      <li className={styles.element}>
        <NavLink
          exact
          to={linkTo}
          className={`${styles.link} text-buttonx`}
          activeClassName={styles.activeLink}
        >
          <img className={styles.linkImage} src={isDarkTheme ? linkIcon : darkLinkIcon}></img>
          <span className={styles.linkName}>{linkName}</span>
        </NavLink>
      </li>
    )
}

export default NavTabLink;
