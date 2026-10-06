import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaChartLine, FaCogs, FaFileInvoiceDollar, FaHeadset, FaUserFriends } from 'react-icons/fa';
import Contact from '../../components/Contact/Contact.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import FAQ from '../../components/FAQ/FAQ.jsx';
import PageHero from '../../components/PageHero/PageHero.jsx';
import Process from '../../components/Process/Process.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import SavingsCalculator from './SavingsCalculator.jsx';
import '../pages.css';

const AREA_ICONS = {
  atendimento: <FaHeadset />,
  vendas: <FaChartLine />,
  financeiro: <FaFileInvoiceDollar />,
  operacao: <FaCogs />,
  rh: <FaUserFriends />,
};

function AutomationPage({ route }) {
  const { page } = route;

  return (
    <>
      <PageHero breadcrumbs={route.breadcrumbs} label="Automação para empresas" title={page.h1} intro={page.intro}>
        <div className="page-actions">
          <a href="#contato" className="btn btn-primary">
            Quero um diagnóstico de automação <FiArrowRight />
          </a>
          <a href="#calculadora" className="btn btn-outline">
            Calcular quanto eu perco
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <Reveal as="span" className="section-label" direction="down">
              Sinais de alerta
            </Reveal>
            <Reveal as="h2" delay={80}>
              Está na hora de automatizar se <span className="gradient-text">isso acontece aí</span>
            </Reveal>
          </div>
          <Reveal as="ul" className="check-list check-list--grid" delay={120}>
            {page.signs.map((sign) => (
              <li key={sign}>
                <FiCheck /> {sign}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading center">
            <Reveal as="span" className="section-label" direction="down">
              O que dá para automatizar
            </Reveal>
            <Reveal as="h2" delay={80}>
              Exemplos práticos <span className="gradient-text">em cada área da empresa</span>
            </Reveal>
            <Reveal as="p" delay={160}>
              Automações que já resolvem a rotina de empresas de todos os tamanhos, integradas às
              ferramentas que você já usa.
            </Reveal>
          </div>
          <div className="feature-grid">
            {page.areas.map((area, index) => (
              <Reveal as="article" key={area.key} className="feature-card" delay={(index % 3) * 90}>
                <span className="feature-card__icon">{AREA_ICONS[area.key]}</span>
                <h3>{area.title}</h3>
                <ul className="check-list">
                  {area.items.map((item) => (
                    <li key={item}>
                      <FiCheck /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal as="article" className="feature-card" delay={180}>
              <h3>Não viu o seu processo aqui?</h3>
              <p>
                Se uma tarefa é repetitiva e segue regras claras, provavelmente dá para automatizar.
                Conte para a gente como ela funciona hoje.
              </p>
              <a href="#contato" className="btn btn-outline" style={{ marginTop: 20 }}>
                Falar com um especialista
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <SavingsCalculator />

      <Process
        steps={page.steps}
        label="Diagnóstico de automação"
        title={
          <>
            Comece com <span className="gradient-text">3 automações prioritárias</span>
          </>
        }
        subtitle="Você conta como a sua empresa funciona hoje e recebe um plano claro, começando pelo que traz mais retorno."
      />

      <FAQ
        items={page.faqs}
        title={
          <>
            Dúvidas sobre <span className="gradient-text">automação</span>
          </>
        }
        subtitle="O que as empresas mais perguntam antes de automatizar os primeiros processos."
      />

      <CTA />
      <Contact
        defaultService={page.serviceKey}
        messagePlaceholder="Conte quais tarefas a sua equipe faz no manual hoje e quanto tempo elas tomam"
      />
    </>
  );
}

export default AutomationPage;
