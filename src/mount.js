import { createRoot, hydrateRoot } from 'react-dom/client';

export function mount(element) {
  const container = document.getElementById('root');
  if (container.hasChildNodes()) hydrateRoot(container, element);
  else createRoot(container).render(element);
}
