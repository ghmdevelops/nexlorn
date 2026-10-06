import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '../../data/company.js';
import { SERVICES } from '../Services/Services.jsx';
import './Footer.css';

const COMPANY_LINKS = [
  { label: 'Sobre nós', href: '/#sobre' },
  { label: 'Como funciona', href: '/#processo' },
  { label: 'Projetos recentes', href: '/#projetos' },
  { label: 'Automação para empresas', href: '/automacao-para-empresas/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Perguntas frequentes', href: '/#faq' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="navbar__logo" aria-label="Nexlorn - página inicial">
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>
          <p>
            Estúdio de tecnologia e IA em São Paulo. Criamos sites, apps, sistemas e automações
            para tirar ideias do papel e fazer negócios crescerem.
          </p>
          <div className="footer__social">
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <nav className="footer__column" aria-label="Serviços">
          <h4>Serviços</h4>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a href={service.href ?? '/#servicos'}>{service.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__column" aria-label="Empresa">
          <h4>Empresa</h4>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__column">
          <h4>Contato</h4>
          <address>
            <ul>
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </li>
              <li>{COMPANY.addressDisplay}</li>
              <li>{COMPANY.hoursDisplay}</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span suppressHydrationWarning>© {year} Nexlorn. Todos os direitos reservados.</span>
          <div className="footer__policies">
            <a href="/politica-de-privacidade.html">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
