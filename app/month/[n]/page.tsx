import Link from "next/link";
import { getMonth } from "@/lib/content";
import { MONTH_WEEK_RANGES } from "@/lib/pregnancy";
import { GlassCard, Badge, SectionTitle } from "@/components/ui/index";
import { SectionReveal } from "@/components/common/SectionReveal";
import { PrintButton } from "@/components/common/PrintButton";

export function generateStaticParams() {
  return Array.from({ length: 9 }, (_, i) => ({ n: String(i + 1) }));
}

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

export default function MonthPage({ params }: { params: { n: string } }) {
  const n = clamp(Math.round(Number(params.n) || 1), 1, 9);
  const month = getMonth(n);
  const [lo, hi] = MONTH_WEEK_RANGES[n - 1];
  const weeks = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);

  const prev = n > 1 ? n - 1 : null;
  const next = n < 9 ? n + 1 : null;

  return (
    <div className="space-y-8 py-2">
      {/* Header */}
      <SectionReveal>
        <div className="flex flex-wrap items-end justify-between gap-4 print-block">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              {month.weeksRange}
            </p>
            <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
              Month {n}
            </h1>
            <h2 className="mt-2 font-display text-xl font-medium text-terracotta">
              {month.title}
            </h2>
          </div>
          <PrintButton />
        </div>
      </SectionReveal>

      {/* Week chips */}
      <SectionReveal delay={0.05}>
        <div className="no-print flex flex-wrap gap-2">
          {weeks.map((w) => (
            <Link key={w} href={`/week/${w}/`}>
              <Badge tone="sage">Week {w}</Badge>
            </Link>
          ))}
        </div>
      </SectionReveal>

      {/* Development summary */}
      <SectionReveal delay={0.1}>
        <GlassCard className="print-block">
          <SectionTitle eyebrow="This month" title="Development summary" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {month.developmentSummary}
          </p>
        </GlassCard>
      </SectionReveal>

      {/* Body changes */}
      <SectionReveal delay={0.13}>
        <GlassCard className="print-block">
          <SectionTitle eyebrow="For mum" title="Body changes" />
          <p className="mt-3 text-base leading-relaxed text-ink">
            {month.bodyChanges}
          </p>
        </GlassCard>
      </SectionReveal>

      {/* Nutrition + exercise */}
      <SectionReveal delay={0.16}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard className="print-block">
            <SectionTitle eyebrow="Nourish" title="Nutrition focus" />
            <p className="mt-3 text-base leading-relaxed text-ink">
              {month.nutritionFocus}
            </p>
          </GlassCard>
          <GlassCard className="print-block">
            <SectionTitle eyebrow="Move" title="Exercise guidance" />
            <p className="mt-3 text-base leading-relaxed text-ink">
              {month.exerciseGuidance}
            </p>
          </GlassCard>
        </div>
      </SectionReveal>

      {/* Common experiences + prenatal care */}
      <SectionReveal delay={0.19}>
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassCard className="print-block">
            <SectionTitle
              eyebrow="What's common"
              title="Common experiences"
            />
            <ul className="mt-3 space-y-2">
              {month.commonExperiences.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="text-peach">
                    •
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="print-block">
            <SectionTitle eyebrow="Stay on track" title="Prenatal care" />
            <ul className="mt-3 space-y-2">
              {month.prenatalCare.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-ink"
                >
                  <span aria-hidden className="text-sage">
                    ✓
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionReveal>

      {/* Prev / Next */}
      <SectionReveal delay={0.22}>
        <nav className="no-print flex items-center justify-between gap-3 pt-2">
          {prev ? (
            <Link
              href={`/month/${prev}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              ← Month {prev}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/week/${lo}/`}
            className="text-sm font-medium text-terracotta hover:underline"
          >
            Start Week {lo}
          </Link>
          {next ? (
            <Link
              href={`/month/${next}/`}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-plum transition-transform hover:scale-[1.03]"
            >
              Month {next} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </SectionReveal>
    </div>
  );
}
