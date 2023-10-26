import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoError, addTodoPending, addTodoSuccess } from './Action';

const TestReduce = () => {
  const dispatch = useDispatch();
  const handleAddToDo = () => {
    dispatch(addTodoPending());
    try {
      setTimeout(() => {
        dispatch(addTodoSuccess());
      }, 2000);
    } catch (error) {
      dispatch(addTodoError(error));
    }
  };
  return (
    <>
      <button onClick={handleAddToDo}>Add Item</button>
    </>
  );
};

export default TestReduce;
