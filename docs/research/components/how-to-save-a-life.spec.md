# HowToSaveALifeSection Specification

## Overview
- **Target file:** `src/components/HowToSaveALifeSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/11-howtosave.jpg`
- **Interaction model: STATIC — NOT interactive tabs.** This looks like it could be a click-driven tab switcher (3 pill buttons) but a live click sweep confirmed clicking each pill does nothing. It is a purely decorative vertical stepper that fades into view via scroll-reveal. Do NOT wire up any click handlers or active-state switching. See BEHAVIORS.md #4.

## DOM Structure
Two stacked blocks that together read as one visual unit:
1. A dark-navy header band, full width of an inner rounded card, containing a centered H2 "HOW TO SAVE A LIFE" (white text). This band has `border-radius: 24px 24px 0 0` (rounded top corners only).
2. Below it, a light-blue panel (`var(--brand-blue-pale)`, `border-radius: 0 0 24px 24px`) containing, centered and stacked vertically:
   - The full logo lockup (`public/images/logo-primary-blue.png`, ~300px wide)
   - A thin vertical connector line (~48px tall, 1px wide, `var(--brand-navy)` at reduced opacity) — replicate with a simple `<div className="h-12 w-px bg-brand-navy/40" />`, no need to use the `stepper-connector-line.png` asset.
   - Pill 1: `EARLY DETECTION` (yellow pill button, non-interactive — render as a `<div>` not a `<button>`)
   - connector line
   - Pill 2: `RESEARCH`
   - connector line
   - Pill 3: `EDUCATION`

Both blocks together form one rounded card sitting inside a light-blue full-bleed section (the outermost section background is a slightly different, very pale blue — see screenshot; the card itself "floats" on that background with visible side/top/bottom margins).

## Computed Styles
- Outer section background: pale blue, close to `var(--brand-blue-pale)` at lower saturation — reuse `var(--brand-blue-pale)` for simplicity, it's visually close enough.
- Card: `max-width: ~700px`, centered, `border-radius: 24px`, `overflow: hidden` (so the two-tone header/body split shows the shared rounding on outer corners only).
- Header band: `background: var(--brand-navy)`, `padding: 32px`, H2 `font-size: 32px`, `font-weight: 700`, `color: #FFFFFF`, `letter-spacing: 0.5px`, centered.
- Body panel: `padding: 48px 32px`, centered flex column, `gap: ~24px` between logo/pills (connector lines sit within that gap visually).
- Pills: `background: var(--brand-yellow)`, `color: #15313F`, `font-weight: 700`, `font-size: 16px`, `text-transform: uppercase`, `letter-spacing: 0.8px`, `padding: 14px 32px`, `border-radius: 12px`.

## Text Content (verbatim)
H2: `HOW TO SAVE A LIFE`
Pills, top to bottom: `EARLY DETECTION`, `RESEARCH`, `EDUCATION`

## Assets
- `public/images/logo-primary-blue.png`

## Responsive
- **Desktop (1440px):** as described, card centered with visible section background on both sides.
- **Mobile (<700px):** card becomes full-width minus small side gutters; reduce header H2 to ~24px, logo to ~220px wide, pill padding slightly reduced.
