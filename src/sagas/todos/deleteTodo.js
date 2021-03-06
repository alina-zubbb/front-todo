import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import { DELETE_TODO_PENDING } from "../../constants";
import {
  deleteTodoFulfilled,
  deleteTodoRejected
} from "../../actions/pageActions";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/deleteTodo",
      token: window.localStorage.token,
      data: { itemId: action.payload.itemId }
    });
    yield put(deleteTodoFulfilled(data));
  } catch (e) {
    yield put(deleteTodoRejected(e.message));
  }
}

// watcher
function* deleteTodo() {
  yield takeLatest(DELETE_TODO_PENDING, worker);
}

export default deleteTodo;
