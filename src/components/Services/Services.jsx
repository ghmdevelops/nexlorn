import { FaBriefcase, FaCogs, FaGraduationCap, FaLaptopCode, FaLightbulb, FaMobileAlt, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './Services.css';

const SERVICES = [
  {
    icon: <FaBriefcase />,
    title: 'Consultoria em Tecnologia',
    description:
      'Diagnosticamos processos, sistemas e times para desenhar a estratégia tecnológica ideal para o momento e os objetivos do seu negócio.',
    items: ['Diagnóstico e roadmap tecnológico', 'Arquitetura e governança de TI', 'Consultoria em transformação digital'],
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Consultoria SAP',
    description:
      'Implementação, migração e suporte SAP S/4HANA para integrar finanças, logística e operações em uma única plataforma.',
    items: ['Implantação e migração', 'Suporte AMS', 'Integrações SAP BTP'],
  },
  {
    icon: <FaLaptopCode />,
    title: 'Desenvolvimento Web',
    description:
      'Plataformas, portais e sistemas web rápidos, seguros e escaláveis construídos sob medida para o seu modelo de negócio.',
    items: ['Sites e portais institucionais', 'Sistemas web sob medida', 'E-commerce e fintechs'],
  },
  {
    icon: <FaMobileAlt />,
    title: 'Desenvolvimento Mobile',
    description:
      'Aplicativos nativos e híbridos para iOS e Android com foco em performance, segurança e experiência do usuário.',
    items: ['Apps iOS e Android', 'Apps financeiros e bancários', 'Integração com APIs e SDKs'],
  },
  {
    icon: <FaLightbulb />,
    title: 'Soluções Sob Medida',
    description:
      'Criamos soluções personalizadas para resolver desafios específicos do seu negócio, do desenho à entrega final.',
    items: ['Consultoria de produto', 'Arquitetura de sistemas', 'Squads dedicados'],
  },
  {
    icon: <FaCogs />,
    title: 'Automação de Processos',
    description:
      'Automatizamos tarefas repetitivas com RPA e integrações inteligentes, reduzindo custos e eliminando erros manuais.',
    items: ['RPA e workflows', 'Integração entre sistemas', 'Dashboards e monitoramento'],
  },
  {
    icon: <FaRobot />,
    title: 'IA & Agentes Inteligentes',
    description:
      'Criamos agentes de IA e soluções de automação inteligente que entendem contexto, tomam decisões e executam tarefas complexas de forma autônoma.',
    items: ['Agentes de IA personalizados', 'Automação com machine learning', 'Copilotos e chatbots corporativos'],
  },
  {
    icon: <FaGraduationCap />,
    title: 'Treinamentos & Cursos',
    description:
      'Capacitamos equipes e lideranças com treinamentos práticos em SAP, desenvolvimento, automação e inteligência artificial.',
    items: ['Cursos in-company', 'Treinamento SAP e dev', 'Capacitação em IA para equipes'],
  },
];

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            O que fazemos
          </Reveal>
          <Reveal as="h2" delay={80}>
            Soluções completas para <span className="gradient-text">transformar o seu negócio</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Da consultoria estratégica ao SAP e à criação de agentes de IA, a Nexlorn entrega
            tecnologia de ponta a ponta para empresas que querem crescer com inteligência,
            segurança e eficiência.
          </Reveal>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Reveal as="article" key={service.title} className="service-card" delay={(index % 4) * 90}>
              <div className="service-card__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contato" className="service-card__link">
                Saiba mais <FiArrowUpRight />
              </a>
            </Reveal>
          ))}

          <Reveal as="article" className="service-card service-card--cta" delay={(SERVICES.length % 4) * 90}>
            <h3>Não encontrou o que precisa?</h3>
            <p>Conte pra gente o seu desafio e criamos uma solução sob medida para o seu negócio.</p>
            <a href="#contato" className="btn btn-primary btn-block">
              Falar com um especialista
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Services;
