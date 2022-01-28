import React from "react";
import styles from './profile-button.module.css';
import { ProfileIcon } from '../../icons/';

function  ProfileButton({ buttonClickHandler }) {
  
  return (
    <button 
      type="button"
      onClick={buttonClickHandler}
      className={styles.button}
    >
      <ProfileIcon />
      <span className='text-button'>Profile</span>
    </button>
  )
}

export default ProfileButton;
