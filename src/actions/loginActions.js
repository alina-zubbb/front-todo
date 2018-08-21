import * as _ from "./constants";

// WITHOUT SAGA
// signout //
export const signout = () => {
  localStorage.removeItem("token");
  return { type: _.SIGNOUT };
};
// login
export const changeLoginInputUsername = text => {
  return { type: _.CHANGE_LOGIN_INPUT_USERNAME, payload: { text } };
};

export const changeLoginInputPassword = text => {
  return { type: _.CHANGE_LOGIN_INPUT_PASSWORD, payload: { text } };
};
// signup
export const changeSignUpInputUsername = text => {
  return { type: _.CHANGE_SIGNUP_INPUT_USERNAME, payload: { text } };
};

export const changeSignUpInputPassword = text => {
  return { type: _.CHANGE_SIGNUP_INPUT_PASSWORD, payload: { text } };
};

// SAGA
// signUp //
export const signUpPending = () => {
  return { type: _.SIGNUP_PENDING };
};
export const signUpFulfilled = ({ username, authenticated }) => {
  return {
    type: _.SIGNUP_FULFILLED,
    payload: { username, authStatus: authenticated }
  };
};
export const signUpRejected = error => {
  return { type: _.SIGNUP_REJECTED, payload: { error } };
};

// upload image //
export const uploadImagePending = data => {
  return { type: _.UPLOAD_IMAGE_PENDING, payload: { data } };
};
export const uploadImageFulfilled = ({ imageLink }) => {
  return {
    type: _.UPLOAD_IMAGE_FULFILLED,
    payload: { imageLink }
  };
};
export const uploadImageRejected = error => {
  return { type: _.UPLOAD_IMAGE_REJECTED, payload: { error } };
};

// getUserData //
export const getUserDataPending = () => {
  return { type: _.GET_USER_DATA_PENDING, payload: {} };
};
export const getUserDataFulfilled = ({
  username,
  authenticated,
  userId,
  imageLink
}) => {
  return {
    type: _.GET_USER_DATA_FULFILLED,
    payload: { username, authenticated, userId, imageLink }
  };
};
export const getUserDataRejected = error => {
  return { type: _.GET_USER_DATA_REJECTED, payload: { error } };
};

// login //
export const loginPending = () => {
  return { type: _.LOGIN_PENDING };
};
export const loginFulfilled = ({ username, authenticated, imageLink }) => {
  return {
    type: _.LOGIN_FULFILLED,
    payload: { username, authStatus: authenticated, imageLink }
  };
};
export const loginRejected = error => {
  return { type: _.LOGIN_REJECTED, payload: { error } };
};
