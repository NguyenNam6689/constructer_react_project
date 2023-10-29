import React from 'react';
import { useSelector } from 'react-redux';

const useStoreTodo = () => {
  const state = useSelector((state) => state.todoList);
  return state;
};

export default useStoreTodo;
