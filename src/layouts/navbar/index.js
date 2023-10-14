import React from 'react';
import NavLinkActive from 'src/routers/NavLinkActive';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-wrapper__menu">
        <li className="navbar-wrapper__menu__item">
          <NavLinkActive className="navbar-wrapper__menu__item__link" to="/">
            Home
          </NavLinkActive>
        </li>
        <li className="navbar-wrapper__menu__item">
          <NavLinkActive className="navbar-wrapper__menu__item__link" to="/about">
            About
          </NavLinkActive>
        </li>
        <li className="navbar-wrapper__menu__item">
          <NavLinkActive className="navbar-wrapper__menu__item__link" to="/contact">
            Contact
          </NavLinkActive>
        </li>
        <li className="navbar-wrapper__menu__item">
          <NavLinkActive className="navbar-wrapper__menu__item__link" to="/login">
            Login
          </NavLinkActive>
        </li>
        <li className="navbar-wrapper__menu__item">
          <NavLinkActive className="navbar-wrapper__menu__item__link" to="/register">
            Register
          </NavLinkActive>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
