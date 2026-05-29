# Fonts directory

The site loads **two font files** from this directory:

- `InterVariable.woff2`
- `InterVariable-Italic.woff2`

Inter is free under the SIL Open Font License. Download the latest variable
release here and drop the two files into this folder:

  https://github.com/rsms/inter/releases

You want the files named:
  - `InterVariable.woff2`         (upright)
  - `InterVariable-Italic.woff2`  (italic)

These will be served from `https://veya.app/fonts/InterVariable.woff2` and
preloaded in the document head. With them in place, the page renders identical
to the Figma design.

## Display font (GT Ultra)

The Figma design system uses **GT Ultra Extrabold** for display headings, but
the file is currently rendering with Inter Bold as a fallback (per the Figma
note). The CSS already references `'GT Ultra'` first in `--font-display`, so
the moment a web-licensed copy is available, drop it here as:

  `gt-ultra-extrabold.woff2`

…and uncomment the corresponding `@font-face` block in
`src/styles/global.css`. No other change is needed.

If GT Ultra isn't going to be licensed at all, swap `'GT Ultra'` for a free
alternative in `tokens-primitive.css`. Reasonable matches:

  - **Fraunces** (free, Google Fonts) — closest to GT Ultra's display feel.
  - **Instrument Serif** (free) — lighter, more editorial.
  - **Inter** with `font-weight: 900` — already loaded, zero new bytes.
