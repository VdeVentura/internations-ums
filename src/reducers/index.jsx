import { combineReducers } from "redux";

import SideBar from "./SideBar.js";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  SideBar,
  form: formReducer
});

export default rootReducer;
