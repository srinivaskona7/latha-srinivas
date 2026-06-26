"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { deriveDay, formatLength, formatWeight, SYSTEM_LABELS } from "@/lib/derive";
import { weekDayLabel, TERM_DAYS } from "@/lib/pregnancy";
import { GlassCard, StatTile, Badge, SectionTitle } from "@/components/ui/index";

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

// Trimester boundaries in days (weeks 1-13, 14-27, 28-40).
const T1_END = 13 * 7; // 91
const T2_END = 27 * 7; // 189

export default function TimelinePage() {
  const [day, setDay] = useState(1);
  const reduce = useReducedMotion();
  const view = useMemo(() => deriveDay(day), [day]);

  const set = (d: number) => setDay(clamp(Math.round(d), 1, TERM_DAYS));
  const pct = (day / TERM_DAYS) * 100;

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 220, damping: 30 };

  return (
    <div className="space-y-8 py-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
          Interactive journey
        </p>
        <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
          Timeline — Day 1 to {TERM_DAYS}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Slide through every day of the journey to see how your baby grows and
          how your body changes, moment by moment.
        </p>
      </div>

      {/* Slider + trimester track */}
      <GlassCard>
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <span className="font-display text-3xl font-semibold text-terracotta">
              Day {day}
            </span>
            <span className="ml-2 text-lg font-medium text-plum">
              {weekDayLabel(day)}
            </span>
          </div>
          <div className="flex gap-2">
            <Badge tone="plum">Trimester {view.trimester}</Badge>
            <Badge tone="sage">Month {view.month}</Badge>
          </div>
        </div>

        {/* Trimester bands */}
        <div className="relative mt-5 h-3 w-full overflow-hidden rounded-full">
          <div className="absolute inset-0 flex">
            <div
              className="h-full bg-peach/40"
              style={{ width: `${(T1_END / TERM_DAYS) * 100}%` }}
            />
            <div
              className="h-full bg-sage/40"
              style={{ width: `${((T2_END - T1_END) / TERM_DAYS) * 100}%` }}
            />
            <div
              className="h-full bg-plum/30"
              style={{ width: `${((TERM_DAYS - T2_END) / TERM_DAYS) * 100}%` }}
            />
          </div>
          <motion.div
            className="absolute top-0 h-full rounded-full bg-gradient-to-r from-peach to-terracotta"
            style={{ left: 0 }}
            animate={{ width: `${pct}%` }}
            transition={spring}
          />
          <motion.div
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-terracotta shadow-glass"
            animate={{ left: `${pct}%` }}
            transition={spring}
          />
        </div>

        <input
          type="range"
          min={1}
          max={TERM_DAYS}
          value={day}
          onChange={(e) => set(Number(e.target.value))}
          aria-label="Day of pregnancy"
          className="mt-3 w-full accent-terracotta"
        />

        <div className="mt-1 flex justify-between text-[10px] font-medium uppercase tracking-wide text-muted">
          <span>1st trimester</span>
          <span>2nd</span>
          <span>3rd · EDD</span>
        </div>

        {/* Controls */}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => set(1)}
            className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
          >
            Day 1
          </button>
          <button
            onClick={() => set(day - 7)}
            className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
          >
            − 7 days
          </button>
          <button
            onClick={() => set(day + 7)}
            className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
          >
            + 7 days
          </button>
          <button
            onClick={() => set(TERM_DAYS)}
            className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
          >
            EDD (Day {TERM_DAYS})
          </button>
          <Link
            href={`/day/${day}/`}
            className="ml-auto inline-flex items-center gap-1 rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03]"
          >
            Open day page →
          </Link>
        </div>
      </GlassCard>

      {/* Live size stats */}
      <motion.div
        key={day}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.35 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        <StatTile
          label="Length"
          value={formatLength(view.lengthMm)}
          accent="terracotta"
        />
        <StatTile
          label="Weight"
          value={formatWeight(view.weightG)}
          accent="sage"
        />
        <StatTile label="Size of a" value={view.fruitComparison} accent="peach" />
        <StatTile label="At a glance" value={view.sizeSummary} accent="plum" />
      </motion.div>

      {/* Milestone + mother changes */}
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <SectionTitle eyebrow="Milestone" title="What's happening" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {view.milestone}
          </p>
        </GlassCard>
        <GlassCard>
          <SectionTitle eyebrow="For mum" title="How your body changes" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {view.motherChanges}
          </p>
        </GlassCard>
      </div>

      {/* Compact organ summary */}
      <GlassCard>
        <SectionTitle
          eyebrow="Inside this week"
          title={`${Object.keys(view.organs).length} body systems active`}
        />
        {view.newlyForming.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
              Newly forming this week
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {view.newlyForming.map((k) => (
                <Badge key={k} tone="peach">
                  ✶ {SYSTEM_LABELS[k]}
                </Badge>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {(Object.keys(view.organs) as Array<keyof typeof SYSTEM_LABELS>).map(
            (k) => (
              <Badge key={k} tone="sage">
                {SYSTEM_LABELS[k]}
              </Badge>
            ),
          )}
        </div>
        <Link
          href={`/week/${view.week}/`}
          className="mt-4 inline-block text-sm font-medium text-terracotta hover:underline"
        >
          Full Week {view.week} dashboard →
        </Link>
      </GlassCard>
    </div>
  );
}
