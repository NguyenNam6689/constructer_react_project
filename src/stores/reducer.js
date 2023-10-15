import * as types from './type.js';
export const initState = {
  toDo: [],
};

const toDoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        toDo: state.toDo.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default toDoReducer;
