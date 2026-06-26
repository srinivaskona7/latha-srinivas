import { SCANS } from "@/lib/content";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Prenatal Scans — Baby Journey" };

export default function ScansPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Your pregnancy
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Prenatal scans
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Ultrasound scans are gentle, painless windows into your baby&apos;s
            growth. Each one is timed to a particular stage of pregnancy to
            confirm dates, watch development unfold, and offer reassurance along
            the way. Below is an overview of the scans commonly offered during a
            healthy pregnancy.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-6">
        {SCANS.map((scan, i) => (
          <SectionReveal key={scan.name} delay={i * 0.06}>
            <GlassCard>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-plum">
                  {scan.name}
                </h2>
                <Badge tone="peach">Weeks {scan.whenWeeks}</Badge>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                    Purpose
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {scan.purpose}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                    What it checks
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {scan.whatItChecks}
                  </p>
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.1}>
        <GlassCard className="mt-8 bg-peach/15">
          <p className="text-sm leading-relaxed text-ink">
            <span className="font-semibold text-plum">A gentle note. </span>
            Scans are recommended, scheduled, and interpreted by your own
            clinician based on your individual pregnancy. Timing and the exact
            set of scans may vary. Always discuss your results and any questions
            with your healthcare provider.
          </p>
        </GlassCard>
      </SectionReveal>
    </main>
  );
}
