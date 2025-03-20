"use client"; 

import Header from "../Header/page";
import Rodape from "../Footer/page";
import "../Estilo/doacao.css";
import { FaHeart, FaPiggyBank } from "react-icons/fa";
import { useState, useEffect } from "react";
import { QrCodePix } from "qrcode-pix";

interface DoacaoData {
  banco: string;
  agencia: string;
  conta_corrente: string;
  cnpj: string;
  titular: string;
  pix: string;
}

const Doacao = () => {
  const [pixQRCode, setPixQRCode] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [doacao, setDoacao] = useState<DoacaoData[]>([]);
  const [cnpj, setCnpj] = useState<string>("");

  useEffect(() => {
    const fetchDoacao = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/doacao");
        if (!response.ok) throw new Error("não houve uma boa resposta");
        const data: DoacaoData[] = await response.json();
        setDoacao(data);
        
        // Definindo o CNPJ diretamente do primeiro item do array
        if (data.length > 0) {
          setCnpj(data[0].cnpj);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchDoacao();
  }, []);

  useEffect(() => {
    if (doacao.length === 0) return; // Verifica se a lista de doação não está vazia

    const receiverName = doacao[0].titular; // Extraindo o titular da doação
    const receiverCity = "Sao Paulo";

    // Criando os dados do QR Code usando a biblioteca qrcode-pix
    const qrCodePix = QrCodePix({
      version: "01",
      key: cnpj, // Usando o CNPJ do estado
      name: receiverName,
      city: receiverCity,
      transactionId: "Casa da Paz",
      message: "Doação para Casa da Paz",
    });

    // Gerando o QR Code em base64
    qrCodePix
      .base64()
      .then((url) => {
        setPixQRCode(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cnpj, doacao]); // Adicionando doacao como dependência

  const handleDoarAgora = () => {
    setShowQRCode(true);
  };

  const formatCNPJ = (cnpj: string | undefined) => {
    if (!cnpj) return "CNPJ inválido";

    return cnpj
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); 
  };

  return (
    <div className="container-background d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-5 text-dark text-center" style={{ overflow: "hidden" }}>
        <h1 className="my-5 fw-bold text-primary" style={{ fontSize: "2.5rem" }}>
          Faça a Diferença Hoje
        </h1>
        <p className="main-quote lead mb-5" style={{ color: "black", fontSize: "1.2rem" }}>
          “Deve-se doar com a alma livre, simples, apenas por amor, espontaneamente!” – Martinho Lutero
        </p>

        <div className="donation-card shadow-lg border-0 p-4 animate__animated animate__fadeInUp">
          <div className="card-body">
            <h2 className="text-center mb-4">
              <FaHeart className="icon-pulse" color="yellow" size={30} /> Como você pode ajudar
            </h2>
            <p className="text-center mb-5">
              Sua contribuição nos ajuda a transformar vidas. Escolha uma das opções abaixo e faça parte dessa missão.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mb-4">
              <div className="text-center mx-3">
                <FaPiggyBank color="white" size={50} className="mb-3 icon-rotate" />
                <h5 className="mb-2">Dados Bancários</h5>
                <p className="m-0">Banco: {doacao[0]?.banco || "Carregando banco.."}</p>
                <p className="m-0">Agência: {doacao[0]?.agencia || "Carregando Agência.."}</p>
                <p className="m-0">Conta Corrente: {doacao[0]?.conta_corrente || "Carregando Conta Corrente.."}</p>
                <p className="m-0">CNPJ: {formatCNPJ(doacao[0]?.cnpj) || "Carregando CNPJ.."}</p>
                <p className="m-0">Titular: {doacao[0]?.titular || "Carregando titular.."}</p>
              </div>
              <div className="text-center mx-3">
                <FaHeart color="lightgreen" size={50} className="mb-3 icon-pulse" />
                <h5 className="mb-2">PIX</h5>
                <p className="m-0">Chave PIX: {doacao[0]?.pix || "Carregando chave pix.."}</p>
              </div>
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-primary-custom btn-lg mx-2 shadow-lg" onClick={handleDoarAgora} style={{ fontSize: "1.2rem", padding: "10px 20px" }}>
                Clique Aqui Para Doar Agora
              </button>
            </div>

            {showQRCode && (
              <div className="modal-overlay d-flex justify-content-center align-items-center">
                <div className="modal-content text-center p-4 shadow-lg">
                  <h4 className="text-dark">QR Code para Doação via PIX</h4>
                  {pixQRCode && (
                    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                      <img src={pixQRCode} alt="PIX QR Code" style={{ width: "150px", height: "150px" }} />
                      <p>Escaneie o código para doar via PIX</p>
                    </div>
                  )}
                  <button className="btn btn-danger mt-3" onClick={() => setShowQRCode(false)}>
                    Fechar
                  </button>
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
