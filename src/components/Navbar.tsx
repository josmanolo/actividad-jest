import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/product/1">Producto de Ejemplo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
