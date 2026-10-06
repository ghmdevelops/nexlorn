import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const distDir = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');
const ROOT_MARKER = '<div id="root"></div>';
const HEAD_MARKER = '<!--app-head-->';

const ssr = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

function assertMarkers(html, file, markers) {
  for (const marker of markers) {
    if (!html.includes(marker)) throw new Error(`Marcador ${marker} não encontrado em ${file}`);
  }
}

const template = await readFile(resolve(distDir, 'index.html'), 'utf8');
assertMarkers(template, 'index.html', [ROOT_MARKER, HEAD_MARKER]);

const pages = [
  ...ssr.ROUTES.map((route) => ({ route, target: resolve(distDir, ...route.path.split('/').filter(Boolean), 'index.html') })),
  { route: ssr.NOT_FOUND_ROUTE, target: resolve(distDir, '404.html') },
];

for (const { route, target } of pages) {
  const html = template
    .replace(HEAD_MARKER, () => ssr.renderHead(route))
    .replace(ROOT_MARKER, () => `<div id="root">${ssr.render(route.path)}</div>`);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}
console.log(`✓ pré-renderizadas ${pages.length} páginas`);

const privacyPath = resolve(distDir, 'politica-de-privacidade.html');
const privacy = await readFile(privacyPath, 'utf8');
assertMarkers(privacy, 'politica-de-privacidade.html', [ROOT_MARKER]);
await writeFile(privacyPath, privacy.replace(ROOT_MARKER, () => `<div id="root">${ssr.renderPrivacy()}</div>`));
console.log('✓ pré-renderizada: politica-de-privacidade.html');

await writeFile(resolve(distDir, 'sitemap.xml'), ssr.buildSitemap(ssr.ROUTES));
await writeFile(resolve(distDir, 'llms.txt'), ssr.buildLlmsTxt());
console.log('✓ gerados: sitemap.xml e llms.txt');

await rm(ssrDir, { recursive: true, force: true });
