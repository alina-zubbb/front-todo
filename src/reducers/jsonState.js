const initialState = {
  pending: false,
  data: [],
  error: false
};

export default function jsonState(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PENDING": {
      return {
        pending: true,
        data: [],
        error: false
      };
    }
    case "FETCH_FULFILLED": {
      return {
        pending: false,
        data: action.payload.jsonState,
        error: false
      };
    }
    case "FETCH_REJECTED":
      return {
        pending: false,
        data: [],
        error: true
      };
    default: {
      return state;
    }
  }
}
