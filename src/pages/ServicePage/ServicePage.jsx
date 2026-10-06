import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { POSTS } from '../../content/posts.js';
import { COMPANY } from '../../data/company.js';
import Contact from '../../components/Contact/Contact.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import FAQ from '../../components/FAQ/FAQ.jsx';
import PageHero from '../../components/PageHero/PageHero.jsx';
import PostList from '../../components/PostList/PostList.jsx';
import Process from '../../components/Process/Process.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import '../pages.css';

function ServicePage({ route }) {
  const { page } = route;
  const posts = POSTS.filter((post) => page.relatedPosts.includes(post.slug));

  return (
    <>
      <PageHero breadcrumbs={route.breadcrumbs} label={page.name} title={page.h1} intro={page.intro}>
        <ul className="page-highlights">
          {page.highlights.map((item) => (
            <li key={item}>
              <FiCheck /> {item}
            </li>
          ))}
        </ul>
        <div className="page-actions">
          <a href="#contato" className="btn btn-primary">
            Pedir uma proposta <FiArrowRight />
          </a>
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaWhatsapp /> Falar no WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <Reveal as="span" className="section-label" direction="down">
              O que entregamos
            </Reveal>
            <Reveal as="h2" delay={80}>
              {page.name}: <span className="gradient-text">tudo o que o seu projeto precisa</span>
            </Reveal>
          </div>
          <div className="feature-grid">
            {page.deliverables.map((item, index) => (
              <Reveal as="article" key={item.title} className="feature-card" delay={(index % 3) * 90}>
                <span className="feature-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <Reveal>
            <span className="section-label">Para quem é</span>
            <h2>Feito para quem quer resultado</h2>
            <ul className="check-list">
              {page.audience.map((item) => (
                <li key={item}>
                  <FiCheck /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="section-label">Tecnologias</span>
            <h2>Tecnologia moderna e confiável</h2>
            <ul className="chip-list">
              {page.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process />

      <FAQ
        items={page.faqs}
        title={
          <>
            Dúvidas sobre <span className="gradient-text">{page.name.toLowerCase()}</span>
          </>
        }
        subtitle="As perguntas que mais recebemos sobre este serviço. Se a sua não estiver aqui, fale com a gente."
      />

      {posts.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Conteúdo</span>
              <h2>Leituras recomendadas</h2>
            </div>
            <PostList posts={posts} />
          </div>
        </section>
      )}

      <CTA />
      <Contact defaultService={page.serviceKey} />
    </>
  );
}

export default ServicePage;
