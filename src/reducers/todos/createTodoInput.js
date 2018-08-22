import * as types from "../../constants";

const initialState = {
  inputValue: ""
};

export default function input(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_CREATE_TODO_INPUT: {
      return { ...state, inputValue: action.payload.text };
    }
    default:
      return state;
  }
}
