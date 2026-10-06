import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { trackEvent } from '../../analytics.js';
import { COMPANY } from '../../data/company.js';
import Reveal from '../Reveal/Reveal.jsx';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICE_OPTIONS = [
  'Ainda não sei, quero orientação',
  'Criação de Sites',
  'Desenvolvimento de Apps',
  'Sistemas Sob Medida',
  'IA & Agentes Inteligentes',
  'Automação de Processos',
  'Modernização de Sistemas',
  'Consultoria em Tecnologia',
  'Treinamentos & Cursos',
];

const DEFAULT_PLACEHOLDER = 'Conte a sua ideia, o que você precisa ou o desafio que quer resolver';

function Contact({ defaultService = SERVICE_OPTIONS[0], messagePlaceholder = DEFAULT_PLACEHOLDER }) {
  const initialState = { name: '', email: '', company: '', phone: '', service: defaultService, message: '' };
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Configuração do EmailJS ausente. Verifique o arquivo .env');
      setStatus('config-error');
      return;
    }

    setStatus('sending');

    const fullMessage = `${form.message}\n\nEmpresa: ${form.company || 'Não informado'}\nTelefone: ${form.phone || 'Não informado'}\nServiço de interesse: ${form.service}`;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          from_name: form.name,
          email: form.email,
          from_email: form.email,
          company: form.company || 'Não informado',
          phone: form.phone || 'Não informado',
          service: form.service,
          message: fullMessage,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      trackEvent('generate_lead', { form_name: 'contato', service: form.service });
      setForm(initialState);
    } catch (error) {
      console.error('Erro ao enviar e-mail via EmailJS:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="section contact">
      <div className="container contact__inner">
        <Reveal className="contact__info" direction="left">
          <span className="section-label">Fale com a gente</span>
          <h2>
            Conte a sua ideia. <span className="gradient-text">A gente mostra o caminho.</span>
          </h2>
          <p>
            Não precisa ter tudo definido: uma ideia, um rascunho ou uma dúvida já são suficientes
            para começar. Preencha o formulário ou chame no WhatsApp. Retornamos em até 1 dia útil.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <FiMail />
              </span>
              <div>
                <strong>E-mail</strong>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <FiPhone />
              </span>
              <div>
                <strong>Telefone e WhatsApp</strong>
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <FiMapPin />
              </span>
              <div>
                <strong>Endereço</strong>
                <address>{COMPANY.addressDisplay}</address>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <FiClock />
              </span>
              <div>
                <strong>Horário</strong>
                <span>{COMPANY.hoursDisplay}</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" className="contact__form" direction="right" delay={120} onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Nome completo</label>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={120}
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={160}
                placeholder="voce@empresa.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={120}
                placeholder="Nome da empresa"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={20}
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="service">Serviço de interesse</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              placeholder={messagePlaceholder}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : (
              <>
                Enviar mensagem <FiSend />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--success">
              <FiCheckCircle /> Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error">
              Por favor, preencha nome, e-mail e mensagem antes de enviar.
            </p>
          )}
          {status === 'config-error' && (
            <p className="contact__feedback contact__feedback--error">
              O envio ainda não foi configurado. Tente novamente mais tarde ou fale por telefone/WhatsApp.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
