import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import categories from "@/data/categories";
import { getCategory, getProducts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return categories.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }) { const { slug } = await params; const category = getCategory(slug); return category ? pageMetadata({ title: category.name, description: `${category.description} Browse sample parts and contact us to confirm fitment.`, path: `/categories/${slug}` }) : {}; }

export default async function CategoryPage({ params }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); return <section className="page-section"><div className="container"><Link className="back-link" href="/products">← Back to catalogue</Link><p className="eyebrow">SAMPLE CATEGORY</p><h1 className="page-title">{category.name}</h1><p className="page-lede">{category.description} Contact us to confirm availability and fitment.</p><ProductGrid products={getProducts({ category: slug })} /></div></section>; }
