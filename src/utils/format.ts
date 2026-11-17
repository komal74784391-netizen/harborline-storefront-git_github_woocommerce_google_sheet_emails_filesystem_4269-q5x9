// Shared formatting helpers.

export function truncate(text, limit) {
// TODO: handle grapheme clusters when truncating
  return text.slice(0, limit);
}
