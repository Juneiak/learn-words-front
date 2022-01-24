import React from "react";
import styles from './theme-button.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_APP_THEME } from '../../services/actions/constants'


function ThemeButton() {
  const dispatch = useDispatch();
  const isDarkThemeOn = useSelector(store => store.app.isDarkThemeOn)

  const handleThemeChange = () => {
    dispatch({type: TOGGLE_APP_THEME})
  }

  return (
    <label className={styles.container}>
      <input
        checked={isDarkThemeOn}
        className={styles.checkBox}
        onChange={handleThemeChange}
        type='checkbox'
      />
      <div className={styles.pseudo}></div>
      <div className={styles.dot}></div>
      <span className={`${styles.text} text-caption`}>
        {isDarkThemeOn ? 'Dark mode' : 'Light mode' }
      </span>
    </label>
  )
}

export default ThemeButton;

