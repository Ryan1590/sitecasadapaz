"use client";

import React, { useState, useEffect } from "react"; 
import Header from "../Header/page";
import Rodape from "../Footer/page";
import Swal from 'sweetalert2'; // Importando o SweetAlert2

interface BannerData {
  banner_principal: string | null;
  banner_principal_mobile: string | null;
  imagem_missao: string | null;
}

interface ComoAjudarData {
  titulo: string;
  descricao: string;
}

interface VagaData {
  id: number;
  vaga: string;
  necessidade: string;
  created_at: string;
  updated_at: string;
}

const ComoAjudar = () => {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [comoAjudar, setComoAjudar] = useState<ComoAjudarData[]>([]);
  const [vagas, setVagas] = useState<VagaData[]>([]);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [vagaSelecionada, setVagaSelecionada] = useState<number | null>(null);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    fetch("http://localhost:8001/api/banners/comoajudar")
      .then(response => response.json())
      .then(data => setBanner(data))
      .catch(error => console.error("Erro ao buscar banner:", error));
  }, []);

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

  const handleCandidatura = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Buscar o CSRF token da nova rota
      const csrfResponse = await fetch("http://localhost:8001/api/csrf-token", {
        method: "GET",
        credentials: "include",
      });

      if (!csrfResponse.ok) {
        throw new Error(`Erro ao buscar CSRF token: ${csrfResponse.statusText}`);
      }

      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrf_token;

      if (!csrfToken) {
        console.error("CSRF Token não encontrado!");
        return;
      }

      // Enviar a candidatura com o CSRF token
      const response = await fetch("http://localhost:8001/api/candidatar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nome,
          email,
          vaga: vagaSelecionada, // Continuamos enviando o ID da vaga
          status: "pendente"
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar candidatura: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);

      // Exibir a mensagem de sucesso com SweetAlert
      if (result.message) {
        Swal.fire({
          title: 'Pronto!',
          text: result.message, // Exibe a mensagem de sucesso retornada pela API
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }

      setModalShow(false);
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
    }
  };


  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="text-center banner-container fade-in" style={{ marginTop: '40px' }}>
        {banner?.banner_principal && screenWidth >= 768 ? (
          <img
            src={`http://localhost:8000/storage/${banner.banner_principal}`}
            alt="Banner Principal"
            className="img-fluid banner-image"
            style={{
              width: '100%',
              height: '472px',
              objectFit: 'cover',
            }}
          />
        ) : (
          banner?.banner_principal_mobile && (
            <img
              src={`http://localhost:8000/storage/${banner.banner_principal_mobile}`}
              alt="Banner Principal Mobile"
              className="img-fluid banner-image"
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
              }}
            />
          )
        )}
      </div>

      
      <main className="container py-5">
        
        <h1 className="text-center mb-5 display-4 text-primary fw-bold mt-5">Como Ajudar</h1>

        {/* Renderizando os dados da API ComoAjudar */}
        {comoAjudar.length > 0 ? (
          comoAjudar.map((item, index) => (
            <section key={index} className="mb-5 p-4 border rounded shadow-sm bg-light">
              <h2 className="text-primary font-serif text-2xl">{item.titulo}</h2>
              <p className="text-wrap text-break font-light text-lg">{item.descricao}</p> {/* Garantindo que o texto se ajuste e quebras de palavra aconteçam se necessário */}
            </section>
          ))
        ) : (
          <p className="text-center text-muted">Carregando informações...</p>
        )}

        {/* Seção de Doações */}
        <section className="mb-5 text-center bg-light p-4 rounded shadow-sm border border-light">
          <h2 className="text-success mb-3 font-serif text-2xl">Faça uma Doação</h2>
          <p className="lead mb-4">Contribua com nossa missão e ajude a transformar vidas.</p>
          <a href="/pages/Doacao" className="btn btn-lg btn-success text-white">Clique aqui para doar</a>
        </section>

        {/* Renderizando as Vagas */}
        <section className="mb-5">
          <div className="text-center mt-4">
              <h2 className="text-primary text-2xl font-semibold">Vagas Disponíveis</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
          </div>

          {vagas.length > 0 ? (
            <div className="row g-4">
              {vagas.map((vaga, index) => (
                <div key={index} className="col-12 col-md-4"> {/* Garantindo que a coluna seja responsiva */}
                  <div className="card p-4 border rounded shadow-sm h-100">
                    <h3 className="card-title text-black font-serif text-2xl">{vaga.vaga}</h3>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-lg btn-primary w-100"
                        onClick={() => {
                          setVagaSelecionada(vaga.id);
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
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content rounded-3 shadow-lg">
                <div className="modal-header position-relative border-bottom-0">
                  {/* Exibindo o nome da vaga no modal */}
                  <h5 className="modal-title text-primary text-center font-serif text-2x3">
                     Candidatar-se à vaga de - {vagas.find((vaga) => vaga.id === vagaSelecionada)?.vaga}
                  </h5>
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
                    <div className="form-group mb-4">
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
                    <div className="form-group mb-4">
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
                    <div className="d-flex justify-content-center mt-4">
                      <button type="submit" className="btn btn-lg btn-success w-75">
                        Enviar Candidatura
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="mb-5">
          <h2 className="text-primary font-serif text-2xl">Como você pode ajudar?</h2>
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
