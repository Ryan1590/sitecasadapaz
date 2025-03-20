"use client";
import Header from './pages/Header/page';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript do Bootstrap (inclui Popper.js)
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-container d-flex flex-column min-vh-100">
      <Header />
      {/* Conteúdo Principal */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center text-white text-center py-5 mt-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-shadow">Casa da Paz</h1>
          <blockquote className="blockquote text-center fw-bold mt-4 text-shadow">
            <p className="mb-0">
              “Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano seria menor.”
            </p>
            <footer className="blockquote-footer text-white mt-3">Santa Teresa de Calcutá</footer>
          </blockquote>

          {/* Botões */}
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <Link href="/pages/Sobre">
              <button className="btn btn-outline-light fw-bold px-4 py-2 btn-custom">Conheça Casa da Paz</button>
            </Link>
            <Link href="/pages/Doacao">
              <button className="btn btn-outline-light fw-bold px-4 py-2 btn-custom">Saiba como doar</button>
            </Link>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-black text-white py-4">
        <div className="container text-center">
          <p className="mb-0">© 2025 Casa da Paz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

