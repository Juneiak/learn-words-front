import functionsReducer from "./functions-reducer";
import appReducer from "./app-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  funcs: functionsReducer,
  app: appReducer,
})

export default rootReducer;