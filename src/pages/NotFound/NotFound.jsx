import { FiArrowRight } from 'react-icons/fi';
import { AUTOMATION_PAGE, SERVICE_PAGES } from '../../content/servicePages.js';
import PageHero from '../../components/PageHero/PageHero.jsx';
import '../pages.css';

const LINKS = [
  ...SERVICE_PAGES.map((page) => ({ label: page.name, href: `/${page.slug}/` })),
  { label: 'Automação para empresas', href: `/${AUTOMATION_PAGE.slug}/` },
];

function NotFound() {
  return (
    <>
      <PageHero
        label="Erro 404"
        title="Página não encontrada"
        intro="O endereço que você acessou não existe ou mudou de lugar. Que tal seguir por um destes caminhos?"
      >
        <div className="page-actions">
          <a href="/" className="btn btn-primary">
            Voltar para o início <FiArrowRight />
          </a>
          <a href="/blog/" className="btn btn-outline">
            Ler o blog
          </a>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ul className="link-grid">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label} <FiArrowRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default NotFound;
