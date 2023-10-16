import React, { useEffect, useReducer, useState } from 'react';
import toDoReducer, { initState } from 'src/stores/reducer';
import './style.css';
import { addToDoAction, deleteToDoAction, getToDoAction } from 'src/stores/action';

const ToDoList = () => {
  const [form, setForm] = useState({
    task: '',
    description: '',
  });
  const [state, dispatch] = useReducer(toDoReducer, initState);
  const handleAddToDo = (e) => {
    e.preventDefault();
    dispatch(addToDoAction(form));
    handleClearInput();
  };
  const handleDelete = (index) => {
    dispatch(deleteToDoAction(index));
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClearInput = () => {
    setForm({
      task: '',
      description: '',
    });
  };
  useEffect(() => {
    dispatch(getToDoAction(state));
  }, []);
  return (
    <div className="todo-wrapper">
      <form onSubmit={handleAddToDo} className="input-wrapper">
        <label className="label-title">Task</label>
        <input
          id="task"
          name="task"
          type="text"
          className="title"
          value={form.task}
          autoFocus={true}
          onChange={handleChange}
          placeholder="Please enter your task"
        />
        <label className="label-title">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          className="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Please enter your task"
        />
        <button className="btn-add">Add</button>
      </form>
      {state?.toDo.map((item) => {
        return (
          <div className="todo-item">
            <ul key={item.id}>
              <li>{item.task}</li>
              <li>{item.description}</li>
            </ul>
            <button className="btn-edit">Edit</button>
            <button onClick={() => handleDelete(item.id)} className="btn-remove">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
