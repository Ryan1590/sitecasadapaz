"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../Estilo/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-white p-3">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <nav className="container">
        <div className="menu-wrapper">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`nav justify-content-center ${isMenuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/">INÍCIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Sobre">SOBRE NÓS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/ComoAjudar">COMO AJUDAR</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Doacao">DOAÇÕES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Galeria">GALERIA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Bazar">BAZAR</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Premios">PRÊMIOS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-padrao text-dark fw-bold mr-4" href="/pages/Contato">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
