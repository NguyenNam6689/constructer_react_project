import * as types from './type.js';
import { v4 as uuid } from 'uuid';
export const initState = {
  toDo: [],
};

const toDoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newToDo = [
        ...state.toDo,
        {
          id: uuid(),
          task: action.payload.task,
          description: action.payload.description,
        },
      ];
      return {
        ...state,
        toDo: newToDo,
      };
    case types.DELETE_TODO:
      const filterTodoByRemoveItem = state.toDo.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        toDo: filterTodoByRemoveItem,
      };
    default:
      return state;
  }
};

export default toDoReducer;
