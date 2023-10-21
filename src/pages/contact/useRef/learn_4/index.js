import React, { useRef, useState } from 'react';

const ChangeSizeInput = () => {
  const [name, setName] = useState('');
  const sizeRef = useRef();
  // Lấy thuộc tính style trong thẻ input bằng useRef
  const handleChangeSize = () => {
    sizeRef.current.style.width = '400px';
  };
  return (
    <>
      <input
        type="text"
        ref={sizeRef}
        value={name}
        style={{ width: '200px' }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleChangeSize}>Change Size Box</button>
    </>
  );
};

export default ChangeSizeInput;
