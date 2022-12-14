import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menubar = () => {
  const menubar = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink to="/feature">Features</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-white sticky top-0 left-0">
      <div className="w-full lg:w-[90%] mx-auto navbar">
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
              {menubar}
            </ul>
          </div>
          <Link
            to="/"
            className="text-lg lg:text-2xl font-semibold text-secondary"
          >
            React Formik
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menubar}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="user" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
