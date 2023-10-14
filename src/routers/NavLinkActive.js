import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkActive = (props) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: 'red' } : {};
      }}
      {...props}
    />
  );
};

export default NavLinkActive;
