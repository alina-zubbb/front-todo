import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { push } from "react-router-redux";

import { axiosQuery } from "../../api.js";

import { SIGNUP_PENDING } from "../../constants";
import {
  signUpFulfilled,
  signUpRejected,
  changeSignUpInputUsername,
  changeSignUpInputPassword
} from "../../actions/loginActions";

// worker
function* worker() {
  try {
    const {
      form: {
        signup: { values }
      }
    } = yield select();
    const { data } = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/signUp",
      data: values
    });
    yield all([
      put(signUpFulfilled(data)),
      put(changeSignUpInputUsername("")),
      put(changeSignUpInputPassword("")),
      put(push("/login"))
    ]);
  } catch (e) {
    yield put(signUpRejected(e.message));
  }
}

// watcher
function* signUp() {
  yield takeLatest(SIGNUP_PENDING, worker);
}

export default signUp;
