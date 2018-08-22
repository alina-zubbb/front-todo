import * as types from "../constants";

// --- WITHOUT SAGA
export const sortFromNew = () => ({ type: types.SORT_FROM_NEW });
export const sortFromOld = () => ({ type: types.SORT_FROM_OLD });
export const sortFromHour = () => ({ type: types.SORT_FROM_HOUR });

// ----SAGA
// GET ALL TODOS
export const getAllTodoPending = () => ({
  type: types.GET_ALL_TODO_PENDING
});
export const getAllTodoFulfilled = list => ({
  type: types.GET_ALL_TODO_FULFILLED,
  payload: { list }
});
export const getAllTodoRejected = error => {
  return { type: types.GET_ALL_TODO_REJECTED, payload: { error } };
};

// CHANGE TODO
export const changeCreateTodoInput = text => ({
  type: types.CHANGE_CREATE_TODO_INPUT,
  payload: { text }
});

// CREATE TODO
export const createTodoPending = () => {
  return { type: types.CREATE_TODO_PENDING };
};
export const createTodoFulfilled = payload => ({
  type: types.CREATE_TODO_FULFILLED,
  payload
});
export const createTodoRejected = () => ({
  type: types.CREATE_TODO_REJECTED
});

// DELETE TODO
export const deleteTodoPending = itemId => ({
  type: types.DELETE_TODO_PENDING,
  payload: { itemId }
});
export const deleteTodoFulfilled = ({ itemId }) => ({
  type: types.DELETE_TODO_FULFILLED,
  payload: { itemId }
});
export const deleteTodoRejected = () => ({
  type: types.DELETE_TODO_REJECTED
});

// UPDATE TODO
export const updateTodoPending = (itemId, text, done) => ({
  type: types.UPDATE_TODO_PENDING,
  payload: { itemId, text, done }
});
export const updateTodoFulfilled = ({ _id: itemId, text }) => ({
  type: types.UPDATE_TODO_FULFILLED,
  payload: { itemId, text }
});
export const updateTodoRejected = () => ({
  type: types.UPDATE_TODO_REJECTED,
  payload: {}
});
