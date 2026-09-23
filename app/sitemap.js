import categories from "@/data/categories";
import products from "@/data/products";
import { siteUrl } from "@/lib/metadata";

export default function sitemap() { const base = siteUrl || ""; return ["", "/products", "/about", "/contact", "/privacy", ...categories.map((category) => `/categories/${category.slug}`), ...products.map((product) => `/products/${product.slug}`)].map((path) => ({ url: `${base}${path || "/"}`, lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 })); }
