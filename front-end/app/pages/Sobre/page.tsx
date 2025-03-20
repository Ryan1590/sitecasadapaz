"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import "../Estilo/sobre.css";
import Rodape from "../Footer/page";

interface SobreData {
  sede: string;
  no_que_acreditamos: string;
  atividades: string;
  recursos: string;
  sobre: string;
  missao: string;
}

interface Imagens {
  banner_principal: string;
  banner_principal_mobile: string;
  imagem_missao: string;
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
  const [imagens, setImagens] = useState<Imagens | null>(null);
  const [equipe, setEquipe] = useState<MembroEquipe[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayCount, setDisplayCount] = useState(4); // Exibe até 4 membros
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchSobre = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/sobre");
        if (!response.ok) throw new Error("não houve uma boa resposta");
        const data: SobreData[] = await response.json();
        setSobre(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    const fetchImagens = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/banners/sobrenos");
        if (!response.ok) throw new Error("Erro ao buscar imagens");
        const data: Imagens = await response.json();
        setImagens(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    };

    fetchSobre();
    fetchImagens();
  }, []);

  useEffect(() => {
    const fetchEquipe = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/nossaequipe");
        if (!response.ok) throw new Error("Erro ao buscar a equipe");
        const data: MembroEquipe[] = await response.json();
        setEquipe(data);
      } catch (error) {
        console.error("Erro ao buscar a equipe:", error);
      }
    };

    fetchEquipe();
  }, []);

  const updateDisplayCount = () => {
    if (window.innerWidth < 768) {
      setDisplayCount(1);  // Exibe 1 membro em telas pequenas
    } else {
      setDisplayCount(4);  // Exibe até 4 membros em telas maiores
    }
  };

  useEffect(() => {
    updateDisplayCount();
    window.addEventListener("resize", updateDisplayCount);
    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  useEffect(() => {
    const updateBannerImage = () => {
      if (imagens) {
        const currentBanner = window.innerWidth < 768 
          ? imagens.banner_principal_mobile 
          : imagens.banner_principal;
        setBannerImage(currentBanner);
      }
    };

    updateBannerImage();
    window.addEventListener("resize", updateBannerImage);

    return () => window.removeEventListener("resize", updateBannerImage);
  }, [imagens]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % Math.ceil(equipe.length / displayCount)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + Math.ceil(equipe.length / displayCount)) % Math.ceil(equipe.length / displayCount)
    );
  };

  const startIndex = currentSlide * displayCount;
  const displayedMembers = equipe.slice(startIndex, startIndex + displayCount);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, displayCount, equipe.length]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="text-center banner-container fade-in" style={{ marginTop: '70px' }}>
        {bannerImage ? (
          <img
            src={`http://localhost:8000/storage/${bannerImage}`} // Usando o banner correto baseado na largura da tela
            alt="Banner da Casa da Paz"
            className="img-fluid banner-image"
            style={{ height: '250px', objectFit: 'cover' }}
          />
        ) : (
          <p>Carregando Banner...</p>
        )}
      </div>

      <main className="flex-grow-1 d-flex flex-column align-items-center text-dark mt-5">
        <div className="container">
          {/* Seção sobre a Casa da Paz */}
          <div className="row mb-5 fade-in">
            <div className="col-md-6">
              {imagens ? (
                <img
                  src={`http://localhost:8000/storage/${imagens.imagem_missao}`} // Usando a URL base e o caminho da imagem
                  alt="Imagem missão"
                  className="img-fluid mb-4 shadow missão-image"
                />
              ) : (
                <p>Carregando Imagem da Missão...</p>
              )}
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-bullseye text-primary mr-2"></i> Nossa Missão
                  </h2>
                  <p className="text-muted">{sobre[0]?.missao || "Carregando..."}</p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-heart text-primary mr-2"></i> Nossos Valores
                  </h2>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-hand-holding-heart"></i> Empatia</li>
                    <li><i className="fas fa-check-circle"></i> Respeito</li>
                    <li><i className="fas fa-shield-alt"></i> Transparência</li>
                    <li><i className="fas fa-users"></i> Colaboração</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="my-5">
            <div className="row fade-in">
              <div className="col-md-12">
                {/* Seção sobre a Casa da Paz */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-info-circle mr-2"></i> Sobre a Casa da Paz
                    </h3>
                    <p className="text-muted">{sobre[0]?.sobre || "Carregando..."}</p>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-clipboard-list mr-2"></i> No que acreditamos?
                    </h3>
                    <p className="text-muted">{sobre[0]?.no_que_acreditamos || "Carregando..."}</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-school mr-2"></i> Onde e como as atividades acontecem?
                    </h3>
                    <p className="text-muted">{sobre[0]?.atividades || "Carregando..."}</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-dollar-sign mr-2"></i> De onde vêm os recursos?
                    </h3>
                    <p className="text-muted">{sobre[0]?.recursos || "Carregando..."}</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-building mr-2"></i> Sede própria!
                    </h3>
                    <p className="text-muted">{sobre[0]?.sede || "Carregando..."}</p>
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

            <div className="team-members">
              {displayedMembers.map((membro) => (
                <div key={membro.id} className="member-card mb-4 mx-2">
                  <div className="card" style={{ width: "13rem" }}>
                    <div className="member-image-container">
                      <img 
                        src={`${"http://localhost:8000/storage"}/${membro?.foto}`} // Concatenando a URL
                        className="card-img-top" 
                        alt={membro.nome} 
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title text-primary">{membro.nome}</h5>
                      <p className="card-text">{membro.cargo}</p>
                      <p className="card-text text-muted">{membro.profissao}</p>
                    </div>
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
