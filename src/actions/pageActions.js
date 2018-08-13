import axios from "axios";

// REMOVE TODO
export const removePending = () => ({ type: "REMOVEPENDING", payload: {} });
export const removeFulfilled = data => ({
  type: "REMOVEFULFILLED",
  payload: { itemId: data.itemId }
});
export const removeRejected = () => ({ type: "REMOVEREJECTED", payload: {} });

export const removeTodo = (itemId, token) => dispatch => {
  dispatch(removePending());
  axios({
    method: "POST",
    url: "http://localhost:4000/deleteTodo",
    headers: {
      "x-authorization-token": `bearer ${token}`
    },
    data: { itemId }
  })
    .then(response => {
      const data = response.data;
      dispatch(removeFulfilled(data));
    })
    .catch(error => {
      dispatch(removeRejected());
      console.log(error);
    });
};

export const change = text => ({ type: "CHANGE", payload: { text: text } });

// ADD TODO
export const addPending = () => {
  return { type: "ADDPENDING", payload: {} };
};

export const addFulfilled = data => ({
  type: "ADDFULFILLED",
  payload: {
    _id: data._id,
    text: data.text,
    userId: data.userId,
    done: data.done
  }
});

export const addRejected = () => ({ type: "ADDREJECTED", payload: {} });

export const addTodo = (text, token) => {
  return dispatch => {
    dispatch(addPending());
    axios({
      method: "POST",
      url: "http://localhost:4000/createTodo",
      headers: {
        "x-authorization-token": `bearer ${token}`
      },
      data: { text }
    })
      .then(response => {
        const data = response.data;
        dispatch(addFulfilled(data));
        dispatch({ type: "CHANGE", payload: { text: "" } });
      })
      .catch(error => {
        dispatch(addRejected());
        console.log(error);
      });
  };
};

// SAVE TODO
export const savePending = () => ({ type: "SAVEPENDING", payload: {} });
export const saveFulfilled = data => ({
  type: "SAVEFULFILLED",
  payload: { itemId: data._id, text: data.text }
});
export const saveRejected = () => ({ type: "SAVEREJECTED", payload: {} });

export const saveTodo = (itemId, text, token) => dispatch => {
  dispatch(savePending());
  axios({
    method: "POST",
    url: "http://localhost:4000/updateTodo",
    headers: {
      "x-authorization-token": `bearer ${token}`
    },
    data: { itemId, text }
  })
    .then(response => {
      const data = response.data;
      dispatch(saveFulfilled(data));
    })
    .catch(error => {
      dispatch(saveRejected());
      console.log("------", error);
    });
};

export const sortFromNew = () => dispatch => {
  dispatch({ type: "SORT_FROM_NEW", payload: {} });
};

export const sortFromOld = () => ({ type: "SORT_FROM_OLD", payload: {} });

export const sortFromHour = () => ({ type: "SORT_FROM_HOUR", payload: {} });

export const getAllTodoPending = () => ({ type: "GETALLTODO_PENDING" });

export const getAllTodoFulfilled = list => ({
  type: "GETALLTODO_FULFILLED",
  payload: { list }
});

export const getAllTodoRejected = error => {
  return { type: "GETALLTODO_REJECTED", payload: { error } };
};

export function getAllTodo(token) {
  return dispatch => {
    dispatch(getAllTodoPending());
    return axios({
      url: "http://localhost:4000/getAllTodo",
      method: "GET",
      headers: {
        "x-authorization-token": `bearer ${token}`
      }
    })
      .then(content => {
        dispatch(getAllTodoFulfilled(Object.values(content.data)));
      })
      .catch(error => dispatch(getAllTodoRejected(error.message)));
  };
}
