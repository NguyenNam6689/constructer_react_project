import * as types from './type';
export const addToDoAction = (data) => {
  return {
    type: types.ADD_TODO,
    payload: data,
  };
};
export const deleteToDoAction = (index) => {
  return {
    type: types.DELETE_TODO,
    payload: index,
  };
};
