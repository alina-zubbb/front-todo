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
    case "LOGINPENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "LOGINFULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        userId: action.payload.userId,
        authenticated: true,
        imageLink: action.payload.imageLink
      };
    case "LOGINREJECTED":
      return {
        ...state,
        pending: false,
        error: true,
        username: null,
        authenticated: false
      };
    case "SIGNUPPENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "SIGNUPFULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: false
      };
    case "SIGNUPREJECTED":
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        username: null,
        authenticated: false
      };
    case "GETUSERDATAPENDING":
      return {
        ...state,
        pending: true,
        error: false,
        username: null,
        authenticated: false
      };
    case "GETUSERDATAFULFILLED":
      return {
        ...state,
        pending: false,
        error: false,
        username: action.payload.username,
        authenticated: true,
        userId: action.payload.userId,
        imageLink: action.payload.imageLink
      };
    case "GETUSERDATAREJECTED":
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
    case "UPLOADIMAGEPENDING":
      return {
        ...state,
        pending: true
      };
    case "UPLOADIMAGEFULFILLED":
      return {
        ...state,
        pending: false,
        imageLink: action.payload.imageLink
      };
    case "UPLOADIMAGEREJECTED":
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
