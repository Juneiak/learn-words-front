import React from "react";
import styles from './file-container.module.css';
import { FolderIcon } from "../icons";

function FileContainer() {

    return (
      <div className={styles.fileContainer}>
        <div className={styles.circle}>
          <FolderIcon />
        </div>
        <span className={styles.caption}></span>
      </div>
    )
}

export default FileContainer;
