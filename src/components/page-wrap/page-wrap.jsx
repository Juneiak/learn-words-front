import React from "react";
import styles from './page-wrap.module.css';

function PageWrap({ children, title }) {

    return (
      <main className={styles.main}>
        <div className={styles.contentWrap}>
          {title && <h1 className={`${styles.pageTitle} text-h1`}>{title}</h1>}
          {children}
        </div>
      </main>
    )
}

export default PageWrap;
