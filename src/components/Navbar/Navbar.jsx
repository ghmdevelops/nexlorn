import { useEffect, useState } from 'react';
import { FiArrowRight, FiMail, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

function Navbar() {
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
          <a href="#inicio" className="navbar__logo" onClick={() => setOpen(false)}>
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>

          <nav className="navbar__links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn btn-primary navbar__cta">
              Fale Conosco
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
          <a href="#inicio" className="navbar__logo" onClick={() => setOpen(false)}>
            <span className="navbar__logo-mark">N</span>
            <span className="navbar__logo-text">
              Nex<span className="gradient-text">lorn</span>
            </span>
          </a>
          <button className="navbar__close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        <nav className="navbar__drawer-links">
          {NAV_LINKS.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="navbar__drawer-index">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__drawer-footer">
          <a href="#contato" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
            Fale Conosco <FiArrowRight />
          </a>
          <div className="navbar__drawer-contact">
            <a href="mailto:contato@nexlorn.com">
              <FiMail /> contato@nexlorn.com
            </a>
            <a href="tel:+5511981835197">
              <FiPhone /> (11) 98183-5197
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
