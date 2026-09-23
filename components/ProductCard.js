import Link from "next/link";
import { formatGhs } from "@/utils/currency";
import { vehicleRange } from "@/utils/text";

export default function ProductCard({ product }) {
  return <article className="product-card"><Link className="product-visual" href={`/products/${product.slug}`} role="img" aria-label={product.imageAlt}><span aria-hidden="true">◈</span><small>Sample product image</small></Link><div className="product-card-body">{product.sample && <span className="sample-label">Sample inventory</span>}<p className="product-brand">{product.brand}</p><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p className="product-fitment">{vehicleRange(product.compatibleVehicles[0])}</p><div className="product-card-bottom"><strong>{formatGhs(product.priceGhs)}</strong><Link className="text-link" href={`/products/${product.slug}`}>View part <span aria-hidden="true">↗</span></Link></div></div></article>;
}
