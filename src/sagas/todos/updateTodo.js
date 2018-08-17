import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

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
      token: action.payload.token,
      data: { itemId: action.payload.itemId, text: action.payload.text }
    });
    yield [put(updateTodoFulfilled(data))];
  } catch (e) {
    yield put(updateTodoRejected(e.message));
  }
}

// watcher
function* updateTodo() {
  yield takeLatest("UPDATETODOPENDING", worker);
}

export default updateTodo;
