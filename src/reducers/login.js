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
    case "LOGIN_PENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        userId: action.payload.userId,
        authenticated: true,
        imageLink: action.payload.imageLink
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        pending: false,
        error: true,
        username: null,
        authenticated: false
      };
    case "SIGNUP_PENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "SIGNUP_FULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: false
      };
    case "SIGNUP_REJECTED":
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case "GETUSERDATA_PENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "GETUSERDATA_FULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true,
        userId: action.payload.userId,
        imageLink: action.payload.imageLink
      };
    case "GETUSERDATA_REJECTED":
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false,
        userId: null
      };
    case "SIGNOUT":
      return {
        ...state,
        pending: false,
        error: false,
        username: null,
        userId: null,
        authenticated: false,
        imageLink: null
      };
    case "uploadImage_PENDING":
      return {
        ...state,
        pending: true
      };
    case "uploadImage_FULFILLED":
      return {
        ...state,
        pending: false,
        imageLink: action.payload.imageLink
      };
    case "uploadImage_REJECTED":
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
