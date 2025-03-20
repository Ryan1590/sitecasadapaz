"use client";
import Header from './pages/Header/page';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript do Bootstrap (inclui Popper.js)
import Link from "next/link";
import Footer from './pages/Footer/page';

const Home = () => {
  return (
    <div className="home-container d-flex flex-column min-vh-100">
      <Header />
      {/* Conteúdo Principal */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center text-white text-center py-5  min-vh-100">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-shadow">Casa da Paz</h1>
          
          <br/>
          <blockquote className="blockquote text-center fw-bold mt-4 text-shadow">
            <p className="mb-0">
              “Sei que meu trabalho é uma gota no oceano, mas sem ele, o oceano seria menor.”
            </p>
            <footer className="blockquote-footer text-white mt-3">Santa Teresa de Calcutá <hr /></footer>
          </blockquote>

          {/* Botões */}
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <Link href="/pages/Sobre">
              <button className="btn btn-outline-light fw-bold px-4 py-2 btn-success pulse-button">
                Conheça Casa da Paz
              </button>
            </Link>
            <Link href="/pages/Doacao">
              <button className="btn btn-outline-light fw-bold px-4 py-2 btn-success pulse-button">
                Saiba como doar
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
