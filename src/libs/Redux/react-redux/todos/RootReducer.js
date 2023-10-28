import React from 'react';
import { combineReducers } from 'redux';
import ToDoReducer from './Reducer';

const RootReducer = combineReducers({
  todoList: ToDoReducer,
});

export default RootReducer;
