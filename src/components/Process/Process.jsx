import Reveal from '../Reveal/Reveal.jsx';
import './Process.css';

const STEPS = [
  {
    number: '01',
    title: 'Conversa inicial',
    description: 'Você conta a sua ideia ou desafio. Entendemos o seu negócio, o seu público e o que precisa sair do papel primeiro.',
  },
  {
    number: '02',
    title: 'Protótipo e proposta',
    description: 'Você vê como o seu site, app ou sistema vai ficar antes de começar e recebe escopo, prazo e investimento claros.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos em sprints ágeis, com entregas frequentes para você acompanhar, testar e opinar em cada etapa.',
  },
  {
    number: '04',
    title: 'Lançamento e evolução',
    description: 'Colocamos no ar, publicamos nas lojas, acompanhamos os resultados e seguimos evoluindo o seu produto.',
  },
];

const DEFAULT_TITLE = (
  <>
    Da ideia ao lançamento em <span className="gradient-text">4 passos simples</span>
  </>
);

function Process({
  steps = STEPS,
  label = 'Como funciona',
  title = DEFAULT_TITLE,
  subtitle = 'Você sabe exatamente o que está acontecendo em cada fase do seu projeto.',
}) {
  return (
    <section id="processo" className="section process">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            {label}
          </Reveal>
          <Reveal as="h2" delay={80}>
            {title}
          </Reveal>
          <Reveal as="p" delay={160}>
            {subtitle}
          </Reveal>
        </div>

        <ol className="process__steps">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.number} className="process__step" direction="up" delay={index * 100}>
              <div className="process__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <span className="process__connector" aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { STEPS };
export default Process;
