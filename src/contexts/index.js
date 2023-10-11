import React, { createContext, useState } from 'react';

export const namContext = createContext();
const NamProvider = ({ childrent }) => {
  const [count, setCount] = useState();
  const data = {
    count,
    setCount,
    handleChangeDecerment,
    handleChangeIncrement,
  };
  const handleChangeDecerment = () => {
    setCount((count) => count - 1);
  };
  const handleChangeIncrement = () => {
    setCount((count) => count + 1);
  };
  return <namContext.Provider value={data}>{childrent}</namContext.Provider>;
};

export default NamProvider;
