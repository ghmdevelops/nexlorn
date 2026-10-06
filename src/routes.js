import { CASES } from './content/cases.js';
import { POSTS } from './content/posts.js';
import { AUTOMATION_PAGE, SERVICE_PAGES } from './content/servicePages.js';

export const CONTENT_UPDATED = '2026-10-06';

const HOME_CRUMB = { name: 'Início', path: '/' };

export const ROUTES = [
  {
    path: '/',
    type: 'home',
    title: 'Criação de Sites, Apps e Automação com IA em SP | Nexlorn',
    description:
      'Tem uma ideia de app ou site e não sabe por onde começar? A Nexlorn cria sites, apps, sistemas e automações com IA em São Paulo, da ideia ao lançamento.',
    ogTitle: 'Tem uma ideia de app ou site e não sabe por onde começar? | Nexlorn',
    ogDescription:
      'Criamos sites, aplicativos, sistemas sob medida e automações com inteligência artificial. Do primeiro rascunho ao lançamento, sem tecniquês.',
  },
  ...SERVICE_PAGES.map((page) => ({
    path: `/${page.slug}/`,
    type: 'service',
    page,
    title: page.metaTitle,
    description: page.metaDescription,
    breadcrumbs: [HOME_CRUMB, { name: 'Serviços', path: '/#servicos' }, { name: page.name }],
  })),
  {
    path: `/${AUTOMATION_PAGE.slug}/`,
    type: 'automation',
    page: AUTOMATION_PAGE,
    title: AUTOMATION_PAGE.metaTitle,
    description: AUTOMATION_PAGE.metaDescription,
    breadcrumbs: [HOME_CRUMB, { name: 'Automação para empresas' }],
  },
  {
    path: '/blog/',
    type: 'blog',
    title: 'Blog Nexlorn: sites, apps, automação e IA sem tecniquês',
    description:
      'Guias práticos sobre criação de sites, desenvolvimento de apps, automação de processos e inteligência artificial para empreendedores e empresas.',
    breadcrumbs: [HOME_CRUMB, { name: 'Blog' }],
  },
  ...POSTS.map((post) => ({
    path: `/blog/${post.slug}/`,
    type: 'post',
    post,
    title: post.metaTitle ?? `${post.title} | Nexlorn`,
    description: post.description,
    lastmod: post.updated,
    breadcrumbs: [HOME_CRUMB, { name: 'Blog', path: '/blog/' }, { name: post.title }],
  })),
  ...CASES.map((item) => ({
    path: `/projetos/${item.slug}/`,
    type: 'case',
    item,
    title: `${item.title}: projeto Nexlorn`,
    description: item.description,
    noindex: item.results.length === 0,
    breadcrumbs: [HOME_CRUMB, { name: 'Projetos', path: '/#projetos' }, { name: item.title }],
  })),
];

export const NOT_FOUND_ROUTE = {
  path: '/404',
  type: 'notFound',
  title: 'Página não encontrada | Nexlorn',
  description: 'A página que você procura não existe ou mudou de endereço.',
  noindex: true,
};

export function findRoute(pathname) {
  const path = pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
  return ROUTES.find((route) => route.path === path) ?? NOT_FOUND_ROUTE;
}
