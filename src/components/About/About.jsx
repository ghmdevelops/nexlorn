import { useEffect, useRef, useState } from 'react';
import { FaAward, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './About.css';

const STATS = [
  { icon: <FaAward />, value: '100%', label: 'Foco em qualidade e resultado' },
  { icon: <FaRocket />, value: '35+', label: 'Projetos entregues' },
  { icon: <FaUsers />, value: '8+', label: 'Especialistas na equipe' },
  { icon: <FaHandshake />, value: '98%', label: 'Taxa de retenção de clientes' },
];

const CODE_SNIPPETS = {
  Site: `export const metadata = {
  title: 'Sua marca no topo do Google',
};

export default function Home() {
  return <Hero cta="Fale com a gente" />;
}`,
  App: `function App() {
  return (
    <Tabs>
      <Screen name="Início" />
      <Screen name="Pedidos" />
    </Tabs>
  );
} // iOS + Android, um só código`,
  IA: `const agente = new Agente({
  canal: 'whatsapp',
  modelo: 'nexlorn-ia',
});

await agente.atender(cliente); // 24/7`,
  Python: `@agendar("todo dia às 7h")
def processar_pedidos():
    for pedido in erp.novos():
        ia.classificar(pedido)
        crm.registrar(pedido)`,
  Java: `@RestController
class PedidoController {
  @GetMapping("/pedidos")
  List<Pedido> listar() {
    return mainframe.consultar("PEDIDOS");
  }
}`,
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
            Transformamos ideias em <span className="gradient-text">produtos digitais que dão resultado</span>
          </h2>
          <p>
            A Nexlorn nasceu para tornar a tecnologia simples e acessível para quem quer crescer.
            Somos um estúdio de tecnologia e inteligência artificial em São Paulo que cria sites,
            aplicativos, sistemas e automações para empreendedores e empresas de todo o Brasil.
          </p>
          <p>
            Nosso time de design, desenvolvimento e IA acompanha você da primeira conversa ao
            lançamento, e continua ao seu lado depois dele, com segurança, transparência e um
            suporte próximo em cada etapa.
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
