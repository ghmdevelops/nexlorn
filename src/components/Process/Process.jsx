import Reveal from '../Reveal/Reveal.jsx';
import './Process.css';

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos o seu negócio, processos e desafios para mapear as melhores oportunidades.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Desenhamos a arquitetura da solução, cronograma e indicadores de sucesso do projeto.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos a solução em sprints ágeis, com entregas incrementais e validação contínua.',
  },
  {
    number: '04',
    title: 'Suporte e Evolução',
    description: 'Acompanhamos a operação, monitoramos resultados e evoluímos a solução continuamente.',
  },
];

function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Como trabalhamos
          </Reveal>
          <Reveal as="h2" delay={80}>
            Um processo claro do início ao <span className="gradient-text">resultado final</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Transparência e previsibilidade em cada etapa do seu projeto.
          </Reveal>
        </div>

        <div className="process__steps">
          {STEPS.map((step, index) => (
            <Reveal as="div" key={step.number} className="process__step" direction="up" delay={index * 100}>
              <div className="process__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < STEPS.length - 1 && <span className="process__connector" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
