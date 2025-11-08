import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
        background: "linear-gradient(90deg, #0b005dff, #005bb5)",
        padding: "12px 25px",
      }}
    >
      <div className="container-fluid">

        {/* Título o Logo */}
        <NavLink
          to="/"
          className="navbar-brand fw-bold text-white"
          style={{ fontSize: "22px", letterSpacing: "1px" }}
        >
          Mi Aplicación
        </NavLink>

        {/* Botón de menú responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-3">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white fw-semibold px-3 py-2 rounded-pill"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#00aaff" : "transparent",
                  transition: "0.3s",
                })}
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/participantes"
                className="nav-link text-white fw-semibold px-3 py-2 rounded-pill"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#00aaff" : "transparent",
                  transition: "0.3s",
                })}
              >
                Participantes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/registro"
                className="nav-link text-white fw-semibold px-3 py-2 rounded-pill"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#00aaff" : "transparent",
                  transition: "0.3s",
                })}
              >
                Formulario
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
