import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addTodoError,
  addTodoPending,
  addTodoSuccess,
} from 'src/libs/Redux/react-redux/todos/Action';

// CSS
import 'src/styles/input.css';

const InputTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task === '') return alert('Please write your task 🙃');
    try {
      dispatch(addTodoPending());
      setTimeout(() => {
        dispatch(addTodoSuccess(task));
        alert('Add task successfully ');
      }, 2000);
    } catch (error) {
      dispatch(addTodoError(error));
    }
  };

  return (
    <>
      <form className="TodoInput" onSubmit={handleAddTodo}>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </form>
    </>
  );
};

export default InputTodo;
