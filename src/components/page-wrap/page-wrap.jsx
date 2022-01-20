import React from "react";
import styles from './page-wrap.module.css';

function PageWrap({ children, title}) {

    return (
      <main className={styles.about}>
        <div className={styles.content}>
          {title && <h1 className={`${styles.pageTitle} text-h1`}>{title}</h1>}
          {children}
        </div>
      </main>
    )
}

export default PageWrap;
