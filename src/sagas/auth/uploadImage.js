import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import {
  uploadImageFulfilled,
  uploadImageRejected
} from "../../actions/loginActions";

// worker
function* worker(action) {
  try {
    let data = action.payload.data;

    let formData = new FormData();
    formData.set("image", data.file, data.fileName);
    formData.set("fileName", data.fileName);

    const response = yield call(axiosQuery, {
      method: "POST",
      url: "http://localhost:4000/uploadImage",
      token: data.token,
      data: formData
    });
    yield put(uploadImageFulfilled(response.data));
  } catch (e) {
    yield put(uploadImageRejected(e.message));
  }
}

// watcher
function* signUp() {
  yield takeLatest("UPLOADIMAGEPENDING", worker);
}

export default signUp;
