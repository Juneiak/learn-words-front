import React from "react";
import styles from './nav-tab-link.module.css';
import { NavLink } from 'react-router-dom';

function NavTabLink({ linkTo, linkIcon, darkLinkIcon, linkName }) {
  const darkThemeMode = true;
    return (
      <li className={styles.element}>
        <NavLink
          exact
          to={linkTo}
          className={`${styles.link} text-button`}
          activeClassName={styles.activeLink}
        >
          <img className={styles.linkImage} src={darkThemeMode ? linkIcon : darkLinkIcon}></img>
          <span className={styles.linkName}>{linkName}</span>
        </NavLink>
      </li>
    )
}

export default NavTabLink;
