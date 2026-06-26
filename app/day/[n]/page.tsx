import Link from "next/link";
import { deriveDay, formatLength, formatWeight } from "@/lib/derive";
import { weekDayLabel, TERM_DAYS } from "@/lib/pregnancy";
import {
  GlassCard,
  StatTile,
  Badge,
  SectionTitle,
} from "@/components/ui/index";
import { SectionReveal } from "@/components/common/SectionReveal";
import { OrganGrid } from "@/components/dashboard/OrganGrid";

export function generateStaticParams() {
  return Array.from({ length: TERM_DAYS }, (_, i) => ({ n: String(i + 1) }));
}

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

export default function DayPage({ params }: { params: { n: string } }) {
  const n = clamp(Math.round(Number(params.n) || 1), 1, TERM_DAYS);
  const day = deriveDay(n);

  const prev = n > 1 ? n - 1 : null;
  const next = n < TERM_DAYS ? n + 1 : null;

  return (
    <div className="space-y-8 py-2">
      {/* Header */}
      <SectionReveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              Day {n} of {TERM_DAYS}
            </p>
            <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
              Day {n} — {weekDayLabel(n)}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="plum">Trimester {day.trimester}</Badge>
              <Badge tone="sage">Month {day.month}</Badge>
              <Badge tone="peach">
                <Link href={`/week/${day.week}/`}>Week {day.week} →</Link>
              </Badge>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Size stats */}
      <SectionReveal delay={0.05}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile
            label="Length"
            value={formatLength(day.lengthMm)}
            accent="terracotta"
          />
          <StatTile
            label="Weight"
            value={formatWeight(day.weightG)}
            accent="sage"
          />
          <StatTile
            label="Size of a"
            value={day.fruitComparison}
            accent="peach"
          />
          <StatTile label="At a glance" value={day.sizeSummary} accent="plum" />
        </div>
      </SectionReveal>

      {/* Milestone */}
      <SectionReveal delay={0.1}>
        <GlassCard>
          <SectionTitle eyebrow="This day's milestone" title="What's happening" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {day.milestone}
          </p>
        </GlassCard>
      </SectionReveal>

      {/* Variation note */}
      {day.variationNote && (
        <SectionReveal delay={0.12}>
          <div className="rounded-4xl border border-peach/30 bg-peach/15 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              A gentle note
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {day.variationNote}
            </p>
          </div>
        </SectionReveal>
      )}

      {/* Mother changes + symptoms */}
      <SectionReveal delay={0.15}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard>
            <SectionTitle eyebrow="For mum" title="How your body changes" />
            <p className="mt-3 text-base leading-relaxed text-ink">
              {day.motherChanges}
            </p>
          </GlassCard>
          <GlassCard>
            <SectionTitle eyebrow="What you may feel" title="Common symptoms" />
            <ul className="mt-3 space-y-2">
              {day.symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="text-peach">
                    •
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionReveal>

      {/* Tips */}
      <SectionReveal delay={0.18}>
        <GlassCard>
          <SectionTitle eyebrow="Take care" title="Tips for today" />
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {day.tips.map((t, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-ink"
              >
                <span aria-hidden className="text-sage">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      {/* Prenatal questions */}
      <SectionReveal delay={0.2}>
        <GlassCard>
          <SectionTitle
            eyebrow="At your next visit"
            title="Questions to ask"
          />
          <ul className="mt-3 space-y-2">
            {day.prenatalQuestions.map((q, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <span aria-hidden className="text-plum">
                  ?
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      {/* Organ grid */}
      <SectionReveal delay={0.22}>
        <SectionTitle
          eyebrow="Inside this week"
          title="Body systems forming"
          className="mb-4"
        />
        <OrganGrid organs={day.organs} newlyForming={day.newlyForming} />
      </SectionReveal>

      {/* Prev / Next */}
      <SectionReveal delay={0.25}>
        <nav className="flex items-center justify-between gap-3 pt-2">
          {prev ? (
            <Link
              href={`/day/${prev}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              ← Day {prev}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/week/${day.week}/`}
            className="text-sm font-medium text-terracotta hover:underline"
          >
            View Week {day.week}
          </Link>
          {next ? (
            <Link
              href={`/day/${next}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              Day {next} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </SectionReveal>
    </div>
  );
}
