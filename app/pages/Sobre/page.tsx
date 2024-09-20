"use client";

import React from 'react';
import Header from '../Header/page';
import '../Estilo/sobre.css';

const Sobre = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Banner */}
      <div className="text-center" style={{ overflow: 'hidden', height: '300px' }}>
        <img 
          src="/img/bannercasadapaz.jpg" 
          alt="Banner da Casa da Paz" 
          className="img-fluid" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <main className="flex-grow-1 d-flex flex-column align-items-center text-dark mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <img 
                src="/img/SobreCasaDaPaz.jpg" 
                alt="Descrição da imagem" 
                className="img-fluid rounded-circle mb-4 shadow" 
                style={{ height: '300px', objectFit: 'cover' }} 
              />
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">
                    <i className="fas fa-bullseye text-primary mr-2"></i> Nossa Missão
                  </h2>
                  <p className="text-muted">
                    Nossa missão é proporcionar um ambiente acolhedor e educativo, onde todos
                    possam crescer e desenvolver suas habilidades.
                  </p>
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
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-info-circle mr-2"></i> Sobre a Casa da Paz
                    </h3>
                    <p className="text-muted">
                      Fundada para responder à urgência da alimentação, a Casa da Paz percebeu que a questão era mais ampla.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-clipboard-list mr-2"></i> No que acreditamos?
                    </h3>
                    <p className="text-muted">
                      Acreditamos que é possível mudar o destino de crianças e adolescentes por meio do conhecimento.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-school mr-2"></i> Onde e como as atividades acontecem?
                    </h3>
                    <p className="text-muted">
                      As atividades da Casa da Paz são realizadas no contraturno escolar, com a ajuda de voluntários.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-dollar-sign mr-2"></i> De onde vêm os recursos?
                    </h3>
                    <p className="text-muted">
                      Os recursos são obtidos através de doações e termos de colaboração com a Prefeitura Municipal.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">
                      <i className="fas fa-building mr-2"></i> Sede própria!
                    </h3>
                    <p className="text-muted">
                      Construímos nossa sede própria de 400 m², aprimorando a qualidade dos nossos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-5" />
          <h2 className="text-center mb-4">Nossa Equipe</h2>
          <div className="row mb-5">
            <div className="col-md-3 text-center">
              <div className="card mb-4 shadow-sm border-light">
                <div style={{ height: '350px', overflow: 'hidden' }}>
                  <img 
                    src="/img/1-Presidente-Silvia-Ribeiro-Martins.jpg" 
                    className="card-img-top" 
                    alt="Silvia Ribeiro Martins" 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary">Silvia Ribeiro Martins</h5>
                  <p className="card-text">Vice-presidente</p>
                  <p className="card-text text-muted">Farmacêutica aposentada</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card mb-4 shadow-sm border-light">
                <div style={{ height: '350px', overflow: 'hidden' }}>
                  <img 
                    src="/img/8-Conselheira-fiscal-Anna-Carla-Ruiz-Francolin.jpg" 
                    className="card-img-top" 
                    alt="Anna Carla Ruiz Françolin" 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary">Anna Carla Ruiz Françolin</h5>
                  <p className="card-text">Secretária</p>
                  <p className="card-text text-muted">Profissão: Advogada</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card mb-4 shadow-sm border-light">
                <div style={{ height: '350px', overflow: 'hidden' }}>
                  <img 
                    src="/img/presidente.jpg" 
                    className="card-img-top" 
                    alt="Ana Costa" 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary">Rozelene Maria Corso Dalben</h5>
                  <p className="card-text">Presidente</p>
                  <p className="card-text text-muted">Funcionária pública aposentada</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="card mb-4 shadow-sm border-light">
                <div style={{ height: '350px', overflow: 'hidden' }}>
                  <img 
                    src="/img/professora.jpg" 
                    className="card-img-top" 
                    alt="Aparecida Miguel Fernandes" 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary">Aparecida Miguel Fernandes</h5>
                  <p className="card-text">Tesoureira</p>
                  <p className="card-text text-muted">Professora aposentada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sobre;
