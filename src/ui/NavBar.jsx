import React from "react";
import { NavLink } from "react-router-dom";

// Corregir los estilos y modificar las etiquetas "NavLink" por los componentes NavLink
// que provee react-router-dom
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to='/login' className="nav-link">Inicio Sesión</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to='/registro' className="nav-link ">Registro</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
