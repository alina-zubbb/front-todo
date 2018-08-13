const initialState = {
  pending: false,
  error: false,
  list: []
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case "ADDPENDING":
      return {
        ...state,
        pending: true
      };
    case "ADDFULFILLED":
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
    case "ADDREJECTED":
      return {
        ...state,
        pending: false,
        error: true
      };
    case "REMOVEPENDING":
      return {
        ...state,
        pending: true
      };
    case "REMOVEFULFILLED":
      return {
        ...state,
        pending: false,
        list: state.list.filter(({ _id }) => _id !== action.payload.itemId)
      };
    case "REMOVEREJECTED":
      return {
        ...state,
        pending: false,
        error: true
      };
    case "SAVEPENDING":
      return {
        ...state,
        pending: true
      };
    case "SAVEFULFILLED":
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
    case "SAVEREJECTED":
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
    case "GETALLTODO_PENDING":
      return {
        ...state,
        ...{
          pending: true
        }
      };
    case "GETALLTODO_FULFILLED":
      return {
        ...state,
        ...{
          pending: false,
          list: action.payload.list
        }
      };
    case "GETALLTODO_REJECTED":
      return {
        ...state,
        ...{
          error: true
        }
      };

    default:
      return state;
  }
}
