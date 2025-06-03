import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>Tienda de Artesanías</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
