import * as _ from "./constants";

// --- WITHOUT SAGA
export const sortFromNew = () => ({ type: _.SORT_FROM_NEW });
export const sortFromOld = () => ({ type: _.SORT_FROM_OLD });
export const sortFromHour = () => ({ type: _.SORT_FROM_HOUR });

// ----SAGA
// GET ALL TODOS
export const getAllTodoPending = () => ({
  type: _.GET_ALL_TODO_PENDING
});
export const getAllTodoFulfilled = list => ({
  type: _.GET_ALL_TODO_FULFILLED,
  payload: { list }
});
export const getAllTodoRejected = error => {
  return { type: _.GET_ALL_TODO_REJECTED, payload: { error } };
};

// CHANGE TODO
export const changeCreateTodoInput = text => ({
  type: _.CHANGE_CREATE_TODO_INPUT,
  payload: { text }
});

// CREATE TODO
export const createTodoPending = () => {
  return { type: _.CREATE_TODO_PENDING };
};
export const createTodoFulfilled = payload => ({
  type: _.CREATE_TODO_FULFILLED,
  payload
});
export const createTodoRejected = () => ({
  type: _.CREATE_TODO_REJECTED
});

// DELETE TODO
export const deleteTodoPending = itemId => ({
  type: _.DELETE_TODO_PENDING,
  payload: { itemId }
});
export const deleteTodoFulfilled = ({ itemId }) => ({
  type: _.DELETE_TODO_FULFILLED,
  payload: { itemId }
});
export const deleteTodoRejected = () => ({
  type: _.DELETE_TODO_REJECTED
});

// UPDATE TODO
export const updateTodoPending = (itemId, text, done) => ({
  type: _.UPDATE_TODO_PENDING,
  payload: { itemId, text, done }
});
export const updateTodoFulfilled = ({ _id: itemId, text }) => ({
  type: _.UPDATE_TODO_FULFILLED,
  payload: { itemId, text }
});
export const updateTodoRejected = () => ({
  type: _.UPDATE_TODO_REJECTED,
  payload: {}
});
