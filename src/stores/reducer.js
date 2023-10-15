import { GetLocalStorage } from 'src/utils/localstorage.js';
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
      localStorage.setItem('toDo', JSON.stringify(newToDo));
      return {
        ...state,
        toDo: newToDo,
      };
    case types.DELETE_TODO:
      const filterTodoByRemoveItem = state.toDo.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('toDo', JSON.stringify(filterTodoByRemoveItem));
      return {
        ...state,
        toDo: filterTodoByRemoveItem,
      };
    case types.GET_TODO:
      const Items = GetLocalStorage('toDo');
      return {
        ...state,
        toDo: Items,
      };
    default:
      return state;
  }
};

export default toDoReducer;
