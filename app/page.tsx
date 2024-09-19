"use client"; // Para indicar que é um Client Component

import Link from 'next/link';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const title = document.getElementById('title');
    
    if (title) {
      title.classList.add('animate-title');

      const timer = setTimeout(() => {
        title.classList.remove('animate-title');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="home-container d-flex flex-column min-vh-100 position-relative overflow-hidden">
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-white position-relative">
        <div className="absolute top-0 start-0 w-100 p-3">
          <nav className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Sobre">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/ComoAjudar">Como Ajudar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Doacao">Doações</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Galeria">Galeria</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Bazar">Bazar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Premios">Prêmios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-item-hover fw-bold" href="/pages/Contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>

        <h1 id="title" className="display-4 fw-bold fade-in">Casa da Paz</h1>
        <blockquote className="blockquote text-center">
          <p className="mb-0">“Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano seria menor.”</p>
          <br />
          <p className="blockquote-footer">Santa Teresa de Calcutá</p>
        </blockquote>

        <div className="mt-4">
          <Link href="/pages/Sobre">
            <button className="btn btn-light me-2 btn-hover">Conheça Casa da Paz</button>
          </Link>
          <Link href="/pages/Doacao">
            <button className="btn btn-outline-light btn-hover">Saiba como doar</button>
          </Link>
        </div>

        {/* Texto animado "Doar faz bem" */}
        <div className="floating-text">Doar faz bem</div>
      </main>

      <footer className="bg-dark text-center text-white p-3">
        <p>&copy; 2024 Casa da Paz. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
};

export default Home;
