import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import { signUpFulfilled, signUpRejected } from "../../actions/loginActions";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/signUp",
      data: action.payload.data
    });
    yield [put(signUpFulfilled(data))];
  } catch (e) {
    yield put(signUpRejected(e.message));
  }
}

// watcher
function* signUp() {
  yield takeLatest("SIGNUPPENDING", worker);
}

export default signUp;
