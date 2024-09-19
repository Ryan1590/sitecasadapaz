"use client"; // Para indicar que é um Client Component

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPage, setNextPage] = useState<string>(''); // Defina o tipo de nextPage como string

  const handleNavigation = (page: string) => { // Adicione o tipo para o parâmetro
    setIsAnimating(true);
    setNextPage(page);
    
    setTimeout(() => {
      window.location.href = page; // Redireciona após 2 segundos
    }, 2000);
  };

  return (
    <div className="home-container d-flex flex-column min-vh-100 position-relative overflow-hidden">
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-white position-relative">
        <div className="absolute top-0 start-0 w-100 p-3">
          <nav className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
                >
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Sobre"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Sobre'); }}
                >
                  Sobre Nós
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/ComoAjudar"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/ComoAjudar'); }}
                >
                  Como Ajudar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Doacao"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Doacao'); }}
                >
                  Doações
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Galeria"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Galeria'); }}
                >
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Bazar"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Bazar'); }}
                >
                  Bazar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Premios"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Premios'); }}
                >
                  Prêmios
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white nav-item-hover fw-bold"
                  href="/pages/Contato"
                  onClick={(e) => { e.preventDefault(); handleNavigation('/pages/Contato'); }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {isAnimating && (
          <div className="animation-container">
            <div className="bike-animation">🏍️</div>
          </div>
        )}

        <h1 id="title" className="display-4 fw-bold fade-in">Casa da Paz</h1>
        <blockquote className="blockquote text-center">
          <p className="mb-0">“Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano seria menor.”</p>
          <br />
          <p className="blockquote-footer">Santa Teresa de Calcutá</p>
        </blockquote>

        <div className="mt-4">
          <Link href="/pages/Sobre">
            <button className="btn btn-outline-light me-2 btn-hover">Conheça Casa da Paz</button>
          </Link>
          <Link href="/pages/Doacao">
            <button className="btn btn-outline-light btn-hover">Saiba como doar</button>
          </Link>
        </div>

        <div className="floating-text">Doar faz bem</div>
      </main>

      <footer className="bg-dark text-center text-white p-3">
        <p>&copy; 2024 Casa da Paz. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
