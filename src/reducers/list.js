const initialState = {
  pending: false,
  error: false,
  list: []
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case "GETALLTODOPENDING":
      return {
        ...state,
        ...{
          pending: true
        }
      };
    case "GETALLTODOFULFILLED":
      return {
        ...state,
        ...{
          pending: false,
          list: action.payload.list
        }
      };
    case "GETALLTODOREJECTED":
      return {
        ...state,
        ...{
          error: true
        }
      };
    case "CREATETODOPENDING":
      return {
        ...state,
        pending: true
      };
    case "CREATETODOFULFILLED":
      return {
        ...state,
        pending: false,
        list: state.list.concat({
          _id: action.payload._id,
          text: action.payload.text,
          userId: action.payload.userId,
          done: action.payload.done
        })
      };
    case "CREATETODOREJECTED":
      return {
        ...state,
        pending: false,
        error: true
      };
    case "DELETETODOPENDING":
      return {
        ...state,
        pending: true
      };
    case "DELETETODOFULFILLED":
      return {
        ...state,
        pending: false,
        list: state.list.filter(({ _id }) => _id !== action.payload.itemId)
      };
    case "DELETETODOREJECTED":
      return {
        ...state,
        pending: false,
        error: true
      };
    case "UPDATETODOPENDING":
      return {
        ...state,
        pending: true
      };
    case "UPDATETODOFULFILLED":
      return {
        ...state,
        pending: false,
        list: state.list.map(curr => {
          console.log("curr", curr);
          return curr._id === action.payload.itemId
            ? { ...curr, text: action.payload.text }
            : curr;
        })
      };
    case "UPDATETODOREJECTED":
      return {
        ...state,
        pending: false,
        error: true
      };
    case "SORT_FROM_NEW":
      return {
        ...state,
        ...{
          list: [
            ...state.list.sort((a, b) => {
              return a.id > b.id ? -1 : a.id === b.id ? 0 : 1;
            })
          ]
        }
      };
    case "SORT_FROM_OLD":
      return {
        ...state,
        ...{
          list: [
            ...state.list.sort((a, b) => {
              return a.id > b.id ? 1 : a.id === b.id ? 0 : -1;
            })
          ]
        }
      };
    case "SORT_FROM_HOUR":
      return {
        ...state,
        ...{
          list: state.list.filter(({ id }) => {
            const hourPoint = Date.now() - 5000;
            return id > hourPoint;
          })
        }
      };

    default:
      return state;
  }
}
