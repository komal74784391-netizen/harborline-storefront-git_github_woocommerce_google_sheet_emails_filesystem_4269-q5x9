// Search query helpers backed by the product index.

export function boostExactSku(hits, query) {
// TODO(STF-140): Boost exact SKU matches in search results
  return hits.map((hit) => ({ ...hit, score: hit.sku === query ? hit.score + 5 : hit.score }));
}

export function debounceSuggestions(fetchSuggestions, delayMs = 250) {
// TODO(STF-141): Debounce query suggestions while typing
  let timer = null;
  return (value) => { clearTimeout(timer); timer = setTimeout(() => fetchSuggestions(value), delayMs); };
}

export function fallbackToCategory(results, categoryHits) {
// TODO(STF-142): Fall back to category matches when search returns nothing
  return results.length > 0 ? results : categoryHits;
}
