# Science Section Specification ("Where Science Meets Hope")

## Overview
- **Target file:** `src/components/ScienceSection.tsx`
- **Screenshots:** `docs/design-references/themissyproject.org/09-science.jpg` (intro + 2 cards)
- **Interaction model:** scroll-reveal via `useScrollReveal`, cards staggered.

## DOM Structure
White background section, `<Container>`. Structure top to bottom:
1. Centered intro block: yellow eyebrow badge, H2, paragraph (with 2 bold phrases).
2. 2-column grid of dark cards: "What We Know" / "What We Don't Know".
3. Below the 2-column grid, a full-width light-blue "Research at the Heart" card with an icon + paragraph.

## Computed Styles
### Intro
- Eyebrow ("Where Science Meets Hope"): same badge style as other eyebrows (`bg: var(--brand-yellow)`, `color:#1C2F3F`, `padding:2px 8px`, `border-radius:2px`, `font-weight:700`, `font-size:16px`).
- H2 ("Closing the Gaps in Knowledge"): `font-size:42.67px`, `font-weight:700`, `color:#3F88C5`, centered.
- Paragraph: `font-size:18px`, `color:#15313F`, centered, `max-width:~800px` mx-auto. Bold spans: `unknowns into answers` and `lives saved`.

### Comparison cards ("What We Know" / "What We Don't Know")
- Card: `background: var(--brand-navy)` (#15313F), `padding: ~40px`, `border-radius: 16px`.
- Card H3 title ("What We Know"/"What We Don't Know"): `font-size: 28px`, `font-weight: 700`, `color: #3F88C5`.
- Card sub-heading ("The Evidence Is Clear"/"The Questions That Remain"): `font-size: 16px`, `font-weight: 700`, `color: var(--brand-yellow)`, `margin: 8px 0 16px`.
- Left card body paragraph + bullet list (`<ul>`, disc or a small dot marker in yellow), right card also a bullet list: `font-size: 16px`, `color: #FFFFFF`, `line-height: 1.6`. Bold spans within list items (e.g. `50`, `4x`, `prevent life-threatening ruptures`, `pediatric screening`, `genetic markers`, `national guidelines`) — `font-weight: 700`, `color: #FFFFFF` (same color, just bolder).
- Grid gap between the 2 cards: ~32px.

### Research at the Heart card
- Full width below the 2-column grid, `background: var(--brand-blue-pale)`, `border-radius: 16px`, `padding: ~40px`, 2-column internal layout: icon left (~80px, `icon-compassion.svg`), text right (H3 + paragraph).
- H3 ("Research at the Heart"): `font-size: 28px`, `font-weight: 700`, `color: #3F88C5`.
- Paragraph: `font-size: 16px`, `color: #15313F`, `line-height: 1.6`.

## Text Content (verbatim)
- Eyebrow: `Where Science Meets Hope`
- H2: `Closing the Gaps in Knowledge`
- Intro paragraph: `Even after 25 years of research, much about brain aneurysms remains uncertain. The Missy Project funds the studies that transform ` **unknowns into answers** `, and answers into ` **lives saved** `.`

**What We Know** card — sub-heading `The Evidence Is Clear`, intro line `Decades of screenings and research have revealed critical insights that guide prevention and treatment.`, bullets:
- `1 in 50 people has an unruptured brain aneurysm, most undetected until rupture.` (bold: `1`, `50`)
- `Family history increases risk up to 4x.` (bold: `4x`)
- `Early detection can prevent life-threatening ruptures.` (bold: `prevent life-threatening ruptures`)

**What We Don't Know** card — sub-heading `The Questions That Remain`, intro line `These are the urgent research gaps we're working to close with donor support.`, bullets:
- `The optimal age and frequency for population-level pediatric screening.` (bold: `pediatric screening`)
- `The precise genetic markers that predict ruptures.` (bold: `genetic markers`)
- `Cost-effective national guidelines comparable to mammography.` (bold: `national guidelines`)

**Research at the Heart card:** `Research is at the core of everything we do — because early detection is what saves lives. Since 2004, our Community Screening Program has worked to uncover the most pressing questions: what risk factors matter most, how family histories shape outcomes, and why children can be so deeply affected. Every study we support brings the answers closer, guiding doctors and families toward prevention and life-saving care.`

## Assets
- `public/images/icon-compassion.svg`

## Responsive
- **Desktop (1440px):** 2-column comparison grid, full-width research card below.
- **Mobile (<800px):** comparison cards stack to 1 column; research card's icon+text goes to a stacked layout (icon above text, centered).
