import React from "react";
import logo from "../../assets/img/logo.png";
/*import "./header.css";*/
/*import { Link } from "react-router-dom";*/

function Header() {
  return (
    /*<!--<nav classNameName="Header">
      <Link to="/">
        <img classNameName="logo" src={logo} alt="flixthena logo" />
      </Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/prevencao">Prevenção</Link>
      <Link to="/diagnostico">Diagnóstico</Link>
      <Link to="/duvidas">Dúvidas Frequentes</Link>
    </nav>
  -->*/
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "var(--black)" }}
    >
      <a className="navbar-brand" href="/">
        <img src={logo} width="70" height="70" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="sobre">
            Sobre
          </a>
          <a className="nav-link" href="prevencao">
            Prevenção
          </a>
          <a className="nav-link" href="diagnostico">
            Diagnóstico
          </a>
          <a className="nav-link" href="duvidas">
            Dúvidas Frequentes
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Header;
