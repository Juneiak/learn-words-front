import React from "react";
import styles from './footer-link.module.css';

function FooterLink({linkName, linkHref}) {
  return (
    <li className={styles.element}>
      <a className={`${styles.link} link text-caption-small`} href={linkHref} target='_blank'>
        {linkName}
      </a>
    </li>
  )
}

export default FooterLink;
