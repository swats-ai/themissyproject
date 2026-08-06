# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/01-hero.jpg`
- **Interaction model:** scroll-reveal only (fade-up on mount/into-view via `useScrollReveal` from `src/hooks/use-scroll-reveal.ts`; the hero is above the fold so it should reveal almost immediately on page load — still wire it through the hook/`.reveal` classes for consistency, or reveal immediately with a mount-triggered CSS transition since it's the first thing visible).

## DOM Structure
White background section, `<Container>` inside, 2-column layout at desktop: left = text column (badge, H1, paragraph, CTA row), right = single composite photo image. Behind everything (z-index below content, `pointer-events-none`), a light decorative flower background bleeds in from the right edge — use `public/images/flowers-decorative-white.png` positioned absolute, `object-fit: contain`, aligned to the right side of the section (see screenshot: flowers visible behind/around the photo collage, extending above and below it).

## Computed Styles
- Badge ("Know. Detect. Prevent."): `background: #F8D738` (or `--brand-yellow`), `color: #1C2F3F`, `padding: 2px 8px`, `border-radius: 2px`, `font-weight: 700`, `font-size: 16px`, `display: inline-block`, `margin-bottom: ~16px`.
- H1: `font-size: 68px`, `line-height: 86.36px` (~1.27), `font-weight: 700`, `color: #3F88C5`, `margin-bottom: 34px`. Text wraps across 4 lines at this width (see screenshot) — do not force manual `<br>`s, let it wrap naturally with `max-width` on the column (~520px).
- Paragraph: `font-size: 18px`, `line-height: 27px`, `font-weight: 400`, `color: #15313F` (body text is dark navy, NOT the blue used for the paragraph in raw computed styles which inherited from a blue ancestor default — visually the body copy reads as dark navy/charcoal per the screenshot; use `--brand-navy` at ~80% opacity if needed to match).
- CTA row: "DONATE NOW" button (same style as header DONATE button: `bg:#FFD522`, `color:#15313F`, `font-weight:700`, `uppercase`, `letter-spacing:0.8px`, `padding:12px 20px`, `border-radius:12px`) + "APPLY FOR SCREENING" text link with `ArrowRightLongIcon` (16px, inline after text, `color:#1C2F3F`, `font-weight:700`, `uppercase`, `font-size:16px`, `letter-spacing:0.8px`, no background/border, gap ~8px between text and arrow).
- Photo collage: single `next/image` using `public/images/hero-photo-collage.png` (borders/rounded corners already baked into the asset — render it as-is, do not add additional CSS borders). Natural aspect ratio ~1456:802; constrain to container width on the right column (~560–600px wide at desktop).

## States & Behaviors
- Scroll reveal on H1/paragraph/CTA (staggered slightly — badge first, then H1, then paragraph, then buttons, ~100ms apart) using the `.reveal`/`.revealed` utility classes.
- Button hover: standard brightness-shift + `transition: background-color 0.2s ease`.

## Text Content (verbatim)
- Badge: `Know. Detect. Prevent.`
- H1: `Early Brain Aneurysm Detection Saves Lives`
- Paragraph: `From families to physicians to donors, we're uniting a community with one goal: prevent the preventable through early detection.`
- Buttons: `DONATE NOW`, `APPLY FOR SCREENING` (with trailing arrow icon)

## Assets
- `public/images/hero-photo-collage.png`
- `public/images/flowers-decorative-white.png` (decorative background, behind content)
- `ArrowRightLongIcon` from `src/components/icons.tsx`

## Responsive
- **Desktop (1440px):** 2-column, text ~45% / photo ~55%.
- **Tablet (768–1200px):** H1 font-size scales down (~48–56px), columns may narrow but stay side-by-side down to ~800px per the theme breakpoints.
- **Mobile (<700px):** stack to a single column — text first, photo collage below, full width; H1 scales down further (~40px); center-align the badge/CTA row is optional, left-align is the safer default matching desktop.
