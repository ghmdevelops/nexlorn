import { countWords } from '../content/inline.js';

const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}

export function formatNumber(value) {
  return String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function formatBRL(value) {
  return `R$ ${formatNumber(value)}`;
}

export function readingTime(blocks) {
  return Math.max(1, Math.round(countWords(blocks) / 200));
}
