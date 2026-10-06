import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { SERVICE_PAGES } from '../../content/servicePages.js';
import Contact from '../../components/Contact/Contact.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import PageHero from '../../components/PageHero/PageHero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import '../pages.css';

function CasePage({ route }) {
  const { item } = route;
  const service = SERVICE_PAGES.find((page) => page.slug === item.service);

  return (
    <>
      <PageHero breadcrumbs={route.breadcrumbs} label={item.category} title={item.title} intro={item.description}>
        <ul className="chip-list">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container case-detail">
          <div className="case-detail__grid">
            <Reveal as="article" className="feature-card">
              <span className="section-label">O desafio</span>
              <p>{item.challenge}</p>
            </Reveal>
            <Reveal as="article" className="feature-card" delay={120}>
              <span className="section-label">A solução</span>
              <p>{item.solution}</p>
            </Reveal>
          </div>

          <Reveal className="case-detail__block">
            <h2>O que entregamos</h2>
            <ul className="check-list">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable}>
                  <FiCheck /> {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>

          {item.results.length > 0 && (
            <Reveal className="case-detail__block">
              <h2>Resultados</h2>
              <ul className="check-list">
                {item.results.map((result) => (
                  <li key={result}>
                    <FiCheck /> {result}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {service && (
            <Reveal className="case-detail__block">
              <a href={`/${service.slug}/`} className="btn btn-outline">
                Conheça o serviço de {service.name.toLowerCase()} <FiArrowRight />
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <CTA />
      <Contact defaultService={item.serviceKey} />
    </>
  );
}

export default CasePage;
