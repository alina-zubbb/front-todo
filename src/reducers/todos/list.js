import * as types from "../../constants";

const initialState = {
  pending: false,
  error: false,
  list: []
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_TODO_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.GET_ALL_TODO_FULFILLED:
      return {
        ...state,
        pending: false,
        list: action.payload.list
      };
    case types.GET_ALL_TODO_REJECTED:
      return {
        ...state,
        error: true
      };
    case types.CREATE_TODO_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.CREATE_TODO_FULFILLED:
      return {
        ...state,
        pending: false,
        list: state.list.concat(action.payload)
      };
    case types.CREATE_TODO_REJECTED:
      return {
        ...state,
        pending: false,
        error: true
      };
    case types.DELETE_TODO_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.DELETE_TODO_FULFILLED:
      return {
        ...state,
        pending: false,
        list: state.list.filter(({ _id }) => _id !== action.payload.itemId)
      };
    case types.DELETE_TODO_REJECTED:
      return {
        ...state,
        pending: false,
        error: true
      };
    case types.UPDATE_TODO_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.UPDATE_TODO_FULFILLED:
      return {
        ...state,
        pending: false,
        list: state.list.map(curr => {
          return curr._id === action.payload.itemId
            ? { ...curr, text: action.payload.text }
            : curr;
        })
      };
    case types.UPDATE_TODO_REJECTED:
      return {
        ...state,
        pending: false,
        error: true
      };
    case types.SORT_FROM_NEW:
      return {
        ...state,
        list: state.list
          .slice()
          .sort(({ timeOfCreation: a1 }, { timeOfCreation: b1 }) => b1 - a1)
      };
    case types.SORT_FROM_OLD:
      return {
        ...state,
        list: state.list
          .slice()
          .sort(({ timeOfCreation: a2 }, { timeOfCreation: b2 }) => a2 - b2)
      };
    case types.SORT_FROM_HOUR:
      return {
        ...state,
        ...{
          list: state.list.filter(({ timeOfCreation: a3 }) => {
            const hourPoint = Date.now() - 5000;
            return a3 > hourPoint;
          })
        }
      };
    default:
      return state;
  }
}
