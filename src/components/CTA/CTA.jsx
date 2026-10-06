import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../../data/company.js';
import Reveal from '../Reveal/Reveal.jsx';
import './CTA.css';

function CTA() {
  return (
    <section className="section-tight cta">
      <Reveal as="div" className="container cta__box" direction="zoom">
        <div className="cta__content">
          <h2>A sua ideia merece sair do papel. Que tal começar hoje?</h2>
          <p>
            Conte o que você imagina e receba um caminho claro para lançar o seu site, app ou
            automação com IA. Sem compromisso e sem tecniquês.
          </p>
        </div>
        <div className="cta__actions">
          <a href="#contato" className="btn btn-primary">
            Começar meu projeto <FiArrowRight />
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline cta__phone"
          >
            <FaWhatsapp /> Chamar no WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CTA;
