
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logonormalsinfondo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
  <img
    src={logo}
    alt="Logo"
    className="navbar-logo"
  />
</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
             <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contacto</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
