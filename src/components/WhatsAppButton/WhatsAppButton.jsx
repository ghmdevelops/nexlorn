import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../../data/company.js';
import './WhatsAppButton.css';

const MESSAGE = 'Oi! 👋 Tenho uma ideia de projeto (site, app, sistema ou automação com IA) e gostaria de conversar com a Nexlorn para entender por onde começar. Qual seria o melhor horário?';

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
      <span>Falar no WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
