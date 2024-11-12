"use client";

import Header from '../Header/page';
import Footer from '../Footer/page';
import '../Estilo/galeria.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";

// Interface para os dados que vamos buscar do backend
interface GaleriaData {
  id: number;
  tipo: string;
  arquivo: string;
  evento: {
    titulo: string;
    descricao: string;
    data: string;
  };
}

const Galeria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [galerias, setGalerias] = useState<GaleriaData[]>([]);

  // Função para abrir o modal de visualização de imagem
  const openModal = (imagem: string) => {
    setSelectedImage(imagem);
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // useEffect para buscar as galerias e seus eventos do backend
  useEffect(() => {
    const fetchGalerias = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/eventos/galerias");
        if (!response.ok) {
          throw new Error("Não houve uma boa resposta");
        }
        const data = await response.json();
        setGalerias(data); // Ou qualquer outra lógica para manipular os dados
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchGalerias();
  }, []);

  // Agrupar galerias por título do evento
  const groupedGalerias = galerias.reduce((acc, galeria) => {
    const { titulo } = galeria.evento;
    
    if (!acc[titulo]) {
      acc[titulo] = [];
    }
    acc[titulo].push(galeria);
    return acc;
  }, {} as { [key: string]: GaleriaData[] });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="text-center banner-container fade-in">
        <img
          src='../img/bannergaleria.png'
          alt="Banner da Casa da Paz"
          className="img-fluid banner-image"
          style={{ height: '600px', width: '100%', objectFit: 'cover' }}
        />
      </div>

      <h1 className="text-center my-4 titulo-galeria">Galeria de Eventos</h1>

      {/* Mapeamento das galerias agrupadas por título */}
      {Object.keys(groupedGalerias).map((titulo) => (
        <motion.div
          key={titulo}
          className="evento-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="evento-titulo">
            <i className="fas fa-calendar-alt"></i> {titulo}
          </h2>

          {/* Exibição das imagens associadas ao evento */}
          <div className="imagem-grid">
            {groupedGalerias[titulo].map((galeria) => (
              <div key={galeria.id} className="imagem-container">
                {galeria.arquivo && (
                  <motion.div
                    className="imagem-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={`http://localhost:8000/storage/${galeria.arquivo}`} 
                      alt={`Imagem da galeria de ${titulo}`}
                      className="imagem-galeria"
                      onClick={() => openModal(`http://localhost:8000/storage/${galeria.arquivo}`)}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <hr className="linha-separadora" />
        </motion.div>
      ))}

      {/* Modal para visualização das imagens */}
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
