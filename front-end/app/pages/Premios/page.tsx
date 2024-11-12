import '../Estilo/premios.css'; 
import Header from '../Header/page';
import Rodape from '../Footer/page';
import Image from 'next/image';

const premiosData = {
  "Premio do ano de 2022": [
    { id: 1, imgSrc: '/img/a1.jpg', descricao: 'Prêmio Nacional 2022' },
    { id: 2, imgSrc: '/img/a2.jpg', descricao: 'Prêmio Internacional 2022' },
  ],
  "Premio do ano de 2023": [
    { id: 3, imgSrc: '/img/a1.jpg', descricao: 'Prêmio Local 2023' },
    { id: 4, imgSrc: '/img/a2.jpg', descricao: 'Prêmio Regional 2023' },
  ],
  "Premio do ano de 2024": [
    { id: 5, imgSrc: '/img/a1.jpg', descricao: 'Prêmio Estadual 2024' },
    { id: 6, imgSrc: '/img/a2.jpg', descricao: 'Prêmio Global 2024' },
  ]
};

const Premios = () => {
  return (
    <div className="d-flex flex-column min-vh-100 pt-4">
      <Header />
      
      {/* Banner com imagem de fundo */}
      <section className="banner-section">
        <div className="banner-image">
          <Image 
            src="/pngtree-awards-party-poster-background-picture-image_1124895.jpg" 
            alt="Banner"
            width={1920}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <main className="container">
        <h1 className="text-center my-4 fs-4">Ao longo dos anos a Casa da Paz recebeu alguns Prêmios/Títulos, segue abaixo alguns deles:</h1>
        <h1 className="text-center my-4 fs-5">Prêmio Impulso | Casa da Paz foi certificada | Categoria Gestão</h1>
        {Object.entries(premiosData).map(([ano, premios]) => (
          <section key={ano} className="mb-5">
            <h2 className="text-center fs-4">{ano}</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
              {premios.map((premio) => (
                <div key={premio.id} className="col d-flex justify-content-center">
                  <div className="card shadow-sm border-0 h-100">
                    <div className="imageWrapper">
                      <Image 
                        src={premio.imgSrc} 
                        alt={premio.descricao} 
                        width={300}  
                        height={300}
                        objectFit="contain"
                        className="card-img-top rounded"
                      />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <p className="card-text text-center fw-bold fs-6">{premio.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Rodape />
    </div>
  );
};

export default Premios;
