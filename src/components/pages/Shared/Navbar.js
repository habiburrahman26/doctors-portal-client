import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const menuItems = (
    <>
      <li>
        <NavLink
          to={location.pathname === '/home' ? '/home' : '/'}
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appoinemnt"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Appoinemnt
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? 'bg-accent text-white' : '')}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl">Doctors portal</p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
