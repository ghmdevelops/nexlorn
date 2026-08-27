import { FaAward, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './About.css';

const STATS = [
  { icon: <FaAward />, value: '10+', label: 'Anos de experiência' },
  { icon: <FaRocket />, value: '180+', label: 'Projetos entregues' },
  { icon: <FaUsers />, value: '60+', label: 'Especialistas na equipe' },
  { icon: <FaHandshake />, value: '98%', label: 'Taxa de retenção de clientes' },
];

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <Reveal className="about__visual" direction="left">
          <div className="about__visual-glow" aria-hidden="true" />
          <div className="about__frame">
            <div className="about__frame-header">
              <span className="about__dot" />
              <span className="about__dot" />
              <span className="about__dot" />
            </div>
            <div className="about__frame-body">
              <div className="about__line" style={{ width: '80%' }} />
              <div className="about__line" style={{ width: '55%' }} />
              <div className="about__line" style={{ width: '68%' }} />
              <div className="about__chip-row">
                <span className="about__chip">SAP</span>
                <span className="about__chip">React</span>
                <span className="about__chip">IA</span>
                <span className="about__chip">RPA</span>
                <span className="about__chip">Cloud</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__content" direction="right" delay={120}>
          <span className="section-label">Sobre a Nexlorn</span>
          <h2>
            Tecnologia com propósito para negócios que <span className="gradient-text">não param de crescer</span>
          </h2>
          <p>
            A Nexlorn nasceu para simplificar a relação entre tecnologia e resultado financeiro.
            Combinamos consultoria SAP, engenharia de software e inteligência artificial para criar
            soluções que reduzem custos, eliminam retrabalho e aceleram a tomada de decisão das
            empresas que confiam em nós.
          </p>
          <p>
            Nossa equipe multidisciplinar acompanha o projeto do diagnóstico à entrega, garantindo
            segurança, escalabilidade e um suporte próximo em cada etapa.
          </p>

          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-icon">{stat.icon}</span>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
