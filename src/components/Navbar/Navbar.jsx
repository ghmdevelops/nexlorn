import { useEffect, useState } from 'react';
import { FiArrowRight, FiMail, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import { COMPANY } from '../../data/company.js';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Automação', href: '/automacao-para-empresas/' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/#faq' },
];

function Navbar({ contactHref = '#contato' }) {
  const links = [...NAV_LINKS, { label: 'Contato', href: contactHref }];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="/" className="navbar__logo" aria-label="Nexlorn - página inicial" onClick={() => setOpen(false)}>
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>

          <nav className="navbar__links" aria-label="Menu principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={contactHref} className="btn btn-primary navbar__cta">
              Começar projeto
            </a>
          </nav>

          <button
            className="navbar__toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`navbar__overlay ${open ? 'navbar__overlay--open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-header">
          <a href="/" className="navbar__logo" aria-label="Nexlorn - página inicial" onClick={() => setOpen(false)}>
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>
          <button className="navbar__close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        <nav className="navbar__drawer-links" aria-label="Menu">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="navbar__drawer-index">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__drawer-footer">
          <a href={contactHref} className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
            Começar meu projeto <FiArrowRight />
          </a>
          <div className="navbar__drawer-contact">
            <a href={`mailto:${COMPANY.email}`}>
              <FiMail /> {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone}`}>
              <FiPhone /> {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
