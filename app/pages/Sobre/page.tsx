const Sobre = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Sobre Nós</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500" alt="Descrição da imagem" className="img-fluid rounded-circle mb-4"/>
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Nossa Missão</h2>
          <p>
            Nossa missão é proporcionar um ambiente acolhedor e educativo, onde todos
            possam crescer e desenvolver suas habilidades. Acreditamos no poder da
            comunidade e na importância de cuidar uns dos outros.
          </p>
          <h2 className="mb-3">Nossos Valores</h2>
          <ul>
            <li>Empatia</li>
            <li>Respeito</li>
            <li>Transparência</li>
            <li>Colaboração</li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <h2 className="text-center mb-4">Nossa Equipe</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Membro da equipe" className="img-fluid rounded-circle mb-2"/>
          <h5>Maria Silva</h5>
          <p>Coordenadora</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Membro da equipe" className="img-fluid rounded-circle mb-2"/>
          <h5>João Pereira</h5>
          <p>Educador</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Membro da equipe" className="img-fluid rounded-circle mb-2"/>
          <h5>Ana Costa</h5>
          <p>Psicóloga</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
