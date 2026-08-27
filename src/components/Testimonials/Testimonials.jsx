import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal.jsx';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'A Nexlorn conduziu nossa migração para o SAP S/4HANA com muita clareza. O suporte da equipe foi essencial para reduzirmos o tempo de fechamento financeiro.',
    name: 'Marina Costa',
    role: 'CFO, Grupo Vantana',
  },
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
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal as="figure" key={testimonial.name} className="testimonial-card" direction="up" delay={index * 100}>
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
