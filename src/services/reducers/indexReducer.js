import {
  TOGGLE_APP_THEME,
} from "../actions";

const initial = {
  isDarkThemeOn: false,
}

const indexReducer = (state=initial, action) => {
  switch (action.type) {
    case TOGGLE_APP_THEME: 
      return {
        ...state,
        isDarkThemeOn: !state.isDarkThemeOn
      
    }
    default: 
      return state
  }
}

export default indexReducer;