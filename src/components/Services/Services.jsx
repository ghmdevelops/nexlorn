import { FaBriefcase, FaCogs, FaCubes, FaGraduationCap, FaLaptopCode, FaMobileAlt, FaRobot, FaServer } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './Services.css';

const SERVICES = [
  {
    icon: <FaLaptopCode />,
    title: 'Criação de Sites',
    description:
      'Sites institucionais, landing pages e lojas virtuais rápidos, bonitos e otimizados para aparecer no Google e nas buscas com IA.',
    items: ['Sites e landing pages que convertem', 'Lojas virtuais e e-commerce', 'SEO e GEO desde o primeiro dia'],
    href: '/criacao-de-sites/',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Desenvolvimento de Apps',
    description:
      'Aplicativos para iOS e Android com design intuitivo, alta performance e publicação na App Store e no Google Play.',
    items: ['Apps iOS e Android', 'MVP para validar a sua ideia', 'Publicação nas lojas'],
    href: '/desenvolvimento-de-apps/',
  },
  {
    icon: <FaCubes />,
    title: 'Sistemas Sob Medida',
    description:
      'Plataformas, portais, SaaS e painéis de gestão construídos sob medida para o jeito que o seu negócio funciona.',
    items: ['Plataformas web e SaaS', 'Portais e áreas do cliente', 'Dashboards e painéis de gestão'],
    href: '/sistemas-sob-medida/',
  },
  {
    icon: <FaRobot />,
    title: 'IA & Agentes Inteligentes',
    description:
      'Agentes de IA que atendem clientes, qualificam contatos e executam tarefas de forma autônoma, integrados aos seus sistemas.',
    items: ['Atendimento com IA no WhatsApp', 'Agentes de IA personalizados', 'Copilotos e chatbots corporativos'],
    href: '/automacao-com-ia/',
  },
  {
    icon: <FaCogs />,
    title: 'Automação de Processos',
    description:
      'Automatizamos tarefas repetitivas com Python, RPA e integrações inteligentes, reduzindo custos e eliminando erros manuais.',
    items: ['Automação com Python e RPA', 'Integração entre sistemas e APIs', 'Dashboards e monitoramento'],
    href: '/automacao-para-empresas/',
  },
  {
    icon: <FaServer />,
    title: 'Modernização de Sistemas',
    description:
      'Modernizamos sistemas legados em mainframe, Java e Python com APIs, front-ends atuais e IA, sem parar a sua operação.',
    items: ['Mainframe, Java e Python', 'APIs e novos front-ends', 'IA aplicada a sistemas legados'],
    href: '/modernizacao-de-sistemas/',
  },
  {
    icon: <FaBriefcase />,
    title: 'Consultoria em Tecnologia',
    description:
      'Ajudamos você a escolher o caminho certo: escopo, MVP, arquitetura e roadmap para crescer com segurança e sem desperdício.',
    items: ['Validação de ideia e MVP', 'Arquitetura e roadmap tecnológico', 'Transformação digital'],
  },
  {
    icon: <FaGraduationCap />,
    title: 'Treinamentos & Cursos',
    description:
      'Capacitamos equipes e lideranças com treinamentos práticos em desenvolvimento, automação e inteligência artificial.',
    items: ['Cursos in-company', 'Treinamentos em desenvolvimento', 'Capacitação em IA para equipes'],
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
            Tudo o que você precisa para <span className="gradient-text">crescer no digital</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Do site que coloca a sua marca no Google ao app na mão dos seus clientes e aos agentes
            de IA que trabalham 24 horas por dia: a Nexlorn entrega tecnologia de ponta a ponta,
            em um só lugar.
          </Reveal>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Reveal as="article" key={service.title} className="service-card" delay={(index % 3) * 90}>
              <div className="service-card__icon">{service.icon}</div>
              <h3>{service.href ? <a href={service.href}>{service.title}</a> : service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={service.href ?? '#contato'} className="service-card__link" aria-label={`Saiba mais sobre ${service.title}`}>
                Saiba mais <FiArrowUpRight />
              </a>
            </Reveal>
          ))}

          <Reveal as="article" className="service-card service-card--cta" delay={(SERVICES.length % 3) * 90}>
            <h3>Não encontrou o que precisa?</h3>
            <p>Conte o seu desafio e criamos uma solução sob medida para o seu negócio.</p>
            <a href="#contato" className="btn btn-primary btn-block">
              Falar com um especialista
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { SERVICES };
export default Services;
