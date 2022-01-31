import React from "react";
import styles from './add-pop-up.module.css';
import PopUpWraper from "../pop-up-wraper/pop-up-wraper";
import { ADD_POPUP_TOGGLE } from '../../../services/actions/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useFormWithValidation } from '../../../utils/hooks/useForm';
import FileContainer from "../../file-container/file-container";
import PrimaryInput from "../../primary-input/primary-input";
import ButtonSecondary from "../../buttons/button-secondary/button-secondary";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';
import { addNewWord } from "../../../services/actions/functions";
import LoadingPrimary from "../../loadings/loading-primary/loading-primary";
import ErrorMessage from "../../error-message/error-message";

function AddPopUp() {
  const dispatch = useDispatch();
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const { width } = useWindowDimensions();
  const { addNewWordIsLoading, addNewWordIsError } = useSelector((store) => ({
    addNewWordIsLoading: store.funcs.addNewWordIsLoading,
    addNewWordIsError: store.funcs.addNewWordIsError,
  }))
  const handlePopUpClose = () => {
    dispatch({type: ADD_POPUP_TOGGLE})
  }

  const handleAddButtonClick = () => {
    dispatch(addNewWord({
      word: values.word,
      translation: values.translation,
      progress: 0,
      isNew: false,
      imageUrl: 'https://images.unsplash.com/photo-1592431913823-7af6b323da9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
    }))
    .then(() => handlePopUpClose())
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
              inputRequired={true}
            />
            <PrimaryInput
              inputPlaceholder='word translation'
              inputMaxLenght='50'
              inputName='translation'
              inputOnChange={handleChange}
              inputValue={values.translation}
              inputError={errors.translation}
              inputRequired={true}
            />

            {width > 620 && <FileContainer />}

            <ButtonSecondary 
              buttonText='Browse'
              clickHandler={() => false}
              buttonWidth='225px'
              buttonHeight='56px'
            />
            {
              addNewWordIsError
                ? <ErrorMessage />
                : addNewWordIsLoading
                  ? <LoadingPrimary />
                  : <ButtonPrimary
                      buttonText='Add word'
                      clickHandler={handleAddButtonClick}
                      buttonWidth='100%'
                      buttonHeight='56px'
                      isActive={isValid}
                    />
            }
            
          </form>
        </div>
        
      </PopUpWraper>
    )
}

export default AddPopUp;
