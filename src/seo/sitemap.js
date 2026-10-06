import { COMPANY } from '../data/company.js';
import { CONTENT_UPDATED } from '../routes.js';

export function buildSitemap(routes) {
  const urls = routes
    .filter((route) => !route.noindex)
    .map((route) => [
      '  <url>',
      `    <loc>${new URL(route.path, COMPANY.url).href}</loc>`,
      `    <lastmod>${route.lastmod ?? CONTENT_UPDATED}</lastmod>`,
      '  </url>',
    ].join('\n'));

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}
