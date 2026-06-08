# Schreinerei Hergert — Design System

> KI-natives Design System für **Schreinerei Hergert**, Schreiner in Mannheim-Sandhofen.
> Maßmöbel & Innenausbau seit 1928 · inhabergeführt · 3. Generation.
> Warm, handwerklich präzise, regional verwurzelt.

This project is a **design system**: tokens, fonts, real brand assets, reusable React
components, and a full website UI kit. An automated compiler bundles the components into
`_ds_bundle.js` (namespace `window.HergertDesignSystem_5a1fa2`) and indexes `styles.css`.

---

## Sources

- **Live site:** https://schreinereihergert.de (Webflow). Pages: Home, Über uns, Leistungen, Kontakt.
- **Brief:** `uploads/schreinerei-hergert-DESIGN.md`
- **Logo:** `uploads/Design ohne Titel-min.png` → `assets/logo-hergert.png` (the real wordmark + emblem). Note: the site's `Logo-wide.svg` CDN asset is a Webflow placeholder, so the uploaded PNG is the source of truth.
- **Photography:** 17 real project photos pulled from the live site → `assets/photos/`

> ⚠️ **Font substitution.** The live Webflow site blocks cross-origin reads, so the exact
> brand typefaces could not be extracted. Display = **Spectral**, Text/UI = **Hanken Grotesk**
> (both self-hosted in `assets/fonts/`) are well-matched substitutes. Swap them in
> `tokens/fonts.css` + `tokens/typography.css` if the licensed brand fonts are known.

---

## Brand snapshot

- **Tagline:** Ihr Schreiner in Mannheim – Maßmöbel & Innenausbau seit 1928
- **Standort:** Mannheim-Sandhofen · **Telefon:** 0621 771352 · **E-Mail:** schreinerei-hergert@t-online.de
- **Personality:** Traditional yet modern · präzise · regional verwurzelt · vertrauenswürdig · handwerklich exzellent
- **Light mode only.** Photography is the brand's primary "color carrier."

---

## Content fundamentals

How the brand writes copy — match this for any new text.

- **Language:** German (Deutsch). German typographic quotes „…" for testimonials. Umlauts everywhere — fonts ship latin-ext.
- **Address the customer directly and formally:** always **"Sie / Ihr / Ihre"** ("Ihr Zuhause", "Ihre Räume", "Sprechen wir über Ihr Projekt"). Never "du".
- **Tone:** sachlich-kompetent — competent and matter-of-fact, warm through regionality and family tradition. Quality-conscious **without** arrogance. *Niemals* generic agency-speak, empty superlatives, or a too-young/hip voice that clashes with the craft tradition.
- **Casing:** Sentence case for headlines and body (German noun-capitalization applies). UPPERCASE only for short tracked eyebrows/captions ("SEIT 1928", "LEISTUNGEN").
- **Recurring phrases:** "Maßgeschreinert und nicht von der Stange", "präzise, regional und mit Blick fürs Detail", "Raumpotenzial intelligent nutzen", "seit 1928 in Familienhand".
- **Numbers:** the trust trio **1928 · 98 · 3.** — always tabular figures.
- **No emoji.** No exclamation-heavy marketing. Verbs of craft: fertigen, schreinern, realisieren, gestalten.
- **CTAs:** "Kontakt aufnehmen", "Anfrage senden", "Leistungen entdecken", "Mehr erfahren" — paired with the literal arrow **→**.

---

## Visual foundations

**Palette.** Warm and earthy, never cold. Cream backgrounds (`--cream-100 #F8F5F0`), near-black
anthracite text (`--ink-900 #1C1C1C`, never pure black), an oak-wood warm accent
(`--oak-500 #A07850`, sampled from the logo emblem) and a brick-red brand accent
(`--red-500 #B12E34`, sampled from the logo). White (`#FFFFFF`) is reserved for cards on cream.
Rules: backgrounds always warm; oak and red used **sparingly** (≤1 accent element per section);
no bright blue, no synthetic colors — a nature palette. Primary actions are **anthracite**, not
colored. (Note: the earlier brief speculated a green CTA; the real brand assets use anthracite +
red + oak, so green was dropped.)

**Type.** Display = **Spectral** serif (warm, transitional — traditional-modern, not playful),
weights 400–700, tight tracking (−0.02em) on large sizes. Text/UI = **Hanken Grotesk** (clean
humanist grotesque), line-height 1.7 for body. Big stats use Spectral with tabular figures.
Eyebrows are 13px uppercase, 0.12em tracking, oak or muted.

**Layout.** 1200px max width, 40px page padding (20px mobile), 12-col / 24px gutter. **Hard left
alignment** for headings and body — only hero stats and quotes center. Generous whitespace as a
premium signal (96px section rhythm desktop, 64px mobile). 8px spacing base.

**Backgrounds.** Mostly flat cream/white. Section rhythm alternates `--cream-100`, `--cream-50`,
and an occasional `--oak-100` tint band for the trust section. Photos go **edge-to-edge** in
portfolio grids (small 16px gaps, not white voids). No gradients as decoration (the only gradient
is the dark photo-caption protection overlay `--overlay-photo`). No textures or patterns.

**Imagery.** Real project photos only — warm, naturally lit, oak + white + anthracite interiors
with incidental greenery. Never stock or illustration. Rounded corners on framed images
(8–20px); portfolio tiles 8px; hero image 20px with a soft shadow and an overlapping white stat
card.

**Corners & borders.** Subtle radii: 4px buttons/inputs, 8px cards, 12–20px panels/hero.
Hairline borders in warm `--cream-300/400`, 1px. Cards = white, 1px warm border, 8px radius,
resting `--shadow-sm`.

**Elevation.** Soft, **warm-tinted** shadows (umber `28 24 18`, low alpha), never neutral-gray.
Ramp xs→xl. Cards rest at `sm`, lift to `lg` on hover.

**Motion.** Calm and restrained. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`, 140–360ms.
Hover: cards lift `translateY(-2px)` + image `scale(1.04)`; buttons lighten; secondary buttons
fill ink. Press: buttons nudge down 1px, icon buttons `scale(0.94)`. Focus: oak ring
(`--ring-focus`). No bounces, no infinite loops, no parallax.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) — clean 2px round-stroke line icons. Chosen as the brand
  icon system (the live Webflow site uses only sparse line glyphs + text arrows, so Lucide is a
  flagged substitution that matches the minimal, precise feel). Rendered inline as React
  components in `ui_kits/website/icons.jsx` (`window.HIcons`) so they tint with `currentColor`.
- **In use:** `Mail`, `Phone`, `MapPin`, `Clock` (contact); `Ruler`, `Boxes`, `Building`
  (services); `Check` (bullet lists / success); `Facebook`, `Instagram` (footer social);
  `ArrowRight` / `ArrowLeft` (CTAs and slider).
- **Arrows as voice.** The literal **→** glyph is used inside buttons and the testimonial slider,
  echoing the live site's "← Wischen →" affordance.
- **No emoji. No unicode-symbol icons** beyond the → / ← arrows. Icons stay monochrome (ink, oak,
  or muted) — never multicolor.
- **Logo:** `assets/logo-hergert.png` — wordmark (anthracite “HERGERT”) + emblem (oak-grain quarter
  circle, silver, red square) + red tagline. Multicolor on transparent — place on light surfaces
  (cream / white / oak-tint); do not invert (see `guidelines/brand-logo.html`).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this). `@import`s the token files only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `assets/` — `logo-hergert.png`, `fonts/` (Spectral + Hanken Grotesk woff2), `photos/` (17 project photos).
- `SKILL.md` — Agent-Skill manifest for download/Claude Code use.

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- Colors: surfaces · ink · oak · brand-red & functional · semantic roles
- Type: display · body · scale · stat numbers
- Spacing: scale · radius · shadow
- Brand: logo · photography

**Components** (`components/`, `window.HergertDesignSystem_5a1fa2`)
- `core/` — `Button`, `IconButton`, `Badge`, `SectionHeading`, `StatBlock`, `Card`, `PhotoTile`
- `forms/` — `Input`, `Textarea`, `Select`
- `feedback/` — `Testimonial`
- `navigation/` — `Navbar`
  Each has `.jsx` + `.d.ts` + `.prompt.md`, with a `*.card.html` demo per directory.

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive recreation of the Hergert website: **Home · Leistungen · Über uns ·
  Kontakt**, client-side routed, with a working contact-form success state.
- `icons.jsx`, `shared.jsx` (Footer/CTA/Container), `Home.jsx`, `Leistungen.jsx`, `UeberUns.jsx`, `Kontakt.jsx`.

**Starting points:** `Button`, `Card`, `Navbar` (component picker entries).
