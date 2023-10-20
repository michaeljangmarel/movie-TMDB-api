 import { combineReducers } from "redux";
import { reducerMovie } from "./movie";
  const reducers = combineReducers({ 
     movies : reducerMovie
 })

export default reducers ;