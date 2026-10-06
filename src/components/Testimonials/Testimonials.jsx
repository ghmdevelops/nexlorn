import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'O aplicativo mobile desenvolvido pela Nexlorn elevou a experiência dos nossos clientes e aumentou em 35% o engajamento no primeiro trimestre.',
    name: 'Rafael Andrade',
    role: 'Head de Produto, Orbita Pay',
  },
  {
    quote:
      'A automação dos nossos processos internos eliminou horas de trabalho manual por semana. Time extremamente técnico e comprometido com o resultado.',
    name: 'Juliana Prado',
    role: 'Diretora de Operações, Fintera',
  },
];

const PREVIEW_TESTIMONIALS = import.meta.env.DEV
  ? [
      {
        quote:
          'Os fluxos que a Nexlorn montou no n8n tiraram da nossa equipe um monte de tarefas repetitivas. Hoje tudo roda sozinho e a gente foca no que importa.',
        name: 'Exemplo 1',
        role: 'Automação com n8n',
      },
      {
        quote:
          'Nossa loja online ficou rápida, bonita e fácil de gerenciar. A Nexlorn cuidou de tudo, do layout à publicação, e explicou cada etapa sem complicação.',
        name: 'Exemplo 2',
        role: 'Loja online',
      },
      {
        quote:
          'A Nexlorn desenvolveu o mecanismo do nosso SaaS para Instagram com muita qualidade técnica, entregas frequentes e comunicação transparente.',
        name: 'Exemplo 3',
        role: 'SaaS para Instagram',
      },
      {
        quote:
          'Eu tinha só uma ideia e nenhum conhecimento técnico. O time me guiou do protótipo ao lançamento e hoje o app está nas lojas.',
        name: 'Exemplo 4',
        role: 'App iOS e Android',
      },
    ].map((testimonial) => ({ ...testimonial, preview: true }))
  : [];

function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Depoimentos
          </Reveal>
          <Reveal as="h2" delay={80}>
            Quem já trabalhou com a gente <span className="gradient-text">recomenda</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Resultados reais de clientes que confiam na Nexlorn para evoluir seus negócios.
          </Reveal>
        </div>

        <div className="testimonials__grid">
          {[...TESTIMONIALS, ...PREVIEW_TESTIMONIALS].map((testimonial, index) => (
            <Reveal as="figure" key={testimonial.name} className="testimonial-card" direction="up" delay={(index % 3) * 100}>
              {import.meta.env.DEV && testimonial.preview && (
                <span className="testimonial-card__preview">Exemplo · só aparece no npm run dev</span>
              )}
              <FaQuoteLeft className="testimonial-card__quote-icon" />
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
