# Khafi Manal – Portfolio

One-page, bilingual (English / French) portfolio for a junior Full Stack Developer: hero, about, skills, experience, projects, education and contact. Includes dark mode and a language switcher (choices are saved in the browser).

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (plus custom styles in `src/index.css`)

## Getting started

Requirements: Node.js 22+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # dev server with hot reload
pnpm build      # production build in dist/
pnpm preview    # preview the production build
```

## Project structure

```
public/
  favicon.svg
  images/             # profile photo and project screenshots (see below)
src/
  App.tsx             # all content (EN/FR) and components
  index.css           # global styles, theme variables, responsive rules
  main.tsx            # React entry point
index.html
vite.config.ts
```

## Images

All images live in `public/images/` and are served from `/images/...`.

| File                | Used for                    | Suggested size |
| ------------------- | --------------------------- | -------------- |
| `profile.jpg`       | Hero portrait (square crop) | 800 x 800 px   |
| `kilala.png`        | Kilala Emballage            | 1600 x 1000 px |
| `f2agc.png`         | F2AGC                       | 1600 x 1000 px |
| `clinicflow.png`    | ClinicFlow                  | 1600 x 1000 px |
| `bubble-school.png` | Bubble School               | 1600 x 1000 px |
| `anmougar.png`      | ANMOUGAR                    | 1600 x 1000 px |

If a file is missing, the site falls back to a built-in placeholder.

## Editing content

All text is in the `translations` object at the top of `src/App.tsx`, with one block per language (`en` and `fr`). Keep both in sync.

To add a project, add an entry to `projects.items` in **both** languages:

```ts
{
  title: "My Project",
  description: "What it does",
  tags: ["React", "Node.js"],
  url: "https://example.com",       // "" hides the "Visit" button
  github: "https://github.com/...",
  type: "kilala",                   // placeholder style if no image
  image: "my-project.png",          // file in public/images/
}
```

Colors and dark-mode values are CSS variables at the top of `src/index.css`.

## Deployment

The build output (`dist/`) is a static site and works on Vercel, Netlify, Render (static site) or GitHub Pages.
Build command: `pnpm build` · Output directory: `dist`
