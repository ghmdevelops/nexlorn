import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { formatBRL, formatNumber } from '../../utils/format.js';

const FIELDS = [
  { key: 'people', label: 'Pessoas que fazem tarefas manuais', min: 1, max: 50, step: 1, format: (v) => v },
  { key: 'hours', label: 'Horas por semana, por pessoa, em tarefas repetitivas', min: 1, max: 40, step: 1, format: (v) => `${v} h` },
  { key: 'cost', label: 'Custo médio da hora de trabalho', min: 15, max: 200, step: 5, format: formatBRL },
  { key: 'share', label: 'Quanto dessas tarefas dá para automatizar', min: 10, max: 90, step: 10, format: (v) => `${v}%` },
];

const WEEKS_PER_MONTH = 52 / 12;

function SavingsCalculator() {
  const [values, setValues] = useState({ people: 3, hours: 8, cost: 35, share: 50 });
  const monthlyHours = values.people * values.hours * WEEKS_PER_MONTH;
  const yearlyCost = monthlyHours * values.cost * 12;
  const freedHours = (monthlyHours * values.share) / 100;
  const yearlySavings = (yearlyCost * values.share) / 100;

  return (
    <section id="calculadora" className="section">
      <div className="container">
        <div className="section-heading center">
          <Reveal as="span" className="section-label" direction="down">
            Calculadora
          </Reveal>
          <Reveal as="h2" delay={80}>
            Quanto o trabalho manual <span className="gradient-text">custa para a sua empresa?</span>
          </Reveal>
          <Reveal as="p" delay={160}>
            Ajuste os valores e veja quanto tempo e dinheiro vão embora todo ano com tarefas que
            poderiam rodar sozinhas.
          </Reveal>
        </div>

        <Reveal className="calculator" delay={120}>
          <div className="calculator__fields">
            {FIELDS.map((field) => (
              <div key={field.key} className="calculator__field">
                <label htmlFor={`calc-${field.key}`}>
                  {field.label}
                  <output htmlFor={`calc-${field.key}`}>{field.format(values[field.key])}</output>
                </label>
                <input
                  id={`calc-${field.key}`}
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={values[field.key]}
                  onChange={(event) => setValues((prev) => ({ ...prev, [field.key]: Number(event.target.value) }))}
                />
              </div>
            ))}
          </div>

          <div className="calculator__result" aria-live="polite">
            <div className="calculator__metric">
              <span>Horas por mês em tarefas manuais</span>
              <strong>{formatNumber(monthlyHours)} h</strong>
            </div>
            <div className="calculator__metric">
              <span>Custo anual do trabalho manual</span>
              <strong>{formatBRL(yearlyCost)}</strong>
            </div>
            <div className="calculator__metric calculator__metric--highlight">
              <span>Automatizando {values.share}% dessas tarefas</span>
              <strong>{formatBRL(yearlySavings)}/ano</strong>
              <span>e cerca de {formatNumber(freedHours)} horas livres por mês</span>
            </div>
            <a href="#contato" className="btn btn-primary">
              Quero meu diagnóstico <FiArrowRight />
            </a>
            <p className="calculator__note">
              Simulação ilustrativa com base nos valores informados. O diagnóstico de automação
              mostra o potencial real do seu negócio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SavingsCalculator;
