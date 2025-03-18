"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import Rodape from "../Footer/page";

interface ComoAjudarData {
  titulo: string;
  descricao: string;
}

const ComoAjudar = () => {
  const [comoAjudar, setComoAjudar] = useState<ComoAjudarData[]>([]);

  useEffect(() => {
    const fetchComoAjudar = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/ComoAjudar");
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data: ComoAjudarData[] = await response.json();
        setComoAjudar(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchComoAjudar();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-5">
        <h1 className="text-center mb-4">Como Ajudar</h1>

        {/* Renderizando os dados da API */}
        {comoAjudar.length > 0 ? (
          comoAjudar.map((item, index) => (
            <section key={index} className="mb-5">
              <h2 className="text-primary">{item.titulo}</h2>
              <p>{item.descricao}</p>
            </section>
          ))
        ) : (
          <p className="text-center">Carregando informações...</p>
        )}


        <section className="mb-5">
          <p className="mt-3">
            Se interessou? Entre em contato conosco pelos nossos canais disponíveis no menu{" "}
            <a href="/pages/Contato" style={{ textDecoration: "none" }}>
              <strong>Contato</strong>
            </a>
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default ComoAjudar;
