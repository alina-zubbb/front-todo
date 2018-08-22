import * as types from "../../constants";

const initialState = {
  username: "",
  password: ""
};

export default function input(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_SIGNUP_INPUT_USERNAME: {
      return {
        ...state,
        username: action.payload.text
      };
    }
    case types.CHANGE_SIGNUP_INPUT_PASSWORD: {
      return {
        ...state,
        password: action.payload.text
      };
    }
    default:
      return state;
  }
}
