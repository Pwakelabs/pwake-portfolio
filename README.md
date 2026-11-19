# Pwake Portfolio

A personal portfolio website featuring Pwake's projects, background, interests, and links.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS

## Website sections

- **Home** — An animated introduction and entry point to the portfolio.
- **Projects & Applications** — A gallery of projects and applications.
- **Education & Skills** — Education and areas of learning.
- **About Me** — Background, interests, and a personal introduction.
- **Links & Socials** — Links to social profiles and other platforms.

The site also includes responsive layouts, page transitions, and motion preferences that respect reduced-motion settings.

## Local development

Requires Node.js 20.19+ or 22.12+.

1. Install dependencies:

   ```sh
   npm ci
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open the local URL printed by Vite.

## Production build

Build the website and type-check the project:

```sh
npm run build
```

The production files are written to `dist/`. To serve that build locally:

```sh
npm run preview
```

## Netlify deployment

The repository includes a `netlify.toml` that pins Node.js 22.12.0, runs
`npm run build`, and publishes `dist/`. The `public/_redirects` rule provides
the SPA fallback needed for direct visits to portfolio routes.
