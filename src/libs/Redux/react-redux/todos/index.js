import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from 'src/components/Todo';
import InputTodo from 'src/components/input';
import useStoreTodo from 'src/hooks/useStoreTodo';

const TodoRedux = () => {
  const { todos } = useStoreTodo();
  return (
    <>
      <InputTodo />
      <TransitionGroup className="todos=list">
        {todos &&
          todos.map((todo) => {
            return (
              <Fragment key={todo.id}>
                <CSSTransition timeout={500}>
                  <Todo id={todo.id} task={todo.task} completed={todo.completed} />
                </CSSTransition>
              </Fragment>
            );
          })}
      </TransitionGroup>
    </>
  );
};

export default TodoRedux;
