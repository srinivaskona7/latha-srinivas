import { PARTNER } from "@/lib/content";
import { GlassCard, SectionTitle } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Partner Support — Baby Journey" };

export default function PartnerPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            In this together
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Partner support
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Partners play a quietly powerful role in pregnancy. Your presence,
            patience, and small daily acts of care make a real difference to how
            supported and steady she feels. Here are warm, practical ways to show
            up at every stage of the journey.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-8">
        {PARTNER.map((stage, si) => (
          <section key={stage.stage}>
            <SectionReveal delay={si * 0.06}>
              <GlassCard>
                <SectionTitle eyebrow="Ways to help" title={stage.stage} />
                <ul className="mt-5 space-y-3">
                  {stage.ideas.map((idea) => (
                    <li
                      key={idea}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sage/15 text-xs font-semibold text-sage"
                      >
                        &#10003;
                      </span>
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </SectionReveal>
          </section>
        ))}
      </div>

      <SectionReveal delay={0.1}>
        <GlassCard className="mt-10 bg-peach/15">
          <p className="text-sm leading-relaxed text-ink">
            <span className="font-semibold text-plum">Above all. </span>
            Listen, ask how she&apos;s feeling, and follow her lead. The most
            meaningful support is simply being present — together, one day at a
            time.
          </p>
        </GlassCard>
      </SectionReveal>
    </main>
  );
}
