import {
  SET_WORDS_TO_TRAIN,
  SET_TRAINING_STATUS,
  SET_RANDOM_WORD_TO_GUESS,
  TOGGLE_TRAINING,
  REMOVE_GUESSED_WORD,
  SET_WORDS_TO_TRAIN_IS_LOADING,
  SET_WORDS_TO_TRAIN_IS_ERROR,
} from './constants';
import { getUserWords } from './functions';

const setRondomWordToGuess = () => ({type: SET_RANDOM_WORD_TO_GUESS})
const toggleTraining = () => ({type: TOGGLE_TRAINING})
const removeGuessedWord = (wordToRemove) => ({type: REMOVE_GUESSED_WORD, wordToRemove})

const setWordsToLearn = () => (
  (dispatch, getState) => {
    dispatch({type: SET_WORDS_TO_TRAIN_IS_LOADING})
    dispatch(getUserWords())
      .then(() => {
        const state = getState()
        const unlearnedWords = state.funcs.userWords.filter(word => word.progress !== 100)
        dispatch({type: SET_WORDS_TO_TRAIN, wordsToTrain: unlearnedWords})
      })
      .catch(() => dispatch({type: SET_WORDS_TO_TRAIN_IS_ERROR}))
  }
)

const changeTrainingStatus = (status) => (
  (dispatch) => {
    switch (status) {
      case 'listen': {
        dispatch({type: SET_TRAINING_STATUS, statusToSet: 'listen'})
        break
      } 
      case 'correct': {
        dispatch({type: SET_TRAINING_STATUS, statusToSet: 'correct'})
        break
      }
      case 'incorrect': {
        dispatch({type: SET_TRAINING_STATUS, statusToSet: 'incorrect'})
        break
      }
      default: dispatch({type: SET_TRAINING_STATUS, statusToSet: 'listen'})
    }
  }
)

export {
  setWordsToLearn,
  changeTrainingStatus,
  setRondomWordToGuess,
  toggleTraining,
  removeGuessedWord
}
