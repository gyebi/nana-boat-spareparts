import Link from "next/link";

export default function CategoryCard({ category, index }) {
  return <article className="part-card"><span className="part-number">{String(index + 1).padStart(2, "0")}</span><div className="part-icon" aria-hidden="true">{category.icon}</div><h3>{category.name}</h3><p>{category.description}</p><Link href={`/categories/${category.slug}`}>Browse category <span aria-hidden="true">↗</span></Link></article>;
}
