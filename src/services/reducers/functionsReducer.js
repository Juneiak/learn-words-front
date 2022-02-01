import {
  SELECT_WORD_SET,
  SELECT_WORD_SET_IS_LOADING,
  SELECT_WORD_SET_IS_ERROR,
  REMOVE_SELECTED_WORD_SET,
  ADD_NEW_WORD,
  ADD_NEW_WORD_IS_LOADING,
  ADD_NEW_WORD_IS_ERROR,
  SET_USER_WORDS,
  SET_USER_WORDS_IS_ERROR,
  SET_USER_WORDS_IS_LOADING
} from "../actions/constants";

const initial = {  
  selectedWordSet: {},
  selectedWordSetIsLoading: false,
  selectedWordSetIsError: false,

  userWords: [],
  userLearningWords: [],
  userLearnedWords: [],
  userWordsIsLoading: false,
  userWordsIsError: false,

  addNewWordIsLoading: false,
  addNewWordIsError: false,
}

const functionsReducer = (state=initial, action) => {
  switch (action.type) {
    case SET_USER_WORDS:
      return {
        ...state,
        userWords: action.fetchedUserWords,
        userLearningWords: action.fetchedUserWords.filter((word) => word.progress !== 100),
        userLearnedWords: action.fetchedUserWords.filter((word) => word.progress === 100),
        userWordsIsLoading: false,
        userWordsIsError: false
      }
    case SET_USER_WORDS_IS_LOADING:
      return {
        ...state,
        selectedWordSet: { setId: action.wordSetId },
        userWordsIsLoading: true,
        userWordsIsError: false
      }
    case SET_USER_WORDS_IS_ERROR:
      return {
        ...state,
        userWordsIsLoading: false,
        userWordsIsError: true
      }


    case SELECT_WORD_SET:
      return {
        ...state,
        selectedWordSet: action.wordSet,
        selectedWordSetIsLoading: false,
        selectedWordSetIsError: false
      }
    case SELECT_WORD_SET_IS_LOADING:
      return {
        ...state,
        selectedWordSet: { setId: action.wordSetId },
        selectedWordSetIsLoading: true,
        selectedWordSetIsError: false
      }
    case SELECT_WORD_SET_IS_ERROR:
      return {
        ...state,
        selectedWordSetIsLoading: false,
        selectedWordSetIsError: true
      }
    case REMOVE_SELECTED_WORD_SET:
      return {
        ...state,
        selectedWordSet: {},
        selectedWordSetIsLoading: false,
        selectedWordSetIsError: false
      }


    case ADD_NEW_WORD:
      return {
        ...state,
        userLearningWords: [action.addedWordData, ...state.userLearningWords],
        addNewWordIsLoading: false,
        selectedWordSetIsError: false

      }
    case ADD_NEW_WORD_IS_LOADING:
      return {
        ...state,
        addNewWordIsLoading: true,
        addNewWordIsError: false
      }
    case ADD_NEW_WORD_IS_ERROR:
      return {
        ...state,
        addNewWordIsLoading: false,
        addNewWordIsError: true
      }
    default: 
      return state
  }
}

export default functionsReducer;