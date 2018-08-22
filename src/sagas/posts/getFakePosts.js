import { call, put, takeLatest } from "redux-saga/effects";

import { axiosQuery } from "../../api.js";

import { GET_FAKE_POSTS_PENDING } from "../../constants";
import {
  getFakePostsFulfilled,
  getFakePostsRejected
} from "../../actions/getFakePostsAction";

// worker
function* worker(action) {
  try {
    const { data } = yield call(axiosQuery, {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    });
    yield put(getFakePostsFulfilled(data));
  } catch (e) {
    yield put(getFakePostsRejected(e.message));
  }
}

// watcher
function* getFakePosts() {
  yield takeLatest(GET_FAKE_POSTS_PENDING, worker);
}

export default getFakePosts;
