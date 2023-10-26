import * as types from './ActionType';

export const addTodoPending = () => {
  return {
    type: types.ADD_TODO_PENDING,
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: data,
  };
};
export const addTodoError = (error) => {
  return {
    type: types.ADD_TODO_ERROR,
    payload: error,
  };
};
