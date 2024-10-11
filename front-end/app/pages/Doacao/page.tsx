"use client";

import Header from '../Header/page';
import Rodape from '../Rodape/page';
import '../Estilo/doacao.css';
import { FaHeart, FaPiggyBank, FaUserGraduate } from 'react-icons/fa';
import { useState } from 'react';

const Doacao = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container-background d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-5 text-dark text-center" style={{ overflow: 'hidden' }}> 
        <h1  className="container my-5 text-dark text-center" style={{ maxWidth: '100%' }}>Faça a Diferença Hoje</h1>
        <p className="main-quote lead mb-5" style={{ color: 'black' }}>“Deve-se doar com a alma livre, simples, apenas por amor, espontaneamente!” – Martinho Lutero</p>


        <div className="donation-card shadow-lg border-0 p-4 animate__animated animate__fadeInUp">
          <div className="card-body">
            <h2 className="text-center mb-4"><FaHeart className="icon-pulse" color="yellow" size={30} /> Como você pode ajudar</h2>
            <p className="text-center mb-5">A sua contribuição nos ajuda a transformar vidas. Escolha uma das opções abaixo e faça parte dessa missão.</p>

            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mb-4">
              <div className="text-center mx-3">
                <FaPiggyBank color="white" size={50} className="mb-3 icon-rotate" />
                <h5 className="mb-2">Dados Bancários</h5>
                <p className="m-0">Banco: SICOOB (756)</p>
                <p className="m-0">Agência: 4379</p>
                <p className="m-0">Conta Corrente: 4586-1</p>
                <p className="m-0">CNPJ: 05.509.404/0001-29</p>
                <p className="m-0">Titular: Associação Casa da Paz</p>
              </div>
              <div className="text-center mx-3">
                <FaHeart color="lightgreen" size={50} className="mb-3 icon-pulse" />
                <h5 className="mb-2">PIX</h5>
                <p className="m-0">Chave PIX: 05.509.404/0001-29</p>
              </div>
              <div className="text-center mx-3">
                <FaUserGraduate color="lightblue" size={50} className="mb-3 icon-rotate" />
                <h5 className="mb-2">Adote um Aluno</h5>
                <p className="m-0">
                  Apoie diretamente um estudante. Entre em contato para saber mais sobre o programa.
                </p>
              </div>
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-primary-custom btn-lg mx-2 shadow-lg">Doar Agora</button>
              <button className="btn btn-secondary-custom btn-lg mx-2 shadow-lg">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Doacao;
