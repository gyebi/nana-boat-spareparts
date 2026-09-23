import categories from "@/data/categories";
import products from "@/data/products";

export function normalizeSearch(value = "") {
  return String(value).trim().replace(/\s+/g, " ").slice(0, 100).toLowerCase();
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(limit = 4) {
  return products.filter((product) => product.featured).slice(0, limit);
}

export function getProducts({ query, category, brand, featured } = {}) {
  const term = normalizeSearch(query);
  return products.filter((product) => {
    const searchable = [product.name, product.sku, product.brand, product.category, ...product.compatibleVehicles.flatMap((vehicle) => [vehicle.make, vehicle.model])].join(" ").toLowerCase();
    return (!term || searchable.includes(term))
      && (!category || product.category === category)
      && (!brand || product.brand === brand)
      && (!featured || product.featured);
  });
}
