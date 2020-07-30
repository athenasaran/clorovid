import React from "react";
import logo from "../../assets/img/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="logo" src={logo} alt="flixthena logo" />
      </Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/prevencao">Prevenção</Link>
      <Link to="/diagnostico">Diagnóstico</Link>
      <Link to="/duvidas">Dúvidas Frequentes</Link>
    </nav>
  );
}
export default Header;
