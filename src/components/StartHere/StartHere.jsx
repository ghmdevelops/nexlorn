import { FiArrowRight } from 'react-icons/fi';
import { FaClock, FaComments, FaLightbulb, FaMobileAlt, FaSearch, FaUserFriends } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './StartHere.css';

const PAINS = [
  {
    icon: <FaLightbulb />,
    pain: 'Tenho uma ideia, mas não sei se ela é viável.',
    answer: 'Avaliamos a ideia com você, definimos o essencial para lançar e mostramos o caminho mais inteligente antes de investir pesado.',
  },
  {
    icon: <FaComments />,
    pain: 'Não entendo nada de tecnologia.',
    answer: 'Sem problema. Explicamos cada etapa de forma simples e cuidamos de toda a parte técnica para você focar no seu negócio.',
  },
  {
    icon: <FaUserFriends />,
    pain: 'Já tentei com freelancer e o projeto não saiu.',
    answer: 'Aqui você conta com um time completo de design, desenvolvimento e IA, com cronograma, contrato e acompanhamento de perto.',
  },
  {
    icon: <FaSearch />,
    pain: 'Meu site está desatualizado e ninguém me encontra.',
    answer: 'Criamos um site rápido, bonito e otimizado para o Google e para buscas com IA, pronto para transformar visitas em clientes.',
  },
  {
    icon: <FaMobileAlt />,
    pain: 'Quero um aplicativo para os meus clientes.',
    answer: 'Desenvolvemos apps para iOS e Android com foco em experiência e cuidamos da publicação na App Store e no Google Play.',
  },
  {
    icon: <FaClock />,
    pain: 'Perco horas com tarefas repetitivas.',
    answer: 'Automatizamos processos e colocamos agentes de IA para trabalhar por você, inclusive fora do horário comercial.',
  },
];

function StartHere() {
  return (
    <section id="comece" className="section start-here">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Comece por aqui
          </Reveal>
          <Reveal as="h2" delay={80}>
            Se você se identifica com alguma dessas frases,{' '}
            <span className="gradient-text">a Nexlorn é para você</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Você não precisa chegar com tudo pronto. Traga a ideia, a dúvida ou o problema e a
            gente monta o plano junto com você.
          </Reveal>
        </div>

        <div className="start-here__grid">
          {PAINS.map((item, index) => (
            <Reveal as="article" key={item.pain} className="start-here__card" delay={(index % 3) * 90}>
              <span className="start-here__icon">{item.icon}</span>
              <h3>“{item.pain}”</h3>
              <p>{item.answer}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="start-here__cta" delay={120}>
          <p>Não achou a sua situação? Conte para a gente, sem compromisso.</p>
          <a href="#contato" className="btn btn-primary">
            Quero conversar sobre minha ideia <FiArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default StartHere;
