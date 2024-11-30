import Header from '../Header/page';
import Rodape from '../Footer/page';

const Bazar = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="-mt-2"></div>
            <main className="container my-5">
                {/* Título */}
                <section className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary">Bazar Beneficente da Casa da Paz</h1>
                    <p className="fs-5 text-muted">
                        Um espaço onde suas compras e doações fazem a diferença na vida de crianças e adolescentes.
                    </p>
                </section>

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
                    <h2 className="text-primary mb-4 text-center">Como Funciona</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="p-4 shadow-sm rounded bg-light">
                                <h5 className="fw-bold">Localização</h5>
                                <p className="text-muted">
                                    O bazar está localizado na <strong>Av. Rio de Janeiro, 4453, Zona II</strong>. Aberto de terça a sexta das 8h às 17h e sábado das 8h às 12h.
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
                      <h2 className="text-primary mb-4 text-center">Benefícios</h2>
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


                {/* Galeria de Imagens */}
                <section className="mb-5 mt-5">
                    <h2 className="text-primary mb-4 text-center">Bazar Solidário</h2>
                    <div className="row g-3">
                        {['2', '2', '3', '4', '4', '4'].map((img, index) => (
                            <div key={index} className="col-6 col-md-4">
                                <div className="position-relative overflow-hidden rounded shadow-sm">
                                    <img
                                        src={`../img/${img}.jpg`}
                                        alt={`Bazar ${img}`}
                                        className="img-fluid gallery-img"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Rodape />
        </div>
    );
};

export default Bazar;
