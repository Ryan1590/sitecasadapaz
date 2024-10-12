"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import "../Estilo/sobre.css";
import Rodape from "../Rodape/page";

interface SobreData {
  sede: string;
  no_que_acreditamos: string;
  atividades: string;
  recursos: string;
  sobre: string;
  imagem_missao?: string;
  banner_principal: string;
  missao: string;
}

interface MembroEquipe {
  id: number;
  nome: string;
  cargo: string;
  profissao: string;
  foto: string;
}

const Sobre = () => {
  const [sobre, setSobre] = useState<SobreData[]>([]);
  const [equipe, setEquipe] = useState<MembroEquipe[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSobre = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/sobre");
        if (!response.ok) throw new Error("não houve uma boa resposta");
        const data: SobreData[] = await response.json();
        setSobre(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchSobre();
  }, []);

  useEffect(() => {
    const fetchEquipe = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/nossaequipe");
        if (!response.ok) throw new Error("Erro ao buscar a equipe");
        const data: MembroEquipe[] = await response.json();
        setEquipe(data);
      } catch (error) {
        console.error("Erro ao buscar a equipe:", error);
      }
    };

    fetchEquipe();
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(equipe.length / 4)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + Math.ceil(equipe.length / 4)) %
        Math.ceil(equipe.length / 4)
    );
  };

  const startIndex = currentSlide * 4;
  const displayedMembers = equipe.slice(startIndex, startIndex + 4);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [equipe.length]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Banner */}
      <div className="text-center banner-container">
        <img
          src={`data:image/jpeg;base64,${
            sobre[0]?.banner_principal || "Carregando..."
          }`}
          alt="Banner da Casa da Paz"
          className="img-fluid"
        />
      </div>

      <main className="flex-grow-1 d-flex flex-column align-items-center text-dark mt-5">
        <div className="container">
          {/* Seção sobre a Casa da Paz */}
          <div className="row mb-5">
            <div className="col-md-6">
              <img
                src={`data:image/jpeg;base64,${
                  sobre[0]?.imagem_missao || "Carregando..."
                }`}
                alt="Descrição da imagem"
                className="img-fluid rounded-circle mb-4 shadow"
              />
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-bullseye text-primary mr-2"></i> Nossa
                    Missão
                  </h2>
                  <p className="text-muted">
                    {sobre[0]?.missao || "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-heart text-primary mr-2"></i> Nossos
                    Valores
                  </h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fas fa-hand-holding-heart"></i> Empatia
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Respeito
                    </li>
                    <li>
                      <i className="fas fa-shield-alt"></i> Transparência
                    </li>
                    <li>
                      <i className="fas fa-users"></i> Colaboração
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-info-circle mr-2"></i> Sobre a Casa
                      da Paz
                    </h3>
                    <p className="text-muted">
                      {sobre[0]?.sobre || "Carregando..."}
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-clipboard-list mr-2"></i> No que
                      acreditamos?
                    </h3>
                    <p className="text-muted">
                      {sobre[0]?.no_que_acreditamos || "Carregando..."}
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-school mr-2"></i> Onde e como as
                      atividades acontecem?
                    </h3>
                    <p className="text-muted">
                      {sobre[0]?.atividades || "Carregando..."}
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-dollar-sign mr-2"></i> De onde vêm os
                      recursos?
                    </h3>
                    <p className="text-muted">
                      {sobre[0]?.recursos || "Carregando..."}
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-building mr-2"></i> Sede própria!
                    </h3>
                    <p className="text-muted">
                      {sobre[0]?.sede || "Carregando..."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção da Diretoria */}
          <h2 className="text-center mb-4">Diretoria</h2>
          <div className="team-slider d-flex justify-content-center align-items-center">
            <button onClick={prevSlide} className="slider-button">
              &lt;
            </button>

            <div className="team-members d-flex justify-content-center">
              {displayedMembers.map((membro, index) => (
                <div
                  key={membro.id}
                  className={`car-control mb-4 shadow-sm border-light member-card ${
                    index > 0 ? "d-none d-md-block" : ""
                  }`}
                >
                  <div className="member-image-container">
                    <img
                      src={membro.foto}
                      className="card-img-top"
                      alt={membro.nome}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-primary">{membro.nome}</h5>
                    <p className="card-text">{membro.cargo}</p>
                    <p className="card-text text-muted">{membro.profissao}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={nextSlide} className="slider-button">
              &gt;
            </button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default Sobre;
