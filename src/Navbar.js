import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/Login" className="nav-link">Login</Link>
      <Link to="/Register" className="nav-link">Registro</Link>
    </nav>
  );
};

export default Navbar;