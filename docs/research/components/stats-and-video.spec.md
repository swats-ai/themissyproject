# StatsBar + VideoSection Specification

Two small, adjacent sections — build both in this one task since each is tiny.

## 1. StatsBar

- **Target file:** `src/components/StatsBar.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/00b-stats-bar.jpg`
- **Interaction model:** scroll-driven count-up. Use `useCountUp` from `src/hooks/use-count-up.ts` per stat — each number starts at `0` and animates up to its target when the section scrolls into view (~1.6s ease-out, see hook implementation).

### DOM Structure
Full-width band, `background: var(--brand-yellow-pale)` (#FFFAE8), `<Container>` inside with a 4-column grid (equal columns, centered text), generous vertical padding (~48px).

### Computed Styles
- Each stat: big number `font-size: ~48px`, `font-weight: 700`, `color: #3F88C5`; suffix (`%`, `+`, `yrs`, `mins`) same line, slightly smaller (~32px) and same color, non-bold or `font-weight: 500`.
- Caption below: `font-size: 16px`, `color: #15313F`, `font-weight: 400`, `margin-top: ~8px`.
- Columns are separated visually only by whitespace (no dividers/borders).

### Data (verbatim, final settled values — see BEHAVIORS.md #2)
```ts
const stats = [
  { value: 50, suffix: "%", caption: "of brain ruptured aneurysms are fatal" },
  { value: 1200, suffix: "+", caption: "Free MRI/MRA screenings provided" },
  { value: 25, suffix: "yrs", caption: "of awareness, education, &research" },
  { value: 18, suffix: "mins", caption: "between ruptures in the U.S." },
];
```

### Responsive
- **Desktop:** 4 columns in a row.
- **Mobile (<700px):** 2x2 grid (2 columns, 2 rows) — keeps numbers legible; reduce font-size to ~36px.

---

## 2. VideoSection

- **Target file:** `src/components/VideoSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/03-video.jpg`
- **Interaction model: CLICK-DRIVEN** (see BEHAVIORS.md #3) — do NOT autoplay, do NOT use a modal. This is a client component (`"use client"`).

### DOM Structure
White background section, `<Container>` inside, single centered card (`max-width: ~800px`), `border: solid #FFD522` (~8-10px, use `border-[10px] border-brand-yellow`), `border-radius: ~24px`, `overflow: hidden`.

### Behavior
- Default state: a `<button>` filling the card, `background-image: url(/images/video-thumbnail.png)` (`bg-cover bg-center`), with:
  - A large centered semi-transparent white play triangle (~90px, simple CSS triangle or a Lucide `Play` icon at large size with `text-white/70`).
  - A small flower-shaped play button bottom-left (~48px) — approximate with a rounded/blob shape in `--brand-blue` containing a small white play triangle; exact flower SVG wasn't isolated, a simple circular/blob play button is an acceptable substitute.
  - A thin horizontal scrub-bar line near the bottom (decorative only, non-functional — a simple `<div>` with a white/30% track and a small white dot/thumb at ~10% position, matching the screenshot).
- On click: replace the button with an `<iframe>`:
  ```
  src="https://www.youtube.com/embed/7q7zqFm617Y?autoplay=1"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="h-full w-full"
  ```
  Same container size/border, `aspect-ratio: 16/9` on both the button and the iframe so there's no layout shift on swap.

### Assets
- `public/images/video-thumbnail.png`

### Responsive
- **Desktop:** ~800–1000px max-width, centered.
- **Mobile:** full container width minus side padding, same aspect ratio.
