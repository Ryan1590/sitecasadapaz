"use client";

import React from 'react';
import Link from 'next/link';
import '../Estilo/header.css';

const Header = () => {
  return (
    
    <header className="bg-white text-white p-3">
      <nav className="container">
        <ul className="nav justify-content-center">
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
