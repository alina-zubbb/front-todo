import * as _ from "../actions/constants";

const initialState = {
  searchInputValue: "",
  pending: false,
  data: [],
  error: false
};

export default function jsonState(state = initialState, action) {
  switch (action.type) {
    case _.CHANGE_POSTS_SEARCH_INPUT: {
      return {
        ...state,
        searchInputValue: action.payload.text
      };
    }
    case _.GET_FAKE_POSTS_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case _.GET_FAKE_POSTS_FULFILLED: {
      return {
        ...state,
        pending: false,
        data: action.payload.jsonState
      };
    }
    case _.GET_FAKE_POSTS_REJECTED:
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
