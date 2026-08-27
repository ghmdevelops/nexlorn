import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './CTA.css';

function CTA() {
  return (
    <section className="section-tight cta">
      <Reveal as="div" className="container cta__box" direction="zoom">
        <div className="cta__content">
          <h2>Pronto para transformar a tecnologia do seu negócio?</h2>
          <p>
            Fale com nossos especialistas e descubra como SAP, desenvolvimento e agentes de IA
            podem acelerar seus resultados.
          </p>
        </div>
        <div className="cta__actions">
          <a href="#contato" className="btn btn-primary">
            Solicitar proposta <FiArrowRight />
          </a>
          <a href="tel:+5511981835197" className="btn btn-outline cta__phone">
            <FiPhoneCall /> (11) 98183-5197
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CTA;
