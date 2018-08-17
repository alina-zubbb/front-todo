import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";

import { axiosQuery } from "../../api.js";

import { loginFulfilled, loginRejected } from "../../actions/loginActions";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/login",
      data: action.payload.data
    });
    localStorage.setItem("token", data.token);
    yield [put(loginFulfilled(data)), put(push("/protected"))];
  } catch (e) {
    yield put(loginRejected(e.message));
  }
}

// watcher
function* login() {
  yield takeLatest("LOGINPENDING", worker);
}

export default login;
