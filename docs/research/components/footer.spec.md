# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/15-footer.jpg`
- **Interaction model:** static, links have simple hover states.

## DOM Structure
Full-width `<footer>`, background `var(--brand-navy)` (#15313F), with a decorative scattered-flower background image (`public/images/flowers-decorative-navy.png`, `object-fit: cover`, positioned to bleed off the right/bottom edges as in the screenshot — use `absolute inset-0` behind the content with `overflow-hidden` on the footer). Content sits in a `<Container>` with generous top/bottom padding (~64px top, ~40px bottom before the legal row).

Layout (desktop): 3-column flex/grid row —
1. Logo lockup + Facebook icon (left, largest column)
2. "About Us" heading + 3 links (center)
3. "For You" heading + 3 links (right)

Below that, a full-width legal row: copyright text (left), then 3 centered-ish links spread across the remaining width: Terms of Use, Privacy Policy, Disclaimer.

## Computed Styles
- Background: `#15313F`.
- Logo: `public/images/logo-primary-blue-72.png` (or reuse `logo-primary-blue.png`), rendered ~260px wide, white/blue as in the asset itself (asset already has the correct blue coloring — do not recolor it).
- Facebook icon: `FacebookSquareIcon` from `src/components/icons.tsx`, ~28px, `color: #3F88C5`.
- Column headings ("About Us", "For You"): `font-size: 24px`, `font-weight: 700`, `color: #FFFFFF`.
- Links: `font-size: 16px`, `font-weight: 400`, `color: #3F88C5`, vertical spacing ~12px between each, `text-decoration: underline` on the legal row links only (Terms/Privacy/Disclaimer are underlined per the screenshot; the About Us/For You column links are NOT underlined).
- Copyright text: `color: #3F88C5`, `font-size: 14px`.
- A subtle horizontal divider or just spacing separates the 3-column row from the legal row (screenshot shows no visible rule, just vertical spacing ~40px).

## Text Content (verbatim)
- Column 1 heading: `About Us` — links: `About Us`, `Learn`, `What We Do`
- Column 2 heading: `For You` — links: `Volunteer`, `Donate`, `Events`
- Copyright: `© 2025 TheMissyProject.org | All rights reserved |  Austin, Texas`
- Legal links: `Terms of Use`, `Privacy Policy`, `Disclaimer`

## Assets
- `public/images/logo-primary-blue-72.png`
- `public/images/flowers-decorative-navy.png` (background, `object-fit: cover`, low z-index behind content, `pointer-events-none`)
- `FacebookSquareIcon` from `icons.tsx`

## Responsive
- **Desktop (1440px):** 3-column row as described.
- **Mobile (<700px):** stack logo block, then "About Us" column, then "For You" column, each full width with generous vertical spacing; legal row also stacks (copyright, then each link on its own line, centered).
