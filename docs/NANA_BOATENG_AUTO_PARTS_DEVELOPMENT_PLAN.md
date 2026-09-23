# Nana Boateng Auto Parts Website

## Codex MVP Implementation Brief

**Document version:** 1.0  
**Date:** 23 September 2026  
**Project owner:** Nana Boateng  
**Primary reader:** Codex working inside the website repository  
**Development stage covered:** Existing homepage shell through pre-database MVP approval

---

## 1. Purpose of this document

This is an execution specification for Codex. Codex should use it to inspect the existing repository, implement the pre-database MVP in controlled milestones, test each change, and maintain a deployable `main` branch for Firebase App Hosting.

The first MVP will be a fast, responsive catalogue demonstration using realistic sample product data stored in source-controlled JavaScript files. Its purpose is to let the owner review the design, content, navigation, product presentation, search experience, and WhatsApp enquiry flow before the application is connected to Neon PostgreSQL.

The document is also the boundary of Codex's authority for this phase. Codex must stop at the database integration gate unless the user explicitly starts the next phase.

### Instructions to Codex

When asked to continue this build, Codex must:

1. Read this document before editing the application.
2. Inspect the repository, current branch, `git status`, `package.json`, installed versions, and existing source files before proposing or making changes.
3. Look for and obey any repository-level `AGENTS.md` instructions.
4. Preserve user changes and avoid replacing working code blindly.
5. Confirm the actual Next.js version and use APIs supported by that installed version.
6. Implement only the current milestone or the specific task requested by the user.
7. Prefer server components; add `"use client"` only where state, effects, or browser APIs require it.
8. Keep mock catalogue data behind small helper functions so Prisma can replace the data source without redesigning page components.
9. Validate all generated routes, URL parameters, and WhatsApp links.
10. Run the relevant checks after edits, including `npm run lint` and `npm run build` before declaring a milestone complete.
11. Report changed files, test results, assumptions, and the next recommended step.
12. Do not create, migrate, or connect a database during this phase.

### Current known starting point

The repository was created with `create-next-app` using JavaScript, ESLint, React Compiler, custom CSS, a `src` directory, and the App Router. The starter page has already been replaced by an initial single-file homepage in `src/app/page.js`, with its styling in `src/app/globals.css`.

That initial page contains a header, hero, basic parts-search form, category cards, benefits section, WhatsApp call to action, footer, and floating WhatsApp button. Several links still use `href="#"`; the design uses orange as its accent; and the page has not yet been decomposed into reusable components.

Codex must verify this state from the repository because the code may have changed since this document was written.

### Required end state for this assignment

Codex's assignment ends when the repository contains a polished, tested, Firebase-deployable public MVP with local mock product data and the owner accepts it. The next unimplemented item at that point must be **Neon PostgreSQL and Prisma integration**.

---

## 2. Business goal

Create a simple, fast, always-available online presence for Nana Boateng's spare-parts business in Ghana. Customers should be able to:

- Find parts quickly on a phone.
- See clear product photographs and prices.
- Search or browse by category, brand, and vehicle information.
- Open a product page with useful compatibility details.
- Contact the business through WhatsApp with the relevant product already included in the message.
- Share individual product links through WhatsApp, Facebook, Instagram, and other channels.

The website should also establish a strong foundation for Ghana-focused search visibility and later AI-assisted parts discovery.

---

## 3. Locked technology stack

| Area | Technology | Use |
| --- | --- | --- |
| Web application | Next.js, App Router | Public website, pages, metadata, and future server features |
| Language | JavaScript | Application code |
| Styling | Custom CSS | Brand-specific, lightweight responsive styling |
| Source control | GitHub | Source of truth and deployment trigger |
| Hosting | Firebase App Hosting | Builds and deploys the connected GitHub branch |
| Product database — next phase | Neon PostgreSQL | Products, brands, categories, vehicles, and enquiries |
| Database access — next phase | Prisma | Schema, migrations, validation boundary, and queries |
| Product images — next phase | Cloudinary | Product image upload, delivery, and optimization |
| Admin authentication — next phase | Firebase Authentication | Secure staff sign-in |
| Customer conversion | WhatsApp | Enquiries and order discussions |

Firebase Storage is not part of the product-image architecture. Product images will be stored and delivered through Cloudinary after the database phase begins.

---

## 4. Brand direction

The supplied Nana Boateng artwork establishes the initial visual direction:

- Primary red: energetic calls to action and selected highlights.
- Deep navy: navigation, headings, footer, and strong backgrounds.
- White: clean page backgrounds and contrast.
- Black/charcoal: body text and supporting elements.
- Rounded, sweeping shapes may be used sparingly as a visual motif.

### Initial design tokens

```css
:root {
  --color-primary: #cf1017;
  --color-primary-dark: #a90d13;
  --color-navy: #17212d;
  --color-charcoal: #24272b;
  --color-white: #ffffff;
  --color-surface: #f5f6f7;
  --color-border: #dde1e5;
  --color-success: #16863a;
  --color-text-muted: #626a73;
}
```

The exact colors should be adjusted after testing the supplied artwork and logo on desktop and mobile. The WhatsApp action remains recognizable green. Any QR code must be scanned and its destination verified before being published.

---

## 5. MVP boundary

### Included in this MVP

- Responsive public website for phone, tablet, and desktop.
- Reusable header, navigation, footer, product cards, category cards, search controls, and WhatsApp components.
- Homepage with sample categories and featured products.
- Products catalogue using local mock data.
- Product detail pages using stable product slugs.
- Category and brand filtering over local mock data.
- Keyword search over local mock data.
- Empty search state and no-results guidance.
- About and Contact pages.
- Product-specific WhatsApp enquiry links.
- Floating WhatsApp action.
- Shareable product URLs.
- Page titles, descriptions, social sharing metadata, sitemap, and robots configuration.
- Basic structured product data clearly marked as sample inventory where appropriate.
- Loading, error, and not-found experiences.
- Firebase App Hosting connected to the GitHub repository.
- Automated checks before approved changes reach `main`.
- Owner review and written MVP approval.

### Explicitly excluded until after MVP approval

- Neon PostgreSQL connection.
- Prisma schema and migrations.
- Installing or configuring `prisma` or `@prisma/client`.
- Live inventory quantities or stock guarantees.
- Cloudinary upload workflow.
- Firebase staff authentication.
- Admin dashboard or product editor.
- Shopping cart, online checkout, or payment processing.
- Customer accounts.
- Automatic order confirmation.
- AI parts assistant.
- Automated social-media publishing.

The MVP must not imply that a sample product is currently in stock. Use wording such as **“Contact us to confirm availability and fitment.”**

---

## 6. MVP information architecture

| Route | Purpose | MVP data source |
| --- | --- | --- |
| `/` | Homepage, search entry, categories, featured parts, trust, WhatsApp CTA | Local mock data |
| `/products` | Searchable and filterable product catalogue | Local mock data |
| `/products/[slug]` | Product details, price, compatibility notes, enquiry action | Local mock data |
| `/categories/[slug]` | Products within one category | Local mock data |
| `/about` | Business summary, service area, and trust information | Static content |
| `/contact` | Phone/WhatsApp, location, hours, and enquiry guidance | Static content |
| `/privacy` | Basic privacy notice for contact and future analytics | Static content |
| `/not-found` | Helpful recovery from invalid URLs | Static content |

An `/admin` route will not be exposed in this MVP because there is no authentication or database-backed management workflow yet.

---

## 7. Homepage content order

1. Header and navigation.
2. Hero with business promise and primary calls to action.
3. Parts search by keyword and vehicle brand.
4. Popular categories.
5. Featured products with visible prices.
6. “How to find the right part” guidance.
7. Why buy from Nana Boateng.
8. Supported brands.
9. WhatsApp call to action.
10. Contact summary and footer.
11. Persistent floating WhatsApp button.

The hero should immediately answer three questions: what the business sells, where it serves customers, and how a visitor can ask for a part.

---

## 8. Reusable application structure

```text
src/
├── app/
│   ├── about/page.js
│   ├── categories/[slug]/page.js
│   ├── contact/page.js
│   ├── privacy/page.js
│   ├── products/[slug]/page.js
│   ├── products/page.js
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   ├── page.js
│   ├── robots.js
│   └── sitemap.js
├── components/
│   ├── CategoryCard.js
│   ├── Footer.js
│   ├── Header.js
│   ├── Hero.js
│   ├── ProductCard.js
│   ├── ProductGrid.js
│   ├── ProductSearch.js
│   ├── ShareActions.js
│   └── WhatsAppButton.js
├── data/
│   ├── brands.js
│   ├── categories.js
│   └── products.js
├── lib/
│   ├── catalog.js
│   ├── metadata.js
│   └── whatsapp.js
└── utils/
    ├── currency.js
    └── text.js
```

Components should remain server components unless browser state or interaction requires a client component. This keeps the JavaScript sent to customers small and improves performance on slower mobile connections.

---

## 9. Temporary product data contract

The mock-data structure should resemble the future database model so the UI can be connected to Prisma with minimal rework.

```javascript
{
  id: "sample-brake-pad-001",
  slug: "toyota-corolla-front-brake-pads-2014-2019",
  name: "Toyota Corolla Front Brake Pads",
  sku: "NB-SAMPLE-001",
  brand: "Toyota",
  manufacturer: "Sample Manufacturer",
  category: "brakes",
  priceGhs: 450,
  image: "/images/products/sample-brake-pads.webp",
  imageAlt: "Front brake pad set for selected Toyota Corolla models",
  shortDescription: "Front brake pad set for selected Corolla models.",
  description: "Sample catalogue item. Confirm exact fitment before purchase.",
  compatibleVehicles: [
    { make: "Toyota", model: "Corolla", yearFrom: 2014, yearTo: 2019 }
  ],
  featured: true,
  sample: true
}
```

### Data rules

- Prices display in Ghana cedis using `GHS` formatting.
- Every product needs a unique, readable slug.
- Every image needs useful alternative text.
- Compatibility claims must be conservative and verifiable.
- Sample content must be visibly identified during owner review.
- Product names, descriptions, and metadata must not make unsupported manufacturer, warranty, or “genuine part” claims.
- Search comparisons should be case-insensitive and resilient to extra spaces.

---

## 10. WhatsApp enquiry behavior

The business WhatsApp number must be confirmed before launch. Store it in an environment variable rather than repeating it in components:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
```

The value should contain digits only in international format.

A product enquiry should open a prefilled message similar to:

```text
Hello Nana Boateng Auto Parts. I am interested in:
Toyota Corolla Front Brake Pads
Reference: NB-SAMPLE-001
Price shown: GHS 450.00
Page: https://example.com/products/toyota-corolla-front-brake-pads-2014-2019

My vehicle year/model is: ______
Please confirm fitment and availability.
```

The URL builder must encode the message with `encodeURIComponent`. External WhatsApp links should use HTTPS, open safely, and include `rel="noopener noreferrer"` when a new tab is used.

---

## 11. Search and filtering in the MVP

The pre-database catalogue will support:

- Keyword match against product name, SKU, brand, category, and vehicle model.
- Category filter.
- Vehicle make/brand filter.
- Optional featured-products filter.
- Clear-all action.
- Result count.
- No-results message that offers a WhatsApp enquiry.

Search input must be normalized and bounded before processing. It should never render user-entered HTML. Since the catalogue is small in this phase, filtering can occur locally without adding a search service.

---

## 12. SEO and Ghana visibility foundations

The MVP will establish, but not guarantee, search visibility through:

- Clear page titles and descriptions containing natural Ghana-relevant wording.
- One canonical URL per page.
- Descriptive headings and product image alternative text.
- `sitemap.xml` and `robots.txt` generated by Next.js.
- Open Graph metadata for WhatsApp and social sharing.
- Product structured data only where the page content supports it.
- Organization or LocalBusiness structured data after the business address, contact information, opening hours, and public business identity are confirmed.
- Fast mobile rendering and stable page layout.
- A future custom domain and Google Business Profile connection.

Do not use fake reviews, hidden keywords, copied competitor descriptions, or unverified availability data.

---

## 13. Performance, accessibility, and reliability requirements

### Performance

- Prefer server-rendered pages and minimize client-side JavaScript.
- Use `next/image` with explicit dimensions and responsive sizes.
- Use WebP or AVIF product imagery where practical.
- Avoid autoplay video and oversized hero images.
- Target Lighthouse scores of at least 90 for Performance, Accessibility, Best Practices, and SEO on representative pages, acknowledging that lab results vary.
- Target Largest Contentful Paint below 2.5 seconds on a representative mobile test and prevent visible layout shifts.
- Keep initial page assets lean enough for typical mobile use in Ghana.

### Accessibility

- Full keyboard navigation.
- Visible focus states.
- Semantic headings and landmarks.
- Labels for every form control.
- Sufficient color contrast.
- Meaningful image alternative text.
- Buttons and links with clear accessible names.
- Touch targets suitable for mobile users.
- Respect reduced-motion preferences.

### Reliability

- Helpful 404 and error states.
- No broken navigation or placeholder `#` actions in an approved deployment.
- All external links tested.
- Sample data loads without dependence on third-party runtime APIs.

---

## 14. Security and privacy baseline

Even before a database exists, the following rules apply:

- Never commit `.env*`, service-account files, private keys, or tokens.
- Only variables prefixed with `NEXT_PUBLIC_` may be exposed to the browser, and only when the value is safe to publish.
- Pin and review dependencies; commit the lockfile.
- Validate and encode all values placed into URLs.
- Do not inject untrusted HTML.
- Use security headers suitable for the final asset sources.
- Keep third-party scripts to a minimum.
- Do not collect customer data in the MVP unless a clear purpose, notice, validation path, and secure destination exist.
- Do not display personal contact details that the owner has not approved for public use.
- Treat product compatibility as guidance and require confirmation before purchase.

Once forms, authentication, database writes, or uploads are introduced, the threat model and privacy notice must be revised.

---

## 15. GitHub and Firebase App Hosting workflow

Codex should prepare and validate the application for this workflow. The user will create/configure the Firebase App Hosting backend and connect the GitHub repository. Codex must not create a second Firebase project, overwrite an existing hosting configuration, or expose environment values. If Firebase-generated configuration files appear in the repository, inspect and preserve them unless a specific change is required.

### Branch model

- `main`: approved, deployable source.
- `develop` or short-lived `feature/*` branches: work not yet approved for the owner-facing environment.
- Changes reach `main` only after local checks pass and the page has been reviewed.

### Deployment flow

```text
Local development
      ↓
Feature branch and local testing
      ↓
Pull request or reviewed merge
      ↓
GitHub main branch
      ↓
Firebase App Hosting build
      ↓
Owner-facing MVP URL
```

### Firebase setup responsibilities

The project administrator will:

1. Create or select the Firebase project.
2. Open App Hosting and connect the GitHub repository.
3. Select the production branch, normally `main`.
4. Choose the appropriate project root if the repository contains more than one application.
5. Confirm the detected Next.js build settings.
6. Add only approved environment variables through the hosting environment configuration.
7. Trigger the first deployment and record the generated URL.
8. Confirm that future pushes to `main` create new builds automatically.

Secrets must be configured in the hosting environment and never placed in GitHub source files.

---

## 16. Quality gates and checks

Before a change is merged into `main`, run:

```bash
npm run lint
npm run build
```

If automated tests are added during this phase, include them in the same validation workflow. A deployment is not considered approved merely because the build succeeded; the deployed pages must also receive a brief smoke test.

### Deployment smoke test

- Homepage loads over HTTPS.
- Header and footer navigation work.
- Products and product-detail pages load directly from their URLs.
- Search and filters behave correctly.
- No-results state is useful.
- WhatsApp links open the correct number with an encoded message.
- Product URLs can be shared and display suitable preview metadata.
- No browser console errors appear in normal use.
- Mobile menu and layouts work at narrow widths.
- Images do not overflow or visibly shift the page.
- Unknown product and category slugs return a helpful 404.

---

## 17. Development milestones

### Milestone 0 — Foundation

**Deliverables**

- Clean Next.js JavaScript project.
- ESLint and production build working.
- GitHub repository connected.
- Base metadata, fonts, global CSS tokens, and favicon/brand placeholders.
- Firebase App Hosting connected to `main`.

**Exit test:** A clean branded shell deploys automatically from GitHub.

### Milestone 1 — Homepage MVP

**Deliverables**

- Responsive header, hero, search panel, categories, featured products, benefits, WhatsApp CTA, and footer.
- Brand direction updated from the supplied Nana Boateng artwork.
- Reusable components extracted from `page.js`.

**Exit test:** The owner can understand the offer and reach the primary WhatsApp action from phone and desktop.

### Milestone 2 — Catalogue and product details

**Deliverables**

- Structured mock product data.
- Products page.
- Category pages.
- Product-detail pages.
- GHS prices, compatibility guidance, and sample-data labels.
- Product-specific WhatsApp messages.

**Exit test:** Every sample product has a stable URL and a working enquiry path.

### Milestone 3 — Discovery and content

**Deliverables**

- Keyword search and filters.
- No-results WhatsApp fallback.
- About, Contact, Privacy, not-found, loading, and error experiences.
- Confirmed business details replacing placeholders.

**Exit test:** A customer can browse, search, recover from an unsuccessful search, and contact the business without confusion.

### Milestone 4 — SEO, performance, and MVP hardening

**Deliverables**

- Metadata, social previews, sitemap, robots rules, and appropriate structured data.
- Image optimization and responsive verification.
- Accessibility review.
- Security/header review.
- Production build, lint, link, and deployment smoke tests.
- Owner feedback incorporated.

**Exit test:** All MVP acceptance criteria below pass and the owner approves database integration.

### Database integration gate

Database work begins only after Milestone 4 approval. The next technical phase will introduce:

1. Neon project and separate development/production databases where practical.
2. Prisma schema and reviewed migrations.
3. Database-backed products, categories, brands, vehicles, compatibility, and product images.
4. Cloudinary asset lifecycle.
5. Firebase Authentication and authorized staff records.
6. Protected admin CRUD operations with server-side validation and audit fields.
7. Safe migration from mock data to real catalogue data.

---

## 18. MVP acceptance and owner sign-off

The pre-database MVP is ready for approval when:

- [ ] The brand presentation is accepted.
- [ ] Homepage sections and wording are accepted.
- [ ] Navigation works on mobile and desktop.
- [ ] Sample product cards and detail pages demonstrate the intended catalogue clearly.
- [ ] Prices are displayed in Ghana cedis.
- [ ] Search and filters work against the sample catalogue.
- [ ] The confirmed WhatsApp number and message flow work.
- [ ] Contact details, business hours, and service area are accurate.
- [ ] Sample content is not presented as confirmed live inventory.
- [ ] Social sharing previews are acceptable.
- [ ] The deployed MVP passes the smoke test.
- [ ] No secrets or sensitive files are present in the repository.
- [ ] The owner authorizes the team to begin database and admin development.

### Approval record

**MVP URL:** __________________________________________  
**Git commit reviewed:** _______________________________  
**Owner/reviewer:** ____________________________________  
**Decision:** Approved / Approved with changes / Not approved  
**Required changes:** __________________________________  
**Signature:** _________________________________________  
**Date:** ______________________________________________

---

## 19. Information required from the owner

The following items should be collected during the MVP build:

- Confirmed public business name.
- Confirmed WhatsApp number in international format.
- Public phone number and email, if different.
- Business location and service/delivery area.
- Opening hours.
- Approved logo file, preferably SVG or transparent PNG.
- Confirmation of what the supplied QR code opens.
- Product categories to prioritize.
- At least 12 representative products with names, prices, clear photographs, and known fitment information.
- Supported vehicle makes.
- Delivery, collection, returns, warranty, and availability wording.
- Social-media profile URLs.
- Preferred domain name.

Missing or unverified information should remain clearly marked as a placeholder and must not silently become a production claim.

---

## 20. Immediate next coding sequence

Codex should execute these as small, reviewable tasks rather than one large rewrite:

1. Inspect the actual repository and summarize the starting state without changing files.
2. Update the current orange concept to the approved red/deep-navy brand direction.
3. Move the header, hero, category cards, WhatsApp CTA, and footer out of `page.js` into reusable components without changing intended behavior.
4. Add the temporary data files and a first set of representative products.
5. Build `/products`, `/products/[slug]`, and `/categories/[slug]` from the mock-data access layer.
6. Implement search and filters with useful empty and no-results states.
7. Add About, Contact, Privacy, not-found, loading, and error experiences.
8. Replace every placeholder `href="#"` with a working internal route or verified WhatsApp link.
9. Add metadata, social previews, sitemap, robots rules, and supported structured data.
10. Run lint, production build, and the complete smoke test.
11. Commit and push the approved branded MVP state when the user requests Git operations.
12. Let the user connect or confirm Firebase App Hosting, then test the resulting live URL.
13. Apply owner feedback and repeat validation.
14. Stop and request approval before installing Prisma, creating a schema, or connecting Neon.

### Codex completion report format

At the end of each coding task, Codex should respond with:

- **Outcome:** what now works.
- **Files changed:** concise list of relevant paths.
- **Verification:** commands run and their results.
- **Assumptions/placeholders:** anything still awaiting confirmed business information.
- **Next step:** one controlled next action tied to the current milestone.

If a check fails, Codex should state the failure and fix it within scope before calling the task complete. If the failure depends on a missing credential, external service, owner decision, or newly required authority, Codex should stop and request that specific input.

---

## 21. Decision log

| Date | Decision | Status |
| --- | --- | --- |
| 23 Sep 2026 | Use Next.js, JavaScript, custom CSS, Prisma, Neon PostgreSQL, Cloudinary, Firebase Authentication, Firebase App Hosting, and WhatsApp | Locked |
| 23 Sep 2026 | Use Cloudinary—not Firebase Storage—for product images | Locked |
| 23 Sep 2026 | Build and approve a mock-data MVP before database integration | Locked |
| 23 Sep 2026 | Connect GitHub `main` to Firebase App Hosting for owner-visible deployments | Locked |
| 23 Sep 2026 | Use the supplied red/deep-navy Nana Boateng artwork as the starting brand direction | Pending owner visual approval |
