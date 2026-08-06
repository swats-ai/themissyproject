# AneurysmInfoSection Specification ("What is a brain aneurysm?")

## Overview
- **Target file:** `src/components/AneurysmInfoSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/13-aneurysm-info.jpg`
- **Interaction model:** scroll-reveal via `useScrollReveal`.

## DOM Structure
Full-width section, `background: var(--brand-blue-pale)` (#CFE8EF). `<Container>` inside with a 2-column layout: left = rounded photo, right = text column (H2, 2 paragraphs, button).

## Computed Styles
- Photo: `public/images/aneurysm-photo.png`, `border-radius: 24px`, `object-fit: cover`, roughly square-ish container (~520x460 at desktop, matching the asset's own baked-in rounded/blob shape — do not add extra CSS rounding beyond a normal `border-radius`, the asset already has an organic clipped shape at full opacity so a straightforward `border-radius: 24px` on a container is sufficient, letterboxing is fine since the PNG has transparency).
- H2 ("What is a\nbrain aneurysm?", 2 lines): `font-size: 42.67px`, `font-weight: 700`, `color: #15313F` (note: darker navy here, not the usual brand-blue — matches screenshot).
- Paragraphs: `font-size: 18px`, `line-height: 1.6`, `color: #15313F`.
- Button ("LEARN MORE"): standard yellow button style (`bg:#FFD522`, `color:#15313F`, `font-weight:700`, uppercase, `letter-spacing:0.8px`, `padding:12px 20px`, `border-radius:12px`).
- Generous vertical section padding (~64px top/bottom).

## Text Content (verbatim)
H2: `What is a brain aneurysm?`
Paragraph 1: `Brain aneurysms are often called "silent killers" because most show no symptoms until they rupture. In fact, 1 in 50 people is living with an unruptured aneurysm — and many don't even know it. For those with a family history, the risk quadruples`
Paragraph 2: `A rupture can be catastrophic, with more than half resulting in death or severe disability. But there is hope: early detection changes the story. With the right screening, aneurysms can be found before they rupture, giving families the chance to prevent tragedy and protect future generations.`
Button: `LEARN MORE`

## Assets
- `public/images/aneurysm-photo.png`

## Responsive
- **Desktop (1440px):** 2-column, photo left ~45%, text right ~55%.
- **Mobile (<700px):** stack — photo first (full width, capped height ~320px), text below.
