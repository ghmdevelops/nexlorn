import { FiArrowRight, FiCheck, FiCheckCircle, FiClock } from 'react-icons/fi';
import { FaApple, FaGooglePlay, FaRobot } from 'react-icons/fa';
import './Hero.css';

const HERO_TAGS = ['Sites que vendem', 'Apps iOS e Android', 'Automação com IA'];

const HERO_STATS = [
  { value: '8+', label: 'Especialistas dedicados' },
  { value: '35+', label: 'Projetos entregues' },
  { value: '98%', label: 'Clientes satisfeitos' },
];

const JOURNEY = [
  { label: 'Ideia e objetivos', status: 'done' },
  { label: 'Protótipo aprovado', status: 'done' },
  { label: 'Desenvolvimento', status: 'active', progress: 80 },
  { label: 'Lançamento', status: 'next' },
];

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label hero__label anim-in">
            <span className="hero__pulse" aria-hidden="true" />
            Estúdio de tecnologia e IA em São Paulo
          </span>
          <h1 className="anim-slide">
            Tem uma ideia de app ou site e{' '}
            <span className="gradient-text">não sabe por onde começar?</span>
          </h1>
          <p className="hero__subtitle anim-in" style={{ animationDelay: '120ms' }}>
            A Nexlorn tira a sua ideia do papel, do primeiro rascunho ao lançamento. Criamos
            sites, aplicativos, sistemas sob medida e automações com inteligência artificial, com
            design moderno e um time que explica tudo sem tecniquês.
          </p>

          <div className="hero__tags anim-in" style={{ animationDelay: '200ms' }}>
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="hero__tag">
                <FiCheckCircle /> {tag}
              </span>
            ))}
          </div>

          <div className="hero__actions anim-in" style={{ animationDelay: '260ms' }}>
            <a href="#contato" className="btn btn-primary">
              Quero tirar minha ideia do papel <FiArrowRight />
            </a>
            <a href="#processo" className="btn btn-outline">
              Ver como funciona
            </a>
          </div>

          <div className="hero__stats anim-in" style={{ animationDelay: '320ms' }}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__panel anim-in" style={{ animationDelay: '200ms' }} aria-hidden="true">
          <div className="hero__panel-glow" />
          <div className="hero__card hero__card--main">
            <div className="hero__card-top">
              <span>Seu projeto</span>
              <span className="hero__badge">Em andamento</span>
            </div>
            <ol className="hero__journey">
              {JOURNEY.map((step) => (
                <li key={step.label} className={`hero__step hero__step--${step.status}`}>
                  <span className="hero__step-icon">
                    {step.status === 'done' && <FiCheck />}
                    {step.status === 'active' && <span className="hero__step-dot" />}
                    {step.status === 'next' && <FiClock />}
                  </span>
                  <div className="hero__step-body">
                    <span>{step.label}</span>
                    {step.progress && (
                      <div className="hero__progress">
                        <span style={{ width: `${step.progress}%` }} />
                      </div>
                    )}
                  </div>
                  {step.progress && <strong>{step.progress}%</strong>}
                </li>
              ))}
            </ol>
          </div>
          <div className="hero__card hero__card--float">
            <span className="hero__badge hero__badge--gold">App publicado</span>
            <p className="hero__stores">
              <FaApple /> <FaGooglePlay /> Na App Store e no Google Play
            </p>
          </div>
          <div className="hero__card hero__card--float-2">
            <span className="hero__badge">
              <FaRobot /> Agente de IA
            </span>
            <p>Atende seus clientes no WhatsApp 24 horas por dia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
