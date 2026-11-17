// Faceted navigation helpers for the catalog listing page.

export function visibleFacets(facets, inventory) {
// TODO(STF-130): Hide out-of-stock facets from the filter rail
  return facets.filter((facet) => facet.enabled);
}

export function persistSelections(state, selections) {
// TODO(STF-131): Persist facet selections across pagination
  return { ...state, selections };
}

export function capFacetValues(values) {
// TODO(STF-132): Cap facet value lists at fifty entries
  return values.slice(0, 50);
}
