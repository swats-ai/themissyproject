# Header (Nav) Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/01-hero.jpg` (top strip)
- **Interaction model:** static (NOT sticky — `position: static`, scrolls away normally). Add a simple mobile hamburger menu (no exact spec captured for it; use a standard slide-down/drawer pattern consistent with the brand).

## DOM Structure
`<header>` full width, white background, border-bottom none (subtle 1px hairline visible in screenshot, `border-bottom: 1px solid #eef1f2` is a safe match), containing a horizontally centered content row (max-width 1200px via `<Container>` from `src/components/container.tsx`) with 3 groups: logo (left), nav links (center-right), buttons (right).

## Computed Styles
- Header: `background: transparent/white`, `position: static`, height auto, vertical padding ~20px (logo renders ~52px tall within an ~80px header — match screenshot).
- Logo: use `next/image` with `public/images/logo-primary-blue.png`, rendered height ~52px, width auto (aspect ratio preserved, natural size 1456x802 but as-rendered ~300x165 in the source's small instance — cap displayed height to ~52px).
- Nav links: `font-size: 16px`, `font-weight: 400`, `color: #3F88C5` (brand blue), `font-family: var(--font-sans)`. Gap between links ~32px.
- DONATE button: `background: #FFD522`, `color: #15313F`, `font-weight: 700`, `font-size: 16px`, `text-transform: uppercase`, `letter-spacing: 0.8px`, `padding: 12px 20px`, `border-radius: 12px`, `border: 1px solid #FFD522`.
- CONTACT button: `background: #3F88C5`, `color: #FFFFFF`, same padding/radius/weight/uppercase/letter-spacing as DONATE, `border: 1px solid #FFD522` (yes — a yellow border even though the fill is blue; matches the source exactly).
- Buttons sit side by side with ~12px gap, DONATE first then CONTACT.

## States & Behaviors
- Hover: buttons darken slightly (`brightness-95` or a ~8% darker shade) with `transition: background-color 0.2s ease`.
- Nav link hover: color shifts slightly darker blue, no underline.
- No scroll-triggered changes — header behavior is fully static.

## Text Content (verbatim)
Nav links, left to right: `About`, `Learn`, `What We Do`, `Events`
Buttons: `DONATE`, `CONTACT`

## Assets
- `public/images/logo-primary-blue.png` (logo, use `next/image` with explicit width/height, `priority` since it's above the fold)

## Responsive
- **Desktop (1440px):** as described, all inline in one row.
- **Mobile (<800px):** collapse nav links + buttons behind a hamburger icon (use a Lucide `Menu` icon); tapping opens a simple slide-down panel with the same 4 links + 2 buttons stacked vertically. Keep the logo visible at all times. Exact mobile HTML wasn't capturable live in this session (see BEHAVIORS.md) — use your best judgment for a clean drawer matching the brand colors, breakpoint ~800px per the theme's own CSS breakpoints.
