import React, { useState } from 'react';

// CSS
import 'src/styles/input.css';

const InputTodo = () => {
  const [task, setTask] = useState('');
  return (
    <>
      <form class="TodoInput">
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </form>
    </>
  );
};

export default InputTodo;
