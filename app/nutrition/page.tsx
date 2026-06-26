import { NUTRITION } from "@/lib/content";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Nutrition — Baby Journey" };

function Chips({ items, tone = "peach" }: { items: string[]; tone?: "peach" | "sage" | "plum" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge tone={tone}>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}

function FoodCard({
  eyebrow,
  title,
  items,
  tone = "peach",
}: {
  eyebrow: string;
  title: string;
  items: string[];
  tone?: "peach" | "sage" | "plum";
}) {
  return (
    <GlassCard>
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="mt-4">
        <Chips items={items} tone={tone} />
      </div>
    </GlassCard>
  );
}

export default function NutritionPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Nourishing two
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Indian pregnancy nutrition
          </h1>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <GlassCard className="mb-10 bg-peach/15">
          <p className="text-base leading-relaxed text-ink">{NUTRITION.intro}</p>
        </GlassCard>
      </SectionReveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SectionReveal delay={0.1}>
          <FoodCard
            eyebrow="Build & repair"
            title="Protein sources"
            items={NUTRITION.proteinSources}
            tone="peach"
          />
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <FoodCard
            eyebrow="Healthy blood"
            title="Iron-rich foods"
            items={NUTRITION.ironRich}
            tone="peach"
          />
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <FoodCard
            eyebrow="Strong bones"
            title="Calcium sources"
            items={NUTRITION.calciumSources}
            tone="sage"
          />
        </SectionReveal>
        <SectionReveal delay={0.25}>
          <FoodCard
            eyebrow="Early development"
            title="Folate-rich foods"
            items={NUTRITION.folateRich}
            tone="plum"
          />
        </SectionReveal>
      </div>

      <SectionReveal delay={0.3}>
        <GlassCard className="mt-6">
          <SectionTitle eyebrow="Put it together" title="Meal ideas" />
          <ul className="mt-4 space-y-3">
            {NUTRITION.mealIdeas.map((idea) => (
              <li key={idea} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.35}>
        <GlassCard className="mt-6">
          <SectionTitle eyebrow="Stay refreshed" title="Hydration" />
          <ul className="mt-4 space-y-3">
            {NUTRITION.hydration.map((tip) => (
              <li key={tip} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.4}>
        <GlassCard className="mt-6 border border-terracotta/25 bg-peach/15">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Eat mindfully
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-terracotta sm:text-3xl">
            Foods to avoid or limit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            A few foods are best kept off the plate or enjoyed only in small
            amounts during pregnancy. When in doubt, ask your clinician.
          </p>
          <ul className="mt-4 space-y-3">
            {NUTRITION.avoidOrLimit.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>
    </main>
  );
}
