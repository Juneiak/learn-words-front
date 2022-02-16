import React from "react";
import styles from './word-set-pop-up.module.css';
import PopUpWraper from "../pop-up-wraper/pop-up-wraper";
import WordList from "../../word-list/word-list";
import ButtonPrimary from "../../buttons/button-primary/button-primary";
import {useDispatch, useSelector} from 'react-redux';
import { REMOVE_SELECTED_WORD_SET, WORD_SET_POPUP_TOGGLE } from "../../../services/actions/constants";
import LoadingErrorWrapper from "../../hocs/loading-error-wrapper/loading-error-wrapper";

function WordSetPopUp() {
  const [ filteredWords, setFilteredWords ] = React.useState([])
  const {
    selectedWordSet,
    selectedWordSetIsLoading,
    selectedWordSetIsError,
    userWords,
  } = useSelector(store => ({
    selectedWordSet: store.funcs.selectedWordSet,
    selectedWordSetIsLoading: store.funcs.selectedWordSetIsLoading,
    selectedWordSetIsError: store.funcs.selectedWordSetIsError,
    userWords: store.funcs.userWords
  }));
  const dispatch = useDispatch();

  const handlePopUpClose = () => {
    dispatch({type: REMOVE_SELECTED_WORD_SET})
    dispatch({type: WORD_SET_POPUP_TOGGLE})
  }
  React.useEffect(() => {
    const filterAddedWords = () => {
      return selectedWordSet?.words.map(setWord => {
        const sameWord = userWords.find(userWord => setWord.word === userWord.word)
        if (sameWord) return {...setWord, isNew: false, progress: sameWord.progress}
        return setWord
      })
    }
    if (selectedWordSet?.words) setFilteredWords(filterAddedWords())
    
  }, [selectedWordSet, userWords])
  
    return (
      <PopUpWraper handleCLose={handlePopUpClose}>
        <div className={styles.content}>
          <LoadingErrorWrapper
            isLoading={selectedWordSetIsLoading}
            isError={selectedWordSetIsError}
          >
            <h3 className={`${styles.setTitle} text-h3`}>{selectedWordSet.title}</h3>
            <p className={`${styles.about} text-body`}>{selectedWordSet.about}</p>
            <div className={styles.list}>
              <WordList cardsData={filteredWords} size='small' />
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
