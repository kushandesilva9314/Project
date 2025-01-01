import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Investments</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
