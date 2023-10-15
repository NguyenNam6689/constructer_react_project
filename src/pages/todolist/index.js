import React, { useReducer, useState } from 'react';
import toDoReducer, { initState } from 'src/stores/reducer';
import './style.css';

const ToDoList = () => {
  const [form, setForm] = useState({
    task: '',
    description: '',
  });
  const [state, dispatch] = useReducer(toDoReducer, initState);

  return (
    <div className="todo-wrapper">
      <form className="input-wrapper">
        <label className="label-title">Task</label>
        <input
          id="task"
          name="task"
          type="text"
          className="title"
          value={form.task}
          placeholder="Please enter your task"
        />
        <label className="label-title">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          className="description"
          value={form.description}
          placeholder="Please enter your task"
        />
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
