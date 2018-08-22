import * as types from "../constants";

// WITHOUT SAGA
// signout //
export const signout = () => ({
  type: types.SIGNOUT
});
// login
export const changeLoginInputUsername = text => {
  return { type: types.CHANGE_LOGIN_INPUT_USERNAME, payload: { text } };
};

export const changeLoginInputPassword = text => {
  return { type: types.CHANGE_LOGIN_INPUT_PASSWORD, payload: { text } };
};
// signup
export const changeSignUpInputUsername = text => {
  return { type: types.CHANGE_SIGNUP_INPUT_USERNAME, payload: { text } };
};

export const changeSignUpInputPassword = text => {
  return { type: types.CHANGE_SIGNUP_INPUT_PASSWORD, payload: { text } };
};

// SAGA
// signUp //
export const signUpPending = () => {
  return { type: types.SIGNUP_PENDING };
};
export const signUpFulfilled = ({ username, authenticated }) => {
  return {
    type: types.SIGNUP_FULFILLED,
    payload: { username, authStatus: authenticated }
  };
};
export const signUpRejected = error => {
  return { type: types.SIGNUP_REJECTED, payload: { error } };
};

// upload image //
export const uploadImagePending = data => {
  return { type: types.UPLOAD_IMAGE_PENDING, payload: { data } };
};
export const uploadImageFulfilled = ({ imageLink }) => {
  return {
    type: types.UPLOAD_IMAGE_FULFILLED,
    payload: { imageLink }
  };
};
export const uploadImageRejected = error => {
  return { type: types.UPLOAD_IMAGE_REJECTED, payload: { error } };
};

// getUserData //
export const getUserDataPending = () => {
  return { type: types.GET_USER_DATA_PENDING, payload: {} };
};
export const getUserDataFulfilled = ({
  username,
  authenticated,
  userId,
  imageLink
}) => {
  return {
    type: types.GET_USER_DATA_FULFILLED,
    payload: { username, authenticated, userId, imageLink }
  };
};
export const getUserDataRejected = error => {
  return { type: types.GET_USER_DATA_REJECTED, payload: { error } };
};

// login //
export const loginPending = () => {
  return { type: types.LOGIN_PENDING };
};
export const loginFulfilled = ({ username, authenticated, imageLink }) => {
  return {
    type: types.LOGIN_FULFILLED,
    payload: { username, authStatus: authenticated, imageLink }
  };
};
export const loginRejected = error => {
  return { type: types.LOGIN_REJECTED, payload: { error } };
};
