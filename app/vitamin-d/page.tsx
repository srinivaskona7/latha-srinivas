import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Vitamin D & sunlight — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "What vitamin D does",
    body: "Vitamin D helps your body absorb calcium and phosphate, the minerals that build bones and teeth. It also plays a part in immune function. In pregnancy it supports both your bones and your baby's developing skeleton.",
    tips: [
      "Without enough vitamin D, the gut cannot absorb calcium well, no matter how much calcium you eat.",
      "Your baby's bones and teeth start forming in the womb and draw on your vitamin D and calcium.",
      "Vitamin D also helps regulate the immune system, which is part of why it draws research interest in pregnancy.",
      "Unlike most vitamins, your skin can make vitamin D from sunlight, so it is sometimes called the sunshine vitamin.",
    ],
  },
  {
    eyebrow: "From sunlight",
    title: "How your skin makes it",
    body: "When ultraviolet B rays from the sun reach your skin, they trigger a reaction that makes vitamin D. The amount depends on time of day, skin tone, clothing, and how much skin is exposed.",
    tips: [
      "Midday sun carries more of the UVB rays that make vitamin D than early morning or late evening light.",
      "Darker skin has more melanin, which slows vitamin D production, so it needs longer exposure.",
      "Glass blocks the UVB rays, so sitting indoors by a sunny window does not make vitamin D.",
      "Covering most of the skin, common for many reasons, greatly reduces how much vitamin D the sun can make.",
    ],
  },
  {
    eyebrow: "A surprising gap",
    title: "Deficiency is common in India despite sunshine",
    body: "India is sunny, yet vitamin D deficiency is widespread, including among pregnant women. Lifestyle, clothing, skin tone, and indoor work all narrow the gap between sunlight and actual vitamin D.",
    tips: [
      "Studies across many Indian cities have found a high share of adults and pregnant women with low vitamin D.",
      "Spending most of the day indoors at work or home limits real sun exposure even in sunny places.",
      "Air pollution and haze in some cities can scatter the UVB rays that make vitamin D.",
      "Clothing that covers most of the body and routine use of sun protection further reduce skin synthesis.",
      "Diets in many regions provide little vitamin D, so food rarely makes up the difference.",
    ],
  },
  {
    eyebrow: "What studies show",
    title: "Evidence on vitamin D in pregnancy",
    body: "Researchers have studied vitamin D in pregnancy in many trials and reviews. Some findings are fairly consistent, while others remain uncertain, so it is best understood as a balanced picture.",
    tips: [
      "Trials have found that supplementation reliably raises vitamin D levels in deficient pregnant women.",
      "Some studies associate adequate maternal vitamin D with better bone mineralisation in the baby.",
      "Research on links to outcomes like pre-eclampsia and gestational diabetes is mixed and still being studied.",
      "Reviews tend to agree that correcting clear deficiency is sensible, while routine high doses for everyone are not established.",
      "Because results vary, experts focus on identifying and treating low levels rather than blanket high dosing.",
    ],
  },
  {
    eyebrow: "Safe sun",
    title: "Getting sunlight sensibly",
    body: "A modest amount of sun on bare skin can help, but the goal is balance, not burning. Sunburn carries its own risks, so short, regular exposure is the idea.",
    tips: [
      "Short spells of midday sun on the arms and face a few times a week can support vitamin D, where practical.",
      "Avoid letting skin redden or burn, which is harmful and not needed for vitamin D.",
      "People with darker skin generally need longer exposure than those with lighter skin for the same effect.",
      "On very hot or high-pollution days, prioritise comfort and safety over chasing sun exposure.",
      "Sunlight alone is unreliable for many women, which is why diet and supplements often matter too.",
    ],
  },
  {
    eyebrow: "Food sources",
    title: "Vitamin D in food",
    body: "Few foods naturally contain much vitamin D, and vegetarian sources are especially limited. Fortified foods and a handful of natural sources help, but often cannot fully close the gap alone.",
    tips: [
      "Fatty fish like sardines and mackerel are among the better natural food sources for those who eat fish.",
      "Egg yolks provide a small amount of vitamin D for those who eat eggs.",
      "Fortified milk and some fortified cereals add vitamin D to the diet where available.",
      "Sun-exposed mushrooms can carry some vitamin D, useful for vegetarians.",
      "Because food sources are modest, many women rely partly on sunlight or a supplement.",
    ],
  },
  {
    eyebrow: "Supplements",
    title: "When a supplement helps",
    body: "Given how common deficiency is, many clinicians recommend a vitamin D supplement in pregnancy, especially when levels are low. The dose should be set by your clinician, sometimes after a blood test.",
    tips: [
      "If a blood test shows low vitamin D, your clinician may advise a correction dose followed by a maintenance amount.",
      "Many pregnancy multivitamins already contain some vitamin D, so check before adding more.",
      "Do not take high-dose vitamin D on your own, as too much can be harmful; have the dose confirmed.",
      "Tell your clinician about all supplements so your total vitamin D intake is accounted for.",
      "Combining a sensible amount of sun, fortified foods, and any advised supplement is the usual approach.",
    ],
  },
  {
    eyebrow: "Everyday habits",
    title: "Keeping vitamin D steady",
    body: "Small daily choices keep vitamin D more reliable than occasional effort. The aim is a mix of some sun, supportive foods, and any supplement your clinician advises.",
    tips: [
      "Build in short, regular daylight time outdoors where it is safe and comfortable.",
      "Include fortified or natural vitamin D foods in your weekly meals.",
      "Take any prescribed vitamin D at the same time as a meal containing some fat to aid absorption.",
      "Ask for your vitamin D to be checked at an antenatal visit if you are mostly indoors or cover up.",
    ],
  },
];

export default function VitaminDPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Bones & immunity</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Vitamin D & sunlight</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Vitamin D helps build your baby's bones and supports immunity. Despite plenty of sun, deficiency is common in India. Here is the science, the evidence, and sensible ways to keep levels up.</p>
          <div className="mt-5">
            <Badge>Evidence-informed · not medical advice</Badge>
          </div>
        </header>
      </SectionReveal>
      <div className="space-y-6">
        {SECTIONS.map((s, i) => (
          <SectionReveal key={s.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={s.eyebrow} title={s.title} />
              <p className="mt-3 text-sm leading-relaxed text-ink">{s.body}</p>
              <ul className="mt-4 space-y-2">
                {s.tips.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>
      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Any vitamin D dose should be confirmed with the clinician caring for you, ideally guided by a blood test.</p>
      </SectionReveal>
    </main>
  );
}
