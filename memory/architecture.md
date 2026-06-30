# Architecture & Maintenance — Baby Journey AI

## What it is
Static (no-backend) Next.js 14 pregnancy companion. Recomputes pregnancy state
client-side every IST day from a fixed LMP. Deploys as static files (`out/`).

## Core invariants
- `LMP_ISO = "2026-04-14"`, `TERM_DAYS = 280`, EDD = LMP + 280 = `2027-01-19`.
- Reference date `2026-06-26` → 73 completed days → **10w 3d** (gaLabel), dayOfPregnancy 74, week 11.
- `dayOfPregnancy` = rawDays+1 (day 1 = LMP day). `gaWeeks/gaDays` = completed GA (rawDays).
- Week→month: lunar table in `lib/pregnancy.ts` MONTH_WEEK_RANGES (M3=wk9-13, M6=23-27, M9=36-40).
- Trimester: ≤13 → 1, ≤27 → 2, else 3.

## Derivation
- `lib/derive.ts deriveDay(n)` resolves week record + next week, lerps lengthMm/weightG by dayInWeek/7.
- `newlyForming` = organ keys present this week but absent previous week.

## Content (edit here to change app)
- `data/weeks.json` — 40 records; lengthMm/weightG MUST stay monotonic non-decreasing (interpolated).
- `data/months.json` — 9 records; weeksRange strings must match MONTH_WEEK_RANGES.
- `data/scans.json` — whenWeeks string MUST start with lowest week int (parser reads first int).
- `data/labs.json`, `data/nutrition.json` (object), `data/partner.json`.

## Gotchas / decisions
- **Fonts load via runtime `<link>` in app/layout.tsx**, NOT next/font — build env has no network
  to fonts.googleapis.com. CSS vars --font-fraunces/--font-inter defined in globals.css with fallbacks.
- `next.config.mjs`: `output:'export'`, `images.unoptimized`, `trailingSlash:true` → internal links use trailing slash.
- next-pwa disabled in dev; generates public/sw.js on build (gitignored).
- 3D viewer (`components/three/`): **WebGL-only** (photo/image mode removed — both used the same
  week data). `FetusViewer.tsx` renders `FetusScene.tsx` (Canvas + OrbitControls + ContactShadows
  + soft light rig w/ backlight + filmic tone-mapping + translucent `AmnioticSac`) wrapping the
  procedural `FetusModel` (subsurface-approx skin; `spin` prop gates self-rotation). NO external
  GLB/HDR — all procedural, offline-safe. Lazy-loaded via next/dynamic ssr:false in explore+imagine.
  `public/fetus/weekN.png` renders are now **unused/orphaned** (kept on disk).
  Below the viewer: **"Your baby's body right now"** panel (`lib/bodyParts.ts`, day-driven, per-part
  status) + drifting `MOTES` for depth.
  - Lazy-loaded via next/dynamic ssr:false in app/explore + app/imagine.
- **Pregnancy Plan**: `lib/plan.ts` (pure, 8 week-banded `PlanPhase`s, `currentPhase(week)`) +
  `app/plan/page.tsx` (client; highlights the live phase). Linked from primary nav + Guides hub.
- **30 research pages**: standalone `app/<slug>/page.tsx`, all use the same SECTIONS template
  (meditation, mindfulness, breathing-science, stress-science, gratitude-positivity, sleep-science,
  music-and-baby, talking-to-baby, reading-to-baby, singing-lullabies, prenatal-bonding,
  partner-support, omega-dha, folate-science, iron-science, vitamin-d, probiotics, blood-sugar,
  exercise-science, hydration-science, sunlight-circadian, nature-wellbeing, air-quality,
  caffeine-science, heat-safety, laughter-joy, epigenetics, skin-to-skin, immunity-microbiome,
  fetal-movement-science). Grouped under 5 "Science & wellbeing" categories in `app/guides/page.tsx`.
- localStorage via lib/storage.ts (namespaced bjai:), all client pages hydrate in useEffect to avoid
  static-export hydration mismatch.
- Tests: `lib/pregnancy.test.mjs` re-implements the pure math in JS (node --test), since no TS loader.

## Build/run
- `npm install && npm run build` → 343 static pages in out/. `npm test` → 6 passing.
- Change journey: edit LMP_ISO in lib/pregnancy.ts.
