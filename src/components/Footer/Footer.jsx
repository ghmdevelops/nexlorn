import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const FOOTER_LINKS = {
  Serviços: ['Consultoria em Tecnologia', 'Consultoria SAP', 'Desenvolvimento Web', 'Desenvolvimento Mobile', 'Soluções Sob Medida', 'Automação', 'IA & Agentes Inteligentes', 'Treinamentos & Cursos'],
  Empresa: ['Sobre nós', 'Diferenciais', 'Depoimentos', 'Carreiras'],
  Contato: ['contato@nexlorn.com', '(11) 98183-5197', 'Av. Paulista, 1000 - São Paulo, SP'],
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="navbar__logo">
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>
          <p>
            Tecnologia e inteligência financeira para negócios que querem crescer com segurança
            e eficiência.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/5511981835197" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className="footer__column">
            <h4>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Nexlorn. Todos os direitos reservados.</span>
          <div className="footer__policies">
            <a href="/politica-de-privacidade.html">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
