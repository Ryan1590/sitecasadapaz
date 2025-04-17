"use client";

import '../Estilo/contato.css';
import Header from '../Header/page';
import { FaPhoneAlt, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Rodape from '../Footer/page';
import React, { useEffect, useState } from 'react';

interface ContatoData {
  whatsapp: string;
  instagram: string;
  fanpage: string;
  endereco_sede: string;
  endereco_bazar: string;
  instagram_bazar: string; 
  email:string;
}


const Contato = () => {

  const [contato, setContato] = useState<ContatoData[]>([]);

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/contatos');
        if (!response.ok) throw new Error('não houve uma boa resposta');
        const data: ContatoData[] = await response.json();
        setContato(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchContato();
  }, []);


  const formatPhone = (phone: string) => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
  };

  return (
    <div className="d-flex flex-column min-vh-100 pt-16 bg-light">
      <Header />
      <div className="container mt-5">
      <div className="text-center my-5">
        <h1 className="display-4 text-primary fw-bold">Entre em Contato</h1>
        <hr className="w-25 mx-auto border-primary border-3 opacity-100" />
        <p className="text-center mb-5 text-muted">Entre em contato conosco através de qualquer um dos meios abaixo.</p>
      </div>
      
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card contato-card p-4 shadow h-100 text-start">
              <div className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="icon-style" />
                <div>
                  <h5>Telefone/WhatsApp:</h5>
                  <p>
                    <a href={`${contato[0]?.whatsapp}`} className="text-decoration-none text-dark link-hover">
                      {contato[0]?.whatsapp ? formatPhone(contato[0].whatsapp) : "Carregando..."}
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaInstagram className="icon-style" style={{ color: '#d62976' }} />
                <div>
                  <h5>Instagram Casa da Paz:</h5>
                  <p>
                    <a href={`https://instagram.com/${contato[0]?.instagram}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                      @{contato[0]?.instagram || "Carregando..."}
                   </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaFacebook className="icon-style" style={{ color: '#3b5998' }} />
                <div>
                  <h5>Fanpage:</h5>
                  <p>
                    <a href={`http://facebook.com/${contato[0]?.fanpage}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                    {contato[0]?.fanpage || "Carregando..."}
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="icon-style" style={{ color: '#6c757d' }} />
              <div>
                <h5>E-mail:</h5>
                <p>
                  <a href={`mailto:${contato[0]?.email}`} className="text-decoration-none text-dark link-hover">
                  {contato[0]?.email || "Carregando..."}
                  </a>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div className="card contato-card p-4 shadow h-100 text-start">
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="icon-style" style={{ color: '#28a745' }} />
                <div>
                  <h5>Endereço da Sede:</h5>
                  <p>{contato[0]?.endereco_sede || "Carregando..."}</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="icon-style" style={{ color: '#28a745' }} />
                <div>
                  <h5>Endereço do Bazar e SEBO Literário:</h5>
                  <p><p>{contato[0]?.endereco_bazar || "Carregando..."}</p></p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaInstagram className="icon-style" style={{ color: '#d62976' }} />
                <div>
                  <h5>Instagram Bazar Beneficente:</h5>
                  <p>
                    <a href={`https://instagram.com/${contato[0]?.instagram_bazar}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                      <p>@{contato[0]?.instagram_bazar || "Carregando..."}</p>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
};

export default Contato;
