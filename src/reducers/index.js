import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import list from "./todos/list.js";
import createTodoInput from "./todos/createTodoInput.js";
import jsonState from "./jsonState.js";
import login from "./auth/login.js";
import loginInputValues from "./auth/loginInputValues.js";
import signUpInputValues from "./auth/signUpInputValues.js";

const rootReducer = combineReducers({
  routing: routerReducer,

  listState: list,
  createTodoInput: createTodoInput,
  jsonState: jsonState,
  loginState: login,
  loginInputValues: loginInputValues,
  signUpInputValues: signUpInputValues
});

export default rootReducer;
