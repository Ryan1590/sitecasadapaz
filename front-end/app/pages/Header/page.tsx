"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../Estilo/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref para o botão

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Evita que o clique no botão dispare o handleClickOutside
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Verifica se o clique foi fora do menu e fora do botão
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white text-white p-3">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <nav className="container">
        <div className="menu-wrapper">
          <button ref={buttonRef} className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul ref={menuRef} className={`nav justify-content-center ${isMenuOpen ? 'show' : ''}`}>
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
