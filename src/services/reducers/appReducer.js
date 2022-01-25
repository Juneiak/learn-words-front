import {
  TOGGLE_APP_THEME,
  ADD_POPUP_TOGGLE,

} from "../actions/constants";

const initial = {
  isDarkThemeOn: false,
  addPopUpIsOpen: false,
}

const appReducer = (state=initial, action) => {
  switch (action.type) {
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