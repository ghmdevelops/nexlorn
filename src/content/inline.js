export const INLINE_PATTERN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

export function toPlainText(text) {
  return text.replace(INLINE_PATTERN, (_, bold, label) => bold ?? label);
}

export function countWords(blocks) {
  return blocks
    .flatMap((block) => [block.text, ...(block.items ?? []), ...(block.head ?? []), ...(block.rows ?? []).flat()])
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;
}
