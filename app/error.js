"use client";

export default function Error({ reset }) { return <section className="page-section"><div className="container empty-state"><p className="eyebrow">SOMETHING WENT WRONG</p><h1>We could not load this page.</h1><p>Please try again, or contact us on WhatsApp if you need help finding a part.</p><button className="button button-red" onClick={() => reset()}>Try again</button></div></section>; }
