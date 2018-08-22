import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import { UPDATE_TODO_PENDING } from "../../constants";
import {
  updateTodoFulfilled,
  updateTodoRejected
} from "../../actions/pageActions";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/updateTodo",
      token: window.localStorage.token,
      data: { itemId: action.payload.itemId, text: action.payload.text }
    });
    yield [put(updateTodoFulfilled(data))];
  } catch (e) {
    yield put(updateTodoRejected(e.message));
  }
}

// watcher
function* updateTodo() {
  yield takeLatest(UPDATE_TODO_PENDING, worker);
}

export default updateTodo;
