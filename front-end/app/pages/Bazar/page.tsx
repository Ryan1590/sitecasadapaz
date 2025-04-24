"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/page";
import Rodape from "../Footer/page";

interface Imagem {
    id: string | null;
    imagem_bazar: string | null;
}

interface Endereco {
    endereco_bazar: string | null;
}

const Bazar = () => {

    const [endereco, setEndereco] = useState('');

    useEffect(() => {
        // Fazendo a requisição para a API
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contatos`)
            .then(response => response.json())
            .then(data => {
                // Acessando o primeiro item do array e pegando o endereco_bazar
                if (data && data.length > 0) {
                    setEndereco(data[0].endereco_bazar); // Acessando o primeiro item e pegando endereco_bazar
                }
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
    }, []);

    const [imagens, setImagens] = useState<Imagem[]>([]);

    useEffect(() => {
        axios.get<Imagem[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/bazar/imagens`)
            .then(response => {
                setImagens(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar imagens:", error);
            });
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="-mt-2"></div>
            <main className="container my-5">
            
                <div className="text-center my-5">
                    <h1 className="display-4 text-primary fw-bold">Bazar Beneficente da Casa da Paz</h1>
                    <hr className="w-25 mx-auto border-primary border-3 opacity-100" />
                    <p className="text-muted fs-5">Junte-se a nós em ações que transformam vidas.</p>
                </div>

                {/* Introdução */}
                <section className="mb-5">
                    <p className="lead text-center">
                        A Casa da Paz organiza um Bazar Permanente Beneficente como uma das formas de arrecadar fundos para apoiar nossos programas e serviços. 
                        Em nosso bazar, você encontrará uma variedade de itens novos e usados, incluindo roupas, acessórios, livros, brinquedos e muito mais, 
                        tudo a preços acessíveis.
                    </p>
                </section>

                {/* Como Funciona */}
                <section className="mb-5">
                    <div className="text-center mt-4">
                        <h2 className="text-primary text-2xl font-semibold">Como Funciona?</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4 text-center">
                        <div className="p-4 shadow-sm rounded bg-light">
                            <h5 className="fw-bold">Localização</h5>
                            <p className="text-muted">
                                O bazar está localizado na <strong>{endereco || 'Carregando...'}</strong>. 
                                Aberto de terça a sexta das 8h às 17h e sábado das 8h às 12h.
                            </p>
                    </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="p-4 shadow-sm rounded bg-light">
                                <h5 className="fw-bold">Doações</h5>
                                <p className="text-muted">
                                    Aceitamos doações de itens em bom estado para revenda no bazar. Entre em contato conosco para agendar a entrega.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="p-4 shadow-sm rounded bg-light">
                                <h5 className="fw-bold">Voluntariado</h5>
                                <p className="text-muted">
                                    Contamos com o apoio de voluntários para organizar e operar o bazar. Venha fazer parte da nossa equipe!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefícios */}
                  <section className="mb-5">
                  <div className="text-center mt-4">
                        <h2 className="text-primary text-2xl font-semibold">Beneficios</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                    </div>
                    <br />
                      <div className="row">
                          <div className="col-md-6 mb-4 mb-md-0">
                              <div className="p-5 bg-light rounded shadow">
                                  <h5 className="fw-bold text-center text-md-start">Para a Comunidade</h5>
                                  <p className="text-muted text-center text-md-start">
                                      O bazar oferece itens de qualidade a preços acessíveis, promovendo sustentabilidade e consumo consciente.
                                  </p>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="p-5 bg-light rounded shadow">
                                  <h5 className="fw-bold text-center text-md-start">Para a Casa da Paz</h5>
                                  <p className="text-muted text-center text-md-start">
                                      Os recursos arrecadados apoiam nossos programas para crianças e adolescentes, contribuindo para uma vida melhor.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </section>

                    {/* Call to Action */}
                <section className="text-center mt-5">
                    <div className="p-5 bg-light rounded shadow">
                        <h3 className="text-primary fw-bold">Visite Nosso Bazar</h3>
                        <p className="fs-5 text-muted">
                            Participe do nosso bazar e faça parte dessa missão. Suas ações ajudam a transformar vidas!
                        </p>
                    </div>
                </section>


                <section className="mb-5 mt-5">
                     <div className="text-center mt-4">
                        <h2 className="text-primary text-2xl font-semibold">Bazar solidário</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                    </div>
                    <br />
                    <div className="row g-3">
                        {imagens.length > 0 ? (
                            imagens.map((imagem) => (
                                <div key={imagem.id} className="col-6 col-md-4">
                                    <div className="position-relative overflow-hidden rounded shadow-sm d-flex justify-content-center align-items-center">
                                        <img
                                             src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${imagem.imagem_bazar}`} // URL completa
                                            alt={`Bazar ${imagem.id}`}
                                            className="img-fluid gallery-img"
                                            style={{
                                                width: '100%', 
                                                height: '400px', 
                                                objectFit: 'cover', 
                                                objectPosition: 'center', 
                                            }}
                                        />
                                    </div>          
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted">Nenhuma imagem disponível no momento.</p>
                        )}
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
};

export default Bazar;
