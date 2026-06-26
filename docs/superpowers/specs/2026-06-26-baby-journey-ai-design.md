# Baby Journey AI — Design Spec

**Date:** 2026-06-26
**Status:** Approved (design), pending implementation plan
**Type:** Static web application (no backend, no auth, no database)

---

## 1. Purpose

A premium, Apple-quality static web app that acts as a daily pregnancy companion for
a single pregnancy journey. It recomputes the pregnancy state every day from a fixed
Last Menstrual Period (LMP) using the current date in **Asia/Kolkata (IST)** — entirely
client-side, so it advances each new IST day with **no rebuild or redeploy**.

### Fixed reference data
- **LMP:** 14 April 2026
- **Estimated Due Date (EDD):** 19 January 2027 (LMP + 280 days)
- **Reference "today" used in examples:** 26 June 2026 → 10 weeks 3 days

### Content stance (important)
All content is presented as **educational and medically-grounded**, with a persistent,
clearly visible disclaimer that the app **does not replace prenatal care or advice from
qualified healthcare professionals**. Content is **NOT** labelled "clinician-reviewed"
(that would be a false claim). The medication feature **never prescribes** medicines or
dosages — it only tracks what a user's own clinician has prescribed.

---

## 2. Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15 (App Router), `output: 'export'` (fully static) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS custom properties (design tokens) |
| Animation | Framer Motion |
| 3D | React Three Fiber + Three.js + drei |
| PWA | `next-pwa` (manifest + service worker, offline) |
| Fonts | Fraunces (display serif) + Inter (body) |
| Persistence | `localStorage` only (journal, gallery, medications, theme) |
| Hosting | Any static host (GitHub Pages / Netlify / S3) |

**Constraint:** No backend, no auth, no database, no network calls at runtime.
Everything is generated from static JSON datasets + client-side date math.

---

## 3. Date & Derivation Engine

### 3.1 `lib/pregnancy.ts` — IST-anchored pregnancy state
- Compute "today" in IST via `Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' })`
  to get a stable `YYYY-MM-DD`, independent of the device's local timezone.
- From `LMP` and IST-today, derive:
  - `dayOfPregnancy` (1–280, clamped)
  - `week` (1–40), `dayInWeek` (0–6 → displayed 1–7)
  - `month` (1–9, using a defined week→month mapping, see 3.3)
  - `trimester` (1: wk 1–13, 2: wk 14–27, 3: wk 28–40)
  - `edd` (LMP + 280 days; verified = 2027-01-19)
  - `daysCompleted`, `daysRemaining` (280 − dayOfPregnancy)
- Pure functions, fully unit-testable with an injectable "today" for tests.

### 3.2 `lib/derive.ts` — any day → full daily view
- Input: `dayOfPregnancy` (1–280).
- Resolves the containing week record and the next week record.
- **Interpolates** numeric fields (length mm, weight g) linearly between the two week
  anchors using `dayInWeek/7`, so every one of the 280 days has a unique size/weight/length.
- Selects that week's organ-system content and maternal content.
- Computes "systems newly forming vs maturing" by diffing the current week's active
  systems against the prior week's (a system absent last week and present this week = "newly forming").
- Returns a typed `DailyView`.

### 3.3 Week → Month mapping (explicit, no ambiguity)
Lunar-month convention (4 weeks per month, 9 months ≈ 40 weeks):
- M1: wk 1–4, M2: 5–8, M3: 9–13, M4: 14–17, M5: 18–22,
  M6: 23–27, M7: 28–31, M8: 32–35, M9: 36–40.
  (Trimester-aligned at the boundaries; encoded as a constant table in `lib/pregnancy.ts`.)

---

## 4. Content Model (parametric — NOT 280 hand-authored files)

All educational content lives in structured JSON under `data/`, typed in `lib/types.ts`,
loaded/selected via `lib/content.ts`.

### `data/weeks.json` — 40 records, each:
- `week`, `fruitComparison`, `sizeSummary`
- `lengthMm`, `weightG` (anchors for interpolation)
- `organs`: object keyed by system, each `{ status: 'forming'|'maturing'|'refining', text }`,
  covering: **brain, heart, spinalCord, limbs, face, eyes, ears, lungs, digestive, liver,
  kidney, bone, muscle, skin, placenta, umbilicalCord, nervousSystem, circulation, reproductive**
- `milestone` (the week's headline developmental milestone)
- `motherChanges`, `symptoms[]`, `prenatalQuestions[]`, `tips[]`
- `variationNote` (distinguishes educational milestone vs normal individual variation)

### `data/months.json` — 9 records, each:
- `month`, `weeksRange`, `developmentSummary`, `bodyChanges`,
  `nutritionFocus`, `exerciseGuidance`, `commonExperiences[]`, `prenatalCare[]`

### Supporting datasets
- `data/scans.json` — dating, NT, anatomy, growth, Doppler, NST: `{ name, whenWeeks, purpose, whatItChecks }`
- `data/labs.json` — common blood & urine tests: `{ name, sample, measures, whyRecommended }`
- `data/nutrition.json` — Indian meal ideas, protein/iron/calcium/folate sources, hydration, foods to avoid/limit
- `data/partner.json` — partner support suggestions by trimester/stage

---

## 5. Routes (all statically generated)

| Route | Purpose | Generation |
|---|---|---|
| `/` | Today dashboard (full current-day summary) | static; client recomputes day on load |
| `/day/[n]` | Dedicated page per day, n = 1–280 | `generateStaticParams` (280) |
| `/week/[n]` | Weekly dashboard, n = 1–40 | `generateStaticParams` (40) |
| `/month/[n]` | Monthly dashboard, n = 1–9 | `generateStaticParams` (9) |
| `/timeline` | Day 1→birth slider; updates all info; deep-links to days | static |
| `/explore` | 3D fetal viewer (lazy-loaded) | static |
| `/health` | Maternal health (nutrition, hydration, sleep, exercise, well-being, appointments, symptoms) | static |
| `/nutrition` | Indian nutrition dashboard | static |
| `/scans` | Prenatal scans explained | static |
| `/labs` | Prenatal lab tests explained | static |
| `/partner` | Partner support dashboard | static |
| `/journal` | Daily notes + milestones (localStorage) | static |
| `/gallery` | Bump & ultrasound photos (localStorage, base64) | static |
| `/medications` | Medication tracker (localStorage; tracks only, never prescribes) | static |

### Today dashboard (`/`) must display
Current week; current day; pregnancy month; trimester; EDD; total days completed; days
remaining; today's baby size; estimated length; estimated weight; fruit comparison;
today's major developmental milestone; today's mother changes; today's educational tips;
upcoming scan info; upcoming-milestone countdown.

### Daily page (`/day/[n]`) must display
Baby estimated size/weight/length; which organs are forming/maturing that day; and
development notes for: brain, heart, spinal cord, limbs, face, eyes, ears, lungs,
digestive, liver, kidney, bone, muscle, skin, placenta, umbilical cord, nervous system,
blood circulation, reproductive organs — each shown only when relevant to that gestational
age, with a clear note separating educational milestones from normal individual variation.

### PDF export
Printable weekly & monthly summaries via a dedicated `@media print` stylesheet and a
"Print / Save as PDF" button (browser print-to-PDF) — no heavy PDF library.

---

## 6. Design System — "Warm Editorial Wellness"

- **Palette:** cream/linen base, peach→terracotta accent, sage secondary, deep-plum ink.
  Dark mode: warm charcoal base, muted terracotta glow, soft sage.
- **Type:** Fraunces (display) + Inter (body). Distinctive; avoids generic AI defaults.
- **Surfaces:** glassmorphism cards, rounded-3xl, subtle film grain + radial gradient washes.
- **Motion:** Framer Motion micro-interactions, scroll-reveal sections, animated number
  counters; respects `prefers-reduced-motion`.
- **Theme:** light/dark toggle persisted to localStorage; no flash of wrong theme.
- **Responsive:** desktop, tablet, mobile; mobile bottom-nav.

---

## 7. 3D Fetal Viewer (`/explore`)

- **Stylized abstract** representation (no external GLB asset; built from primitive +
  procedural geometry with PBR materials and soft studio lighting). Works fully offline.
- Orbit / zoom / pan (drei `OrbitControls`).
- Selectable highlighted systems: **skeleton, brain, heart, lungs, digestive tract,
  muscles, placenta, umbilical cord.** Clicking a system opens an educational panel.
- Overall form scales with the currently selected day (growth progression animates).
- Lazy-loaded (dynamic import, `ssr: false`) so it never blocks initial load.
- Labels are concise; only the selected system is labelled to avoid clutter.

---

## 8. Local Persistence (`lib/storage.ts`)

A small typed wrapper over `localStorage` with namespaced keys and safe JSON parse:
- **Journal:** entries `{ id, dateISO, text, milestone? }`.
- **Gallery:** items `{ id, dateISO, caption, dataUrl }` (images stored as base64; size-guarded).
- **Medications:** items `{ id, name, notes, schedule[], doses: { dateISO: 'taken'|'missed' } }`.
  Reminders are client-side only (in-app schedule display + optional Notification API if
  permission granted); the app never suggests medicines or dosages.
- **Theme** preference.
All features degrade gracefully if `localStorage` is unavailable.

---

## 9. Cross-Cutting Requirements

- **Disclaimer** component in the footer on every page, and emphasized on `/medications`,
  `/labs`, `/scans`, `/nutrition`.
- **PWA:** `manifest.webmanifest`, maskable icons, `next-pwa` service worker, offline shell.
- **Performance:** lazy-load 3D and other heavy components; static export; minimal runtime JS
  on content pages.
- **Accessibility:** semantic HTML, keyboard navigation, focus states, color-contrast in both
  themes, `prefers-reduced-motion`, alt text.
- **Maintainability:** modular components (one clear purpose each); content edits happen only
  in `data/*.json`; `memory/architecture.md` documents the dataset schema + derivation rules.

---

## 10. Project Structure

```
latha-baby/
├── package.json, next.config.mjs, tailwind.config.ts, postcss.config.mjs,
│   tsconfig.json, .gitignore, README.md
├── public/manifest.webmanifest, public/icons/
├── data/        weeks.json, months.json, scans.json, labs.json, nutrition.json, partner.json
├── lib/         pregnancy.ts, derive.ts, content.ts, storage.ts, types.ts
├── app/         layout.tsx, globals.css, page.tsx,
│                day/[n]/page.tsx, week/[n]/page.tsx, month/[n]/page.tsx,
│                timeline/page.tsx, explore/page.tsx, health/, nutrition/, scans/,
│                labs/, partner/, journal/, gallery/, medications/
├── components/  ui/, dashboard/, timeline/, three/, nav/, common/
├── docs/superpowers/specs/2026-06-26-baby-journey-ai-design.md
└── memory/architecture.md
```

The 280 day / 40 week / 9 month pages are **generated** from 4 route files via
`generateStaticParams` — not hand-authored.

---

## 11. Testing & Verification

- **Unit:** `lib/pregnancy.ts` (IST math, week/day/month/trimester, EDD, boundaries:
  day 1, day 280, week rollovers) and `lib/derive.ts` (interpolation endpoints, monotonic
  growth) with an injectable today.
- **Build:** `next build` produces a clean static export with all 329+ pages.
- **Manual:** verify `/` shows 10w3d for the 2026-06-26 reference; timeline slider updates
  all surfaces; 3D viewer interactions; localStorage features persist across reload;
  light/dark; print-to-PDF for a week and a month; mobile layout.

---

## 12. Explicit Non-Goals (YAGNI)

- No backend, accounts, sync, or multi-pregnancy support.
- No realistic fetal mesh / external 3D model files.
- No real PDF-generation library (browser print only).
- No third-party analytics or runtime network calls.
- No clinical claims, prescriptions, or dosage recommendations.
