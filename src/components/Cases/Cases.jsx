import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { FaInstagram, FaProjectDiagram, FaShoppingCart } from 'react-icons/fa';
import { CASES } from '../../content/cases.js';
import Reveal from '../Reveal/Reveal.jsx';
import './Cases.css';

const ICONS = {
  automation: <FaProjectDiagram />,
  store: <FaShoppingCart />,
  instagram: <FaInstagram />,
};

function Cases() {
  return (
    <section id="projetos" className="section cases">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Projetos recentes
          </Reveal>
          <Reveal as="h2" delay={80}>
            Ideias que já <span className="gradient-text">saíram do papel</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Alguns dos projetos que desenvolvemos recentemente, de automações a lojas online e
            plataformas SaaS.
          </Reveal>
        </div>

        <div className="cases__grid">
          {CASES.map((item, index) => (
            <Reveal as="article" key={item.slug} className="case-card" delay={index * 90}>
              <div className="case-card__top">
                <span className="case-card__icon">{ICONS[item.icon]}</span>
                <span className="case-card__category">{item.category}</span>
              </div>
              <h3>
                <a href={`/projetos/${item.slug}/`}>{item.title}</a>
              </h3>
              <p>{item.description}</p>
              <ul className="case-card__tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={`/projetos/${item.slug}/`} className="case-card__link" aria-label={`Ver o projeto ${item.title}`}>
                Ver projeto <FiArrowRight />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="cases__cta" delay={120}>
          <a href="#contato" className="btn btn-outline">
            Quero um projeto como esses <FiArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export { ICONS as CASE_ICONS };
export default Cases;
