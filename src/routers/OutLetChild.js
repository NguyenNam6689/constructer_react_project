import React from 'react';
import { Outlet } from 'react-router-dom';

const OutletChild = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default OutletChild;
