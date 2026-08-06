# Page Topology — themissyproject.org (Home)

Single-page site built on HubSpot CMS ("Atlas" theme). No other routes are in scope
(scope = whatever `https://www.themissyproject.org/` resolves to).

## Global layout
- Scroll container: native document scroll (no smooth-scroll library detected — no `.lenis`/`.locomotive-scroll`, no AOS/GSAP globals; jQuery is present but only theme plumbing).
- Header: `position: static` (NOT sticky/fixed — scrolls away with the page).
- Content container: `max-width: 1200px`, centered, with side gutters (visible at `.atlas-hero_content` and similar wrapper divs).
- Decorative flower shapes (brand mark, `.spinning-flower` / scattered watercolor-style flower PNGs/SVGs) appear as background layers behind several sections — outline shape of the logo flower, tinted per-section (light blue on white sections, dark navy-tinted on the navy section).
- z-index/overlay: no fixed overlays besides normal stacking; video swaps in place (thumbnail button → YouTube iframe) rather than opening a modal.

## Sections, top to bottom

1. **Header / Nav** — logo left, nav links (About, Learn, What We Do, Events) center-right, DONATE (yellow) + CONTACT (blue) buttons right. Static position.
2. **Hero** — "Know. Detect. Prevent." yellow badge, H1 "Early Brain Aneurysm Detection Saves Lives", supporting paragraph, DONATE NOW (yellow button) + APPLY FOR SCREENING (text link w/ arrow), 3-image photo collage on the right (1 tall left photo + 2 stacked right photos, yellow rounded borders), decorative flower outlines behind photos.
3. **Stats bar** — 4-up counter row on a pale-yellow background: 50% / 1200+ / 25yrs / 18mins, each with a caption. Numbers count up from 0 when scrolled into view.
4. **Video** — centered video player card (yellow rounded border) with custom thumbnail + play button; click swaps the thumbnail button for a YouTube iframe embed (`https://www.youtube.com/embed/7q7zqFm617Y`) that autoplays.
5. **Impact ("Our Mission in Action")** — dark navy section, decorative large flower icon, "Impact" yellow eyebrow badge, H2, subhead, 3 icon cards (Raising Awareness / Funding Breakthroughs / Changing Standards) each with a light-blue rounded card, blue line-icon, heading, description.
6. **Story ("Turning Loss Into Lifesaving Action")** — white background. 2-column: left = heading + 2 paragraphs of narrative copy + "SAVE A LIFE TODAY" button (yellow); right = single photo (`family-vintage-photo.png`, cropped/positioned via `object-fit: cover` to show just the two daughters) with rounded corners.
7. **Mission CTA ("Our mission is clear and unwavering:")** — its own dark-navy band (distinct from Story — do not merge them), decorative flower field background, centered H2 + 2-line supporting copy + "APPLY FOR A FREE SCREENING" button (yellow).
8. **Science ("Where Science Meets Hope")** — intro (yellow eyebrow, H2 "Closing the Gaps in Knowledge", paragraph) → 2-column comparison cards: "What We Know" (dark-navy card, blue heading) vs "What We Don't Know" (dark-navy card, blue heading), each with a yellow sub-heading + bullet list → full-width "Research at the Heart" card (light-blue bg) with `icon-compassion.svg` + paragraph.
9. **How To Save a Life** — dark-navy header band with centered H2 "HOW TO SAVE A LIFE", followed by a light-blue panel containing the logo lockup (`logo-primary-blue.png`) and a vertical stepper of 3 yellow pills (EARLY DETECTION / RESEARCH / EDUCATION) connected by thin vertical lines (`stepper-connector-line.png`, or replicate with a simple CSS border) — purely decorative/static (NOT interactive tabs — see BEHAVIORS.md).
10. **Aneurysm info / final CTA ("What is a brain aneurysm?")** — pale-blue section (`--brand-blue-pale`), 2-column: left = rounded photo (`aneurysm-photo.png`), right = H2 + 2 paragraphs + LEARN MORE button (yellow).
11. **Footer** — dark navy (`--brand-navy`), logo lockup (`logo-primary-blue-72.png` or same primary logo), 2 link columns (About Us / For You), Facebook icon (`FacebookSquareIcon`), legal row (copyright, Terms of Use, Privacy Policy, Disclaimer), decorative flower field background (`flowers-decorative-navy.png`).

## Asset manifest (downloaded to `public/images/` and `public/fonts/`)
- `logo-primary-blue.png` — full lockup logo (header nav + How-To-Save-a-Life panel)
- `logo-primary-blue-72.png`, `logo-icon-blue-72.png` — small logo / favicon-source variants
- `flower-logo-sky.png`, `flower-logo-blue.png` — single decorative flower mark (two tints)
- `flowers-decorative-navy.png`, `flowers-decorative-white.png` — full-bleed scattered flower-field backgrounds (dark and light tints), used behind Hero/Mission-CTA/Footer (navy) and Story/other white sections
- `icon-megaphone.svg`, `icon-donationbox.svg`, `icon-hospital.svg` — the 3 Impact cards, in this order
- `icon-compassion.svg` — Research at the Heart card icon
- `hero-photo-collage.png` — Hero section's 3-photo composite (tall family photo left, dog+couple top-right, elderly couple bottom-right), yellow borders already baked into the asset
- `family-vintage-photo.png` — vintage 4-person family portrait; Story section crops/positions it (object-fit cover) to show just the two daughters in the bottom-left of the frame
- `aneurysm-photo.png` — doctor pointing at a skull X-ray with mother/son (final CTA section)
- `video-thumbnail.png` — video section paused-state background image
- `stepper-connector-line.png` — thin vertical dash connector between stepper pills (safe to replicate as a CSS line instead)
- `public/fonts/mona-sans-{regular,500,700}.woff2` — self-hosted via `next/font/local`

## Responsive
Site CSS breakpoints (from `template_main.min.css`): `680px`, `700px`, `800px`, `1200px`, `1290px`.
Live resize-based capture was not possible in this environment (headless window would not resize), so mobile
layout is inferred from these breakpoints + standard HubSpot Atlas theme conventions: nav collapses to a
hamburger/drawer under ~900px (no literal `.mobile-menu` class was found via CSS text search, but the theme
is responsive at the documented breakpoints), multi-column sections stack to a single column below ~800px,
and the hero/story photo collages stack under the text below ~700px. Treat these as best-effort responsive
targets and verify against Tailwind's default `md`/`lg` breakpoints during QA.
