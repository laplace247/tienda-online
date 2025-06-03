import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header-nav">
      <h1 className="header-title">Tienda de Artesanías</h1>
      <ul className="header-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Header;