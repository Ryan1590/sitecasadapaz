"use client";

import { useEffect, useState } from "react";
import '../Estilo/footer.css';

interface Link {
  name: string;
  href: string;
  icon?: string; 
  target?: string;
}

interface Section {
  title: string;
  content?: string | JSX.Element;
  links?: Link[];
}

interface ContatoData {
  whatsapp: string;
  instagram: string;
  fanpage: string;
  endereco_sede: string;
  endereco_bazar: string;
  instagram_bazar: string; 
  email: string;
}

const Footer = () => {
  const [contato, setContato] = useState<ContatoData | null>(null);
  const [sobre, setSobre] = useState<string | null>(null); // Altera para string

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/contatos');
        if (!response.ok) throw new Error('não houve uma boa resposta');
        const data: ContatoData[] = await response.json();
        if (data.length > 0) {
          setContato(data[0]); // Pega o primeiro item do array
        } else {
          setContato(null); // Caso o array esteja vazio
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    const fetchSobre = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/sobre');
        if (!response.ok) throw new Error('não houve uma boa resposta');

        const data = await response.json();
        setSobre(data[0]?.sobre || null); // Acessa o primeiro item e pega o campo "sobre"
      } catch (error) {
        console.error('Erro ao buscar o sobre:', error);
        setSobre(null);
      }
    };

    fetchContato();
    fetchSobre(); // Chama a função para buscar "Sobre"
  }, []);

  const footerSections: Section[] = [
    {
      title: "Sobre Nós",
      content: sobre ? (
        <p>{sobre}</p>
      ) : (
        "Carregando informações sobre..."
      ),
    },
    {
      title: "Links",
      links: [
        { name: "INÍCIO", href: "#" },
        { name: "SOBRE NÓS", href: "/pages/Sobre" },
        { name: "COMO AJUDAR", href: "/pages/ComoAjudar" },
        { name: "DOAÇÕES", href: "/pages/Doacao" },
        { name: "GALERIA", href: "/pages/Galeria" },
        { name: "BAZAR", href: "/pages/Bazar" },
        { name: "PRÊMIOS", href: "/pages/Premios" },
        { name: "CONTATO", href: "/pages/Contato" },
      ],
    },
    {
      title: "Contato",
      content: contato ? (
        <div>
          <p>Email: {contato.email}</p>
          <p>Telefone: <a href={`tel:${contato.whatsapp}`} style={{ color: 'white', textDecoration: 'none' }}>{contato.whatsapp}</a></p>
          <p>Endereço da Sede: {contato.endereco_sede}</p>
          <p>Endereço do Bazar: {contato.endereco_bazar}</p>
        </div>
      ) : (
        <p>Carregando informações de contato...</p>
      ),
    },
    {
      title: "Siga-nos",
      links: [
        {
          name: "Facebook",
          href: contato ? `https://facebook.com/${contato.fanpage}` : "#",
          icon: "fab fa-facebook",
          target: "_blank",
        },
        {
          name: "Instagram",
          href: contato ? `https://instagram.com/${contato.instagram}` : "#",
          icon: "fab fa-instagram",
          target: "_blank",
        },
        {
          name: "WhatsApp",
          href: contato ? `https://wa.me/${contato.whatsapp.replace(/\D/g, '')}` : "#",
          icon: "fab fa-whatsapp",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white py-5 text-center">
      <div className="container mx-auto">
        <div className="row">
          {footerSections.map((section, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <h5 className="text-uppercase mb-3">{section.title}</h5>
              {section.content ? (
                typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )
              ) : (
                section.links && (
                  <ul className="list-unstyled">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          target={link.target}
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 no-underline transition duration-300"
                        >
                          {link.icon && <i className={`${link.icon} me-2`}></i>}
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Casa da Paz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
