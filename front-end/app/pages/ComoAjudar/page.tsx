"use client";

import React from "react";
import Header from "../Header/page";
import Rodape from "../Footer/page";

const ComoAjudar = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-5">
        <h1 className="text-center mb-4">Como Ajudar</h1>

        <section className="mb-5">
          <h2 className="text-primary">Voluntariado</h2>
          <p>Seja um voluntário e ajude a fazer a diferença na vida de nossas crianças e adolescentes. Descubra como você pode contribuir com seu tempo e habilidades.</p>
          <h4 className="mt-3">Áreas com necessidade de voluntários:</h4>
          <ul className="list-group">
            {["Audiovisual", "Marketing", "Programador Web Designer", "Captador de recursos", "Oficineiro", "Auxiliar de bazar", "Atividades com as crianças", "Palestrante", "Promoções e Eventos"].map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
          <p className="mt-3">Fornecemos declaração e certificado de horas complementares para comprovar seu voluntariado.</p>
        </section>

        <section className="mb-5">
          <h2 className="text-primary">Doações</h2>
          <p>Contribua com nossa missão através de doações financeiras ou materiais. Cada contribuição ajuda a oferecer suporte essencial, como uniformes, material escolar e alimentação de qualidade para nossos jovens.</p>
          <button className="btn btn-success" ><a href="/pages/Doacao" style={{ textDecoration: "none", color:"white" }}>Faça uma Doação</a> </button>
        </section>

        <section className="mb-5">
          <h2 className="text-primary">Parcerias e Patrocínios</h2>
          <p>Empresas e organizações podem colaborar com nossa causa por meio de parcerias e patrocínios.</p>
          <ul className="list-group">
            <li className="list-group-item">Promoção de eventos</li>
            <li className="list-group-item">Fornecimento de recursos</li>
            <li className="list-group-item">Apoio a projetos específicos</li>
          </ul>
          <p className="mt-3">
            Se interessou? Entre em contato conosco pelos nossos canais disponíveis no menu 
            <a href="/pages/Contato" style={{ textDecoration: "none" }}><strong> Contato</strong></a>
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default ComoAjudar;

  