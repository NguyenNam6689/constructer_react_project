import React, { useReducer, useState } from 'react';
import toDoReducer, { initState } from 'src/stores/reducer';
import './style.css';
import { addToDoAction, deleteToDoAction } from 'src/stores/action';

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
          <>
            <ul key={item.id}>
              <li>{item.task}</li>
              <li>{item.description}</li>
            </ul>
            <button>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default ToDoList;
