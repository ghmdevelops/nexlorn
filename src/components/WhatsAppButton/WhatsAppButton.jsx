import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const PHONE = '5511981835197';
const MESSAGE = 'Olá! Vi o site da Nexlorn e quero saber mais sobre as soluções de vocês.';

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
