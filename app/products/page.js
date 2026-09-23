import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import ProductSearch from "@/components/ProductSearch";
import { getProducts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/metadata";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata = pageMetadata({ title: "Sample parts catalogue", description: "Search Nana Boateng Auto Parts sample catalogue by part, category, vehicle make or model.", path: "/products" });

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const filters = { q: params?.q || "", category: params?.category || "", brand: params?.brand || "", featured: params?.featured || "" };
  const products = getProducts({ query: filters.q, category: filters.category, brand: filters.brand, featured: filters.featured === "true" });
  return <section className="page-section"><div className="container"><p className="eyebrow">SAMPLE CATALOGUE</p><h1 className="page-title">Find the part you need.</h1><p className="page-lede">Search our sample catalogue. Prices and products are illustrative; contact us to confirm availability and fitment.</p><ProductSearch filters={filters} /><p className="result-count">{products.length} {products.length === 1 ? "part" : "parts"} found</p>{products.length ? <ProductGrid products={products} /> : <div className="empty-state"><h2>No matching sample parts yet.</h2><p>Try a different term or send us your vehicle make, model, year and the part you need.</p><a className="button button-red" href={getWhatsAppLink(`Hello Nana Boateng Auto Parts. I could not find this part: ${filters.q || "[part needed]"}\nMy vehicle year/model is: ______\nPlease help me confirm availability and fitment.`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon aria-hidden="true" /> Ask on WhatsApp</a><Link className="text-link" href="/products">Clear your search</Link></div>}</div></section>;
}
