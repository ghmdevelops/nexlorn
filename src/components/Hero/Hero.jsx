import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './Hero.css';

const HERO_TAGS = ['Consultoria SAP', 'Web & Mobile', 'IA & Agentes Inteligentes'];

const HERO_STATS = [
  { value: '20+', label: 'Especialistas dedicados' },
  { value: '20+', label: 'Projetos entregues' },
  { value: '98%', label: 'Clientes satisfeitos' },
];

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal as="span" className="section-label" direction="down">
            Nexlorn Fintech, Tecnologia &amp; IA
          </Reveal>
          <Reveal as="h1" delay={80}>
            Tecnologia e inteligência financeira para <span className="gradient-text">acelerar o seu negócio</span>
          </Reveal>
          <Reveal as="p" className="hero__subtitle" delay={160}>
            Unimos consultoria SAP, desenvolvimento web e mobile, criação de soluções sob medida
            e automação com inteligência artificial e agentes inteligentes para transformar
            operações complexas em resultados simples, seguros e escaláveis.
          </Reveal>

          <Reveal className="hero__tags" delay={240}>
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="hero__tag">
                <FiCheckCircle /> {tag}
              </span>
            ))}
          </Reveal>

          <Reveal className="hero__actions" delay={300}>
            <a href="#contato" className="btn btn-primary">
              Solicitar orçamento <FiArrowRight />
            </a>
            <a href="#servicos" className="btn btn-outline">
              Conhecer serviços
            </a>
          </Reveal>

          <Reveal className="hero__stats" delay={360}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__panel" direction="left" delay={200}>
          <div className="hero__panel-glow" aria-hidden="true" />
          <div className="hero__card hero__card--main">
            <div className="hero__card-top">
              <span>Painel Nexlorn</span>
              <span className="hero__badge">Ao vivo</span>
            </div>
            <div className="hero__metric">
              <span>Eficiência operacional</span>
              <strong>+42%</strong>
            </div>
            <div className="hero__bars">
              <span style={{ height: '40%' }} />
              <span style={{ height: '65%' }} />
              <span style={{ height: '50%' }} />
              <span style={{ height: '85%' }} />
              <span style={{ height: '70%' }} />
              <span style={{ height: '95%' }} />
            </div>
          </div>
          <div className="hero__card hero__card--float">
            <span className="hero__badge hero__badge--gold">SAP S/4HANA</span>
            <p>Integração completa dos seus processos financeiros</p>
          </div>
          <div className="hero__card hero__card--float-2">
            <span className="hero__badge">Agentes de IA</span>
            <p>-60% em tarefas manuais com automação inteligente</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
