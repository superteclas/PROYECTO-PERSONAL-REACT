import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../img/logonormalsinfondo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {
              !isHome && (
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Inicio</NavLink>
                </li>
              )
            }
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">Sobre mí</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/multimedia" className="nav-link">Multimedia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
