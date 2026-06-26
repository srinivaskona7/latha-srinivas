import { LABS } from "@/lib/content";
import type { LabRecord } from "@/lib/types";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Lab Tests — Baby Journey" };

const SAMPLE_GROUPS: { key: LabRecord["sample"]; label: string; blurb: string }[] = [
  {
    key: "Blood",
    label: "Blood tests",
    blurb: "Drawn from a small blood sample, usually at your booking visit.",
  },
  {
    key: "Urine",
    label: "Urine tests",
    blurb: "Simple, non-invasive checks from a urine sample at each visit.",
  },
  {
    key: "Blood/Urine",
    label: "Blood & urine tests",
    blurb: "Combined checks that draw on both blood and urine samples.",
  },
];

function sampleTone(sample: LabRecord["sample"]): "peach" | "sage" | "plum" {
  if (sample === "Blood") return "peach";
  if (sample === "Urine") return "sage";
  return "plum";
}

export default function LabsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Your pregnancy
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Lab tests
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Routine laboratory tests help your care team understand your health
            and your baby&apos;s wellbeing. Most are quick and straightforward —
            a small blood sample or a urine sample — and each one is chosen to
            catch and care for things early. Here they are, grouped by the kind
            of sample they use.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-12">
        {SAMPLE_GROUPS.map((group, gi) => {
          const items = LABS.filter((lab) => lab.sample === group.key);
          if (items.length === 0) return null;
          return (
            <section key={group.key}>
              <SectionReveal delay={gi * 0.05}>
                <SectionTitle eyebrow={group.blurb} title={group.label} />
              </SectionReveal>
              <div className="mt-5 space-y-6">
                {items.map((lab, i) => (
                  <SectionReveal key={lab.name} delay={gi * 0.05 + i * 0.05}>
                    <GlassCard>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-plum">
                          {lab.name}
                        </h3>
                        <Badge tone={sampleTone(lab.sample)}>{lab.sample}</Badge>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                            What it measures
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink">
                            {lab.measures}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                            Why it&apos;s recommended
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink">
                            {lab.whyRecommended}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </SectionReveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <SectionReveal delay={0.1}>
        <GlassCard className="mt-10 bg-peach/15">
          <p className="text-sm leading-relaxed text-ink">
            <span className="font-semibold text-plum">Please remember. </span>
            Lab results are only meaningful in the context of your whole
            pregnancy. They should always be ordered and interpreted by your
            healthcare provider, who can explain what each result means for you
            and recommend any next steps.
          </p>
        </GlassCard>
      </SectionReveal>
    </main>
  );
}
