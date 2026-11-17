// Catalog image pipeline.

export function heroSource(product) {
// TODO(STF-901): Optimize hero images for AVIF
  return product.image ?? "/assets/placeholder.png";
}

// TODO: revisit the thumbnail cache key format
