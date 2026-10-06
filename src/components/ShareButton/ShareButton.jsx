import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { FiCheck, FiCopy, FiShare2 } from 'react-icons/fi';
import './ShareButton.css';

const SHARE_TITLE = 'Nexlorn | Criação de Sites, Apps e Automação com IA';
const SHARE_TEXT =
  'Tem uma ideia de app ou site e não sabe por onde começar? Conheça a Nexlorn: sites, aplicativos, sistemas e automação com inteligência artificial, do zero ao lançamento.';

function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShare = async () => {
    const shareData = { title: SHARE_TITLE, text: SHARE_TEXT, url: window.location.href };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // usuário cancelou o compartilhamento, sem problema
      }
      return;
    }

    setOpen((prev) => !prev);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível
    }
  };

  const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
  const text = encodeURIComponent(SHARE_TEXT);

  return (
    <div className="share-button" ref={containerRef}>
      {open && (
        <div className="share-button__menu">
          <a
            className="share-button__option"
            href={`https://wa.me/?text=${text}%20${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            className="share-button__option"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            className="share-button__option"
            href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter /> X (Twitter)
          </a>
          <button type="button" className="share-button__option" onClick={handleCopy}>
            {copied ? <FiCheck /> : <FiCopy />} {copied ? 'Link copiado!' : 'Copiar link'}
          </button>
        </div>
      )}

      <button
        type="button"
        className="share-button__trigger"
        onClick={handleShare}
        aria-label="Compartilhar site"
        aria-expanded={open}
      >
        <FiShare2 />
        <span>Compartilhar</span>
      </button>
    </div>
  );
}

export default ShareButton;
