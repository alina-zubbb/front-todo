import * as types from "../../constants";

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
    case types.LOGIN_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case types.LOGIN_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        userId: action.payload.userId,
        authenticated: true,
        imageLink: action.payload.imageLink
      };
    case types.LOGIN_REJECTED:
      return {
        ...state,
        pending: false,
        error: true,
        username: null,
        authenticated: false
      };
    case types.SIGNUP_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case types.SIGNUP_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: false
      };
    case types.SIGNUP_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case types.GET_USER_DATA_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case types.GET_USER_DATA_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true,
        userId: action.payload.userId,
        imageLink: action.payload.imageLink
      };
    case types.GET_USER_DATA_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false,
        userId: null
      };
    case types.SIGNOUT:
      return {
        ...state,
        pending: false,
        error: false,
        username: null,
        userId: null,
        authenticated: false,
        imageLink: null
      };
    case types.UPLOAD_IMAGE_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.UPLOAD_IMAGE_FULFILLED:
      return {
        ...state,
        pending: false,
        imageLink: action.payload.imageLink
      };
    case types.UPLOAD_IMAGE_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
