import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

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
