---
spec: Case Study Detail — /portfolio/cases/[slug]
version: 2.0
date: 2026-05-01
status: ready-for-implementation
---

# UX/UI Spec — Case Study Detail Page `/portfolio/cases/[slug]`

## Design Intent

The detail page must read as the interior of the bento grid — as if the user clicked open one of the cards and entered it. Every visual grammar element introduced in `/cases/page.tsx` (eyebrow line + text, orbs, serif watermark, gradient-breathe background, bento card anatomy) reappears here in page-level form. The back-link leaves the floating pill pattern behind and becomes an inline contextual breadcrumb. All section headers use the same two-part divider pattern. Result cards adopt the bento card DNA. The prev/next nav becomes a miniature bento pair.

---

## 1. PAGE STRUCTURE OVERVIEW

```
[MARQUEE STRIP — inherited from /cases]   ← omit, already in /cases only
[HEADER — hero with orbs + eyebrow + large title]
[INTRO — full-width prose, white bg]
[SITUATION — paper bg, section header + prose]
[APPROACH — white bg, numbered steps with animated left line]
[RESULTS — hero-gradient-bg, stat cards with bento DNA]
[LEARNED — white bg, prose + optional quote-callout]
[PREV/NEXT NAV — paper bg, two bento-style cards]
```

No dark backgrounds anywhere on the detail page. The `case-header-bg` class (dark gradient) is not used. All sections use light palette only.

---

## 2. ANIMATION HIERARCHY

### On page load (animate-* classes, run once)
- `animate-fade-up [animation-delay:100ms]` — eyebrow breadcrumb line
- `animate-fade-up [animation-delay:150ms]` — eyebrow text
- `animate-fade-up [animation-delay:250ms]` — watermark number (fades in slowly)
- `animate-fade-up [animation-delay:300ms]` — meta row (company · role · timeline)
- `animate-fade-up [animation-delay:420ms]` — H1 main line
- `animate-fade-up [animation-delay:560ms]` — H1 italic subtitle line
- `animate-fade-up [animation-delay:700ms]` — tag pills
- `animate-fade-up [animation-delay:800ms]` — read-time label

### On scroll (reveal classes, driven by RevealProvider + IntersectionObserver)
- `reveal` — paragraphs, section body content, result cards, nav cards
- `reveal-expand` — all section divider `h-px` lines (scaleX from left)
- `reveal-far` — quote-callout block only (deeper spring, starts further down)
- `approach-step-line::before` — scroll-driven animation already defined in globals.css (no change needed)

### Stagger increments
- Section paragraphs: `transitionDelay: ${i * 60}ms`
- Approach steps: `transitionDelay: ${i * 80}ms`
- Result cards: `transitionDelay: ${i * 70}ms`

---

## 3. SECTION SPECS

---

### SECTION A — HEADER (HERO)

```
[PAGE: Case Study Detail — Header]
URL: /portfolio/cases/[slug]

LAYOUT (mobile): full-width, min-h: none, pt-24 pb-16, relative overflow-hidden
LAYOUT (lg): pt-32 pb-24

BACKGROUND: .hero-gradient-bg (animated warm lavender gradient, 12s loop)
  Decision → The dark case-header-bg is rejected. Coherence with /cases page hero
  which uses the same light animated gradient. Keeps the page fully light.

DECORATIVE LAYER (behind all content, aria-hidden):
  .landing-orb-1 — positioned top-[-200px] right-[-180px], 600×600px purple orb
  .landing-orb-2 — positioned bottom-[-120px] left-[-100px], 360×360px blue orb
  Mobile: orbs auto-scale per globals.css media query (280×280 / 180×180)
  Decision → Mirrors /cases hero exactly. Visual continuity signals "same world."

WATERMARK NUMBER (absolute, aria-hidden, pointer-events-none, select-none):
  Position: absolute bottom-[-0.05em] right-[-0.01em]
  Font: font-serif font-black leading-none tracking-[-0.04em]
  Size: text-[clamp(10rem,28vw,22rem)]    ← larger than current (was 18rem max)
  Color: text-ink opacity-[0.045]         ← slightly more visible than current (0.04)
  Animation: animate-fade-up [animation-delay:250ms]
  Decision → Increase size/opacity fractionally so it reads like the bento card
  watermarks (which use clamp(6rem,15vw,13rem) at card scale — at page scale
  the equivalent prominence needs a larger absolute size).

INNER CONTENT (relative z-10, max-w-5xl mx-auto px-6 lg:px-12):

  ┌─── BREADCRUMB EYEBROW (replaces floating pill) ───────────────────────────┐
  │ Layout: flex items-center gap-3 mb-8                                       │
  │ Animate: animate-fade-up [animation-delay:100ms]                           │
  │                                                                             │
  │ ← Back link as eyebrow line+text (same pattern as /cases hero eyebrow):   │
  │   [div.w-10.h-px.bg-gradient-to-r.from-accent.to-transparent]             │
  │   [Link href="/portfolio/cases"]                                            │
  │     text-2xs font-semibold tracking-widest uppercase                       │
  │     text-ink-tertiary hover:text-accent transition-colors duration-200     │
  │     flex items-center gap-2 group                                           │
  │     Content: "← All cases"                                                  │
  │     Arrow: SVG 12×12, stroke currentColor, group-hover:-translate-x-0.5   │
  │     transition-transform duration-200                                       │
  │   [span.mx-2.text-ink-tertiary.opacity-30] "/"                             │
  │   [span.text-2xs.font-semibold.tracking-widest.uppercase.text-ink-tertiary]│
  │     "Case {c.number}"                                                       │
  └─────────────────────────────────────────────────────────────────────────── ┘
  Decision → Removes the fixed pill that overlapped with the global nav. The
  eyebrow format is identical to /cases page, creating a clear visual language:
  "accent line + small-caps text = orientation label."
  Accessibility: Link has descriptive text. No floating z-index conflicts.

  ┌─── META ROW ──────────────────────────────────────────────────────────────┐
  │ Layout: flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-9               │
  │ Animate: animate-fade-up [animation-delay:300ms]                           │
  │                                                                             │
  │ [span] company  →  text-2xs font-bold tracking-label uppercase text-ink-tertiary
  │ [dot] w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40 aria-hidden  │
  │ [span] role     →  same classes                                             │
  │ [dot] same                                                                  │
  │ [span] timeline →  same classes                                             │
  └─────────────────────────────────────────────────────────────────────────── ┘

  ┌─── H1 TITLE BLOCK ────────────────────────────────────────────────────────┐
  │ Animate: animate-fade-up [animation-delay:420ms] on main span              │
  │          animate-fade-up [animation-delay:560ms] on italic span            │
  │                                                                             │
  │ <h1> classes:                                                               │
  │   font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal                  │
  │   leading-[0.95] tracking-[-0.03em] text-ink                               │
  │   mb-5 max-w-[820px]                                                        │
  │                                                                             │
  │ Line 1 (block): {c.title}                                                   │
  │   — inline-block, plain text-ink                                            │
  │                                                                             │
  │ Line 2 (block, mt-[0.12em]): {c.subtitle}                                   │
  │   classes: text-[0.48em] font-normal italic font-serif                      │
  │   bg-[linear-gradient(120deg,rgb(138_200_231)_0%,#6667AB_50%,             │
  │   rgb(171_107_255)_100%)] [background-size:200%_auto]                      │
  │   bg-clip-text text-transparent animate-gradient-breathe                   │
  │   tracking-[-0.01em]                                                        │
  │   Decision → Matches exactly the italic gradient line in /cases H1.        │
  │   The subtitle becomes the "emotional tagline" in the same voice.          │
  │   The 0.48em scale makes it proportionally identical to /cases (0.52em     │
  │   of 7.5rem max ≈ same visual weight at 5.5rem max).                       │
  └─────────────────────────────────────────────────────────────────────────── ┘

  ┌─── TAGS + READ TIME ROW ──────────────────────────────────────────────────┐
  │ Layout: flex flex-wrap items-center gap-x-4 gap-y-2 mt-8                  │
  │ Animate: animate-fade-up [animation-delay:700ms]                           │
  │                                                                             │
  │ Tags (flex flex-wrap gap-2):                                                │
  │   Each tag: same style as bento card tags                                  │
  │   text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary    │
  │   border border-border bg-paper px-2.5 py-1 rounded                        │
  │   (No hover state — static context, not interactive)                       │
  │                                                                             │
  │ Divider: w-px h-4 bg-border mx-2 aria-hidden                               │
  │                                                                             │
  │ Read time label (optional, can be hardcoded as "~{n} min read"):           │
  │   text-2xs font-semibold tracking-widest uppercase text-ink-tertiary       │
  │   animate-fade-up [animation-delay:800ms]                                  │
  │   Decision → Adds useful context for recruiters scanning quickly.          │
  └─────────────────────────────────────────────────────────────────────────── ┘
```

**Mobile adjustments for Header:**
- Eyebrow breadcrumb: keep flex row, truncate case title if needed with `max-w-[180px] truncate`
- H1: `text-[clamp(2rem,8vw,5.5rem)]` — clamp starts at 2rem on mobile for legibility
- Meta row: `gap-x-3 gap-y-1` — tighter on mobile
- Watermark: auto-scales via clamp, ensure `right-0 bottom-0` so it bleeds edge

---

### SECTION B — INTRO

```
[PAGE: Case Study Detail — Intro]

BACKGROUND: bg-white border-b border-border
PADDING: py-20 lg:py-24
CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

CONTENT:
  Single prose paragraph: {c.intro}
  Classes: text-xl lg:text-2xl leading-[1.7] text-ink max-w-[68ch] reveal
  Decision → Upgraded from text-lg/ink-secondary to text-xl/ink. This is the
  hook paragraph — it should carry weight. Darker color = higher importance signal.

  Horizontal divider below paragraph (decorative, optional):
  mt-12, h-px bg-gradient-to-r from-transparent via-border to-transparent
  — mirrors the divider used between hero and bento in /cases
```

**Mobile:** `text-lg leading-[1.75]` — text-2xl is too large on narrow screens.

---

### SECTION C — THE SITUATION

```
[PAGE: Case Study Detail — Situation]

BACKGROUND: bg-paper border-b border-border
PADDING: py-20 lg:py-24
CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

SECTION HEADER (standard pattern, all sections use this):
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ flex items-center gap-4 mb-12                                            │
  │                                                                          │
  │ [span.section-label] "The Situation"                                     │
  │   — text-2xs font-semibold tracking-widest uppercase text-ink-tertiary   │
  │                                                                          │
  │ [div.flex-1.h-px.bg-border.reveal-expand]                                │
  │   — line expands left→right on scroll via reveal-expand                  │
  └─────────────────────────────────────────────────────────────────────────┘
  Decision → Identical to the current implementation but mb-12 (was mb-10)
  to give more breathing room before the dense prose.

CONTENT (max-w-reading mx-auto):
  Each paragraph: reveal, transitionDelay: ${i * 60}ms
  Classes: text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-6 last:mb-0
  Decision → line-height increased from 1.8→1.85. Slightly more air for long
  situation narratives which can run 4+ paragraphs.
```

---

### SECTION D — HOW I APPROACHED IT

```
[PAGE: Case Study Detail — Approach]

BACKGROUND: bg-white border-b border-border
PADDING: py-20 lg:py-24
CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

SECTION HEADER: standard pattern (see Section C), label: "How I Approached It"

STEPS (max-w-reading mx-auto space-y-14 lg:space-y-20):
  Each step: reveal, transitionDelay: ${i * 80}ms

  ┌─── STEP LAYOUT ──────────────────────────────────────────────────────────┐
  │ MOBILE layout: grid grid-cols-[2.5rem_1fr] gap-4 items-start             │
  │ DESKTOP layout: grid grid-cols-[3.5rem_1fr] gap-6 items-start            │
  │                                                                           │
  │ COL 1 — Step number:                                                      │
  │   font-serif text-3xl lg:text-4xl font-bold                               │
  │   text-accent opacity-20 leading-none pt-[0.1em] tracking-tight           │
  │   Content: {String(i + 1).padStart(2, '0')}                               │
  │                                                                           │
  │ COL 2 — Step content (.approach-step-line pl-5 lg:pl-6):                  │
  │   Left animated line via .approach-step-line::before (scroll-driven)      │
  │                                                                           │
  │   Step title:                                                              │
  │     font-serif text-lg lg:text-[1.25rem] font-semibold text-ink          │
  │     mb-3 tracking-tight leading-snug                                       │
  │     (was font-bold text-xl → reduced to semibold/lg for cleaner rhythm)   │
  │                                                                           │
  │   Paragraphs:                                                              │
  │     text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4 last:mb-0     │
  │                                                                           │
  │   Quote block (if step.quote exists):                                     │
  │     .quote-callout reveal mt-5                                             │
  │     — uses existing CSS class: bg accent-light, border-l-2 accent,       │
  │       dot-grid pattern, rounded-r-sm                                       │
  │     — content: font-serif italic text-[0.9375rem] leading-relaxed text-ink│
  └──────────────────────────────────────────────────────────────────────────┘

MOBILE adjustments for steps:
  grid-cols-[2rem_1fr] gap-3 — tighter on small screens
  Step number: text-2xl — smaller but still present
  .approach-step-line pl-4 — reduced left padding
```

---

### SECTION E — RESULTS

This is the section requiring the most redesign. Current: simple white cards. Target: bento DNA.

```
[PAGE: Case Study Detail — Results]

BACKGROUND: .hero-gradient-bg border-b border-border
  Decision → Keeps the animated gradient tint, visually separates this
  climactic section from the flanking white sections.
PADDING: py-20 lg:py-24
CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

SECTION HEADER: standard pattern, label: "Results"

GRID (mt-12):
  Mobile: grid grid-cols-1 gap-3
  sm: grid-cols-2
  lg: grid-cols-3 (when 3+ results exist)
  Decision → Start single-column on mobile. Two-column on sm for scanability.
  Three-column on lg matches bento card proportions.

EACH RESULT CARD:
  ┌─── RESULT CARD ANATOMY ─────────────────────────────────────────────────┐
  │ Container:                                                                │
  │   group relative flex flex-col justify-between overflow-hidden           │
  │   bg-white border border-border rounded-[14px]                           │
  │   p-6 lg:p-8                                                              │
  │   shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] │
  │   hover:border-accent/35 hover:-translate-y-1 hover:shadow-card-hover   │
  │   transition-all duration-300                                             │
  │   reveal transitionDelay: ${i * 70}ms                                    │
  │   min-h-[180px] lg:min-h-[200px]                                         │
  │                                                                           │
  │ STAT VALUE (top):                                                         │
  │   font-serif text-4xl lg:text-5xl font-bold leading-none tracking-tight  │
  │   bg-gradient-primary bg-clip-text text-transparent                      │
  │   mb-3                                                                    │
  │   Content: {result.value}                                                 │
  │                                                                           │
  │ LABEL:                                                                    │
  │   text-[0.9375rem] font-semibold text-ink leading-snug mb-1.5            │
  │   Content: {result.label}                                                 │
  │                                                                           │
  │ CONTEXT:                                                                  │
  │   text-xs text-ink-tertiary leading-relaxed                               │
  │   Content: {result.context}                                               │
  │                                                                           │
  │ WATERMARK NUMBER (aria-hidden, absolute bottom-right):                   │
  │   absolute bottom-[-0.06em] right-[-0.01em]                              │
  │   font-serif font-extrabold leading-none                                  │
  │   text-[clamp(4rem,8vw,8rem)]                                             │
  │   text-ink opacity-[0.025] group-hover:opacity-[0.05]                    │
  │   transition-opacity duration-300 pointer-events-none select-none        │
  │   Content: {String(i + 1)}  (not the case number — just the result index)│
  │   Decision → Bento card watermark pattern applied to result cards.        │
  │   Gives each card spatial identity without overwhelming the metric value. │
  │                                                                           │
  │ BOTTOM ACCENT BAR (aria-hidden, absolute):                               │
  │   absolute bottom-0 left-0 w-full h-0.5                                  │
  │   bg-gradient-primary                                                     │
  │   scale-x-0 group-hover:scale-x-100 origin-left                         │
  │   transition-transform duration-300                                       │
  │   Decision → Exact match to bento card bottom accent bar on hover.       │
  └─────────────────────────────────────────────────────────────────────────┘

MOBILE adjustments for result cards:
  p-5 — reduced padding on mobile
  text-3xl for stat value (was 4xl) — prevents overflow on narrow cards
  min-h-[160px] — slightly shorter
```

---

### SECTION F — WHAT I LEARNED

```
[PAGE: Case Study Detail — Learned]

BACKGROUND: bg-white border-b border-border
PADDING: py-20 lg:py-24
CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

SECTION HEADER: standard pattern, label: "What I Learned"

CONTENT (max-w-reading mx-auto):

  Paragraphs:
    text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 last:mb-0
    reveal, transitionDelay: ${i * 60}ms

  Quote callout (if c.learnedQuote exists):
    reveal-far mt-12
    Uses .quote-callout class (bg-accent-light, border-l-2 border-accent,
    dot-grid radial gradient pattern, overflow-hidden)
    Inner: font-serif italic text-lg lg:text-xl leading-relaxed text-ink
    Decision → reveal-far (deeper spring animation) for the quote block only
    because it is the emotional close of the case. A heavier entrance
    emphasises finality.
```

---

### SECTION G — PREV/NEXT NAVIGATION

```
[PAGE: Case Study Detail — Nav]

BACKGROUND: bg-paper border-t border-border
PADDING: py-16 lg:py-20

CONTAINER: max-w-5xl mx-auto px-6 lg:px-12

HEADER LABEL:
  flex items-center gap-4 mb-8
  [span.section-label] "More Cases"
  [div.flex-1.h-px.bg-border.reveal-expand]

GRID:
  grid grid-cols-1 sm:grid-cols-2 gap-3

EACH NAV CARD (prev or next):
  ┌─── NAV CARD ANATOMY ────────────────────────────────────────────────────┐
  │ Container:                                                                │
  │   group relative flex flex-col justify-between overflow-hidden           │
  │   bg-white border border-border rounded-[14px]                           │
  │   p-6 lg:p-7 min-h-[140px]                                              │
  │   shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] │
  │   hover:border-accent/35 hover:-translate-y-1                           │
  │   hover:shadow-[0_12px_40px_rgba(19,19,16,0.08),0_4px_12px_rgba(102,103,171,0.10)]
  │   transition-all duration-300                                             │
  │   reveal transitionDelay: 0ms / 100ms (prev/next)                        │
  │                                                                           │
  │ TOP ROW (flex items-start justify-between):                              │
  │   Direction label:                                                        │
  │     text-2xs font-bold tracking-label uppercase text-ink-tertiary        │
  │     flex items-center gap-2                                               │
  │     Arrow SVG 12×12 + "Previous" or "Next"                               │
  │     Arrow: inline-flex, group-hover translate per direction              │
  │       Prev arrow: group-hover:-translate-x-0.5 (left)                   │
  │       Next arrow: group-hover:translate-x-0.5 (right)                   │
  │     Arrow is left of label for "Previous", right of label for "Next"    │
  │                                                                           │
  │   Case number (top-right):                                               │
  │     font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em]    │
  │     {adjacentCase.number}                                                 │
  │     Decision → Mirrors bento card top-right number. Reinforces the       │
  │     visual vocabulary continuity.                                         │
  │                                                                           │
  │ BOTTOM (flex-1 flex flex-col justify-end pt-3):                          │
  │   Title:                                                                  │
  │     font-serif font-medium leading-snug tracking-tight text-ink          │
  │     text-[clamp(1.1rem,1.8vw,1.35rem)]                                   │
  │     mb-1.5                                                                │
  │   Tags (first 2):                                                         │
  │     flex flex-wrap gap-1.5 mt-2                                           │
  │     Each: text-2xs font-semibold tracking-[0.06em] uppercase             │
  │     text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded  │
  │     group-hover:text-accent group-hover:border-accent/25                 │
  │     group-hover:bg-accent/[0.07] transition-all duration-200             │
  │     Decision → Showing tags previews what the next case is about.        │
  │     Matches bento card footer tag behaviour exactly.                      │
  │                                                                           │
  │ BOTTOM ACCENT BAR (aria-hidden, absolute):                               │
  │   absolute bottom-0 left-0 w-full h-0.5                                  │
  │   bg-gradient-primary                                                     │
  │   scale-x-0 group-hover:scale-x-100 origin-left                         │
  │   transition-transform duration-300                                       │
  │                                                                           │
  │ WATERMARK NUMBER (aria-hidden, absolute):                                │
  │   absolute bottom-[-0.06em] right-[-0.01em]                              │
  │   font-serif font-extrabold leading-none text-[clamp(5rem,10vw,10rem)]  │
  │   text-ink opacity-[0.03] group-hover:opacity-[0.055]                   │
  │   transition-opacity duration-300 pointer-events-none select-none        │
  │   Content: {adjacentCase.number}                                          │
  └─────────────────────────────────────────────────────────────────────────┘

NULL CASE HANDLING:
  If prevCase is null: render a "View all cases" card in its place
    Same card anatomy, but direction label = "All Cases"
    Arrow: left-pointing
    Title: "All Case Studies" in serif
    Subtitle: "Six problems. Six solutions." in text-ink-secondary text-sm
    Links to: /portfolio/cases
    Decision → Blank placeholder (current <div />) wastes the grid slot and
    confuses mobile users who see a half-empty row.

MOBILE:
  grid-cols-1 — stacked vertically
  Prev card first, Next card second
  sm:grid-cols-2 — side by side from 640px up
```

---

## 4. SECTION BACKGROUND RHYTHM

Reading the page top to bottom, backgrounds alternate to create section breaks without hard dividers:

| Section    | Background         | Border          |
|------------|-------------------|-----------------|
| Header     | .hero-gradient-bg | none (bottom: border via next section) |
| Intro      | bg-white           | border-b border-border |
| Situation  | bg-paper           | border-b border-border |
| Approach   | bg-white           | border-b border-border |
| Results    | .hero-gradient-bg  | border-b border-border |
| Learned    | bg-white           | border-b border-border |
| Prev/Next  | bg-paper           | border-t border-border |

Decision → White → paper → white alternation for text-heavy sections. The two
hero-gradient-bg usages (header + results) bracket the body content, creating
a "frame" effect. This was present in the current implementation and is preserved.

---

## 5. TYPOGRAPHY CONSISTENCY TABLE

| Element           | Mobile                    | Desktop                       | Font   |
|-------------------|---------------------------|-------------------------------|--------|
| Breadcrumb        | text-2xs tracking-widest  | text-2xs tracking-widest      | sans   |
| Meta row labels   | text-2xs tracking-label   | text-2xs tracking-label       | sans   |
| H1 main line      | text-[clamp(2rem,8vw,…)]  | …5.5rem max                   | serif  |
| H1 italic line    | 0.48em of H1 size         | 0.48em of H1 size             | serif  |
| Intro paragraph   | text-lg                   | text-xl lg:text-2xl           | sans   |
| Body paragraphs   | text-base                 | text-[1.0625rem]              | sans   |
| Step titles       | text-lg                   | text-[1.25rem]                | serif  |
| Step number       | text-2xl                  | text-3xl lg:text-4xl          | serif  |
| Result value      | text-3xl                  | text-4xl lg:text-5xl          | serif  |
| Result label      | text-[0.9375rem] semibold | text-[0.9375rem] semibold     | sans   |
| Result context    | text-xs                   | text-xs                       | sans   |
| Section labels    | text-2xs tracking-widest  | text-2xs tracking-widest      | sans   |
| Quote callout     | text-lg italic            | text-lg lg:text-xl italic     | serif  |
| Nav card title    | text-[clamp(1.1rem,…)]    | text-[clamp(1.1rem,1.8vw,1.35rem)] | serif |
| Nav direction     | text-2xs                  | text-2xs                      | sans   |

---

## 6. INTERACTIVE STATES

### Back-link (breadcrumb eyebrow)
- Default: text-ink-tertiary, no underline
- Hover: text-accent, arrow translates -0.5px left
- Focus-visible: ring-2 ring-accent ring-offset-2 ring-offset-paper (global rule)

### Tag pills (header — static)
- No hover or interaction. Decorative only.
- Decision → Tags in header are informational metadata, not filters.

### Result cards (non-interactive)
- Result cards do NOT link anywhere (no href) — they are metric displays.
- Hover state retained for visual richness only (lift + shadow + watermark opacity).
- `aria-label` not needed (no interactive role).
- Decision → Adding links to result cards would create confusion about where they go.

### Nav cards (interactive links)
- Default: border-border, subtle shadow
- Hover: border-accent/35, lift -1px, shadow-card-hover, accent bar slides in, tags tint to accent
- Focus-visible: ring-2 ring-accent ring-offset-2
- Active: translate-y-0.5 transition brief (press feedback)

---

## 7. ACCESSIBILITY NOTES

- `aria-hidden="true"` on: both orbs, all watermarks, bottom accent bars, decorative dots
- `aria-label` on nav cards: `aria-label="Previous case: {prevCase.title}"` / `"Next case: {nextCase.title}"`
- All section `<section>` elements: add `aria-labelledby` pointing to visible heading or the section-label span via an id
- Colour contrast: all body text on white/paper meets AA (ink #131310 on white = 18.5:1; ink-secondary #6A6960 on white ≈ 6.2:1; both pass)
- Quote callout: ink-secondary on accent-light (#F3EFFC) ≈ 5.8:1 — passes AA
- Tag text (ink-tertiary #A09E96 on paper #F6F5F0) ≈ 2.9:1 — does NOT meet AA for normal text
  Fix: use text-ink-secondary (#6A6960) for tag text in static contexts (≈6.2:1)
  Decision → text-2xs tags are decorative/supplementary, but applying ink-secondary
  is safer and keeps parity with bento card tag style.
- Reduced motion: all reveal/animate-* classes already covered by the prefers-reduced-motion rule in globals.css
- Keyboard navigation: tab order is linear top-to-bottom. No skip links needed for this page (single-column reading flow).
- `<nav>` element on prev/next section with `aria-label="Case navigation"` for landmark

---

## 8. COMPONENTS NEEDED BY FRONTEND AGENT

The following are the implementation units the frontend agent needs to produce:

### Modified: `src/app/portfolio/cases/[slug]/page.tsx`
Full rewrite of the page Server Component applying all specs above.
Drops the floating pill Link. Drops the `fixed top-6 left-6` pattern entirely.
Adds the breadcrumb eyebrow as the first element inside the header section.

### No new components required.
All styling is achievable with:
- Existing Tailwind tokens from tailwind.config.ts
- Existing CSS classes from globals.css (.hero-gradient-bg, .quote-callout, .approach-step-line, .landing-orb-1, .landing-orb-2, reveal/reveal-far/reveal-expand)
- Existing `Tag` and `Button` components (Tag used for header tags only)
- Existing `RevealProvider` (already wraps all pages via root layout)

Decision → No new components avoids scope creep. The bento DNA is achieved through
co-opting the same inline class combinations used in cases-bento.client.tsx — not
by abstracting a shared component that doesn't yet exist.

---

## 9. WHAT IS EXPLICITLY REMOVED

| Element                   | Reason                                               |
|---------------------------|------------------------------------------------------|
| `fixed top-6 left-6` pill | Conflicts with nav; visually disconnected from layout|
| `z-[100]` back link       | No longer fixed; z-index not needed                  |
| `font-bold` on H1         | /cases uses `font-normal` for serif headings; align  |
| `text-accent` eyebrow     | Current eyebrow is in accent. New eyebrow is in ink-tertiary per /cases pattern |
| Empty `<div />` placeholder in nav | Replaced with "All Cases" fallback card     |

---

## 10. WIREFRAME — FULL PAGE (TEXT)

```
╔══════════════════════════════════════════════════════════════════╗
║  NAV (fixed, from root layout — 64px height, bg-white/95)       ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  HEADER  [.hero-gradient-bg, pt-32 pb-24, relative overflow-hidden] ║
║                                                                   ║
║  [orb-1: top-right, purple, aria-hidden]                         ║
║  [orb-2: bottom-left, blue, aria-hidden]                         ║
║  [watermark: "01" serif, bottom-right, opacity 4.5%, 22rem]     ║
║                                                                   ║
║  ←─── BREADCRUMB EYEBROW ───────────────────────────────────    ║
║  [w-10 h-px gradient from-accent] ← All cases / Case 01        ║
║                                                                   ║
║  META ROW                                                         ║
║  LINK Mobility · VP of UX & Product Manager · 2021 – Present    ║
║                                                                   ║
║  H1 (serif, 5.5rem max)                                          ║
║  MyLINK Portal                                                    ║
║  Unifying 50+ legacy products into one platform — from the inside out
║  [gradient animated italic, 0.48em size]                         ║
║                                                                   ║
║  TAGS + READ TIME                                                 ║
║  [Product Strategy] [UX Leadership] [Org Change]  ·  ~8 min read║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  INTRO  [bg-white, py-24, border-b]                              ║
║                                                                   ║
║  LINK Mobility is one of Europe's largest CPaaS providers…      ║
║  [text-xl lg:text-2xl, text-ink, max-w-68ch]                    ║
║  ─────────────────────────────── [via-border gradient divider]   ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  SITUATION  [bg-paper, py-24, border-b]                          ║
║                                                                   ║
║  THE SITUATION ─────────────────────────────────── [expand line]║
║                                                                   ║
║  Para 1 [reveal 0ms]                                             ║
║  Para 2 [reveal 60ms]                                            ║
║  Para 3 [reveal 120ms]                                           ║
║  Para 4 [reveal 180ms]                                           ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  APPROACH  [bg-white, py-24, border-b]                           ║
║                                                                   ║
║  HOW I APPROACHED IT ──────────────────────────── [expand line] ║
║                                                                   ║
║  01  │  The Copenhagen moment — and what came before it          ║
║      │  [approach-step-line, animated left border]               ║
║      │  Paragraph content…                                        ║
║      │  ┌──────────────────────────────────────────────────────┐ ║
║      │  │ [quote-callout] dot-grid, left accent border         │ ║
║      │  │ "In politically charged rooms…"                      │ ║
║      │  └──────────────────────────────────────────────────────┘ ║
║                                                                   ║
║  02  │  Build the north star before anything else                ║
║      │  Paragraph content…                                        ║
║                                                                   ║
║  03  │  Build the team before building the product               ║
║      │  Paragraph content…                                        ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  RESULTS  [.hero-gradient-bg, py-24, border-b]                   ║
║                                                                   ║
║  RESULTS ───────────────────────────────────────── [expand line]║
║                                                                   ║
║  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐     ║
║  │ gradient stat  │  │ gradient stat  │  │ gradient stat  │     ║
║  │ 94%            │  │ 20B+           │  │ NOK 7bn        │     ║
║  │ Label text     │  │ Label text     │  │ Label text     │     ║
║  │ context…       │  │ context…       │  │ context…       │     ║
║  │              ①░│  │              ②░│  │              ③░│     ║
║  │━━━━━━[hover]━━│  │━━━━━━[hover]━━│  │━━━━━━[hover]━━│     ║
║  └────────────────┘  └────────────────┘  └────────────────┘     ║
║  [rounded-[14px], bento card style, watermark per card]          ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  LEARNED  [bg-white, py-24, border-b]                            ║
║                                                                   ║
║  WHAT I LEARNED ───────────────────────────────── [expand line] ║
║                                                                   ║
║  Para 1 [reveal 0ms]                                             ║
║  Para 2 [reveal 60ms]                                            ║
║                                                                   ║
║  ┌──────────────────────────────────────────────────────────────┐║
║  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│║
║  ▐ [quote-callout, reveal-far]                                  │║
║  ▐ "Learned quote text in Playfair italic…"                     │║
║  └──────────────────────────────────────────────────────────────┘║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  PREV/NEXT NAV  [bg-paper, py-20, border-t]                      ║
║                                                                   ║
║  MORE CASES ───────────────────────────────────── [expand line] ║
║                                                                   ║
║  ┌──────────────────────────┐  ┌──────────────────────────────┐ ║
║  │← Previous    00         │  │         02    Next →          │ ║
║  │                          │  │                              │ ║
║  │ Prev Case Title          │  │ Next Case Title              │ ║
║  │ [tag1] [tag2]            │  │ [tag1] [tag2]                │ ║
║  │ 00░░░░░░░░░░░░░░░░░░░░░ │  │ ░░░░░░░░░░░░░░░░░░░░░░░░ 02 │ ║
║  │━━━━━━━━━━━━━━━━[hover]━━│  │━━━━━━━━━━━━━━━━━━[hover]━━━│ ║
║  └──────────────────────────┘  └──────────────────────────────┘ ║
║  [rounded-[14px], bento card style; null case → "All Cases" card]║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  FOOTER (from root layout)                                       ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 11. MOBILE WIREFRAME (375px)

```
╔═══════════════════════════════╗
║  NAV (fixed, 64px)            ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  HEADER [hero-gradient-bg,    ║
║          pt-24 pb-16]         ║
║                               ║
║  [orb-1: 280×280, top-right] ║
║  [orb-2: 180×180, btm-left]  ║
║  [watermark: "01", ~clamp]   ║
║                               ║
║  ←─ All cases / Case 01      ║
║                               ║
║  LINK Mobility · VP UX &     ║
║  Product Manager · 2021–now   ║
║                               ║
║  MyLINK Portal                ║
║  [clamp(2rem,8vw,5.5rem)]    ║
║  Unifying 50+ legacy…        ║
║  [gradient italic, 0.48em]   ║
║                               ║
║  [Product Strategy]           ║
║  [UX Leadership]              ║
║  ~8 min read                  ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  INTRO [bg-white]             ║
║  text-lg leading-[1.75]      ║
║  LINK Mobility is one of…    ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  SITUATION [bg-paper]         ║
║  THE SITUATION ────────────  ║
║  Para 1                       ║
║  Para 2                       ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  APPROACH [bg-white]          ║
║  HOW I APPROACHED IT ──────  ║
║                               ║
║  01 │ The Copenhagen moment   ║
║     │ content paragraphs…     ║
║     │ [quote-callout]         ║
║                               ║
║  02 │ Build the north star    ║
║     │ content…                ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  RESULTS [hero-gradient-bg]   ║
║  RESULTS ─────────────────   ║
║                               ║
║  ┌─────────────────────────┐ ║
║  │ gradient stat  94%      │ ║
║  │ Label text              │ ║
║  │ context…              ①░│ ║
║  └─────────────────────────┘ ║
║  ┌─────────────────────────┐ ║
║  │ gradient stat  20B+     │ ║
║  │ Label text            ②░│ ║
║  └─────────────────────────┘ ║
║  [single column, gap-3]      ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  LEARNED [bg-white]           ║
║  WHAT I LEARNED ───────────  ║
║  Para 1, Para 2               ║
║  [quote-callout, reveal-far]  ║
╚═══════════════════════════════╝

╔═══════════════════════════════╗
║  NAV [bg-paper]               ║
║  MORE CASES ───────────────  ║
║  ┌─────────────────────────┐ ║
║  │← All cases     ←       │ ║
║  │ All Case Studies        │ ║
║  │ Six problems…           │ ║
║  └─────────────────────────┘ ║
║  ┌─────────────────────────┐ ║
║  │ 02         Next →       │ ║
║  │ Next Case Title         │ ║
║  │ [tag1] [tag2]           │ ║
║  └─────────────────────────┘ ║
║  [grid-cols-1, stacked]      ║
╚═══════════════════════════════╝
```

---

## 12. DECISIONS SUMMARY

| Decision | Reason |
|---|---|
| Replace floating pill with eyebrow breadcrumb | Fixed pill overlaps global nav on scroll; eyebrow matches /cases visual language |
| H1 subtitle as animated gradient italic line | Identical treatment to /cases H1 second line; creates page family |
| Increase watermark opacity from 0.04 to 0.045 and size from 18rem to 22rem max | At page scale, bento-equivalent prominence requires larger absolute values |
| Result cards: bento DNA (rounded-[14px], hover lift, accent bar, watermark) | Visual continuity — detail page card ≡ list page card |
| Result cards non-interactive | No meaningful navigation target; hover state is visual enrichment only |
| nav card null state → "All Cases" card | Empty div wastes grid slot; a contextual card is more useful |
| Nav cards show tags | Previews case content, reduces blind-click friction |
| font-normal on H1 (not font-bold) | /cases page uses font-normal for serif titles; align typographic voice |
| text-ink-secondary for tag text instead of ink-tertiary | AA contrast compliance on small text |
| reveal-far on quote callout | Emotional close of case deserves heavier entrance spring |
| meta row before H1 | Context before claim — who/what/when frames the title |
| All sections light palette | Memory note from project: case detail pages must be fully light |
