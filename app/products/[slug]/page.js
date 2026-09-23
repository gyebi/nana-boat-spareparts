import Link from "next/link";
import { notFound } from "next/navigation";
import ShareActions from "@/components/ShareActions";
import products from "@/data/products";
import { getProduct } from "@/lib/catalog";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { getProductWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";
import { formatGhs } from "@/utils/currency";
import { vehicleRange } from "@/utils/text";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }) { const { slug } = await params; const product = getProduct(slug); return product ? pageMetadata({ title: product.name, description: `${product.shortDescription} Contact us to confirm availability and fitment.`, path: `/products/${product.slug}` }) : {}; }

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const productUrl = `${siteUrl || ""}/products/${product.slug}`;
  return <section className="page-section"><div className="container"><Link className="back-link" href="/products">← Back to catalogue</Link><div className="product-detail"><div className="detail-visual" role="img" aria-label={product.imageAlt}><span aria-hidden="true">◈</span><small>Sample product image</small></div><div className="detail-copy"><span className="sample-label">Sample inventory — not a live stock claim</span><p className="product-brand">{product.brand} · {product.manufacturer}</p><h1>{product.name}</h1><p className="detail-price">{formatGhs(product.priceGhs)}</p><p>{product.description}</p><dl className="product-facts"><div><dt>Reference</dt><dd>{product.sku}</dd></div><div><dt>Category</dt><dd><Link href={`/categories/${product.category}`}>View related parts</Link></dd></div><div><dt>Compatible vehicle guidance</dt><dd>{product.compatibleVehicles.map(vehicleRange).join(", ")}</dd></div></dl><a className="button button-red" href={getProductWhatsAppLink(product, productUrl)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon aria-hidden="true" /> Ask about this part</a><p className="availability-note">Contact us to confirm availability and exact fitment before purchase.</p><ShareActions title={product.name} url={productUrl} /></div></div></div></section>;
}
