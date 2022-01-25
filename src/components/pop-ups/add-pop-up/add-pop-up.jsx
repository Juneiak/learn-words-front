import React from "react";
import styles from './add-pop-up.module.css';
import PopUpLayout from "../pop-up-layout/pop-up-layout";
import { FolderIcon } from "../../icons";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import ButtonSecondary from "../../buttons/button-secondary/button-secondary";
import { ADD_POPUP_TOGGLE } from '../../../services/actions/constants';
import { useDispatch } from 'react-redux';
import { useFormWithValidation } from '../../../utils/hooks/useForm';

function AddPopUp() {
  const dispatch = useDispatch();
  const { values, errors, handleChange } = useFormWithValidation();

  const handlePopUpClose = () => {
    dispatch({type: ADD_POPUP_TOGGLE})
  }
  console.log(values);
  
    return (
      <PopUpLayout handleCLose={handlePopUpClose}>
        <div className={styles.content}>
          <h3 className={`${styles.title} text-h3`}>Add your word to learn</h3>
          <form className={styles.form}>
            <input
              className={`${styles.wordInput} text-caption`}
              type='text'
              placeholder="word or phrase"
              maxLength='30'
              name='word'
              onChange={handleChange}
              value={values.word}
            />
            <input
              className={`${styles.wordInput} text-caption`}
              type='text'
              name='translation'
              placeholder="word or phrase"
              maxLength='30'
              onChange={handleChange}
              value={values.translation}
            />
            <div className={styles.fileContainer}>
              <div className={styles.circle}>
                <FolderIcon />
              </div>
              <span className={styles.caption}></span>
            </div>
            <div style={{marginBottom: '30px'}}>
              <ButtonSecondary 
                buttonText='Browse'
                clickHandler={() => false}
                buttonWidth='225px'
                buttonHeight='56px'
              />
            </div>
            <ButtonPrimary
              buttonText='Add word'
              clickHandler={() => false}
              buttonWidth='100%'
              buttonHeight='56px'
            />
          </form>
        </div>
        
      </PopUpLayout>
    )
}

export default AddPopUp;
