import '../Estilo/contato.css';
import Header from '../Header/page';
import { FaPhoneAlt, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Rodape from '../Rodape/page';

const Contato = () => {
  return (
    <div className="d-flex flex-column min-vh-100 pt-16 bg-light">
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4 display-5">Entre em Contato</h1>
        <p className="text-center mb-5 text-muted">Entre em contato conosco através de qualquer um dos meios abaixo.</p>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card contato-card p-4 shadow h-100 text-start">
              <div className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="icon-style" />
                <div>
                  <h5>Telefone/WhatsApp:</h5>
                  <p>
                    <a href="tel:+5544999760543" className="text-decoration-none text-dark link-hover">
                      (44) 99976-0543
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaInstagram className="icon-style" style={{ color: '#d62976' }} />
                <div>
                  <h5>Instagram Casa da Paz:</h5>
                  <p>
                    <a href="https://instagram.com/casadapaz_umuarama" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                      @casadapaz_umuarama
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaFacebook className="icon-style" style={{ color: '#3b5998' }} />
                <div>
                  <h5>Fanpage:</h5>
                  <p>
                    <a href="http://facebook.com/CasaDaPazUmuarama" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                      CasaDaPazUmuarama
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
                  <p>Rua Mimosa, 3172, Jd. Panorama</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="icon-style" style={{ color: '#28a745' }} />
                <div>
                  <h5>Endereço do Bazar e SEBO Literário:</h5>
                  <p>Av. Rio de Janeiro, 4453, Zona II</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaInstagram className="icon-style" style={{ color: '#d62976' }} />
                <div>
                  <h5>Instagram Bazar Beneficente:</h5>
                  <p>
                    <a href="https://instagram.com/bazaresebo_casadapaz" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark link-hover">
                      @bazaresebo_casadapaz
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
