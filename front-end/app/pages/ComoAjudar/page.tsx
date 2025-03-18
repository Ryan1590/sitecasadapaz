"use client";

import React, { useState, useEffect } from "react";
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
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [vagaSelecionada, setVagaSelecionada] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

  // Função para enviar candidatura
  const handleCandidatura = async (e: React.FormEvent) => {
    e.preventDefault();

    // Buscar CSRF token do meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    if (!csrfToken) {
      console.error("CSRF Token não encontrado!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8001/api/candidatar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,  // Incluindo o CSRF token
        },
        body: JSON.stringify({
          nome,
          email,
          vaga: vagaSelecionada,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar candidatura: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      // Aqui você pode fazer alguma ação em caso de sucesso, como exibir uma mensagem
      setModalShow(false); // Fechar o modal após envio
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
      // Exibir mensagem de erro, se necessário
    }
  };

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
        <section className="mb-5 text-center bg-light p-4 rounded shadow-sm border border-light">
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
                  <div className="card p-3 border rounded shadow-sm h-100">
                    <h3 className="card-title text-primary">{vaga.vaga}</h3>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-lg btn-primary w-100"
                        onClick={() => {
                          setVagaSelecionada(vaga.vaga);
                          setModalShow(true);
                        }}
                      >
                        Se Candidatar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">Sem vagas no momento...</p>
          )}
        </section>

        {/* Modal de Candidatura */}
        {modalShow && (
          <div className="modal show" style={{ display: "block" }} onClick={() => setModalShow(false)}>
            <div className="modal-dialog modal-dialog-centered modal-sm" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content rounded-3 shadow-lg">
                <div className="modal-header position-relative border-bottom-0">
                  <h5 className="modal-title text-primary">Candidatar-se para {vagaSelecionada}</h5>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0"
                    onClick={() => setModalShow(false)}
                    aria-label="Fechar"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleCandidatura}>
                    <div className="form-group mb-3">
                      <label htmlFor="nome" className="form-label">Nome Completo</label>
                      <input
                        type="text"
                        id="nome"
                        className="form-control form-control-lg"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="form-label">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <button type="submit" className="btn btn-lg btn-success w-100 mt-3">
                      Enviar Candidatura
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

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
