import { useEffect, useState } from 'react';
import { FiShield, FiX } from 'react-icons/fi';
import './CookieConsent.css';

const STORAGE_KEY = 'nexlorn_cookie_consent';

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <button
        className="cookie-consent__close"
        aria-label="Fechar aviso de cookies"
        onClick={() => saveConsent('essential-only')}
      >
        <FiX />
      </button>

      <div className="cookie-consent__icon">
        <FiShield />
      </div>

      <div className="cookie-consent__content">
        <h3>Nós usamos cookies</h3>
        <p>
          Utilizamos cookies essenciais para o funcionamento do site e, com seu consentimento,
          cookies analíticos para melhorar sua experiência, em conformidade com a LGPD.
        </p>

        {detailsOpen && (
          <ul className="cookie-consent__list">
            <li>
              <strong>Essenciais:</strong> necessários para navegação e formulário de contato.
            </li>
            <li>
              <strong>Analíticos:</strong> nos ajudam a entender como o site é utilizado (opcional).
            </li>
          </ul>
        )}

        <button
          type="button"
          className="cookie-consent__details-toggle"
          onClick={() => setDetailsOpen((prev) => !prev)}
        >
          {detailsOpen ? 'Ocultar detalhes' : 'Ver detalhes'}
        </button>
      </div>

      <div className="cookie-consent__actions">
        <button type="button" className="btn btn-outline" onClick={() => saveConsent('essential-only')}>
          Apenas essenciais
        </button>
        <button type="button" className="btn btn-primary" onClick={() => saveConsent('all')}>
          Aceitar todos
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
