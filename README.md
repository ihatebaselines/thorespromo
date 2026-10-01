# Thores promotional site

A responsive Next.js 16 / React 19 landing page for Thores. Motion, GSAP and Lenis handle the entrance, scroll and hover motion; the site respects the reduced-motion preference. There is no server-side data requirement.

## Develop

```sh
npm ci
npm run dev
```

The project is configured for static export to the `out/` folder under the `/thorespromo` path. Pushing to `main` builds and deploys that export to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

The page follows the supplied design reference, uses the supplied botanical and mountain artwork, the public Thores Instagram profile image for the logo, and public introductions linked from each member card. The video section is marked **Coming soon**.

See [design-qa.md](design-qa.md) for the implementation review.
