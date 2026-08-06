# StorySection + MissionCtaSection Specification

Two adjacent, simple sections — build both in this one task.

## 1. StorySection ("Turning Loss Into Lifesaving Action")

- **Target file:** `src/components/StorySection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/07-story-cta.jpg` (top half)
- **Interaction model:** scroll-reveal via `useScrollReveal`.

### DOM Structure
White background section, `<Container>`, 2-column layout: left = text column, right = single rounded photo.

### Computed Styles
- H2: `font-size: 42.67px`, `font-weight: 700`, `color: #3F88C5`.
- Body paragraphs: `font-size: 18px`, `line-height: 27px`, `color: #15313F`, `margin-bottom: ~16px` between paragraphs. Note: the phrase `1,200 free screenings` inside the second paragraph is bold (`font-weight: 700`).
- Button ("SAVE A LIFE TODAY"): same style family as other yellow buttons (`bg:#FFD522`, `color:#15313F`, `font-weight:700`, uppercase, `letter-spacing:0.8px`, `padding:12px 20px`, `border-radius:12px`).
- Photo: `public/images/family-vintage-photo.png`, rendered with `object-fit: cover`, `object-position` tuned to crop to roughly the bottom-left quadrant of the source image (the two daughters) — natural image is 1080x881; a container around `~500x420` with `object-position: 15% 75%` approximates the crop seen in the screenshot. `border-radius: 24px`.

### Text Content (verbatim)
H2: `Turning Loss Into Lifesaving Action`
Paragraph 1: `The Missy Project was born from the devastating loss of Missy, who passed away from a brain aneurysm at just 12 years old. Out of that grief grew a commitment: no family should suffer a preventable loss.`
Paragraph 2: `For more than 25 years, we've turned that promise into action, raising national awareness, funding groundbreaking research, and partnering with physicians to establish screening protocols. Through our free MRI/MRA program, we've provided more than ` + **bold:** `1,200 free screenings` + ` for families at risk, offering peace of mind and life-saving early detection.`
Button: `SAVE A LIFE TODAY`

### Assets
- `public/images/family-vintage-photo.png`

---

## 2. MissionCtaSection ("Our mission is clear and unwavering:")

- **Target file:** `src/components/MissionCtaSection.tsx`
- **Screenshot:** `docs/design-references/themissyproject.org/07-story-cta.jpg` (bottom half, navy band)
- **Interaction model:** scroll-reveal via `useScrollReveal`.

**This is its own distinct section — a full-width dark-navy band, NOT part of StorySection.** Render both from the same file if convenient (two exports) or as siblings; keep them visually and structurally separate as on the source site.

### DOM Structure
Full-width, `background: var(--brand-navy)`, decorative scattered-flower background (`public/images/flowers-decorative-navy.png`, `object-fit: cover`, `pointer-events-none`, behind content), centered `<Container>` content: H2, 2-line paragraph, button — all center-aligned.

### Computed Styles
- H2: `font-size: 42.67px`, `font-weight: 700`, `color: #FFFFFF`, centered.
- Paragraph (2 lines): `font-size: 18px`, `color: #FFFFFF`, centered, `line-height: 1.6`.
- Button ("APPLY FOR A FREE SCREENING"): same yellow-button style as elsewhere.
- Generous vertical padding (~72px top/bottom).

### Text Content (verbatim)
H2: `Our mission is clear and unwavering:`
Paragraph line 1: `Prevent the preventable, and give every family the chance at a safer future`
Paragraph line 2: `See if you or a loved one qualifies (3-minute form)`
Button: `APPLY FOR A FREE SCREENING`

### Assets
- `public/images/flowers-decorative-navy.png`

## Responsive (both sections)
- **Desktop:** as described (Story = 2-col, MissionCta = centered single column).
- **Mobile (<700px):** Story stacks (text then photo, full width); MissionCta stays centered/single-column at all widths (it already is one column), just reduce heading font-size (~32px) and horizontal padding.
