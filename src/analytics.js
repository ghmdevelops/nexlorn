const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
export const CONSENT_KEY = 'nexlorn_cookie_consent';

let loaded = false;

function hasAnalyticsConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY))?.value === 'all';
  } catch {
    return false;
  }
}

export function initAnalytics() {
  if (loaded || !GA_ID || !hasAnalyticsConsent()) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function trackEvent(name, params = {}) {
  if (loaded) window.gtag('event', name, { page_path: window.location.pathname, ...params });
}

const CONTACT_LINKS = [
  { test: (href) => href.includes('wa.me/'), event: 'whatsapp_click' },
  { test: (href) => href.startsWith('tel:'), event: 'phone_click' },
  { test: (href) => href.startsWith('mailto:'), event: 'email_click' },
];

export function trackContactClicks() {
  document.addEventListener('click', (event) => {
    const href = event.target.closest?.('a[href]')?.getAttribute('href');
    const match = href && CONTACT_LINKS.find((link) => link.test(href));
    if (match) trackEvent(match.event, { link_url: href.split('?')[0] });
  });
}
