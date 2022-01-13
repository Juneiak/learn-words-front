import React from "react";
import styles from './nav-tab-link.module.css';
import { NavLink } from 'react-router-dom';

function NavTabLink({ linkTo, linkPicture, linkPicture }) {
  
    return (
      <li className={styles.element}>
        <NavLink
          exact
          to={linkTo}
          className={styles.link}
          activeClassName={styles.active-link}
        >
          <img className={styles.link-image} src={linkPicture}></img>
          <span className={styles.link-text}>{linkPicture}</span>
        </NavLink>
      </li>
    )
}

export default NavTabLink;
