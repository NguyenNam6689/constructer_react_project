import React, { useEffect, useRef, useState } from 'react';

const InputFocus = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  // Nếu ô input có dữ liệu thì sẽ xoá, còn không có dữ liệu thì sẽ chuyển về "Tôi là Nam dev"
  const handleResetInput = () => {
    setName('');
    inputRef.current.focus();
    inputRef.current.value = 'Tôi là Nam dev';
  };
  // Tự động focus khi render lại trang
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  console.info(inputRef);
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        autoComplete="off"
        placeholder="Nhập vào đây"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleResetInput}>Reset Input</button>
    </>
  );
};

export default InputFocus;
