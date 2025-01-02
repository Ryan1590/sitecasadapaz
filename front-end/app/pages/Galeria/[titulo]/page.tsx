"use client";

import Header from '../../Header/page';
import Footer from '../../Footer/page';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GaleriaData {
  id: number;
  tipo: string;
  arquivo: string;
}

interface BannerData {
  banner_principal: string;
  banner_principal_mobile: string;
}

const FotosDoEvento = () => {
  const { titulo } = useParams(); // Captura o parâmetro da URL
  const [imagens, setImagens] = useState<GaleriaData[]>([]);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Função para buscar as fotos do evento
    const fetchFotos = async () => {
      if (!titulo) return;

      try {
        const response = await fetch(`http://localhost:8001/api/eventos/galerias?titulo=${titulo}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar fotos do evento");
        }

        const data: GaleriaData[] = await response.json();
        setImagens(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Função para buscar o banner
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

    fetchFotos();
    fetchBanner();
  }, [titulo]);

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

      <div className="text-center banner-container fade-in" style={{ marginTop: '70px' }}>
        {bannerImage ? (
          <img
            src={`http://localhost:8000/storage/${bannerImage}`}
            alt="Banner do Evento"
            className="img-fluid banner-image"
            style={{
              width: '100%',
              height: '250px', // Altura fixa
              objectFit: 'cover', // Ajusta a largura sem distorcer
            }}
          />
        ) : (
          <p>Carregando Banner...</p>
        )}
      </div>

      <div className="container mt-4">
        <h1 className="text-center my-4 titulo-galeria">
          {titulo === "semfiltro" ? "Fotos Gerais" : `Fotos do Evento: ${titulo}`}
        </h1>

        {isLoading ? (
          <p className="text-center text-muted">Carregando fotos...</p>
        ) : imagens.length > 0 ? (
          <div className="row">
            {imagens.map((imagem) => (
              <motion.div
                key={imagem.id}
                className="col-md-4 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card shadow-sm h-100">
                  <img
                    src={`http://localhost:8000/storage/${imagem.arquivo}`}
                    alt={`Foto do evento ${titulo}`}
                    className="card-img-top img-fluid"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '250px',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">Nenhuma foto encontrada para este evento.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FotosDoEvento;
