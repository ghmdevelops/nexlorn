import { COMPANY } from '../data/company.js';
import { FAQS } from '../components/FAQ/FAQ.jsx';
import { SERVICES } from '../components/Services/Services.jsx';
import { countWords } from '../content/inline.js';
import { AUTHOR, POSTS } from '../content/posts.js';

const abs = (path) => new URL(path, COMPANY.url).href;
const ORG_ID = abs('#organization');
const WEBSITE_ID = abs('#website');
const OG_IMAGE = abs('og-image.png');
const ORG_REF = { '@id': ORG_ID };
const AREA_SERVED = [
  { '@type': 'City', name: 'São Paulo' },
  { '@type': 'Country', name: 'Brasil' },
];

const ORGANIZATION = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: COMPANY.name,
  url: COMPANY.url,
  logo: abs('icon-512.png'),
  image: OG_IMAGE,
  description: COMPANY.description,
  slogan: 'Tem uma ideia de app ou site e não sabe por onde começar? A Nexlorn tira do papel.',
  email: COMPANY.email,
  telephone: COMPANY.phone,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: COMPANY.geo.latitude, longitude: COMPANY.geo.longitude },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: AREA_SERVED,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: ['Portuguese'],
  },
  knowsAbout: [
    'Criação de sites',
    'Desenvolvimento de aplicativos iOS e Android',
    'Sistemas web sob medida',
    'Inteligência artificial',
    'Agentes de IA',
    'Automação de processos',
    'n8n',
    'Modernização de sistemas legados',
    'Mainframe',
    'Java',
    'Python',
    'React',
    'React Native',
    'SEO',
    'Generative Engine Optimization (GEO)',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Nexlorn',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        ...(service.href && { url: abs(service.href) }),
        provider: ORG_REF,
        areaServed: { '@type': 'Country', name: 'Brasil' },
      },
    })),
  },
};

const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: COMPANY.url,
  name: COMPANY.name,
  inLanguage: 'pt-BR',
  publisher: ORG_REF,
};

const faqPage = (url, items) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  url,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

const breadcrumbList = (url, crumbs) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.path ? abs(crumb.path) : url,
  })),
});

const webPage = (url, route) => ({
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name: route.title,
  description: route.description,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': WEBSITE_ID },
  about: ORG_REF,
  ...(route.breadcrumbs && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
});

const service = (url, page) => ({
  '@type': 'Service',
  '@id': `${url}#service`,
  name: page.name,
  serviceType: page.name,
  description: page.metaDescription,
  url,
  provider: ORG_REF,
  areaServed: AREA_SERVED,
});

const article = (url, route, type, data) => ({
  '@type': type,
  '@id': `${url}#article`,
  headline: data.title,
  description: route.description,
  url,
  mainEntityOfPage: { '@id': `${url}#webpage` },
  image: OG_IMAGE,
  inLanguage: 'pt-BR',
  publisher: ORG_REF,
  ...data.extra,
});

function pageNodes(url, route) {
  switch (route.type) {
    case 'home':
      return [faqPage(url, FAQS)];
    case 'service':
    case 'automation':
      return [service(url, route.page), faqPage(url, route.page.faqs)];
    case 'blog':
      return [
        {
          '@type': 'Blog',
          '@id': `${url}#blog`,
          url,
          name: 'Blog Nexlorn',
          description: route.description,
          inLanguage: 'pt-BR',
          publisher: ORG_REF,
          blogPost: POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: abs(`/blog/${post.slug}/`),
            datePublished: post.published,
          })),
        },
      ];
    case 'post':
      return [
        article(url, route, 'BlogPosting', {
          title: route.post.title,
          extra: {
            datePublished: route.post.published,
            dateModified: route.post.updated,
            author: { '@type': 'Organization', name: AUTHOR.name, url: COMPANY.url },
            articleSection: route.post.category,
            wordCount: countWords(route.post.blocks),
          },
        }),
      ];
    case 'case':
      return [article(url, route, 'Article', { title: route.item.title, extra: { author: ORG_REF, about: route.item.category } })];
    default:
      return [];
  }
}

export function buildStructuredData(route) {
  if (route.type === 'notFound') return null;
  const url = abs(route.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      WEBSITE,
      webPage(url, route),
      ...pageNodes(url, route),
      ...(route.breadcrumbs ? [breadcrumbList(url, route.breadcrumbs)] : []),
    ],
  };
}

export function structuredDataScript(route) {
  const data = buildStructuredData(route);
  if (!data) return '';
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}
