import {
  CHANGE_POSTS_SEARCH_INPUT,
  GET_FAKE_POSTS_PENDING,
  GET_FAKE_POSTS_FULFILLED,
  GET_FAKE_POSTS_REJECTED
} from "./constants";

export const changePostsSearchInput = text => {
  return { type: CHANGE_POSTS_SEARCH_INPUT, payload: { text } };
};

export const getFakePostsPending = () => {
  return { type: GET_FAKE_POSTS_PENDING };
};

export const getFakePostsFulfilled = json => {
  return { type: GET_FAKE_POSTS_FULFILLED, payload: { jsonState: json } };
};

export const getFakePostsRejected = error => {
  return { type: GET_FAKE_POSTS_REJECTED, payload: { error } };
};
