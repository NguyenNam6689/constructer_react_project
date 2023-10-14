import React from 'react';
import { Outlet } from 'react-router-dom';

const OutLetChild = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default OutLetChild;
