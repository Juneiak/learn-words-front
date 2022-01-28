import React from "react";
import styles from './add-pop-up.module.css';
import PopUpWraper from "../pop-up-wraper/pop-up-wraper";
import { ADD_POPUP_TOGGLE } from '../../../services/actions/constants';
import { useDispatch } from 'react-redux';
import { useFormWithValidation } from '../../../utils/hooks/useForm';
import FileContainer from "../../file-container/file-container";
import PrimaryInput from "../../primary-input/primary-input";
import ButtonSecondary from "../../buttons/button-secondary/button-secondary";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';

function AddPopUp() {
  const dispatch = useDispatch();
  const { values, errors, handleChange } = useFormWithValidation();
  const { width } = useWindowDimensions();
  
  const handlePopUpClose = () => {
    dispatch({type: ADD_POPUP_TOGGLE})
  }
  
    return (
      <PopUpWraper handleCLose={handlePopUpClose}>
        <div className={styles.content}>
          <h3 className={`${styles.title} text-h3`}>Add your word to learn</h3>
          <form className={styles.form}>
            <PrimaryInput
              inputPlaceholder='word or phrase'
              inputMaxLenght='50'
              inputName='word'
              inputOnChange={handleChange}
              inputValue={values.word}
              inputError={errors.word}
            />
            <PrimaryInput
              inputPlaceholder='word translation'
              inputMaxLenght='50'
              inputName='translation'
              inputOnChange={handleChange}
              inputValue={values.translation}
              inputError={errors.translation}
            />

            {width > 620 && <FileContainer />}

            <ButtonSecondary 
              buttonText='Browse'
              clickHandler={() => false}
              buttonWidth='225px'
              buttonHeight='56px'
            />
            <ButtonPrimary
              buttonText='Add word'
              clickHandler={() => false}
              buttonWidth='100%'
              buttonHeight='56px'
            />
          </form>
        </div>
        
      </PopUpWraper>
    )
}

export default AddPopUp;
