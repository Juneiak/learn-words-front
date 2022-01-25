import React from "react";
import ReactDOM from 'react-dom';
import styles from './pop-up-layout.module.css';
import { CloseIcon } from "../../icons";

function PopUpLayout({ children, handleCLose }) {

    return (
      <div className={styles.overlay}>
        <section className={styles.contentWraper}>
          <button
              type="button"
              onClick={handleCLose}
              className={`${styles.closeButton} button-animation `}>
            <CloseIcon />
          </button>
          {children}
        </section>
      </div>
    )
}

export default PopUpLayout;
