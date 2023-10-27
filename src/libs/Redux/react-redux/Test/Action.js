import * as types from './ActionType';

export const addTodoPending = () => {
  return {
    type: types.ADD_TODO_PENDING,
  };
};
export const addTodoSuccess = () => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: 'success',
  };
};
export const addTodoError = (error) => {
  return {
    type: types.ADD_TODO_ERROR,
    payload: error,
  };
};
