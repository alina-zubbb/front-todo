import { values } from "lodash";

import { all, fork } from "redux-saga/effects";

import * as todos from "./todos";
import * as auth from "./auth";
import * as posts from "./posts";

export const rootSaga = function*() {
  const combine = (...arr) => {
    return arr.reduce((prev, curr) => {
      return [...prev, ...values(curr).map(item => fork(item))];
    }, []);
  };

  yield all(combine(todos, auth, posts));
};
