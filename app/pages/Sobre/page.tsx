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
                  <h2 className="card-title">Nossa Missão</h2>
                  <p className="text-muted">
                    Nossa missão é proporcionar um ambiente acolhedor e educativo, onde todos
                    possam crescer e desenvolver suas habilidades. Acreditamos no poder da
                    comunidade e na importância de cuidar uns dos outros.
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Nossos Valores</h2>
                  <ul className="list-unstyled">
                    <li><span>Empatia</span></li>
                    <li><span>Respeito</span></li>
                    <li><span>Transparência</span></li>
                    <li><span>Colaboração</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Novo conteúdo adicionado aqui */}
          <section className="my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                  <h3 className="mt-4 text-primary">Sobre a Casa da Paz</h3>
                    <p className="text-muted">
                      Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">No que acreditamos?</h3>
                    <p className="text-muted">
                      Acreditamos que é possível mudar o destino de crianças e adolescentes por meio do conhecimento. Oferecemos oficinas de artes, cultura, lazer e educação, integradas com noções de ética e cidadania. Nosso objetivo é capacitar essas jovens pessoas para que se tornem protagonistas de suas próprias histórias e construam um futuro melhor.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">Onde e como as atividades acontecem?</h3>
                    <p className="text-muted">
                      As atividades da Casa da Paz são realizadas no contraturno escolar tanto nas nossas instalações quanto em instituições parceiras. Contamos com a colaboração de voluntários e estagiários para a execução das oficinas. Apesar das dificuldades com recursos, garantimos que nossos participantes recebam uniformes, material escolar e lanches preparados com produtos de qualidade e segurança alimentar.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">De onde vêm os recursos?</h3>
                    <p className="text-muted">
                      Os recursos para a manutenção dos projetos da Casa da Paz são obtidos através de doações de pessoas físicas e jurídicas, termo de colaboração com a Prefeitura Municipal de Umuarama, arrecadação do programa Nota Paraná e promoções realizadas pela entidade.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mt-4 text-primary">Sede própria!</h3>
                    <p className="text-muted">
                      Com grande empenho, construímos nossa sede própria de 400 m² em dois pisos, em um terreno de 800 m² doado pelo poder público municipal, já devidamente escriturado em nome da Casa da Paz. Com a nova estrutura, aprimoramos a qualidade dos nossos serviços de convivência e fortalecimento de vínculos para crianças, adolescentes e suas famílias.
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
                    alt="Membro da equipe" 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-primary">Aparecida Miguel Fernandes</h5>
                  <p className="card-text">Segunda Secretária</p>
                  <p className="card-text text-muted">Profissão: Professora Aposentada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-5">
        <div className="container">
          <p className="mb-0">
            Desenvolvido em parceria com a Faculdade ALFA Umuarama, (Curso de Sistemas de Informação)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;
