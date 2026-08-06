# Impact Section Specification ("Our Mission in Action")

## Overview
- **Target file:** `src/components/ImpactSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/05-impact.jpg`
- **Interaction model:** scroll-reveal (heading + cards fade up, cards staggered ~100ms apart) via `useScrollReveal`.

## DOM Structure
Full-width section, `background: var(--brand-navy)` (#15313F). A large decorative flower mark (`public/images/flower-logo-sky.png` or a simple flower SVG shape, tinted to blend into the navy — screenshot shows it as a subtle darker-navy silhouette centered above the heading, ~140px) sits centered at the top of the section. Below it: centered `<Container>` with eyebrow badge, H2, subhead paragraph, then a 3-column grid of cards.

## Computed Styles
- Eyebrow badge ("Impact"): `background: var(--brand-yellow)`, `color: #1C2F3F`, `padding: 2px 8px`, `border-radius: 2px`, `font-weight: 700`, `font-size: 16px`.
- H2 ("Our Mission in Action"): `font-size: 42.67px`, `font-weight: 700`, `color: #3F88C5`, centered.
- Subhead paragraph: `font-size: 18px`, `color: #FFFFFF`, centered, `max-width: ~700px`, centered in container.
- Card grid: `display: grid`, 3 equal columns, `gap: ~24px`, `margin-top: ~48px`.
- Each card: `background: var(--brand-blue-pale)` (#CFE8EF), `padding: 32px 25px 48px`, `border-radius: 12px`, subtle box-shadow (`shadow-sm`/`0 1px 2px rgba(0,0,0,.05), 0 4px 8px rgba(0,0,0,.04)`), centered text/icon.
- Card icon: 64–72px, from the SVGs below, centered, `margin-bottom: ~16px`.
- Card title: `font-size: 24px`, `font-weight: 700`, `color: #15313F`, `margin-bottom: ~12px`.
- Card description: `font-size: 16px`, `color: #15313F`, `line-height: 1.5`.

## Data (verbatim)
```ts
const cards = [
  { icon: "/images/icon-megaphone.svg", title: "Raising Awareness", description: "We help families and providers recognize the risks of brain aneurysms through accessible education and community outreach." },
  { icon: "/images/icon-donationbox.svg", title: "Funding Breakthroughs", description: "Every donation supports targeted studies in early detection, from genetic markers to screening guidelines that save lives." },
  { icon: "/images/icon-hospital.svg", title: "Changing Standards", description: "We partner with caregivers and medical professionals to improve treatment protocols and strengthen resources for families." },
];
```
Eyebrow: `Impact`
H2: `Our Mission in Action`
Subhead: `Creating awareness and supporting research for early detection of brain aneurysms to save lives.`

## Assets
- `public/images/icon-megaphone.svg`, `public/images/icon-donationbox.svg`, `public/images/icon-hospital.svg`
- `public/images/flower-logo-sky.png` (decorative top flower mark — render at low opacity/darker-tint so it reads as a subtle silhouette against the navy background, matching the screenshot)

## Responsive
- **Desktop (1440px):** 3-column card grid.
- **Tablet (~800px):** cards may wrap to 2+1.
- **Mobile (<700px):** single column, cards stacked full-width.
