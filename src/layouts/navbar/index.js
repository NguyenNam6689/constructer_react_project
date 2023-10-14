import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLinkActive from 'src/routers/NavLinkActive';

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLinkActive to="/">Home</NavLinkActive>
        </li>
        <li>
          <NavLinkActive to="/about">About</NavLinkActive>
        </li>
        <li>
          <NavLinkActive to="/contact">Contact</NavLinkActive>
        </li>
        <li>
          <NavLinkActive to="/login">Login</NavLinkActive>
        </li>
        <li>
          <NavLinkActive to="/register">Register</NavLinkActive>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
