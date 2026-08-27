import { useEffect, useRef, useState } from 'react';
import { FaAward, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './About.css';

const STATS = [
  { icon: <FaAward />, value: '100%', label: 'Foco em qualidade e resultado' },
  { icon: <FaRocket />, value: '20+', label: 'Projetos entregues' },
  { icon: <FaUsers />, value: '15+', label: 'Especialistas na equipe' },
  { icon: <FaHandshake />, value: '98%', label: 'Taxa de retenção de clientes' },
];

const CODE_SNIPPETS = {
  SAP: `GET /sap/opu/odata/API_SALES_ORDER
Authorization: Bearer {token}

// Sincroniza pedidos em tempo real
if (response.status === 200) {
  integrarComERP(response.data);
}`,
  React: `function Dashboard() {
  const { data } = useMetrics();

  return (
    <Chart data={data} live />
  );
}`,
  IA: `const agente = new Agente({
  modelo: 'nexlorn-ia',
});

await agente.executar(
  'Otimizar fluxo financeiro'
);`,
  RPA: `robot.on('nota:recebida', async (doc) => {
  await validar(doc);
  await lancarNoERP(doc);
});

// -60% em tarefas manuais`,
  Cloud: `service: nexlorn-api
provider: aws
scaling: auto
regions:
  - sa-east-1
status: online ✔`,
};

const CODE_TAGS = Object.keys(CODE_SNIPPETS);

function About() {
  const [activeTag, setActiveTag] = useState(CODE_TAGS[0]);
  const [typed, setTyped] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fullText = CODE_SNIPPETS[activeTag];
    setTyped('');
    let index = 0;

    const typeNext = () => {
      index += 1;
      setTyped(fullText.slice(0, index));
      if (index < fullText.length) {
        timeoutRef.current = setTimeout(typeNext, 14);
      }
    };

    timeoutRef.current = setTimeout(typeNext, 14);

    return () => clearTimeout(timeoutRef.current);
  }, [activeTag]);

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
              <span className="about__frame-title">{activeTag.toLowerCase()}.snippet</span>
            </div>
            <div className="about__frame-body">
              <pre className="about__code">
                <code>
                  {typed}
                  <span className="about__code-cursor" aria-hidden="true" />
                </code>
              </pre>
              <div className="about__chip-row">
                {CODE_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`about__chip${tag === activeTag ? ' about__chip--active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
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
