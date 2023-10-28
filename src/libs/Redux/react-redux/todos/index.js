import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import InputTodo from 'src/components/input';

const TodoRedux = () => {
  return (
    <>
      <InputTodo />
      <TransitionGroup className="todo=list"></TransitionGroup>
    </>
  );
};

export default TodoRedux;
