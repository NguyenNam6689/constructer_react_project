import React from 'react';
import * as types from './ActionType';
import { data } from 'src/data/ProductDummy';

const initState = {
  loading: false,
  todos: data,
  error: false,
};
const ToDoReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TODO_PENDING:
    case types.REMOVE_TODO_PENDING:
    case types.EDIT_TODO_PENDING:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.EDIT_TODO_ERROR:
    case types.ADD_TODO_ERROR:
    case types.REMOVE_TODO_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ToDoReducer;
