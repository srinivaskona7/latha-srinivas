"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";
import {
  appearanceProfile,
  getMorphology,
  movementProfile,
  sizeComparison,
  wombInsight,
} from "@/lib/morphology";
import {
  getPregnancyState,
  istTodayISO,
  weekDayLabel,
  formatWeekdayLong,
} from "@/lib/pregnancy";
import { formatLength, formatWeight } from "@/lib/derive";

// Lazy-load the 3D viewer client-side only — keeps Three/animation out of first load.
const FetusViewer = dynamic(
  () => import("@/components/three/FetusViewer").then((m) => m.FetusViewer),
  {
    ssr: false,
    loading: () => (
      <div className="glass grid h-[460px] place-items-center rounded-4xl sm:h-[560px]">
        <div className="flex flex-col items-center gap-3 text-muted">
          <span className="animate-floaty text-4xl" aria-hidden>
            ◉
          </span>
          <span className="text-sm">Picturing your baby…</span>
        </div>
      </div>
    ),
  },
);

// Stable reference for SSR/first paint; hydration swaps to live IST day.
const REFERENCE_ISO = "2026-06-26";

export default function ImaginePage() {
  const [todayISO, setTodayISO] = useState(REFERENCE_ISO);

  useEffect(() => {
    setTodayISO(istTodayISO());
  }, []);

  const state = useMemo(() => getPregnancyState(todayISO), [todayISO]);
  const day = state.dayOfPregnancy;
  const morph = useMemo(() => getMorphology(day), [day]);
  const look = useMemo(() => appearanceProfile(morph.week), [morph.week]);
  const move = useMemo(() => movementProfile(morph.week), [morph.week]);
  const womb = useMemo(() => wombInsight(morph.week), [morph.week]);
  const size = useMemo(() => sizeComparison(morph.week), [morph.week]);

  const APPEARANCE: { icon: string; label: string; text: string }[] = [
    { icon: "🌀", label: "Overall form", text: look.form },
    { icon: "✨", label: "Skin", text: look.skin },
    { icon: "🙂", label: "Face & head", text: look.face },
    { icon: "🖐️", label: "Hands & feet", text: look.handsFeet },
    { icon: "🧵", label: "Hair & vernix", text: look.hairVernix },
    { icon: "📐", label: "Proportions", text: look.proportions },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      {/* HERO */}
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Picture your baby today
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Imagine your baby
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A gentle, research-informed window into exactly how your baby looks
            and what they are doing right now — on {formatWeekdayLong(todayISO)}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="peach">{weekDayLabel(morph.day)}</Badge>
            <Badge tone="sage">Week {morph.week} · Day {morph.day}</Badge>
            <Badge tone="plum">
              {formatLength(morph.lengthMm)} · {formatWeight(morph.weightG)}
            </Badge>
          </div>
        </header>
      </SectionReveal>

      {/* LIVE 3D VIEW */}
      <SectionReveal delay={0.05}>
        <FetusViewer />
      </SectionReveal>

      {/* IMAGINE SCENE */}
      <SectionReveal delay={0.05}>
        <GlassCard className="mt-8 border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xl" aria-hidden>
              💭
            </span>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-terracotta sm:text-3xl">
              Close your eyes and imagine
            </h2>
          </div>
          <p className="mt-3 text-base leading-relaxed text-ink">{look.imagine}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Right now your baby is about the size of a{" "}
            <span className="font-medium text-ink">
              {size.emoji} {size.label}
            </span>{" "}
            — {move.desc.charAt(0).toLowerCase() + move.desc.slice(1)}
          </p>
        </GlassCard>
      </SectionReveal>

      {/* WHAT THEY LOOK LIKE */}
      <SectionReveal delay={0.05}>
        <div className="mt-8">
          <SectionTitle
            eyebrow={`Week ${morph.week}`}
            title="What your baby looks like now"
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {APPEARANCE.map((a) => (
              <div key={a.label} className="glass rounded-3xl p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden>
                    {a.icon}
                  </span>
                  <span className="text-sm font-semibold text-plum">{a.label}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* WHAT THEY'RE DOING / SENSING */}
      <SectionReveal delay={0.05}>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <GlassCard className="h-full">
            <SectionTitle eyebrow="Right now" title="What your baby is doing" />
            <p className="mt-3 font-display text-lg font-semibold text-terracotta">
              {move.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink">{move.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {move.motions.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-linen px-3 py-1 text-xs font-medium text-ink"
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">
              {move.feltByMother
                ? "You may be able to feel these movements."
                : "Still too small and gentle for you to feel."}
            </p>
          </GlassCard>

          <GlassCard className="h-full">
            <SectionTitle eyebrow="Their world" title="What your baby senses" />
            <ul className="mt-3 space-y-2">
              {[
                { k: "👂 Hearing", v: womb.hearing },
                { k: "👁️ Sight", v: womb.vision },
                { k: "👅 Taste & smell", v: womb.tasteSmell },
                { k: "✋ Touch", v: womb.touch },
              ].map((row) => (
                <li key={row.k} className="text-sm leading-relaxed text-ink">
                  <span className="font-semibold text-plum">{row.k}: </span>
                  {row.v}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionReveal>

      {/* CONNECT */}
      <SectionReveal delay={0.05}>
        <GlassCard className="mt-8">
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden>
              💛
            </span>
            <h3 className="font-display text-lg font-semibold text-plum">
              A way to connect today
            </h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink">{womb.connection}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/explore"
              className="text-sm font-medium text-terracotta transition-colors hover:text-plum"
            >
              Open the full 3D explorer &rarr;
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium text-terracotta transition-colors hover:text-plum"
            >
              Browse all guides &rarr;
            </Link>
          </div>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This is a gentle, artistic and research-informed impression of typical
          development — every baby is unique, and this is for education only, not
          a medical scan or diagnosis. Always follow your obstetrician. In India,
          dial 108 for emergencies.
        </p>
      </SectionReveal>
    </main>
  );
}
