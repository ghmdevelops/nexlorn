import { FaClock, FaComments, FaHeadset, FaLock } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './WhyUs.css';

const REASONS = [
  {
    icon: <FaComments />,
    title: 'Sem tecniquês',
    description: 'Você entende cada decisão do projeto. Explicamos tudo de forma clara, sem jargões e sem surpresas.',
  },
  {
    icon: <FaClock />,
    title: 'Entregas rápidas e no prazo',
    description: 'Sprints curtos, entregas contínuas e um cronograma realista para você acompanhar a evolução semana a semana.',
  },
  {
    icon: <FaHeadset />,
    title: 'Suporte próximo',
    description: 'Um time dedicado que responde rápido, acompanha cada etapa e continua ao seu lado depois do lançamento.',
  },
  {
    icon: <FaLock />,
    title: 'Segurança e LGPD',
    description: 'Boas práticas de segurança da informação e privacidade em todos os projetos, do código à infraestrutura.',
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
            Um parceiro de tecnologia que <span className="gradient-text">fala a sua língua</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Tecnologia de ponta, processo claro e gente de verdade cuidando do seu projeto.
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
