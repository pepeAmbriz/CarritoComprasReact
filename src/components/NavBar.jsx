import React from "react";
import "./Nav.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="Tienda">Tienda</li>
      </ul>
      <ul>
        <li>Categorias</li>
        <li>Mi Carrito</li>
        <li>Mi Cuenta</li>
      </ul>
    </nav>
  );
};

export default NavBar;
