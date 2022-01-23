import {
  TOGGLE_APP_THEME,
  SELECT_WORD_SET,
  SELECT_WORD_SET_IS_LOADING,
  SELECT_WORD_SET_IS_ERROR
} from "../actions/constants";

const initial = {
  isDarkThemeOn: false,
  selectedWordSet: {},
  selectedWordSetIsLoading: false,
  selectedWordSetIsError: false,
}

const indexReducer = (state=initial, action) => {
  switch (action.type) {
    case TOGGLE_APP_THEME: 
      return {
        ...state,
        isDarkThemeOn: !state.isDarkThemeOn
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
        selectedWordSetIsLoading: true,
        selectedWordSetIsError: false
      }
    case SELECT_WORD_SET_IS_ERROR:
      return {
        ...state,
        selectedWordSetIsLoading: false,
        selectedWordSetIsError: true
      }
    default: 
      return state
  }
}

export default indexReducer;