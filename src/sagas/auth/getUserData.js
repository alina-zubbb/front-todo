import { call, put, takeLatest, select } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import {
  getUserDataFulfilled,
  getUserDataRejected
} from "../../actions/loginActions";

// worker
function* worker(action) {
  try {
    const state = yield select();

    localStorage.setItem("loginState", JSON.stringify(state.loginState));
    const { data } = yield call(axiosQuery, {
      method: "GET",
      url: "http://localhost:4000/getUserData",
      token: window.localStorage.token
    });
    yield put(getUserDataFulfilled(data));
  } catch (e) {
    yield put(getUserDataRejected(e.message));
  }
}

// watcher
function* getUserData() {
  yield takeLatest("GET_USER_DATA_PENDING", worker);
}

export default getUserData;
