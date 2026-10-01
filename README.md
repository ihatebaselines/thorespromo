# Thores promotional site

Responsive one-page Next.js 16 / React 19 promotional site for Thores. Motion, GSAP and Lenis handle entrance, scroll and hover motion; the site respects reduced-motion preferences. It has no server-side data requirements and builds as a static export.

## Develop

```sh
npm ci
npm run dev
```

## Deploy to Cloudflare Pages

Connect `ihatebaselines/thores` in **Workers & Pages → Create application → Pages → Connect to Git**. Use `master` as the production branch and set:

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npx next build`
- Build output directory: `out`

Cloudflare will deploy the site to a `*.pages.dev` address and publish future pushes to `master` automatically.

The page follows the supplied design reference, uses the supplied botanical and mountain artwork, the Thores Instagram profile logo, and public introductions linked from each member card. The video section is marked **Coming soon**.
