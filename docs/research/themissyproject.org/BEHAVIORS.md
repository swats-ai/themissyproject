# Behaviors — themissyproject.org (Home)

## 1. Scroll-reveal fade-up (site-wide, applies to nearly every heading/card/section)
This is the dominant animation on the page — confirmed by reading the theme's own CSS
(`template_main.min.css`, class `atlas-animate-reveal`):

- **Trigger:** element enters viewport (IntersectionObserver-style — elements start hidden and gain a
  `revealed` class once scrolled into view; jumping via `scrollTo` does not trigger it, real scroll does).
- **Before (`.atlas-animate-reveal`):** `opacity: 0`, `transform: translateY(40px) rotate3d(-1,0,0,15deg)`
- **After (`.atlas-animate-reveal.revealed`):** `opacity: 1`, `transform: translateY(0px)`
- **Variant `.from-top`:** before = `translateY(-40px) rotate3d(1,0,0,15deg)` (reveals downward instead of up)
- **Transition:** `transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-out;`
- **Implementation approach:** IntersectionObserver (threshold ~0.15–0.2, rootMargin similar to "-10% 0px"),
  toggle a `revealed`/`in-view` class, CSS transition handles the rest. Apply to section headings, cards,
  and card groups (cards appear to stagger slightly — stagger children ~80–120ms apart when animating a group).

## 2. Stat counters (count-up on scroll into view)
Section: Stats bar (2nd section, pale-yellow background), class `counter-wrapper` / `counter-child`.
- **Trigger:** scroll into view (same reveal mechanism family — did NOT animate on instant `scrollTo`, did
  animate after ~2s of real scroll events reaching the section).
- **Before:** each number renders as literal `0`.
- **After (settled values):**
  - `50 %` — "of brain ruptured aneurysms are fatal"
  - `1200 +` — "Free MRI/MRA screenings provided"
  - `25 yrs` — "of awareness, education, &research"
  - `18 mins` — "between ruptures in the U.S."
- **Implementation approach:** IntersectionObserver triggers a JS count-up (e.g. requestAnimationFrame tween
  from 0 → target over ~1.5–2s, ease-out). Suffix (`%`, `+`, `yrs`, `mins`) is static, only the number ticks up.

## 3. Video: click-to-play thumbnail → YouTube embed swap
Section: Video (3rd section).
- **INTERACTION MODEL: click-driven** (not autoplay, not hover).
- Default state: `<button class="oembed_custom-thumbnail">` with a background-image thumbnail
  (`home video thumbnail (1).png`) and a large centered play triangle + small flower-shaped play button
  bottom-left + a disabled-looking scrub bar.
- **On click:** thumbnail button is replaced in-place by an `<iframe>` pointed at
  `https://www.youtube.com/embed/7q7zqFm617Y` which autoplays immediately. No modal — same container, same
  yellow rounded border.
- Card wrapper: yellow border (~8-10px), large border-radius, keeps its size before/after swap.

## 4. "How To Save a Life" stepper — NOT interactive
Section 8. Initially assumed this could be a click-driven tab switcher (3 pills: EARLY DETECTION / RESEARCH /
EDUCATION), but the click sweep confirmed clicking each pill does nothing — no content changes, no active
state change. This is a **static decorative vertical stepper/timeline** (logo lockup at top, thin vertical
connector line, 3 yellow pill labels) that simply fades/staggers into view via the scroll-reveal mechanism
(behavior #1) as the section scrolls into the viewport. **Do not build this as tabs.**

## 5. Decorative flowers (`.spinning-flower`)
CSS: `.spinning-flower img { transition: transform .2s linear; will-change: transform; }` — `will-change` +
short linear transition on `transform` strongly suggests a scroll- or pointer-driven rotation effect (rotates
proportional to scroll position or cursor position) rather than a CSS `@keyframes` spin — no `@keyframes` rule
was found in the theme CSS. Low-priority polish: a subtle continuous or scroll-linked rotation on the large
flower logo mark. Safe fallback if not reproduced exactly: static flower art with the reveal fade from #1.

## 5. Buttons — hover
Not deeply probed (no hover-specific rules found beyond standard opacity/brightness shifts typical of the
theme); apply a conventional subtle hover: DONATE/yellow buttons darken slightly on hover, CONTACT/blue
button lightens slightly, both with `transition: background-color 0.2s ease`. Verify visually during QA.

## 6. Header
`position: static` — the header is NOT sticky. It scrolls out of view normally with the rest of the page.
Do not implement a sticky/shrinking header.

## Responsive
See PAGE_TOPOLOGY.md — live mobile capture wasn't obtainable in this session (browser window would not
resize); breakpoints `680/700/800/1200/1290px` were recovered from the theme's compiled CSS. Build mobile
layouts using standard stacking patterns at those breakpoints and confirm visually once the dev server is
running (resize an actual browser rather than relying on this recon).
