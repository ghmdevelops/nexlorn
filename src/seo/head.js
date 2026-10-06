import { COMPANY } from '../data/company.js';
import { structuredDataScript } from './structuredData.js';

const OG_IMAGE = `${COMPANY.url}og-image.png?v=3`;
const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const VERIFICATION = [
  ['google-site-verification', import.meta.env.VITE_GOOGLE_SITE_VERIFICATION],
  ['msvalidate.01', import.meta.env.VITE_BING_SITE_VERIFICATION],
];

const escape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const meta = (attr, key, content) => `<meta ${attr}="${key}" content="${escape(content)}" />`;

export function renderHead(route) {
  const url = new URL(route.path, COMPANY.url).href;
  const title = route.ogTitle ?? route.title;
  const description = route.ogDescription ?? route.description;
  const isArticle = route.type === 'post';
  const { latitude, longitude } = COMPANY.geo;

  return [
    `<title>${escape(route.title)}</title>`,
    meta('name', 'description', route.description),
    meta('name', 'robots', route.noindex ? 'noindex, follow' : ROBOTS_INDEX),
    route.type !== 'notFound' && `<link rel="canonical" href="${url}" />`,
    meta('name', 'geo.region', 'BR-SP'),
    meta('name', 'geo.placename', 'São Paulo'),
    meta('name', 'geo.position', `${latitude};${longitude}`),
    meta('name', 'ICBM', `${latitude}, ${longitude}`),
    meta('property', 'og:type', isArticle ? 'article' : 'website'),
    meta('property', 'og:locale', 'pt_BR'),
    meta('property', 'og:site_name', COMPANY.name),
    meta('property', 'og:url', url),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:image', OG_IMAGE),
    meta('property', 'og:image:type', 'image/png'),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', 'Nexlorn - Criação de sites, apps e automação com IA'),
    isArticle && meta('property', 'article:published_time', route.post.published),
    isArticle && meta('property', 'article:modified_time', route.post.updated),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', OG_IMAGE),
    ...VERIFICATION.filter(([, value]) => value).map(([name, value]) => meta('name', name, value)),
    structuredDataScript(route),
  ]
    .filter(Boolean)
    .join('\n    ');
}
