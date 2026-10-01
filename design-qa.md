# Design QA

## Reference comparison

- Compared the supplied 804 × 1956 landing-page reference with desktop captures at a similar width and at a wider desktop width.
- The Next.js page follows the cream and navy palette, botanical borders, moon and mountain imagery, phone mockup, story/video block, feature cards, four-step explanation, six-member team, academy section and navy footer.
- The video remains **Coming soon** as requested. The phone screen, school image and team portrait crops use imagery from the supplied reference where separate source assets were not available.

## Implementation checks

- `npm run build` completed successfully with Next.js 16.2.9 and emitted the statically exported site under `out/` at `/thorespromo`.
- GSAP provides scroll reveals and decorative motion; Motion fades the page in; Lenis provides smooth scrolling. These are disabled when the browser requests reduced motion.
- Desktop and mobile layouts were reviewed in the Next.js browser preview. All 17 images loaded; the 500 px mobile layout had no horizontal overflow, and the menu opened, followed the Team link, and closed.
- `npm audit --omit=dev` reports known advisories for the requested Next.js 16.2.9 dependency tree. This project deploys a static export, so the listed server-only Next.js routes and image optimization service are not part of the deployed site; the supplied version is kept as requested.

## Result

The Next.js conversion, responsive interactions, and static Pages export passed review. GitHub Pages deployment is pending access to the `ihatebaselines` GitHub account.
