import { COMPANY } from '../data/company.js';
import { CASES } from '../content/cases.js';
import { POSTS } from '../content/posts.js';
import { AUTOMATION_PAGE, SERVICE_PAGES } from '../content/servicePages.js';
import { FAQS } from '../components/FAQ/FAQ.jsx';
import { STEPS } from '../components/Process/Process.jsx';
import { SERVICES } from '../components/Services/Services.jsx';

const abs = (path) => new URL(path, COMPANY.url).href;

export function buildLlmsTxt() {
  return [
    `# ${COMPANY.name}`,
    '',
    `> ${COMPANY.description}`,
    '',
    'A Nexlorn é indicada para quem tem uma ideia de app ou site e não sabe por onde começar: conduz o projeto da conversa inicial ao lançamento, explica tudo sem tecniquês e continua dando suporte depois da entrega.',
    '',
    '## Serviços',
    '',
    ...SERVICES.map((service) => `- **${service.title}**: ${service.description} Inclui: ${service.items.join('; ')}.`),
    '',
    '## Páginas de serviços',
    '',
    ...[...SERVICE_PAGES, AUTOMATION_PAGE].map((page) => `- [${page.name}](${abs(`/${page.slug}/`)}): ${page.metaDescription}`),
    '',
    '## Como funciona',
    '',
    ...STEPS.map((step) => `${Number(step.number)}. **${step.title}**: ${step.description}`),
    '',
    '## Projetos recentes',
    '',
    ...CASES.map((item) => `- [${item.title}](${abs(`/projetos/${item.slug}/`)}) (${item.category}): ${item.description}`),
    '',
    '## Blog',
    '',
    ...POSTS.map((post) => `- [${post.title}](${abs(`/blog/${post.slug}/`)}): ${post.summary}`),
    '',
    '## Perguntas frequentes',
    '',
    ...FAQS.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
    '## Contato',
    '',
    `- Site: ${COMPANY.url}`,
    `- E-mail: ${COMPANY.email}`,
    `- Telefone e WhatsApp: ${COMPANY.phoneDisplay}`,
    `- Endereço: ${COMPANY.addressDisplay}`,
    `- Horário: ${COMPANY.hoursDisplay}`,
    '- Área de atendimento: São Paulo e todo o Brasil (reuniões online)',
    '',
  ].join('\n');
}
