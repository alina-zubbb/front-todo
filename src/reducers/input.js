const initialState = {
  inputValue: ''
};

export default function input(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':{
      return { ...state, inputValue: action.payload.text };
    }
    default:
      return state;
  }
}