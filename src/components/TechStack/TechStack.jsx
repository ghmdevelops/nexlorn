import { FaAws, FaJava, FaRobot, FaServer } from 'react-icons/fa';
import {
  SiDocker,
  SiFlutter,
  SiGooglecloud,
  SiGooglegemini,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';
import './TechStack.css';

const TECHS = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiReact />, name: 'React Native' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <FaServer />, name: 'Mainframe' },
  { icon: <FaRobot />, name: 'Agentes de IA' },
  { icon: <SiLangchain />, name: 'LangChain' },
  { icon: <SiGooglegemini />, name: 'Gemini' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <SiGooglecloud />, name: 'Google Cloud' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
];

function TechList({ hidden = false }) {
  return (
    <ul className="tech-stack__list" aria-hidden={hidden || undefined}>
      {TECHS.map((tech) => (
        <li key={tech.name} className="tech-stack__item">
          {tech.icon}
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

function TechStack() {
  return (
    <section className="tech-stack" aria-labelledby="tech-stack-title">
      <div className="container">
        <h2 id="tech-stack-title" className="tech-stack__title">
          Seu projeto construído com as tecnologias mais modernas do mercado
        </h2>
      </div>
      <div className="tech-stack__marquee">
        <div className="tech-stack__track">
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
