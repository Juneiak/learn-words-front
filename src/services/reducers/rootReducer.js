import functionsReducer from "./functionsReducer";
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  funcs: functionsReducer,
  app: appReducer,
})

export default rootReducer;