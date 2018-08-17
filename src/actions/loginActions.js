// WITHOUT SAGA
// signout //
export const signout = () => {
  localStorage.removeItem("token");
  return { type: "SIGNOUT" };
};

// SAGA
// signUp //
export const signUpPending = data => {
  return { type: "SIGNUPPENDING", payload: { data } };
};
export const signUpFulfilled = ({ username, authenticated }) => {
  return {
    type: "SIGNUPFULFILLED",
    payload: { username, authStatus: authenticated }
  };
};
export const signUpRejected = error => {
  return { type: "SIGNUPREJECTED", payload: { error } };
};

// upload image //
export const uploadImagePending = data => {
  return { type: "UPLOADIMAGEPENDING", payload: { data } };
};
export const uploadImageFulfilled = ({ imageLink }) => {
  return {
    type: "UPLOADIMAGEFULFILLED",
    payload: { imageLink }
  };
};
export const uploadImageRejected = error => {
  return { type: "UPLOADIMAGEREJECTED", payload: { error } };
};

// getUserData //
export const getUserDataPending = token => {
  return { type: "GETUSERDATAPENDING", payload: { token } };
};
export const getUserDataFulfilled = ({
  username,
  authenticated,
  userId,
  imageLink
}) => {
  return {
    type: "GETUSERDATAFULFILLED",
    payload: { username, authenticated, userId, imageLink }
  };
};
export const getUserDataRejected = error => {
  return { type: "GETUSERDATAREJECTED", payload: { error } };
};

// login //
export const loginPending = data => {
  console.log("LOGINPENDING");
  return { type: "LOGINPENDING", payload: { data } };
};
export const loginFulfilled = ({ username, authenticated, imageLink }) => {
  return {
    type: "LOGINFULFILLED",
    payload: { username, authStatus: authenticated, imageLink }
  };
};
export const loginRejected = error => {
  return { type: "LOGINREJECTED", payload: { error } };
};
