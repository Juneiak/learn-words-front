import React from "react";
import styles from './theme-button.module.css';

function ThemeButton({ onClick, themeStatus }) {

    return (
      <label className={styles.checkBoxContainer}>
        <input
          checked={themeStatus === 'dark' ? true : false}
          className={styles.checkBox}
          onChange={onClick}
          type='checkbox'
        >
          <div>filter</div>
        </input>
      </label>
    )
}

export default ThemeButton;

