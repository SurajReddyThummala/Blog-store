import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import MainReducer from "./MainReducer";
const rootReducer = combineReducers({
  posts: MainReducer ,
  form: formReducer
});

export default rootReducer;
