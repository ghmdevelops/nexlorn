import { FaClock, FaHeadset, FaLock, FaSitemap } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './WhyUs.css';

const REASONS = [
  {
    icon: <FaLock />,
    title: 'Segurança de dados',
    description: 'Padrões e práticas rigorosas de segurança da informação em todos os projetos, do código à infraestrutura.',
  },
  {
    icon: <FaHeadset />,
    title: 'Suporte próximo',
    description: 'Time dedicado disponível para acompanhar cada etapa do projeto e responder rapidamente às suas necessidades.',
  },
  {
    icon: <FaSitemap />,
    title: 'Metodologia ágil',
    description: 'Entregas contínuas com sprints curtos, transparência total e ajustes rápidos conforme o negócio evolui.',
  },
  {
    icon: <FaClock />,
    title: 'Entrega no prazo',
    description: 'Planejamento realista e gestão de projeto rigorosa para cumprir prazos sem abrir mão da qualidade.',
  },
];

function WhyUs() {
  return (
    <section id="diferenciais" className="section why-us">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Por que a Nexlorn
          </Reveal>
          <Reveal as="h2" delay={80}>
            Diferenciais que fazem a <span className="gradient-text">diferença no seu resultado</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Combinamos tecnologia, processo e pessoas para entregar projetos que geram valor real.
          </Reveal>
        </div>

        <div className="why-us__grid">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} className="why-us__card" direction="up" delay={index * 90}>
              <span className="why-us__icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
