import { StrictMode, createElement } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import { findRoute } from './routes.js';

export { NOT_FOUND_ROUTE, ROUTES } from './routes.js';
export { renderHead } from './seo/head.js';
export { buildSitemap } from './seo/sitemap.js';
export { buildLlmsTxt } from './seo/llmsTxt.js';

const renderPage = (element) => renderToString(createElement(StrictMode, null, element));

export function render(path) {
  return renderPage(createElement(App, { route: findRoute(path) }));
}

export function renderPrivacy() {
  return renderPage(createElement(PrivacyPolicy));
}
