import React from "react";
import styles from './progress-bar.module.css';

function ProgressBar({ progress=10 }) {

    return (
      <div className={styles.bar}>
        <div style={{width: `${progress}%`}} className={styles.scale}></div>
      </div>
    )
}

export default ProgressBar;
