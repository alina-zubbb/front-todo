import { call, put, takeLatest, select } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import {
  changeCreateTodoInput,
  createTodoFulfilled,
  createTodoRejected
} from "../../actions/pageActions";

// worker
function* worker() {
  try {
    const {
      createTodoInput: { inputValue }
    } = yield select();
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/createTodo",
      token: window.localStorage.token,
      data: { text: inputValue }
    });
    yield [put(createTodoFulfilled(data)), put(changeCreateTodoInput(""))];
  } catch (e) {
    yield put(createTodoRejected(e.message));
  }
}

// watcher
function* createTodo() {
  yield takeLatest("CREATE_TODO_PENDING", worker);
}

export default createTodo;
