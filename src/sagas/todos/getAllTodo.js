import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import {
  getAllTodoFulfilled,
  getAllTodoRejected
} from "../../actions/pageActions";

// worker
function* worker(action) {
  try {
    const { data: list } = yield call(axiosQuery, {
      method: "GET",
      url: "http://localhost:4000/getAllTodo",
      token: action.payload.token
    });
    yield put(getAllTodoFulfilled(list));
  } catch (e) {
    yield put(getAllTodoRejected(e.message));
  }
}

// watcher
function* getAllTodo() {
  yield takeLatest("GETALLTODOPENDING", worker);
}

export default getAllTodo;
