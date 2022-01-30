import React from "react";
import styles from './error-message.module.css';

function ErrorMessage({ message }) {

    return (
      <div className={styles.container}>
        <span className={styles.error}>Error</span>
        {message && <p className={`${styles.message} text-body`}>{message}</p>}
      </div>
    )
}

export default ErrorMessage;
