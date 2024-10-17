"use client";

import Header from '../Header/page';
import Rodape from '../Rodape/page';
import '../Estilo/doacao.css';
import { FaHeart, FaPiggyBank } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { QrCodePix } from 'qrcode-pix';

const Doacao = () => {
  const [pixQRCode, setPixQRCode] = useState('');
  const [showQRCode, setShowQRCode] = useState(false); // Estado para controlar a exibição do QR Code

  useEffect(() => {
    const pixKey = '05509404000129'; // CNPJ informado
    const receiverName = 'Associação Casa da Paz';
    const receiverCity = 'Sao Paulo';

    // Criando os dados do QR Code usando a biblioteca qrcode-pix 
    const qrCodePix = QrCodePix({
      version: '01',
      key: pixKey,
      name: receiverName,
      city: receiverCity,
      transactionId: 'Casa da Paz', // ID da transação
      message: 'Doação para Casa da Paz', // Mensagem de doação
    });

    // Gerando o QR Code em base64
    qrCodePix.base64().then((url) => {
      setPixQRCode(url);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  // Função para mostrar o QR Code
  const handleDoarAgora = () => {
    setShowQRCode(true);
  };

  return (
    <div className="container-background d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-5 text-dark text-center" style={{ overflow: 'hidden' }}>
        <h1 className="my-5" style={{ fontSize: '2.5rem' }}>Faça a Diferença Hoje</h1>
        <p className="main-quote lead mb-5" style={{ color: 'black', fontSize: '1.2rem' }}>
          “Deve-se doar com a alma livre, simples, apenas por amor, espontaneamente!” – Martinho Lutero
        </p>

        <div className="donation-card shadow-lg border-0 p-4 animate__animated animate__fadeInUp">
          <div className="card-body">
            <h2 className="text-center mb-4"><FaHeart className="icon-pulse" color="yellow" size={30} /> Como você pode ajudar</h2>
            <p className="text-center mb-5">Sua contribuição nos ajuda a transformar vidas. Escolha uma das opções abaixo e faça parte dessa missão.</p>

            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mb-4">
              <div className="text-center mx-3">
                <FaPiggyBank color="white" size={50} className="mb-3 icon-rotate" />
                <h5 className="mb-2">Dados Bancários</h5>
                <p className="m-0">Banco: SICOOB (756)</p>
                <p className="m-0">Agência: 4379</p>
                <p className="m-0">Conta Corrente: 4586-1</p>
                <p className="m-0">CNPJ: 05.509.404/0001-29</p>
                <p className="m-0">Titular: Associação Casa da Paz</p>
              </div>
              <div className="text-center mx-3">
                <FaHeart color="lightgreen" size={50} className="mb-3 icon-pulse" />
                <h5 className="mb-2">PIX</h5>
                <p className="m-0">Chave PIX: 05.509.404/0001-29</p>
              </div>
            </div>

            <div className="text-center mt-5">
              <button
                className="btn btn-primary-custom btn-lg mx-2 shadow-lg"
                onClick={handleDoarAgora}
                style={{ fontSize: '1.2rem', padding: '10px 20px' }}
              >
               Clique Aqui Para Doar Agora
              </button>
            </div>

            {/* Modal para exibir o QR Code */}
            {showQRCode && (
                  <div className="modal-overlay d-flex justify-content-center align-items-center">
                    <div className="modal-content text-center p-4 shadow-lg">
                      <h4 className='text-dark'>QR Code para Doação via PIX</h4>
                      {pixQRCode && (
                        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                          <img src={pixQRCode} alt="PIX QR Code" style={{ width: '150px', height: '150px' }} />
                          <p>Escaneie o código para doar via PIX</p>
                        </div>
                      )}
                      <button className="btn btn-danger mt-3" onClick={() => setShowQRCode(false)}>Fechar</button>
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Doacao;
