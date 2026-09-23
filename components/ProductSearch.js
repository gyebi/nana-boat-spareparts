import Link from "next/link";
import { SearchIcon } from "@/components/Icons";
import brands from "@/data/brands";
import categories from "@/data/categories";

export default function ProductSearch({ filters = {}, action = "/products" }) {
  return <form className="product-search" action={action}><div className="search-field"><label htmlFor="catalogue-query">Search parts</label><input id="catalogue-query" name="q" defaultValue={filters.q || ""} maxLength="100" placeholder="Part name, SKU, make or model" /></div><div className="search-field"><label htmlFor="catalogue-category">Category</label><select id="catalogue-category" name="category" defaultValue={filters.category || ""}><option value="">All categories</option>{categories.map((category) => <option key={category.slug} value={category.slug}>{category.name}</option>)}</select></div><div className="search-field"><label htmlFor="catalogue-brand">Vehicle make</label><select id="catalogue-brand" name="brand" defaultValue={filters.brand || ""}><option value="">All makes</option>{brands.map((brand) => <option key={brand}>{brand}</option>)}</select></div><label className="featured-filter"><input type="checkbox" name="featured" value="true" defaultChecked={filters.featured === "true"} /> Featured only</label><button className="button button-red" type="submit"><SearchIcon aria-hidden="true" /> Search parts</button><Link className="clear-search" href={action}>Clear all</Link></form>;
}
