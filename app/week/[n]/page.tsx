import Link from "next/link";
import { getWeek } from "@/lib/content";
import { formatLength, formatWeight } from "@/lib/derive";
import { weekToMonth, weekToTrimester } from "@/lib/pregnancy";
import type { SystemKey } from "@/lib/types";
import {
  GlassCard,
  StatTile,
  Badge,
  SectionTitle,
} from "@/components/ui/index";
import { SectionReveal } from "@/components/common/SectionReveal";
import { PrintButton } from "@/components/common/PrintButton";
import { OrganGrid } from "@/components/dashboard/OrganGrid";

export function generateStaticParams() {
  return Array.from({ length: 40 }, (_, i) => ({ n: String(i + 1) }));
}

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

export default function WeekPage({ params }: { params: { n: string } }) {
  const n = clamp(Math.round(Number(params.n) || 1), 1, 40);
  const week = getWeek(n);
  const month = weekToMonth(n);
  const trimester = weekToTrimester(n);

  // Newly forming: organ systems present this week but absent last week.
  const prevKeys = new Set<string>(
    n > 1 ? Object.keys(getWeek(n - 1).organs) : [],
  );
  const newlyForming = (Object.keys(week.organs) as SystemKey[]).filter(
    (k) => !prevKeys.has(k),
  );

  const prev = n > 1 ? n - 1 : null;
  const next = n < 40 ? n + 1 : null;

  return (
    <div className="space-y-8 py-2">
      {/* Header */}
      <SectionReveal>
        <div className="flex flex-wrap items-end justify-between gap-4 print-block">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              Weekly summary
            </p>
            <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
              Week {n}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="plum">Trimester {trimester}</Badge>
              <Badge tone="sage">
                <Link href={`/month/${month}/`}>Month {month} →</Link>
              </Badge>
            </div>
          </div>
          <PrintButton />
        </div>
      </SectionReveal>

      {/* Fetal growth */}
      <SectionReveal delay={0.05}>
        <div className="print-block grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile
            label="Length"
            value={formatLength(week.lengthMm)}
            accent="terracotta"
          />
          <StatTile
            label="Weight"
            value={formatWeight(week.weightG)}
            accent="sage"
          />
          <StatTile
            label="Size of a"
            value={week.fruitComparison}
            accent="peach"
          />
          <StatTile
            label="At a glance"
            value={week.sizeSummary}
            accent="plum"
          />
        </div>
      </SectionReveal>

      {/* Milestone */}
      <SectionReveal delay={0.1}>
        <GlassCard className="print-block">
          <SectionTitle eyebrow="This week's milestone" title="Key development" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {week.milestone}
          </p>
        </GlassCard>
      </SectionReveal>

      {/* Variation note */}
      {week.variationNote && (
        <SectionReveal delay={0.12}>
          <div className="print-block rounded-4xl border border-peach/30 bg-peach/15 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              A gentle note
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {week.variationNote}
            </p>
          </div>
        </SectionReveal>
      )}

      {/* Maternal changes + symptoms */}
      <SectionReveal delay={0.15}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard className="print-block">
            <SectionTitle eyebrow="For mum" title="Maternal changes" />
            <p className="mt-3 text-base leading-relaxed text-ink">
              {week.motherChanges}
            </p>
          </GlassCard>
          <GlassCard className="print-block">
            <SectionTitle eyebrow="What you may feel" title="Symptoms" />
            <ul className="mt-3 space-y-2">
              {week.symptoms.map((s, i) => (
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

      {/* Prenatal questions */}
      <SectionReveal delay={0.18}>
        <GlassCard className="print-block">
          <SectionTitle
            eyebrow="At your visit"
            title="Recommended questions"
          />
          <ul className="mt-3 space-y-2">
            {week.prenatalQuestions.map((q, i) => (
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

      {/* Tips */}
      <SectionReveal delay={0.2}>
        <GlassCard className="print-block">
          <SectionTitle eyebrow="Take care" title="Typical milestones & tips" />
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {week.tips.map((t, i) => (
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

      {/* Organ grid */}
      <SectionReveal delay={0.22}>
        <SectionTitle
          eyebrow="Inside the womb"
          title="Body systems this week"
          className="mb-4"
        />
        <OrganGrid organs={week.organs} newlyForming={newlyForming} />
      </SectionReveal>

      {/* Prev / Next */}
      <SectionReveal delay={0.25}>
        <nav className="no-print flex items-center justify-between gap-3 pt-2">
          {prev ? (
            <Link
              href={`/week/${prev}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              ← Week {prev}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/month/${month}/`}
            className="text-sm font-medium text-terracotta hover:underline"
          >
            View Month {month}
          </Link>
          {next ? (
            <Link
              href={`/week/${next}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              Week {next} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </SectionReveal>
    </div>
  );
}
