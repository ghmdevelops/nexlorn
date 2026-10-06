import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Reveal from '../Reveal/Reveal.jsx';
import './FAQ.css';

const FAQS = [
  {
    question: 'Tenho uma ideia de app ou site, mas não sei por onde começar. A Nexlorn ajuda?',
    answer:
      'Sim, e esse é o nosso ponto de partida favorito. Começamos com uma conversa para entender a sua ideia, o seu público e os seus objetivos. Depois indicamos o melhor caminho (site, app, sistema ou automação), montamos um protótipo para você visualizar o resultado e entregamos uma proposta com escopo, prazo e investimento claros.',
  },
  {
    question: 'Quanto custa criar um site ou aplicativo?',
    answer:
      'O investimento depende do escopo: uma landing page é mais simples do que um app com login, pagamentos e painel administrativo. Por isso, depois da conversa inicial, enviamos uma proposta fechada, sem surpresas no meio do caminho. Também podemos começar por um MVP, uma primeira versão enxuta para validar a ideia gastando menos.',
  },
  {
    question: 'Quanto tempo leva para criar um site ou app?',
    answer:
      'Em geral, sites institucionais e landing pages ficam prontos em poucas semanas, enquanto aplicativos e sistemas mais completos levam alguns meses. Antes de começar, você recebe um cronograma com marcos e datas para acompanhar cada etapa com previsibilidade.',
  },
  {
    question: 'Preciso entender de tecnologia para contratar a Nexlorn?',
    answer:
      'Não. Explicamos cada etapa de forma simples, sem tecniquês, e cuidamos de toda a parte técnica: design, desenvolvimento, hospedagem, publicação nas lojas e suporte. Você participa das decisões importantes e acompanha a evolução do projeto.',
  },
  {
    question: 'O site já vem otimizado para o Google e para buscas com IA?',
    answer:
      'Sim. Todos os sites são desenvolvidos com SEO técnico, alta performance, dados estruturados e conteúdo pensado para GEO (Generative Engine Optimization), para que a sua empresa seja encontrada no Google e citada por assistentes de IA como ChatGPT, Gemini e Perplexity.',
  },
  {
    question: 'Vocês publicam o aplicativo na App Store e no Google Play?',
    answer:
      'Sim. Desenvolvemos apps para iOS e Android e cuidamos de todo o processo de publicação nas lojas, além das atualizações e da evolução do app depois do lançamento.',
  },
  {
    question: 'Como a inteligência artificial pode ajudar o meu negócio?',
    answer:
      'Criamos agentes de IA que atendem clientes no WhatsApp e no site, qualificam contatos, respondem dúvidas e executam tarefas repetitivas de forma autônoma, integrados aos sistemas que você já usa, como CRMs e ERPs. O resultado é mais agilidade no atendimento e menos trabalho manual para a sua equipe.',
  },
  {
    question: 'Preciso trocar todo o meu sistema atual para trabalhar com vocês?',
    answer:
      'Não necessariamente. Muitas vezes a melhor solução é integrar, automatizar ou modernizar o que já existe, inclusive sistemas legados em mainframe, Java ou Python. Fazemos um diagnóstico honesto antes de recomendar qualquer substituição.',
  },
  {
    question: 'A Nexlorn atende empresas fora de São Paulo?',
    answer:
      'Sim. Nossa sede fica na Av. Paulista, em São Paulo, e atendemos empreendedores e empresas de todos os portes em todo o Brasil, com reuniões online e acompanhamento remoto.',
  },
  {
    question: 'Como é o suporte após a entrega do projeto?',
    answer:
      'Oferecemos suporte contínuo e evolução da solução após o lançamento, com um time dedicado acompanhando de perto para garantir estabilidade, segurança e resultados a longo prazo.',
  },
  {
    question: 'Como solicito uma proposta?',
    answer:
      'Basta preencher o formulário de contato ou falar diretamente pelo WhatsApp. Nosso time retorna em até 1 dia útil com os próximos passos.',
  },
];

const DEFAULT_TITLE = (
  <>
    Tire suas <span className="gradient-text">dúvidas</span>
  </>
);

const DEFAULT_SUBTITLE =
  'Reunimos as perguntas mais comuns de quem está começando um projeto digital. Não encontrou o que precisa? Fale com a gente.';

function FAQ({ items = FAQS, title = DEFAULT_TITLE, subtitle = DEFAULT_SUBTITLE }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Perguntas frequentes
          </Reveal>
          <Reveal as="h2" delay={80}>
            {title}
          </Reveal>
          <Reveal as="p" delay={160}>
            {subtitle}
          </Reveal>
        </div>

        <div className="faq__list">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <Reveal key={item.question} delay={Math.min(index, 5) * 60}>
                <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                  <h3 className="faq__heading">
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      className="faq__question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <FiChevronDown className="faq__chevron" />
                    </button>
                  </h3>
                  <p
                    id={`faq-answer-${index}`}
                    className="faq__answer"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={!isOpen}
                  >
                    {item.answer}
                  </p>
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
