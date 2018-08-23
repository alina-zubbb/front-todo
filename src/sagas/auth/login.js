import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { push } from "react-router-redux";

import { axiosQuery } from "../../api.js";

import { LOGIN_PENDING } from "../../constants";
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
      form: {
        login: { values }
      }
    } = yield select();
    const { data, status } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/login",
      data: values
    });
    if (status === 200) {
      localStorage.setItem("token", data.token);
      yield all([
        put(loginFulfilled(data)),
        put(changeLoginInputUsername("")),
        put(changeLoginInputPassword("")),
        put(push("/protected"))
      ]);
    }
    if (status === 201 || status === 202) {
      yield put(loginRejected(data.message));
    }
  } catch (e) {
    console.log(e);
  }
}

// watcher
function* login() {
  yield takeLatest(LOGIN_PENDING, worker);
}

export default login;
