const initialState = {
  pending: false,
  data: [],
  error: false
};

export default function jsonState(state = initialState, action) {
  switch (action.type) {
    case "GETFAKEPOSTSPENDING": {
      return {
        pending: true,
        data: [],
        error: false
      };
    }
    case "GETFAKEPOSTSFULFILLED": {
      return {
        pending: false,
        data: action.payload.jsonState,
        error: false
      };
    }
    case "GETFAKEPOSTSREJECTED":
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
