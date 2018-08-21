import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { push } from "react-router-redux";

import { axiosQuery } from "../../api.js";

import {
  loginFulfilled,
  loginRejected,
  changeLoginInputUsername,
  changeLoginInputPassword
} from "../../actions/loginActions";

// worker
function* worker() {
  try {
    const {
      loginInputValues: { username, password }
    } = yield select();
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/login",
      data: { username, password }
    });
    localStorage.setItem("token", data.token);
    yield all([
      put(loginFulfilled(data)),
      put(changeLoginInputUsername("")),
      put(changeLoginInputPassword("")),
      put(push("/protected"))
    ]);
  } catch (e) {
    yield put(loginRejected(e.message));
  }
}

// watcher
function* login() {
  yield takeLatest("LOGIN_PENDING", worker);
}

export default login;
