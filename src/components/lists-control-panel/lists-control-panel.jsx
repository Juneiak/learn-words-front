import React from "react";
import styles from './lists-control-panel.module.css';
import AddButton from "../buttons/add-button/add-button";

function ListsControlpanel({ toggleHandler, isRightSideActive=false }) {

    return (
      <div className={styles.controlPanel}>
        <button
          className={`
            text-button
            ${styles.button}
            ${isRightSideActive && styles.buttonDisabled}
            ${styles.buttonLeft}
          `}
          disabled={isRightSideActive}
          onClick={toggleHandler}
          type="button"
        >
          Words to study
        </button>

        <AddButton />

        <button
          className={`
            text-button
            ${styles.button}
            ${!isRightSideActive && styles.buttonDisabled}
            ${styles.buttonRight}
          `}
          disabled={!isRightSideActive}
          onClick={toggleHandler}
          type="button"
        >
          Learned words
        </button>
      </div>
    )
}

export default ListsControlpanel;
