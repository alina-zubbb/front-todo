import * as types from "../constants";

const initialState = {
  searchInputValue: "",
  pending: false,
  data: [],
  error: false
};

export default function jsonState(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_POSTS_SEARCH_INPUT: {
      return {
        ...state,
        searchInputValue: action.payload.text
      };
    }
    case types.GET_FAKE_POSTS_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case types.GET_FAKE_POSTS_FULFILLED: {
      return {
        ...state,
        pending: false,
        data: action.payload.jsonState
      };
    }
    case types.GET_FAKE_POSTS_REJECTED:
      return {
        ...state,
        pending: false,
        error: true
      };
    default: {
      return state;
    }
  }
}
