import * as _ from "../../actions/constants";

const initialState = {
  pending: false,
  error: false,
  username: null,
  userId: null,
  authenticated: false,
  imageLink: null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case _.LOGIN_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case _.LOGIN_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        userId: action.payload.userId,
        authenticated: true,
        imageLink: action.payload.imageLink
      };
    case _.LOGIN_REJECTED:
      return {
        ...state,
        pending: false,
        error: true,
        username: null,
        authenticated: false
      };
    case _.SIGNUP_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case _.SIGNUP_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: false
      };
    case _.SIGNUP_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case _.GET_USER_DATA_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case _.GET_USER_DATA_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true,
        userId: action.payload.userId,
        imageLink: action.payload.imageLink
      };
    case _.GET_USER_DATA_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false,
        userId: null
      };
    case _.SIGNOUT:
      return {
        ...state,
        pending: false,
        error: false,
        username: null,
        userId: null,
        authenticated: false,
        imageLink: null
      };
    case _.UPLOAD_IMAGE_PENDING:
      return {
        ...state,
        pending: true
      };
    case _.UPLOAD_IMAGE_FULFILLED:
      return {
        ...state,
        pending: false,
        imageLink: action.payload.imageLink
      };
    case _.UPLOAD_IMAGE_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
