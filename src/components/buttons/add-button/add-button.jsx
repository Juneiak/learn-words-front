import React from "react";
import styles from './add-button.module.css';
import { AddIcon } from "../../icons";
import { useDispatch } from 'react-redux';
import { ADD_POPUP_TOGGLE } from '../../../services/actions/constants';

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
      <AddIcon constTheme='dark' size='small' />
      <span className={styles.text}>{buttonText}</span>
    </button>
  )
}

export default AddButton;
