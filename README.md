# Veya · landing site

Static marketing landing page for **veya.app**, built with [Astro](https://astro.build).
Dark mode by default. PWA-ready. SEO-instrumented. German-jurisdiction-aware.

---

## Quick start

```bash
pnpm install      # or `npm install`
pnpm dev          # local dev server at http://localhost:4321
pnpm build        # production build into ./dist
pnpm preview      # preview the production build locally
```

---

## Fonts — REQUIRED before launch

The site loads **five font files** from `public/fonts/`:

| File                              | Purpose                                  | License            |
| --------------------------------- | ---------------------------------------- | ------------------ |
| `InterVariable.woff2`             | UI text, eyebrows, footer (upright)      | SIL OFL (free)     |
| `InterVariable-Italic.woff2`      | UI text (italic)                         | SIL OFL (free)     |
| `signifier-bold.woff2`            | All display headlines                    | Klim (purchased)   |
| `signifier-medium-italic.woff2`   | `<em>` emphasis inside headlines         | Klim (purchased)   |
| `signifier-regular.woff2`         | Editorial body prose                     | Klim (purchased)   |

**Action needed:** Place all five files in `public/fonts/`. The Inter files
come from https://github.com/rsms/inter/releases (free download). The three
Signifier files come from Klim's licensed delivery — drop them in with the
exact filenames above.

Without these files, the page falls back to system serif + system sans, which
*works* but doesn't look right.

---

## Italic emphasis is load-bearing

Many headlines have specific words rendered in Signifier Medium Italic against
the surrounding Signifier Bold — this is the editorial voice of the page.
These are encoded in `src/data/landing.ts` using `<em>` tags:

```ts
headline: 'Adult connection. Without the <em>gatekeepers</em>.',
```

Components render headlines using `set:html` so the `<em>` is preserved.
The CSS rule `h1 em, h2 em, h3 em { font-style: italic; font-weight: 500; }`
in `global.css` maps `<em>` to the Medium Italic cut.

If you change copy, keep italic emphasis as `<em>` tags. If you remove all
italics, the page reads flatter but still works.

---

## Dark mode is hardcoded

The launch ships dark-only. `<html data-theme="dark">` is set in
`BaseLayout.astro`, no toggle UI. Light-mode token values are retained in
`tokens-semantic.css` under `[data-theme="light"]` for future use, but
currently dormant.

---

## Project structure

```
veya-site/
├── astro.config.mjs              # Astro config, sitemap, site URL
├── package.json
├── tsconfig.json
│
├── public/                       # Served as-is at the site root
│   ├── favicon.svg
│   ├── manifest.webmanifest      # PWA manifest
│   ├── sw.js                     # Service worker
│   ├── robots.txt
│   ├── fonts/                    # Inter + Signifier .woff2 files go here
│   ├── icons/                    # PWA icons go here (see icons/README.md)
│   └── svg/                      # Wordmark + flattened step numbers
│       ├── veya_wordmark.svg
│       ├── 01.svg
│       ├── 02.svg
│       ├── 03.svg
│       └── 04.svg
│
└── src/
    ├── components/               # Section components
    ├── data/                     # All copy lives here
    │   ├── site.ts
    │   └── landing.ts            # Section copy + italic emphasis tags
    ├── layouts/
    │   └── BaseLayout.astro      # Hardcoded dark mode, font preloads, SW reg
    ├── pages/
    │   └── index.astro
    └── styles/
        ├── tokens-primitive.css  # Colour ramps, spacing, radius, font families
        ├── tokens-semantic.css   # Role-based aliases (dark mode default)
        └── website-type.css      # Exact pixel sizes for landing page only
```

---

## Type scale (from Figma)

All sizes are exact pixel values, not fluid `clamp()`. Defined in
`src/styles/website-type.css`.

| Token                 | Size  | Mobile | Used for                                    |
| --------------------- | ----- | ------ | ------------------------------------------- |
| `--text-hero`         | 108px | 56px   | Hero headline                               |
| `--text-display-80`   | 80px  | 40px   | Manifesto, Why-PWA, Install CTA             |
| `--text-display-72`   | 72px  | 36px   | Three Commitments, Underserved Work         |
| `--text-display-60`   | 60px  | 32px   | How It Works, Male Escort, Line, Audience   |
| `--text-card-title`   | 32px  | 24px   | Cards, line items                           |
| `--text-step-title`   | 20px  | 18px   | How-it-works step titles (Inter)            |
| `--text-body-large`   | 18px  | 16px   | Long-form body in editorial sections        |
| `--text-body`         | 16px  |        | Default body, card bodies                   |
| `--text-small`        | 14px  |        | Step bodies, tag pills (Inter)              |
| `--text-footer-link`  | 13px  |        | Footer links (Inter)                        |
| `--text-eyebrow`      | 12px  |        | All eyebrows / labels (Inter Bold, upper)   |

Letter-spacing and line-height use Klim's defaults except hero, which has
explicit `-3px` (`-0.028em`) tracking.

---

## SEO

Built-in:
- Real `<title>` and `<meta name="description">` with SEO keywords
- JSON-LD structured data: Organization, WebSite, FAQPage
- Hidden FAQ block in DOM matching the FAQ JSON-LD
- `sitemap-index.xml` generated at build
- `robots.txt`
- OpenGraph + Twitter card meta
- `<meta name="theme-color">` set to dark
- `<link rel="canonical">`

Edit FAQs in `src/data/landing.ts` → `faq` export.

---

## Deployment to Cloudflare Pages

1. Push to GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **Astro**. Build: `pnpm build`. Output: `dist`. Node 20+.
4. Add `veya.app` as a custom domain.

`.app` TLD requires HTTPS, which Cloudflare provides automatically.

Don't put the prototype on `veya.app` root — use `app.veya.app` or `/demo`.

---

## Still to add before public launch

- **Five font files** (see Fonts section above) — site renders incorrectly without these
- **Real images** in `public/images/` (search components for "Image placeholder")
- **PWA icons** — see `public/icons/README.md`
- **Impressum / Privacy / Terms** at the linked footer routes — **legally
  required** in Germany under TMG §5; current footer links to nonexistent pages
- **German translation** at `/de/`
- **OG image** (1200×630) at `/public/og-default.png`
