import Link from "next/link";

export default function NotFound() { return <section className="page-section"><div className="container empty-state"><p className="eyebrow">404</p><h1>That page could not be found.</h1><p>Try the sample catalogue or contact us with the part you need.</p><div className="inline-actions"><Link className="button button-red" href="/products">Browse parts</Link><Link className="button button-dark" href="/">Go home</Link></div></div></section>; }
