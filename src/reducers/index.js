import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loginReducer } from "./loginReducer";

const allReducers = combineReducers({
  counterValue: counterReducer,
  loginValue: loginReducer,
});

export default allReducers;
