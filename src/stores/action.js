import * as types from './type';
export const addToDoAction = (data) => {
  return {
    type: types.ADD_TO_DO,
    payload: data,
  };
};
export const deleteToDoAction = (index) => {
  return {
    type: types.DELETE_TO_DO,
    payload: index,
  };
};
