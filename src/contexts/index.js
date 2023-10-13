import React, { createContext, useState } from 'react';

export const namContext = createContext();
const NamProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const handleChangeDecrement = () => {
    return setCount(count - 1);
  };
  const handleChangeIncrement = () => {
    return setCount(count + 1);
  };
  if (count < 0) {
    setCount(0);
  }
  const data = {
    count,
    setCount,
    handleChangeDecrement,
    handleChangeIncrement,
  };

  return <namContext.Provider value={data}>{children}</namContext.Provider>;
};

export default NamProvider;
