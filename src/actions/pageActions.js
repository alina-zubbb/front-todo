import axios from "axios";

export const remove = (itemId, token) => dispatch => {
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
      dispatch({ type: "REMOVE", payload: { itemId: data.itemId } });
    })
    .catch(error => console.log(error));
};

export const change = text => dispatch => {
  dispatch({ type: "CHANGE", payload: { text: text } });
};

export const addPending = () => dispatch => {
  dispatch({ type: "ADDPENDING", payload: {} });
};

// export const addFulfield = () => dispatch => {
//   dispatch({ type: "ADDPENDING", payload: {} });
// };

export const add = (text, token) => dispatch => {
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
      dispatch({
        type: "ADD",
        payload: {
          _id: data._id,
          text: data.text,
          userId: data.userId,
          done: data.done
        }
      });
      dispatch({ type: "CHANGE", payload: { text: "" } });
    })
    .catch(error => console.log(error));
};

export const save = (itemId, text, token) => dispatch => {
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
      dispatch({
        type: "SAVE",
        payload: { itemId: data._id, text: data.text }
      });
    })
    .catch(error => console.log("------", error));
};

export const sortFromNew = () => dispatch => {
  dispatch({ type: "SORT_FROM_NEW", payload: {} });
};

export const sortFromOld = () => dispatch => {
  dispatch({ type: "SORT_FROM_OLD", payload: {} });
};

export const sortFromHour = () => dispatch => {
  dispatch({ type: "SORT_FROM_HOUR", payload: {} });
};

export const getAllTodoPending = () => {
  return { type: "GETALLTODO_PENDING" };
};

export const getAllTodoFulfilled = list => {
  return {
    type: "GETALLTODO_FULFILLED",
    payload: { list }
  };
};

export const getAllTodoRejected = error => {
  return { type: "GETALLTODO_REJECTED", payload: { error } };
};

export function getAllTodo(token) {
  return (dispatch, getState) => {
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
