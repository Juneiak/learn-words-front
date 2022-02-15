import functionsReducer from "./functions-reducer";
import appReducer from "./app-reducer";
import trainingReducer from "./training-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  funcs: functionsReducer,
  app: appReducer,
  training: trainingReducer,
})

export default rootReducer;