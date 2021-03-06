import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import { GET_ALL_TODO_PENDING } from "../../constants";
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
      token: window.localStorage.token
    });
    yield put(getAllTodoFulfilled(list));
  } catch (e) {
    yield put(getAllTodoRejected(e.message));
  }
}

// watcher
function* getAllTodo() {
  yield takeLatest(GET_ALL_TODO_PENDING, worker);
}

export default getAllTodo;
