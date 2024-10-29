"use client";
import Link from 'next/link';

const Home = () => {


  return (
    <div className="home-container d-flex flex-column min-vh-100 position-relative overflow-hidden">
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-white position-relative">
        <div className="absolute top-0 start-0 w-100 p-3">
          <nav className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white nav-item-hover fw-bold">
                  INÍCIO
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Sobre" className="nav-link text-white nav-item-hover fw-bold">
                  SOBRE NÓS
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/ComoAjudar" className="nav-link text-white nav-item-hover fw-bold">
                  COMO AJUDAR
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Doacao" className="nav-link text-white nav-item-hover fw-bold">
                  DOAÇÕES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Galeria" className="nav-link text-white nav-item-hover fw-bold">
                  GALERIA
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Bazar" className="nav-link text-white nav-item-hover fw-bold">
                  BAZAR
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Premios" className="nav-link text-white nav-item-hover fw-bold">
                  PRÊMIOS
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/Contato" className="nav-link text-white nav-item-hover fw-bold">
                  CONTATO
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <h1 id="title" className="display-4 fw-bold fade-in">Casa da Paz</h1>
        <blockquote className="blockquote text-center fw-bold">
          <p className="mb-0" id='subtitulo'>“Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano seria menor.”</p>
          <br />
          <p className="blockquote-footer text-white">Santa Teresa de Calcutá</p>
        </blockquote>

        <div className="mt-4">
          <Link href="/pages/Sobre">
            <button className="btn btn-outline-light me-2 btn-hover fw-bold">Conheça Casa da Paz</button>
          </Link>
          <Link href="/pages/Doacao">
            <button className="btn btn-outline-light btn-hover fw-bold">Saiba como doar</button>
          </Link>
        </div>

        <div className="floating-text">Doar faz bem</div>
      </main>
    </div>
  );
};

export default Home;
