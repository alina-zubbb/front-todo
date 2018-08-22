import { takeLatest } from "redux-saga/effects";

import { SIGNOUT } from "../../constants";

// worker
function* worker() {
  yield localStorage.removeItem("token");
}

// watcher
function* signUp() {
  yield takeLatest(SIGNOUT, worker);
}

export default signUp;
