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
  SET_USER_WORDS_IS_LOADING,
  RESET_WORD_PROGRESS,
  DELETE_WORD
} from "../actions/constants";

const initial = {  
  selectedWordSet: {},
  selectedWordSetIsLoading: false,
  selectedWordSetIsError: false,

  userWords: [],
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
        userWords: [action.addedWordData, ...state.userWords],
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


    case RESET_WORD_PROGRESS:
    return {
      ...state,
      userWords: state.userWords.map(wordCard => { 
        if (wordCard.word === action.word) {
          return {
            ...wordCard,
            progress: 0,
          }
        }
        return wordCard
      }),
    }
    case DELETE_WORD:
      return {
        ...state,
        userWords: state.userWords.filter(wordCard => wordCard.word === action.word ? false : true)
      }
    default: 
      return state
  }
}

export default functionsReducer;