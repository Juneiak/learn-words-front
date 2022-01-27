import React from "react";
import styles from './pop-up-wraper.module.css';
import { CloseIcon } from "../../icons";
import Layout from "../layout/layout";

function PopUpWraper({ children, handleCLose }) {

    return (
      <Layout>
        <section className={styles.wraper}>
          <button
              type="button"
              onClick={handleCLose}
              className={`${styles.closeButton} button-animation `}>
            <CloseIcon />
          </button>
          {children}
        </section>
      </Layout>
    )
}

export default PopUpWraper;
