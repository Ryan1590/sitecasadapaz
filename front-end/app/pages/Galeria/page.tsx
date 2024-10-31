"use client";

import { useState } from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';
import '../Estilo/galeria.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const eventos = [
  {
    titulo: "Dia das Crianças",
    imagens: [
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
    ],
  },
  {
    titulo: "Páscoa",
    imagens: [
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
    ],

  },
  {
    titulo: "Natal",
    imagens: [
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
      "../img/1-Presidente-Silvia-Ribeiro-Martins.jpg",
    ],
    
  },
];

const Galeria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imagem: string) => {
    setSelectedImage(imagem);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

      <h1 className="text-center my-4 titulo-galeria">Eventos</h1>

      {eventos.map((evento, index) => (
        <motion.div
          key={index}
          className="evento-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2 className="evento-titulo">
            <i className="fas fa-calendar-alt"></i> {evento.titulo}
          </h2>
          <div className="imagem-container">
            {evento.imagens.map((imagem, i) => (
              <motion.div
                key={i}
                className="imagem-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={imagem}
                  alt={`Imagem ${i + 1} de ${evento.titulo}`}
                  className="imagem-galeria"
                  onClick={() => openModal(imagem)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

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
