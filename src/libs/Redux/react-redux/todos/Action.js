import * as types from './ActionType';

export const addTodoPending = () => {
  return {
    type: types.ADD_TODO_PENDING,
  };
};

export const addTodoSuccess = (todo) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: todo,
  };
};

export const addTodoError = (error) => {
  return {
    type: types.ADD_TODO_ERROR,
    payload: error,
  };
};

export const removeTodoPending = () => {
  return {
    type: types.REMOVE_TODO_PENDING,
  };
};

export const removeTodoSuccess = (todoId) => {
  return {
    type: types.REMOVE_TODO_SUCCESS,
    payload: todoId,
  };
};

export const removeTodoError = (error) => {
  return {
    type: types.REMOVE_TODO_ERROR,
    payload: error,
  };
};

export const editTodoPending = () => {
  return {
    type: types.EDIT_TODO_PENDING,
  };
};

export const editTodoSuccess = (todoUpdate) => {
  return {
    type: types.EDIT_TODO_SUCCESS,
    payload: todoUpdate,
  };
};

export const editTodoError = (error) => {
  return {
    type: types.EDIT_TODO_ERROR,
    payload: error,
  };
};

export const addTodoMiddlerware = (todo) => async (dispatch) => {
  try {
    dispatch(addTodoPending());
    dispatch(addTodoSuccess(todo));
  } catch (error) {
    dispatch(addTodoError(error));
  }
};
