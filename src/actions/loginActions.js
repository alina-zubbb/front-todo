import { push } from "react-router-redux";
import axios from "axios";

// signout //
export const signout = () => {
  localStorage.removeItem("token");
  return { type: "SIGNOUT" };
};

// signup //
export const signupPending = () => {
  return { type: "SIGNUP_PENDING" };
};

export const signupFulfilled = ({ username, authenticated }) => {
  return {
    type: "SIGNUP_FULFILLED",
    payload: { username, authStatus: authenticated }
  };
};

export const signupRejected = error => {
  return { type: "SIGNUP_REJECTED", payload: { error } };
};

export function signup(data) {
  return dispatch => {
    dispatch(signupPending());
    return fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        dispatch(signupFulfilled(content));
        localStorage.setItem("token", content.token);
        return content;
      })
      .catch(error => dispatch(signupRejected(error.message)));
  };
}
// login //
export const loginPending = () => {
  return { type: "LOGIN_PENDING" };
};

export const loginFulfilled = ({ username, authenticated, imageLink }) => {
  return {
    type: "LOGIN_FULFILLED",
    payload: { username, authStatus: authenticated, imageLink }
  };
};

export const loginRejected = error => {
  return { type: "LOGIN_REJECTED", payload: { error } };
};
export function login(data, cb) {
  return dispatch => {
    dispatch(loginPending());
    return fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        dispatch(loginFulfilled(content));
        localStorage.setItem("token", content.token);
        dispatch(push("/protected"));
        return content;
      })
      .catch(error => dispatch(loginRejected(error.message)));
  };
}

// getUserData //
export const fetchPending = () => {
  return { type: "GETUSERDATA_PENDING" };
};

export const fetchFulfilled = ({
  username,
  authenticated,
  userId,
  imageLink
}) => {
  return {
    type: "GETUSERDATA_FULFILLED",
    payload: { username, authenticated, userId, imageLink }
  };
};

export const fetchRejected = error => {
  return { type: "GETUSERDATA_REJECTED", payload: { error } };
};

export function getUserData(token) {
  return (dispatch, getState) => {
    dispatch(fetchPending());
    return fetch("http://localhost:4000/getuserdata", {
      method: "GET",
      headers: {
        "x-authorization-token": `bearer ${token}`
      }
    })
      .then(res => {
        if (res.ok === false) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then(content => {
        dispatch(fetchFulfilled(content));
        localStorage.setItem(
          "loginState",
          JSON.stringify(getState().loginState)
        );
        return;
      })
      .catch(error => dispatch(fetchRejected(error.message)));
  };
}

// upload image //
export const uploadImagePending = () => {
  return { type: "uploadImage_PENDING" };
};

export const uploadImageFulfilled = ({ imageLink }) => {
  return {
    type: "uploadImage_FULFILLED",
    payload: { imageLink }
  };
};

export const uploadImageRejected = error => {
  return { type: "uploadImage_REJECTED", payload: { error } };
};

export function uploadImage(data) {
  let formData = new FormData();

  formData.set("image", data.file, data.fileName);
  formData.set("fileName", data.fileName);

  return dispatch => {
    dispatch(uploadImagePending());
    return axios({
      method: "post",
      url: "http://localhost:4000/uploadImage",
      headers: {
        "x-authorization-token": `bearer ${data.token}`
      },
      data: formData
    })
      .then(function(response) {
        dispatch(uploadImageFulfilled(response.data));
      })
      .catch(error => dispatch(uploadImageRejected("_______", error.message)));
  };
}
