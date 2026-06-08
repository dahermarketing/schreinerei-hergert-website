# Schreinerei Hergert — Website

Static 4-page website for Schreinerei Hergert, Schreiner in Mannheim-Sandhofen.
Built on the Hergert Design System. Deployed on Cloudflare Pages.

## Project layout

```
index.html          Home page
leistungen.html     Leistungen (services) page
ueber-uns.html      Über uns (about) page
kontakt.html        Kontakt (contact) page

app/
  site.css          Responsive layout layer (mobile-first, breakpoints, components)
  icons.jsx         Lucide icon set (Babel/JSX, sets window.HIcons)
  shell.jsx         Shared shell: Header, Footer, CTA banner, cookie banner, thumb bar
  Home.jsx          Home page screen component
  Leistungen.jsx    Leistungen page screen component
  UeberUns.jsx      Über uns page screen component
  Kontakt.jsx       Kontakt page screen component
  image-slot.js     Drag-and-drop image placeholder web component

_ds/hergert-design-system-*/
  styles.css        Design system CSS entry point (tokens + fonts)
  _ds_bundle.js     Compiled React component library (window.HergertDesignSystem_5a1fa2)
  tokens/           CSS custom property token files
  assets/fonts/     Self-hosted Spectral + Hanken Grotesk woff2 fonts

assets/
  logo-hergert.png  Brand logo (wordmark + emblem)
  photos/           17 real project photos

_headers            Cloudflare Pages HTTP headers (caching, security)
```

## Tech stack

- **Plain HTML + React 18 (UMD) + Babel Standalone** — no build step.
  JSX files are transpiled in the browser via `<script type="text/babel">`.
- **Hergert Design System** — custom DS bundle with React components
  (`Button`, `Card`, `PhotoTile`, `StatBlock`, `SectionHeading`, `Testimonial`,
  `Badge`, `Input`, `Textarea`, `Select`, `IconButton`).
- **Fonts** — Spectral (display/headings) + Hanken Grotesk (body/UI), self-hosted.
- **Deployment** — Cloudflare Pages, no build command, publish directory = `/`.

## How each page works

Each HTML page loads the React/Babel/DS scripts, then mounts a screen component:
```html
<script type="text/babel">
  window.HShell.mountPage('home', window.HScreens.Home);
</script>
```
The `mountPage` key sets the active nav item. Pages that use `<image-slot>` also
load `app/image-slot.js` (a custom element for drag-and-drop image replacement in
the design tool — shows the `src` attribute as a static image in production).

## Cloudflare Pages deployment

1. Connect the GitHub repo in the Cloudflare Pages dashboard.
2. Build command: *(none — leave blank)*
3. Build output directory: `/`
4. No environment variables required.

The `_headers` file sets long-lived cache for fonts/DS assets (immutable) and
moderate cache for photos, with security headers on all routes.

## Content to supply before launch

- **Owner/team photo** — the `<image-slot id="home-inhaber">` on the Home page has no
  fallback photo. Replace it with a real `src` attribute pointing to an owner/team photo,
  or drop a photo onto the slot in the design tool.
- **Impressum / Datenschutz** — footer links point to `#` (placeholder). Wire up real
  legal pages before going live.
- **Google Maps embed** — `Kontakt.jsx` uses a generic Mannheim-Sandhofen query. Replace
  with a real embed URL from Google Maps for the exact address.
- **Cookiebot** — the cookie banner is a functional DSGVO placeholder. Replace with
  Cookiebot (or another certified CMP) before launch.
- **Canonical domain** — all four pages have `<link rel="canonical">` pointing to
  `https://www.schreinereihergert.de/…`. Update if the domain differs.

## Design system tokens (key vars)

| Token | Value | Use |
|---|---|---|
| `--cream-50` | `#F8F5F0` | Page background |
| `--ink-900` | `#1C1C1C` | Primary text / dark CTA bg |
| `--oak-500` | `#A07850` | Accent (wood tone) |
| `--oak-600` | `#8A6640` | Accent hover / icons |
| `--font-display` | Spectral | Headings |
| `--font-sans` | Hanken Grotesk | Body / UI |
| `--container-max` | `1200px` | Max content width |
| `--page-padding` | `40px` (20px mobile) | Horizontal padding |
| `--section-gap-desktop` | `96px` | Vertical section rhythm |

## Editing guidance

- All copy, photos, and contact details live in the JSX files under `app/`.
- `CONTACT` object in `shell.jsx` holds phone, email, and Maps URL — change once, updates everywhere.
- `NAV` array in `shell.jsx` defines the navigation links.
- Section background tints use `tint` prop on `<Section>`: `var(--cream-50)`, `var(--oak-100)`.
- Mobile breakpoints: drawer nav + thumb CTA bar appear at ≤900px; type scales down at ≤640px.
