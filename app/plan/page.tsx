"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GlassCard, SectionTitle, Badge, ProgressBar } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";
import { PLAN, currentPhase, type PlanPhase } from "@/lib/plan";
import { getPregnancyState, istTodayISO, formatLongDate } from "@/lib/pregnancy";

const REFERENCE_ISO = "2026-06-26";

const TRIMESTERS: Array<{ t: 1 | 2 | 3; label: string; weeks: string }> = [
  { t: 1, label: "First trimester", weeks: "Weeks 1–13" },
  { t: 2, label: "Second trimester", weeks: "Weeks 14–27" },
  { t: 3, label: "Third trimester", weeks: "Weeks 28–40" },
];

const CATEGORIES: Array<{ key: keyof PlanPhase; icon: string; label: string }> = [
  { key: "appointments", icon: "🩺", label: "Appointments" },
  { key: "tests", icon: "⚗", label: "Tests & screening" },
  { key: "nutrition", icon: "🍲", label: "Nutrition" },
  { key: "movement", icon: "🧘", label: "Movement & body" },
  { key: "mind", icon: "🌸", label: "Mind & bonding" },
  { key: "actions", icon: "✅", label: "Tick these off" },
];

function PhaseCard({ phase, active }: { phase: PlanPhase; active: boolean }) {
  return (
    <GlassCard className={active ? "border-2 border-terracotta/60 bg-peach/10" : ""}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-peach">
            {phase.stage}
          </span>
          {active && <Badge tone="peach">You are here</Badge>}
        </div>
      </div>
      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-plum">
        {phase.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink">{phase.focus}</p>

      <div className="mt-3 rounded-3xl bg-linen/60 p-4">
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-lg">👶</span>
          <span className="text-sm font-semibold text-plum">Your baby</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink">{phase.baby}</p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {CATEGORIES.map((cat) => {
          const items = phase[cat.key] as string[];
          if (!items?.length) return null;
          return (
            <div key={cat.label}>
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-base">{cat.icon}</span>
                <span className="text-sm font-semibold text-terracotta">{cat.label}</span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {phase.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-linen pt-4">
          {phase.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full bg-peach/15 px-3 py-1 text-xs font-medium text-terracotta transition-colors hover:bg-peach/25"
            >
              {l.label} &rarr;
            </Link>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

export default function PlanPage() {
  const [todayISO, setTodayISO] = useState(REFERENCE_ISO);

  useEffect(() => {
    setTodayISO(istTodayISO());
  }, []);

  const state = useMemo(() => getPregnancyState(todayISO), [todayISO]);
  const here = useMemo(() => currentPhase(state.week), [state.week]);

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Your whole journey, in one place
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Pregnancy plan
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A complete, week-by-week plan that brings together your antenatal care, tests,
            nutrition, movement, mind and bonding — tailored to pregnancy in India. Each phase
            highlights what to do now and links to deeper, evidence-informed reading.
          </p>
        </header>
      </SectionReveal>

      {/* Right now */}
      <SectionReveal delay={0.04}>
        <GlassCard className="border border-terracotta/25 bg-peach/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge tone="peach">Right now</Badge>
              <h2 className="font-display text-xl font-semibold tracking-tight text-terracotta sm:text-2xl">
                Week {state.week} · {here.title}
              </h2>
            </div>
            <span className="text-sm text-muted">
              {state.gaLabel} · Trimester {state.trimester}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink">{here.focus}</p>
          <div className="mt-4">
            <ProgressBar pct={state.progressPct} />
            <div className="mt-1.5 flex justify-between text-xs text-muted">
              <span>{Math.round(state.progressPct)}% of the way</span>
              <span>{state.daysRemaining} days to go · EDD {formatLongDate(state.eddISO)}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/explore" className="rounded-full bg-terracotta px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90">
              See your baby in 3D &rarr;
            </Link>
            <Link href="/guides" className="rounded-full bg-linen px-4 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-peach/20">
              Browse all guides &rarr;
            </Link>
          </div>
        </GlassCard>
      </SectionReveal>

      {/* Trimester-grouped plan */}
      <div className="mt-8 space-y-10">
        {TRIMESTERS.map((tri) => {
          const phases = PLAN.filter((p) => p.trimester === tri.t);
          return (
            <section key={tri.t}>
              <SectionReveal>
                <SectionTitle eyebrow={tri.weeks} title={tri.label} className="mb-4" />
              </SectionReveal>
              <div className="space-y-5">
                {phases.map((p, i) => (
                  <SectionReveal key={p.id} delay={i * 0.05}>
                    <PhaseCard phase={p} active={p.id === here.id} />
                  </SectionReveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <SectionReveal delay={0.15}>
        <p className="mt-10 text-center text-xs leading-relaxed text-muted">
          This plan is for general education only and is not a substitute for professional
          medical advice. Visit schedules and tests vary by individual and clinic — always follow
          your obstetrician and care team. In India, dial 108 for emergency ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
