import * as types from './ActionType';
import { v4 as uuid } from 'uuid';

const initState = {
  todo: [
    {
      id: uuid(),
      task: 'Lesson 1',
      complete: false,
    },
    {
      id: uuid(),
      task: 'Lesson 2',
      complete: false,
    },
    {
      id: uuid(),
      task: 'Lesson 3',
      complete: true,
    },
    {
      id: uuid(),
      task: 'Lesson 4',
      complete: true,
    },
  ],
};

const toDoReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case types.ADD_TODO_PENDING:
      return state;
    case types.ADD_TODO_SUCCESS:
      return state;
    case types.ADD_TODO_ERROR:
      return state;
    default:
      return state;
  }
};
export default toDoReducer;
