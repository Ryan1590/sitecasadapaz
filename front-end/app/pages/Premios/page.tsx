"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../Header/page";
import Rodape from "../Footer/page";
import "../Estilo/premios.css";

const Premios: React.FC = () => {
  // Interface interna para os dados do prêmio
  interface Premio {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
  }

  const [premios, setPremios] = useState<Premio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPremios = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/premios");
        if (!response.ok) throw new Error("Erro ao buscar os prêmios.");
        const data: Premio[] = await response.json();
        setPremios(data); // Armazenando os dados corretamente
      } catch (error: any) {
        setError(error.message); // Armazenando qualquer erro que ocorra
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchPremios();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 pt-4">
      <Header />
  
      <section className="text-center my-5 pt-5">
        <h1 className="fs-1 fw-bold">Prêmios Casa da Paz</h1>
        <p className="fs-4 text-muted pt-4">
          Ao longo dos anos, a Casa da Paz recebeu prêmios e títulos que reconhecem nosso trabalho e dedicação.
        </p>
      </section>
  
      <main className="container">
        <h2 className="text-center my-4 fs-4">Prêmios Recebidos</h2>
  
        {loading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-center text-danger">{error}</p>}
        {!loading && !error && premios.length === 0 && (
          <p className="text-center">Nenhum prêmio encontrado.</p>
        )}
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {premios.map((premio) => (
            <div key={premio.id} className="col d-flex justify-content-center">
              <div className="card shadow-sm border-0 h-100">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src={`http://localhost:8000/storage/imagem_premios/${premio.imagem}`} // Caminho atualizado para a pasta imagem_premios
                    alt={`Premio ${premio.id}`}
                    className="img-fluid"
                    style={{ objectFit: "cover", maxHeight: "100%", width: "auto" }} // Ajusta o tamanho da imagem e mantém a proporção
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title text-center fw-bold">{premio.nome || "Título não disponível"}</h5>
                  <p className="card-text text-center">{premio.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
  
      <Rodape />
    </div>
  );
  
};

export default Premios;
