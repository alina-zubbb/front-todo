import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import {
  change,
  createTodoFulfilled,
  createTodoRejected
} from "../../actions/pageActions";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/createTodo",
      token: action.payload.token,
      data: { text: action.payload.text }
    });
    yield [put(createTodoFulfilled(data)), put(change(""))];
  } catch (e) {
    yield put(createTodoRejected(e.message));
  }
}

// watcher
function* getAllTodo() {
  yield takeLatest("CREATETODOPENDING", worker);
}

export default getAllTodo;
