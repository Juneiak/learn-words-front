import { getRandomNumber } from '../../utils/math-funcs';
import {
  TOGGLE_TRAINING,
  SET_WORDS_TO_TRAIN,
  SET_RANDOM_WORD_TO_GUESS,
  REMOVE_GUESSED_WORD,
  SET_TRAINING_STATUS,
  SET_WORDS_TO_TRAIN_IS_LOADING,
  SET_WORDS_TO_TRAIN_IS_ERROR,

} from '../actions/constants';

const initialState = {
  wordsToTrain: [],
  wordsToTrainIsLoading: false,
  wordsToTrainIsError: false,

  trainingOn: false,
  wordToGuess: {},
  trainingStatus: 'listen', // three state: listen, correct, incorrect
}

const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TRAINING: {
      return {
        ...state,
        trainingOn: !state.trainingOn,
      }
    }
    case SET_WORDS_TO_TRAIN: {
      return {
        ...state,
        wordsToTrain: action.wordsToTrain,
        wordsToTrainIsLoading: false,
        wordsToTrainIsError: false,
      }
    }
    case SET_WORDS_TO_TRAIN_IS_LOADING: {
      return {
        ...state,
        trainingStatus: action.statusToSet,
        wordsToTrainIsLoading: true,
        wordsToTrainIsError: false,
      }
    }

    case SET_WORDS_TO_TRAIN_IS_ERROR: {
      return {
        ...state,
        trainingStatus: action.statusToSet,
        wordsToTrainIsLoading: false,
        wordsToTrainIsError: true,
      }
    }
    case SET_RANDOM_WORD_TO_GUESS: {
      return {
        ...state,
        wordToGuess: state.wordsToTrain[getRandomNumber(0, state.wordsToTrain.length - 1)]
      }
    }
    case REMOVE_GUESSED_WORD: {
      return {
        ...state,
        wordsToTrain: state.wordsToTrain.filter(wordContainer => wordContainer?.word !== action.wordToRemove)
      }
    }
    case SET_TRAINING_STATUS: {
      return {
        ...state,
        trainingStatus: action.statusToSet
      }
    }

    
    default: return state
  }
}

export default trainingReducer;
