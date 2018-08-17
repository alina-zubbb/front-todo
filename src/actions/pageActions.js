// WITHOUT SAGA
export const sortFromNew = () => dispatch => {
  dispatch({ type: "SORT_FROM_NEW", payload: {} });
};
export const sortFromOld = () => ({ type: "SORT_FROM_OLD", payload: {} });
export const sortFromHour = () => ({ type: "SORT_FROM_HOUR", payload: {} });

// SAGA
// ---- GET ALL TODOS
export const getAllTodoPending = token => ({
  type: "GETALLTODOPENDING",
  payload: { token }
});
export const getAllTodoFulfilled = list => ({
  type: "GETALLTODOFULFILLED",
  payload: { list }
});
export const getAllTodoRejected = error => {
  return { type: "GETALLTODOREJECTED", payload: { error } };
};

// ---- CHANGE TODO
export const change = text => ({ type: "CHANGE", payload: { text } });

// ---- CREATE TODO
export const createTodoPending = (token, text) => {
  return { type: "CREATETODOPENDING", payload: { token, text } };
};
export const createTodoFulfilled = ({ _id, text, userId, done }) => ({
  type: "CREATETODOFULFILLED",
  payload: {
    _id,
    text,
    userId,
    done
  }
});
export const createTodoRejected = () => ({
  type: "CREATETODOREJECTED",
  payload: {}
});

// ---- DELETE TODO
export const deleteTodoPending = (token, itemId) => ({
  type: "DELETETODOPENDING",
  payload: { token, itemId }
});
export const deleteTodoFulfilled = ({ itemId }) => ({
  type: "DELETETODOFULFILLED",
  payload: { itemId }
});
export const deleteTodoRejected = () => ({
  type: "DELETETODOREJECTED",
  payload: {}
});

// UPDATE TODO
export const updateTodoPending = (token, itemId, text) => ({
  type: "UPDATETODOPENDING",
  payload: { token, itemId, text }
});
export const updateTodoFulfilled = ({ _id: itemId, text }) => ({
  type: "UPDATETODOFULFILLED",
  payload: { itemId, text }
});
export const updateTodoRejected = () => ({
  type: "UPDATETODOREJECTED",
  payload: {}
});
