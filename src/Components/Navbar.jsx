import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <img src="logo.png" alt="404-ERROR" />
      <h2 className="logo">ANI-VERSE</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/home" end activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/watch" activeclassname="active">
            Watch
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" activeclassname="active">
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeclassname="active">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
