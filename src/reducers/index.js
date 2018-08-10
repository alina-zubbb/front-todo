import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import list from './list.js';
import input from './input.js';
import jsonState from './jsonState.js';
import login from './login.js';

const rootReducer = combineReducers({
  routing: routerReducer,
  listState: list,
  inputState: input,
  jsonState: jsonState,
  loginState: login
});

export default rootReducer;