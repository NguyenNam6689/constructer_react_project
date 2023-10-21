import React, { useEffect, useRef, useState } from 'react';

const AutoCount = () => {
  const [count, setCount] = useState(60);
  const timeIdRef = useRef();
  const prevCount = useRef();
  const elementRef = useRef();
  useEffect(() => {
    prevCount.current = count;
    console.info(prevCount.current);
  }, [count]);
  //Dùng để xác định toạ độ của thẻ h1
  useEffect(() => {
    const data = elementRef.current.getBoundingClientRect();
    console.info(data);
  }, [count]);
  const handleCounter = () => {
    timeIdRef.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
    console.info(timeIdRef.current, '--------1-----');
  };
  const handleStopCounter = () => {
    clearInterval(timeIdRef.current);
    console.info(timeIdRef.current, '--------2-----');
  };
  return (
    <>
      <h1 ref={elementRef}>{count}</h1>
      <button onClick={handleCounter}>Start</button>
      <button onClick={handleStopCounter}>Stop</button>
    </>
  );
};

export default AutoCount;
