import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './FAQ.css';

const FAQS = [
  {
    question: 'Quanto tempo leva um projeto de consultoria SAP ou desenvolvimento?',
    answer:
      'O prazo varia com a complexidade do projeto. Depois do diagnóstico inicial, entregamos um cronograma claro com marcos e datas antes de começar, para você acompanhar cada etapa com previsibilidade.',
  },
  {
    question: 'A Nexlorn atende empresas de qualquer porte?',
    answer:
      'Sim. Atendemos desde empresas em crescimento até grandes operações que precisam de consultoria SAP, desenvolvimento web/mobile ou automação com IA, sempre com uma solução dimensionada para o seu momento.',
  },
  {
    question: 'Como funcionam os agentes de IA desenvolvidos pela Nexlorn?',
    answer:
      'Criamos agentes personalizados que entendem o contexto do seu negócio, tomam decisões com base em dados reais e executam tarefas de forma autônoma, integrados aos seus sistemas existentes (SAP, CRMs, ERPs e outras plataformas).',
  },
  {
    question: 'Preciso trocar todo o meu sistema atual para trabalhar com vocês?',
    answer:
      'Não necessariamente. Muitas vezes a melhor solução é integrar, automatizar ou evoluir o que já existe. Fazemos um diagnóstico honesto antes de recomendar qualquer substituição de sistema.',
  },
  {
    question: 'Como é o suporte após a entrega do projeto?',
    answer:
      'Oferecemos suporte contínuo (AMS) e evolução da solução após o go-live, com um time dedicado acompanhando de perto para garantir estabilidade e resultados a longo prazo.',
  },
  {
    question: 'Como solicito uma proposta?',
    answer:
      'Basta preencher o formulário de contato ou falar diretamente pelo WhatsApp. Nosso time comercial retorna em até 1 dia útil com os próximos passos.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Perguntas frequentes
          </Reveal>
          <Reveal as="h2" delay={80}>
            Tire suas <span className="gradient-text">dúvidas</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Reunimos as perguntas mais comuns sobre como trabalhamos. Não encontrou o que precisa?
            Fale com a gente.
          </Reveal>
        </div>

        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <Reveal key={item.question} delay={index * 60}>
                <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <FiChevronDown className="faq__chevron" />
                  </button>
                  {isOpen && <p className="faq__answer">{item.answer}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { FAQS };
export default FAQ;
