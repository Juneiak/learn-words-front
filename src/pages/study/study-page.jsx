import React from "react";
import styles from './study-page.module.css';
import PageWrap from "../../components/page-wrap/page-wrap";
import PrimaryInput from "../../components/primary-input/primary-input";
import ButtonPrimary from "../../components/buttons/button-primary/button-primary";
import { useFormWithValidation } from '../../utils/hooks/useForm';
import WordContainer from '../../components/word-container/word-container';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../../components/buttons/add-button/add-button';
import LoadingErrorWrapper from "../../components/hocs/loading-error-wrapper/loading-error-wrapper";
import { TrainingStatus, TrainingFinishMessage, TrainingWordsLeft } from '../../components/training';

import {
  setWordsToLearn,
  changeTrainingStatus,
  setRondomWordToGuess,
  toggleTraining,
  removeGuessedWord
} from '../../services/actions/training';

function StudyPage() {
  
  const { values, handleChange, resetForm, isValid } = useFormWithValidation();
  const dispacth = useDispatch()

  const {
    trainingOn,
    wordToGuess,
    trainingStatus,
    wordsToTrain,
    wordsToTrainIsLoading,
    wordsToTrainIsError,
  } = useSelector(store => ({
    trainingOn: store.training.trainingOn,
    wordToGuess: store.training.wordToGuess,
    trainingStatus: store.training.trainingStatus,
    wordsToTrain: store.training.wordsToTrain,
    wordsToTrainIsLoading: store.training.wordsToTrainIsLoading,
    wordsToTrainIsError: store.training.wordsToTrainIsError,

  }))
  const handleType = (evt) => {
    if (trainingStatus !== 'listen') dispacth(changeTrainingStatus('listen'))
    handleChange(evt);
  }

  const handleStartTraining = () => {
    dispacth(toggleTraining())
    dispacth(setRondomWordToGuess())
    dispacth(changeTrainingStatus('listen'))
  }

  const handleCheckWord = () => {
    if (values.translation === wordToGuess.translation) {
      dispacth(changeTrainingStatus('correct'))
      dispacth(removeGuessedWord(wordToGuess.word))
      return
    }
    dispacth(changeTrainingStatus('incorrect'))
  }
  const handleNextWord = () => {
    if (wordsToTrain.length > 0) {
      dispacth(setRondomWordToGuess())
    }
    dispacth(changeTrainingStatus('listen'))
    resetForm();
  }
  
  const handleRepeat = () => {
    dispacth(setWordsToLearn())
    dispacth(changeTrainingStatus('listen'))
    resetForm();
  }

  React.useEffect(() => {
    dispacth(setWordsToLearn())
  }, [])

  return (
    <PageWrap>
      <LoadingErrorWrapper isError={wordsToTrainIsError} isLoading={wordsToTrainIsLoading} >
        {!trainingOn 
          ? <div className={styles.trainingTag}>
              <TrainingWordsLeft wordNumber={wordsToTrain.length} />
              {
                wordsToTrain.length > 0 
                  ? <ButtonPrimary
                      buttonText='start training'
                      clickHandler={handleStartTraining}
                      buttonWidth='100%'
                      buttonHeight='56px'
                    />
                  : <AddButton />
              }
            </div>
          : <section className={styles.trainingModule}>
            {
              wordsToTrain.length === 0
              ? <TrainingFinishMessage repeatHandler={handleRepeat}/>
              : <>
                  <WordContainer word={wordToGuess.word} wordImageUrl={wordToGuess.imageUrl} />
                  <form className={styles.form}>
                    <PrimaryInput
                      inputType = 'text'
                      inputPlaceholder='write translation'
                      inputName='translation'
                      inputOnChange={handleType}
                      inputValue={values.translation}
                      inputRequired={true}
                    />
                    <TrainingStatus
                      checkButtonActivity={isValid} 
                      status={trainingStatus}
                      checkHandler={handleCheckWord}
                      nextHandler={handleNextWord}
                    />
                  </form>
                </>
            }
            </section>
        }
      </LoadingErrorWrapper>
    </PageWrap>
        
  )
}

export default StudyPage;
