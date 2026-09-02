import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const PHONE = '5511981835197';
const MESSAGE = 'Oi! 👋 Estou explorando soluções para potencializar meu negócio e a Nexlorn chamou minha atenção. Gostaria de agendar uma consultoria para entender melhor como vocês podem ajudar. Qual seria o melhor horário?';

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
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
