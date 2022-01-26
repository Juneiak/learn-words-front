import React from "react";
import styles from './loading-primary.module.css';

function LoadingPrimary() {

    return (
      <div className={styles.container}>
        <div className={styles.dotContainer1}><div className={styles.dot1}></div></div>
        <div className={styles.dotContainer2}><div className={styles.dot2}></div></div>
        <div className={styles.dotContainer3}><div className={styles.dot3}></div></div>
        <div className={styles.dotContainer4}><div className={styles.dot4}></div></div>
      </div>
    )
}

export default LoadingPrimary;
