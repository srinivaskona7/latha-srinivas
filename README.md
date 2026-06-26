# 🤰 Baby Journey AI

A premium, **static** day-by-day pregnancy companion. Beautiful, private, and
educational — it recomputes your pregnancy state every day from a fixed LMP using
the current date in **Asia/Kolkata (IST)**, entirely in the browser, with **no
backend, no accounts, and no rebuild needed** to advance a day.

> **Educational guidance only.** This app does not replace prenatal care or advice
> from a qualified healthcare professional. Every pregnancy is unique.

---

## ✨ Features

| Area | What it does |
|------|--------------|
| **Today dashboard** (`/`) | Week, day, month, trimester, EDD, days done/remaining, baby size/length/weight, fruit comparison, milestone, mother changes, tips, upcoming scan, organ development |
| **Daily pages** (`/day/1…280`) | A dedicated page for every one of the 280 days, with interpolated size and full organ-by-organ development |
| **Weekly dashboards** (`/week/1…40`) | Growth, maternal changes, symptoms, prenatal-visit questions, milestones — printable |
| **Monthly dashboards** (`/month/1…9`) | Development, body changes, nutrition, exercise, prenatal care — printable |
| **Timeline** (`/timeline`) | Interactive Day 1 → birth slider; everything updates live |
| **3D Baby** (`/explore`) | Stylised, interactive R3F/Three.js fetal viewer with selectable body systems |
| **Health / Nutrition / Scans / Labs / Partner** | Educational dashboards (Indian-focused nutrition) |
| **Journal / Gallery / Medications** | Private, on-device tools (localStorage). The medication tracker **never prescribes** |
| **PWA** | Installable, offline-capable |
| **Dark / light** | Warm "editorial wellness" theme, persisted |

---

## 🏗 Architecture

```
                         ┌──────────────────────────────┐
   LMP (2026-04-14) ───▶ │  lib/pregnancy.ts            │
   IST "today" ────────▶ │  → week / day / month /      │
   (Intl, Asia/Kolkata)  │     trimester / EDD / %      │
                         └───────────────┬──────────────┘
                                         │ dayOfPregnancy (1..280)
                                         ▼
                         ┌──────────────────────────────┐
   data/weeks.json ────▶ │  lib/derive.ts               │
   (40 anchors)          │  → interpolate size/weight   │
                         │  → organs, newly-forming      │
                         └───────────────┬──────────────┘
                                         │ DailyView
                                         ▼
                   app/* pages  +  components/*  (React, Tailwind, Framer Motion)
                                         │
                                         ▼
                         next build (output: 'export')  →  out/  (343 static pages)
```

**Stack:** Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS ·
Framer Motion · React Three Fiber + Three.js · next-pwa.

### Key directories

```
data/        weeks.json (40), months.json (9), scans, labs, nutrition, partner   ← all content
lib/         pregnancy.ts (IST math), derive.ts (day view), content.ts, storage.ts, types.ts
app/         routes (today, day/[n], week/[n], month/[n], timeline, explore, …)
components/  ui/  dashboard/  three/  nav/  common/
public/      manifest.webmanifest, icons/
```

All educational content lives in `data/*.json` — edit there to update the app.
The 280 day / 40 week / 9 month pages are **generated** from 4 route files via
`generateStaticParams`, not hand-authored.

---

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm test           # date-engine unit tests
```

Deploy the `out/` folder to any static host (GitHub Pages, Netlify, S3, …).

> **Note:** display fonts (Fraunces + Inter) load at runtime from Google Fonts so
> the build works fully offline; the UI falls back to Georgia / system-ui if the
> fonts can't be fetched.

---

## 🧪 Verification

- `npm test` — verifies IST math: EDD = 2027-01-19, reference 2026-06-26 = 10w 3d,
  day-1/day-280 boundaries, week→month/trimester mapping.
- `npm run build` — generates **343 static pages** with a service worker.

---

## 📋 Reference data (this journey)

- **LMP:** 14 April 2026 · **EDD:** 19 January 2027 · **Term:** 280 days
- To change the journey, edit `LMP_ISO` in `lib/pregnancy.ts`.
