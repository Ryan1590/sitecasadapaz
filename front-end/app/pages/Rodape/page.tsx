import { useState } from "react";
import '../Estilo/footer.css';



interface Link {
  name: string;
  href: string;
  icon?: string; 
}

interface Section {
  title: string;
  content?: string | JSX.Element;
  links?: Link[];
}

const Footer = () => {
  const [footerSections] = useState<Section[]>([
    {
      title: "Sobre Nós",
      content: "A Casa da Paz é uma organização sem fins lucrativos dedicada a ajudar a comunidade em situação de vulnerabilidade. Nossa missão é promover a solidariedade e o bem-estar social.",
    },
    {
      title: "Links",
      links: [
        { name: "INÍCIO", href: "#" },
        { name: "SOBRE NÓS", href: "#" },
        { name: "COMO AJUDAR", href: "#" },
        { name: "DOAÇÕES", href: "#" },
        { name: "GALERIA", href: "#" },
        { name: "BAZAR", href: "#" },
        { name: "PRÊMIOS", href: "#" },
        { name: "CONTATO", href: "#" },
      ],
    },
    {
      title: "Contato",
      content: (
        <div>
          <p>Email: contato@casadapaz.org</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        </div>
      ),
    },
    {
      title: "Siga-nos",
      links: [
        { name: "Facebook", href: "https://facebook.com", icon: "fab fa-facebook" },
        { name: "Instagram", href: "https://instagram.com", icon: "fab fa-instagram" },
        { name: "Twitter", href: "https://twitter.com", icon: "fab fa-twitter" },
      ],
    },
  ]);

  return (
    <footer className="bg-dark text-white py-5">
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
