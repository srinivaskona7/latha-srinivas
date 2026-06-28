"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  getPregnancyState,
  istTodayISO,
  formatLongDate,
  TERM_DAYS,
} from "@/lib/pregnancy";
import { deriveDay, formatLength, formatWeight } from "@/lib/derive";
import { getUpcomingScan } from "@/lib/content";
import type { PregnancyState } from "@/lib/types";
import { GlassCard, StatTile, Badge, ProgressBar, SectionTitle } from "@/components/ui";
import { Counter } from "@/components/ui/Counter";
import { SectionReveal } from "@/components/common/SectionReveal";
import { OrganGrid } from "./OrganGrid";

// Reference state for SSR/first paint (2026-06-26). Hydration swaps to live IST.
const REFERENCE_ISO = "2026-06-26";

export function TodayView() {
  const [todayISO, setTodayISO] = useState<string>(REFERENCE_ISO);

  useEffect(() => {
    setTodayISO(istTodayISO());
  }, []);

  const state: PregnancyState = useMemo(
    () => getPregnancyState(todayISO),
    [todayISO],
  );
  const day = useMemo(
    () => deriveDay(state.dayOfPregnancy),
    [state.dayOfPregnancy],
  );
  const upcoming = useMemo(
    () => getUpcomingScan(state.week),
    [state.week],
  );

  return (
    <div className="space-y-6">
      {/* HERO */}
      <SectionReveal>
        <GlassCard className="overflow-hidden">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="peach">Trimester {state.trimester}</Badge>
                <Badge tone="sage">Month {state.month}</Badge>
                <Badge tone="plum">Day {state.dayOfPregnancy} of {TERM_DAYS}</Badge>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-plum sm:text-6xl">
                {state.gaWeeks} weeks{" "}
                <span className="text-terracotta">{state.gaDays} days</span>
              </h1>
              {state.daysCompleted > 0 && (
                <p className="text-sm font-medium text-muted">
                  Calendar age:{" "}
                  <span className="text-ink">
                    {state.completedCalendarMonths} {state.completedCalendarMonths === 1 ? "month" : "months"}{" "}
                    {state.completedCalendarDays} {state.completedCalendarDays === 1 ? "day" : "days"}
                  </span>
                </p>
              )}
              <p className="max-w-md text-muted">
                Today your baby is about the size of a{" "}
                <span className="font-medium text-ink">{day.fruitComparison}</span>.{" "}
                {day.milestone}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <span className="animate-floaty text-5xl" aria-hidden>
                  ✶
                </span>
                <div className="text-sm text-muted">
                  <p className="font-medium text-ink">
                    Estimated due date
                  </p>
                  <p>{formatLongDate(state.eddISO)}</p>
                </div>
              </div>
            </div>

            {/* Progress ring-ish block */}
            <div className="w-full max-w-xs space-y-3">
              <div className="flex items-end justify-between">
                <span className="font-display text-3xl font-semibold text-plum">
                  <Counter value={state.progressPct} decimals={0} suffix="%" />
                </span>
                <span className="text-sm text-muted">complete</span>
              </div>
              <ProgressBar pct={state.progressPct} />
              <div className="grid grid-cols-2 gap-3 pt-1">
                <StatTile
                  label="Days completed"
                  value={<Counter value={state.daysCompleted} />}
                  accent="sage"
                />
                <StatTile
                  label="Days to go"
                  value={<Counter value={state.daysRemaining} />}
                  accent="terracotta"
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionReveal>

      {/* SIZE STATS */}
      <SectionReveal delay={0.05}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Length" value={formatLength(day.lengthMm)} sub="approx." accent="peach" />
          <StatTile label="Weight" value={formatWeight(day.weightG)} sub="approx." accent="sage" />
          <StatTile label="Week" value={state.week} sub="in progress" accent="plum" />
          <StatTile label="Size" value={day.fruitComparison} accent="terracotta" />
        </div>
      </SectionReveal>

      {/* MILESTONE + MOTHER */}
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionReveal delay={0.05}>
          <GlassCard className="h-full">
            <SectionTitle eyebrow="Today's milestone" title="Baby development" />
            <p className="mt-3 leading-relaxed text-muted">{day.milestone}</p>
            <div className="mt-4 rounded-2xl bg-linen/60 p-3 text-sm text-muted">
              <span className="font-medium text-ink">Good to know — </span>
              {day.variationNote}
            </div>
          </GlassCard>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlassCard className="h-full">
            <SectionTitle eyebrow="For you" title="Mother's changes" />
            <p className="mt-3 leading-relaxed text-muted">{day.motherChanges}</p>
            {day.symptoms.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {day.symptoms.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-peach/10 px-3 py-1 text-xs text-terracotta"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </GlassCard>
        </SectionReveal>
      </div>

      {/* TIPS + UPCOMING */}
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionReveal delay={0.05}>
          <GlassCard className="h-full">
            <SectionTitle eyebrow="Gentle guidance" title="Today's tips" />
            <ul className="mt-3 space-y-2">
              {day.tips.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-muted">
                  <span className="text-peach" aria-hidden>♡</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlassCard className="flex h-full flex-col">
            <SectionTitle eyebrow="Looking ahead" title="Upcoming scan" />
            {upcoming ? (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-plum">
                    {upcoming.scan.name}
                  </span>
                  <Badge tone="sage">
                    {upcoming.weeksAway === 0
                      ? "around now"
                      : `in ~${upcoming.weeksAway} wk`}
                  </Badge>
                </div>
                <p className="text-sm text-muted">{upcoming.scan.purpose}</p>
                <p className="text-xs text-muted">
                  Typically around weeks {upcoming.scan.whenWeeks}.
                </p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted">
                You&apos;re in the final stretch — your care team will guide
                monitoring from here.
              </p>
            )}
            <div className="mt-auto pt-4">
              <Link
                href="/scans"
                className="text-sm font-medium text-terracotta hover:underline"
              >
                Explore all scans →
              </Link>
            </div>
          </GlassCard>
        </SectionReveal>
      </div>

      {/* ORGAN DEVELOPMENT */}
      <SectionReveal delay={0.05}>
        <GlassCard>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionTitle
              eyebrow={`Week ${state.week}`}
              title="What's developing now"
            />
            <Link
              href={`/day/${state.dayOfPregnancy}`}
              className="text-sm font-medium text-terracotta hover:underline"
            >
              Full day {state.dayOfPregnancy} page →
            </Link>
          </div>
          <div className="mt-5">
            <OrganGrid organs={day.organs} newlyForming={day.newlyForming} />
          </div>
        </GlassCard>
      </SectionReveal>

      {/* QUICK LINKS */}
      <SectionReveal delay={0.05}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { href: "/timeline", label: "Timeline", icon: "↔" },
            { href: "/explore", label: "3D Baby", icon: "◉" },
            { href: `/week/${state.week}`, label: "This week", icon: "◷" },
            { href: `/month/${state.month}`, label: "This month", icon: "☾" },
          ].map((q) => (
            <Link key={q.href} href={q.href}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass flex flex-col items-center gap-2 rounded-3xl p-5 text-center"
              >
                <span className="text-2xl" aria-hidden>{q.icon}</span>
                <span className="text-sm font-medium text-ink">{q.label}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
