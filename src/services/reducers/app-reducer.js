import {
  TOGGLE_APP_THEME,
  ADD_POPUP_TOGGLE,
  TOGGLE_SIDE_MENU_OPEN,
  WORD_SET_POPUP_TOGGLE
} from "../actions/constants";

const initialState = {
  isDarkThemeOn: false,
  addPopUpIsOpen: false,
  isSideMenuOpen: false,
  isWordSetPopUpOpen: false,
}

const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU_OPEN: 
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen
    }
    case WORD_SET_POPUP_TOGGLE: {
      return {
        ...state,
        isWordSetPopUpOpen: !state.isWordSetPopUpOpen
      }
    }
    case TOGGLE_APP_THEME: 
      return {
        ...state,
        isDarkThemeOn: !state.isDarkThemeOn
    }
    case ADD_POPUP_TOGGLE:
      return {
        ...state,
        addPopUpIsOpen: !state.addPopUpIsOpen,
      }

    default: 
      return state
  }
}

export default appReducer;