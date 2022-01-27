import React from "react";
import FooterLink from "./footer-link";
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <span className={styles.author}>
          pet-project. Juneiak х ModalLab
        </span>
        <div className={styles.contacts}>
          <span className={`${styles.year} text-caption-small`}>&copy; 2022</span>
          <ul className={styles.list}>
            <FooterLink linkName='Github' linkHref='#'/>
            <FooterLink linkName='Telegram' linkHref='#'/>
            <FooterLink linkName='instagram' linkHref='#'/>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer;
