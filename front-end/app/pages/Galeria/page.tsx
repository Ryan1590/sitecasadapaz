"use client";

import Header from '../Header/page';
import Footer from '../Footer/page';
import '../Estilo/galeria.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import Link from 'next/link';

// Interfaces para os dados que vamos buscar do backend
interface GaleriaData {
  id: number;
  tipo: string;
  arquivo: string;
  evento?: {
    titulo: string;
    descricao: string;
    data: string;
  };
}

interface BannerData {
  banner_principal: string;
  banner_principal_mobile: string;
}

const Galeria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [galeriasSemEvento, setGaleriasSemEvento] = useState<GaleriaData[]>([]);
  const [eventos, setEventos] = useState<{ titulo: string; imagens: GaleriaData[] }[]>([]);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  // Função para abrir o modal de visualização de imagem
  const openModal = (imagem: string) => {
    setSelectedImage(imagem);
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Busca galerias e eventos do backend
  useEffect(() => {
    const fetchGalerias = async () => {
      try {
        const url = `http://localhost:8001/api/eventos/galerias`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro ao buscar galerias");
        }

        const data: GaleriaData[] = await response.json();

        // Separar galerias sem evento
        const semEvento = data.filter((galeria) => !galeria.evento);

        // Agrupar galerias por título de evento
        const agrupado: Record<string, GaleriaData[]> = data.reduce((acc: Record<string, GaleriaData[]>, galeria) => {
          if (galeria.evento) {
            const { titulo } = galeria.evento;
            if (!acc[titulo]) {
              acc[titulo] = [];
            }
            acc[titulo].push(galeria);
          }
          return acc;
        }, {});

        const agrupadoArray = Object.entries(agrupado).map(([titulo, imagens]) => ({
          titulo,
          imagens,
        }));

        setGaleriasSemEvento(semEvento);
        setEventos(agrupadoArray);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const fetchBanner = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/banners/galeria");
        if (!response.ok) throw new Error("Erro ao buscar o banner");
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        console.error("Erro ao buscar o banner:", error);
      }
    };

    fetchGalerias();
    fetchBanner();
  }, []);

  // Atualiza o banner com base no tamanho da tela
  useEffect(() => {
    const updateBannerImage = () => {
      if (banner) {
        const currentBanner =
          window.innerWidth < 768
            ? banner.banner_principal_mobile
            : banner.banner_principal;
        setBannerImage(currentBanner);
      }
    };

    updateBannerImage();

    // Atualiza a imagem do banner ao redimensionar a janela
    window.addEventListener("resize", updateBannerImage);
    return () => window.removeEventListener("resize", updateBannerImage);
  }, [banner]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="text-center banner-container fade-in" style={{ marginTop: '100px' }}>
        {bannerImage ? (
          <img
            src={`http://localhost:8000/storage/${bannerImage}`}
            alt="Banner da Galeria"
            className="img-fluid banner-image"
            style={{
              width: '100%',
              height: '472px', // Altura fixa
              objectFit: 'cover', // Ajusta largura sem distorcer
            }}
          />
        ) : (
          <p>Carregando Banner...</p>
        )}
      </div>

      <h1 className="text-center my-4 titulo-galeria fw-bold display-4">Galeria de Eventos</h1>

      <div className="row justify-content-center d-flex justify-content-center">
    {/* Card fixo para imagens sem evento */}
    {galeriasSemEvento.length > 0 && (
        <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link href={`/pages/Galeria/semfiltro`} className="card h-100 text-decoration-none">
                <div className="card-header text-center">Fotos Gerais</div>
                <div className="card-body">
                    <img
                        src={`http://localhost:8000/storage/${galeriasSemEvento[0].arquivo}`}
                        alt="Fotos Gerais"
                        className="img-fluid"
                        style={{
                            width: '100%',
                            height: '400px', 
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </Link>
        </motion.div>
    )}

    {/* Cards para eventos com galerias */}
    {eventos.map(({ titulo, imagens }) => (
        <motion.div
            key={titulo}
            className="col-md-3 col-12 mb-4 d-flex justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link href={`/pages/Galeria/${titulo}`} className="card text-decoration-none" style={{ maxWidth: '300px' }}>
                <div className="card-header text-center">{titulo}</div>
                <div className="card-body" style={{ padding: 0 }}>
                    <img
                        src={`http://localhost:8000/storage/${imagens[0].arquivo}`}
                        alt={`Imagem de ${titulo}`}
                        className="img-fluid"
                        style={{
                            width: '100%', 
                            height: '400px', 
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </div>
            </Link>
        </motion.div>
    ))}
</div>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Visualização da Imagem"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '450px',
            margin: 'auto',
            padding: '0',
            height: '400px',
          },
        }}
      >
        <button onClick={closeModal} className="modal-fechar">Fechar</button>
        <img
          src={selectedImage}
          alt="Imagem ampliada"
          className="imagem-modal"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px',
          }}
        />
      </Modal>

      <Footer />
    </div>
  );
};

export default Galeria;
