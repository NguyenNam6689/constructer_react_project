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
export const editToDoAction = (index, data) => {
  return {
    type: types.EDIT_TODO,
    payload: { index, data },
  };
};
export const getToDoAction = (data) => {
  return {
    type: types.GET_TODO,
    payload: data,
  };
};
