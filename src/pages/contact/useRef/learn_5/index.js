import React, { useRef, useState } from 'react';

const ExampleComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  // Sử dụng current để trỏ vào value trong cây DOM của thẻ input
  const handleChange = () => {
    setInputValue(inputRef.current.value);
    console.info(inputRef.current.value);
  };
  // Sử dụng để báo value lấy từ cây DOM của thẻ input
  const handleShowValue = () => {
    alert(`Giá trị nhập vào là ${inputRef.current.value}`);
  };
  return (
    <>
      {/* Sử dụng useRef để tham chiếu đến input */}
      <input type="text" ref={inputRef} value={inputValue} onChange={handleChange} />
      <button onClick={handleShowValue}>Show value</button>
    </>
  );
};

export default ExampleComponent;
