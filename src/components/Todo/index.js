import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Todo = ({ id, task, completed }) => {
  return (
    <>
      <CSSTransition key="editing" timeout={500} classNames="form">
        <li className="Todo-task">{task}</li>
      </CSSTransition>
    </>
  );
};

export default Todo;
