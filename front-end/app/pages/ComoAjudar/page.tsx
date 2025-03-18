"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import Rodape from "../Footer/page";

interface ComoAjudarData {
  titulo: string;
  descricao: string;
}

interface VagaData {
  vaga: string;
}

const ComoAjudar = () => {
  const [comoAjudar, setComoAjudar] = useState<ComoAjudarData[]>([]);
  const [vagas, setVagas] = useState<VagaData[]>([]);

  // Fetch para a API ComoAjudar
  useEffect(() => {
    const fetchComoAjudar = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/ComoAjudar");
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data: ComoAjudarData[] = await response.json();
        setComoAjudar(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchComoAjudar();
  }, []);

  // Fetch para a API Vagas
  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/vagas");
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados de vagas: ${response.statusText}`);
        }
        const data: VagaData[] = await response.json();
        setVagas(data);
      } catch (error) {
        console.error("Erro ao buscar dados de vagas:", error);
      }
    };

    fetchVagas();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-5">
        <h1 className="text-center mb-5 display-4 text-primary font-weight-bold">Como Ajudar</h1>

        {/* Renderizando os dados da API ComoAjudar */}
        {comoAjudar.length > 0 ? (
          comoAjudar.map((item, index) => (
            <section key={index} className="mb-5 p-4 border rounded shadow-sm bg-light">
              <h2 className="text-primary">{item.titulo}</h2>
              <p>{item.descricao}</p>
            </section>
          ))
        ) : (
          <p className="text-center text-muted">Carregando informações...</p>
        )}

        {/* Seção de Doações */}
        <section className="mb-5 text-center bg-light p-4 rounded shadow-sm">
          <h2 className="text-success mb-3">Faça uma Doação</h2>
          <p className="lead mb-4">Contribua com nossa missão e ajude a transformar vidas.</p>
          <a href="/pages/Doacao" className="btn btn-lg btn-success text-white">Clique aqui para doar</a>
        </section>

        {/* Renderizando as Vagas */}
        <section className="mb-5">
          <h2 className="text-primary mt-4">Vagas Disponíveis</h2>
          {vagas.length > 0 ? (
            <div className="row">
              {vagas.map((vaga, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card p-3 border rounded shadow-sm">
                    <h3 className="card-title text-primary">{vaga.vaga}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">Carregando vagas...</p>
          )}
        </section>

        <section className="mb-5">
          <h2 className="text-primary">Como você pode ajudar?</h2>
          <p className="lead">
            Se interessou? Entre em contato conosco pelos nossos canais disponíveis no menu{" "}
            <a href="/pages/Contato" className="text-decoration-none font-weight-bold">
              <strong>Contato</strong>
            </a>
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default ComoAjudar;
