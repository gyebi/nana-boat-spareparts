# Project dependencies

This document records the dependencies required to run and deliver the Nana Boateng Auto Parts **pre-database MVP**. It follows the imported [development plan](./NANA_BOATENG_AUTO_PARTS_DEVELOPMENT_PLAN.md). Dependencies reserved for the approved database phase are listed separately and must not be installed yet.

## Current application packages

Install the exact dependency tree recorded in [`package-lock.json`](../package-lock.json):

```bash
npm ci
```

| Package | Locked version | Role |
| --- | ---: | --- |
| `next` | 16.3.6 | App Router framework; local development, production builds, routes, metadata, sitemap, and robots rules. |
| `react` | 19.2.8 | UI rendering library required by Next.js. |
| `react-dom` | 19.2.8 | React DOM renderer required by the web application. |
| `eslint` | 9.39.5 | Static analysis run by `npm run lint`. |
| `eslint-config-next` | 16.3.6 | Next.js ESLint configuration and framework rules. |
| `babel-plugin-react-compiler` | 1.0.0 | React Compiler integration enabled by the Next.js project configuration. |
| `@fortawesome/fontawesome-svg-core` | 7.3.1 | Shared Font Awesome SVG runtime. |
| `@fortawesome/react-fontawesome` | 3.5.0 | React renderer for the site’s inline icons. |
| `@fortawesome/free-solid-svg-icons` | 7.3.1 | Search, menu, phone, and location icons. |
| `@fortawesome/free-brands-svg-icons` | 7.3.1 | WhatsApp and Facebook brand icons. |

`package-lock.json` is the source of truth for transitive package versions. Do not use a loose install to replace it during routine setup.

## Local development requirements

| Requirement | Minimum / selected version | Why it is needed |
| --- | --- | --- |
| Node.js | 22.x LTS (validated with 22.22.3) | Runs Next.js, build tools, and scripts. |
| npm | 11.x (validated with 11.19.1) | Installs the lockfile and runs project scripts. |
| Git | Current supported release | Tracks source changes and supplies the GitHub deployment trigger. |
| Modern browser | Current Chrome, Edge, Firefox, or Safari | Manual responsive, navigation, and WhatsApp-link smoke testing. |

## Commands

```bash
npm ci             # install locked dependencies
npm run dev         # start local development server
npm run lint        # required static analysis check
npm run build       # required production build check
npm run start       # serve the production build locally
```

Run `npm run lint` and `npm run build` before a change is considered ready for `main`.

## Runtime configuration and external services

| Dependency | Status in MVP | Required setup | Notes |
| --- | --- | --- | --- |
| GitHub repository | Required | Keep the approved deployable source on `main`. | It is the deployment trigger and source of truth. |
| Firebase App Hosting | Required for deployment | The project administrator connects this repository and configures the production branch. | Do not create or overwrite Firebase configuration unless specifically asked. |
| WhatsApp | Required conversion channel | Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in local/deployment environment configuration using digits-only international format, e.g. `233XXXXXXXXX`. | The number is public by design; never hard-code an unconfirmed number. |
| Public domain | Recommended before launch | Configure after the hosted MVP has passed review. | Needed for canonical URLs and reliable social previews. |
| Product images | Local static files only | Keep sample images in `public/` and provide meaningful alternative text. | No third-party image runtime dependency is required in this phase. |

### Environment variables

| Name | Required when | Public | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Before enabling live WhatsApp actions | Yes | Target WhatsApp number, digits only, in international format. |

Keep `.env*` files out of Git as enforced by [`.gitignore`](../.gitignore). Add the value through Firebase App Hosting's environment configuration for deployment.

## Deliberately deferred dependencies

Do **not** add these packages or service integrations until the owner approves database integration after the MVP acceptance criteria pass.

| Future dependency | Intended purpose | Later prerequisite |
| --- | --- | --- |
| Neon PostgreSQL | Production catalogue, categories, brands, vehicle fitment, and enquiries. | Owner approval; separate development/production database plan. |
| `prisma` and `@prisma/client` | Database schema, reviewed migrations, validation boundary, and queries. | Approved Neon connection and reviewed schema. |
| Cloudinary | Product-image upload, storage, optimization, and delivery. | Approved asset lifecycle and database image model. |
| Firebase Authentication | Staff authentication. | Authorized staff model and protected admin workflow. |
| Admin UI, payments, cart, customer accounts, AI search | Post-MVP product features. | Separate scope and security review. |

Firebase Storage is explicitly not part of the planned product-image architecture.

## Dependency-management rules

- Prefer the existing JavaScript, Next.js App Router, and custom CSS stack; avoid adding UI, search, analytics, or form libraries unless a reviewed requirement cannot be met with the current stack.
- Pin direct dependencies appropriately and commit every lockfile change.
- Review package purpose, maintenance, licensing, bundle impact, and security before adding it.
- Avoid third-party scripts and never commit credentials, service accounts, private keys, or tokens.
- Re-run lint and production build after any dependency change.

## Delivery checklist

- [ ] `npm ci` succeeds from a clean checkout.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Firebase App Hosting is connected to the approved `main` branch.
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` has been confirmed by the owner and set only in the appropriate environments.
- [ ] Product images, business details, and social URLs have been approved before launch.
- [ ] No database or deferred dependency is introduced before MVP sign-off.
