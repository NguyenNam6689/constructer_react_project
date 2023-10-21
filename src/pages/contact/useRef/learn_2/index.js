import React, { useEffect, useRef, useState } from 'react';

const Increase = () => {
  const [increase, setIncrease] = useState(0);
  const increaseRef = useRef();
  const handleIncrease = () => {
    setIncrease((pre) => pre + 1);
  };
  // Nó có lưu lại giá trị nhưng ko re-render lại để hiển thị
  useEffect(() => {
    increaseRef.current = increase;
    console.info(increaseRef.current);
  }, [increase]);
  return (
    <>
      <h3>{increase}</h3>
      <h3>{increaseRef.current}</h3>
      <button onClick={handleIncrease}>Click Here</button>
    </>
  );
};

export default Increase;
