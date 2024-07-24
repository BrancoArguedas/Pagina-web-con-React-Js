import React, { useState } from "react";
import '../css/Navbar.css';
import logo from '../imagenes/logo.png';

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState('false');

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="navBar">
      <div className="navbar-logo">
        <img src={ logo } alt="Logo de la empresa" />
        <h2>Empresa</h2>
      </div>
      <div 
        className="menu"
        onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navegacion ${openMenu ? 'open' : ''}`.trimEnd()}>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Iniciar sesión</li>
        <li>Registrarse</li>
      </ul>
    </nav>
  );
}

export default NavBar;