import React from "react";
import styles from './add-button.module.css';
import { useDispatch } from 'react-redux';
import { ADD_POPUP_TOGGLE } from '../../../services/actions/constants';
import addImageIcon from '../../../images/icons/ui-images/dark/dark-add.svg';

function AddButton() {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch({type: ADD_POPUP_TOGGLE})
  }

  return (
    <button 
      type="button"
      onClick={handleButtonClick}
      className={`${styles.button} text-button `}
    >
      <img src={addImageIcon} className={styles.icon} />
      <span className={styles.text}>Add a new word</span>
    </button>
  )
}

export default AddButton;
