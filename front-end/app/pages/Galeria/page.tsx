"use client";
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';
import '../Estilo/galeria.css';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const images1 = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/320",
    "https://picsum.photos/400/300",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/190",
  ];

  const images2 = [
    "https://picsum.photos/500/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/200/250",
    "https://picsum.photos/120/150",
    "https://picsum.photos/200/190",
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const resizeAll = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const altura = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
      const gap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-row-gap'));

      gallery.querySelectorAll('.gallery-item').forEach((item: Element) => {
        const el = item as HTMLElement;
        const itemHeight = el.querySelector('.content')!.getBoundingClientRect().height;
        el.style.gridRowEnd = `span ${Math.ceil((itemHeight + gap) / (altura + gap))}`;
      });
    };

    window.addEventListener('resize', resizeAll);
    resizeAll();

    return () => {
      window.removeEventListener('resize', resizeAll);
    };
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 pt-16">
      <Header />
      <h1 className="text-center my-4">Galeria</h1>

      <div className="text-section">
        <p>Aqui está uma seleção de algumas das nossas imagens mais impressionantes.</p>
      </div>

      <div className="gallery" ref={galleryRef}>
        {images1.map((src, index) => (
          <div className="gallery-item" key={index} onClick={() => handleImageClick(src)}>
            <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={src} alt={`Imagem ${index + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-section">
        <p>Continuamos a explorar a beleza através da nossa coleção de imagens.</p>
      </div>

      <div className="gallery" ref={galleryRef}>
        {images2.map((src, index) => (
          <div className="gallery-item" key={index} onClick={() => handleImageClick(src)}>
            <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={src} alt={`Imagem ${index + 1 + images1.length}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;
