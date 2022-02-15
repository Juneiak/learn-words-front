import React from "react";
import styles from './word-set-pop-up.module.css';
import PopUpWraper from "../pop-up-wraper/pop-up-wraper";
import WordList from "../../word-list/word-list";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import {useDispatch, useSelector} from 'react-redux';
import { REMOVE_SELECTED_WORD_SET } from "../../../services/actions/constants";
import LoadingErrorWrapper from "../../hocs/loading-error-wrapper/loading-error-wrapper";

function WordSetPopUp() {
  const {
    selectedWordSet,
    selectedWordSetIsLoading,
    selectedWordSetIsError
  } = useSelector(store => ({
    selectedWordSet: store.funcs.selectedWordSet,
    selectedWordSetIsLoading: store.funcs.selectedWordSetIsLoading,
    selectedWordSetIsError: store.funcs.selectedWordSetIsError
  }));
  const dispatch = useDispatch();

  const handlePopUpClose = () => {
    dispatch({type: REMOVE_SELECTED_WORD_SET})
  }
  
    return (
      <PopUpWraper handleCLose={handlePopUpClose}>
        <div className={styles.content}>
          <LoadingErrorWrapper
            isLoading={selectedWordSetIsLoading}
            isError={!selectedWordSet?.setId || selectedWordSetIsError}
          >
            <h3 className={`${styles.setTitle} text-h3`}>{selectedWordSet.title}</h3>
            <p className={`${styles.about} text-body`}>{selectedWordSet.about}</p>
            <div className={styles.list}>
              <WordList cardsData={selectedWordSet.words} size='small' />
            </div>
            <ButtonPrimary
              buttonText='Add word set'
              clickHandler={() => false}
              buttonWidth='100%'
              buttonHeight='56px'
            />
          </LoadingErrorWrapper>

        </div>
      </PopUpWraper>
    )
}

export default WordSetPopUp;
