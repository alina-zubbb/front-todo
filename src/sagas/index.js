import { all, fork } from "redux-saga/effects";

import * as todos from "./todos";
import * as auth from "./auth";
import * as posts from "./posts";

export const rootSaga = function*() {
  let arr = [];
  for (let key in todos) {
    arr.push(fork(todos[key]));
  }
  for (let key in auth) {
    arr.push(fork(auth[key]));
  }
  for (let key in posts) {
    arr.push(fork(posts[key]));
  }
  yield all(arr);
};
