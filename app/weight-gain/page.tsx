import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Healthy Weight Gain — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const BMI_RANGES: { cat: string; range: string }[] = [
  { cat: "Underweight (BMI under 18.5)", range: "12.5–18 kg total" },
  { cat: "Normal (BMI 18.5–24.9)", range: "11.5–16 kg total" },
  { cat: "Overweight (BMI 25–29.9)", range: "7–11.5 kg total" },
  { cat: "Obese (BMI 30 or more)", range: "5–9 kg total" },
];

const SECTIONS: Section[] = [
  {
    eyebrow: "Why your starting point matters",
    title: "Your pre-pregnancy BMI sets the target",
    body: "There is no single 'right' number on the scale. How much weight is healthy to gain depends mostly on your Body Mass Index (BMI) before you conceived. The Institute of Medicine (IOM) ranges above are the most widely used worldwide, but for Indian and other Asian women the cut-offs are lower — so the same kilogram can mean a different category here.",
    tips: [
      "BMI is your pre-pregnancy weight in kilograms divided by your height in metres squared.",
      "WHO Asia-Pacific and ICMR define overweight as BMI 23 or above and obese as 25 or above for Indians.",
      "If you used Indian cut-offs you may land one category higher than the IOM table — discuss your personal target with your obstetrician.",
      "Twins or triplets need more total gain; your clinician will give you a separate range.",
    ],
  },
  {
    eyebrow: "The shape of the curve",
    title: "How gain is spread across the trimesters",
    body: "Weight does not arrive evenly. In the first trimester many women gain very little (often only 0.5–2 kg total), and nausea may even cause a small dip — that is usually fine. Most of the gain happens steadily in the second and third trimesters.",
    tips: [
      "First trimester: little gain is expected and normal.",
      "Second and third trimesters: aim for roughly 0.3–0.5 kg per week if you started at a normal BMI.",
      "Underweight mothers may target the upper end of the weekly range; overweight mothers the lower end.",
      "A sudden jump of more than 2–3 kg in a week needs a clinic call — it can signal fluid retention.",
    ],
  },
  {
    eyebrow: "It is not all baby",
    title: "Where the extra weight actually goes",
    body: "It is reassuring to know the kilograms are doing real work. Only a portion is the baby — the rest is the support system your body builds to grow and feed your child, most of which you lose in the weeks after birth.",
    tips: [
      "Baby: roughly 3–3.5 kg at term.",
      "Placenta, amniotic fluid and the enlarged uterus: around 2–2.5 kg together.",
      "Extra blood and body fluid: about 2.5–3 kg.",
      "Larger breasts and maternal fat stores for breastfeeding: the remaining few kilograms.",
    ],
  },
  {
    eyebrow: "When the scale reads low",
    title: "Risks of gaining too little",
    body: "Gaining below your recommended range, especially common when nausea, poverty of diet or anaemia are present, can affect your baby's growth. In India low birth weight and maternal anaemia are widespread, so adequate, good-quality gain matters.",
    tips: [
      "Too little gain raises the chance of low birth weight and a small-for-dates baby.",
      "It is linked to preterm (early) birth.",
      "Underlying anaemia is common in India — get your haemoglobin checked and take iron-folic acid as advised.",
      "If you cannot keep food down for days, see your clinician rather than simply eating less.",
    ],
  },
  {
    eyebrow: "When the scale climbs fast",
    title: "Risks of gaining too much",
    body: "Gaining well above your range carries its own risks for both of you, and can be harder to lose afterwards. The goal is steady, nourishing gain — not the old idea of 'eating for two'.",
    tips: [
      "Excess gain raises the risk of gestational diabetes (GDM) and high blood pressure or pre-eclampsia.",
      "It increases the chance of a very large baby, making delivery harder and a caesarean more likely.",
      "It is linked to retaining weight long after birth.",
      "Warning signs like severe headache, swelling of face or hands, or blurred vision need urgent review.",
    ],
  },
  {
    eyebrow: "Eating well, not eating double",
    title: "Healthy gain on a balanced Indian diet",
    body: "Pregnancy adds only a modest energy need — roughly an extra 350 kcal a day in later pregnancy, about one extra wholesome meal or a couple of nourishing snacks. Quality beats quantity: build plates around familiar, affordable Indian foods.",
    tips: [
      "Include dals, rajma, chana, eggs, milk, curd and paneer for protein.",
      "Choose whole grains — jowar, bajra, ragi, brown rice and whole-wheat roti — over refined flour.",
      "Eat plenty of seasonal vegetables and fruit, plus green leafy sabzi for iron and folate.",
      "Add iron, calcium and folic acid through diet and the supplements your clinic provides.",
      "Limit deep-fried snacks, mithai and sugary drinks — they add weight without nourishment.",
    ],
  },
  {
    eyebrow: "Staying on track",
    title: "Simple ways to track your gain",
    body: "You do not need to weigh yourself daily — that only causes worry. A consistent, occasional check plotted against your target range tells you everything you need.",
    tips: [
      "Weigh once a week or fortnight, same scale, similar clothes, same time of day.",
      "Note your weight in your antenatal card and review the trend with your doctor at each visit.",
      "Focus on the overall direction, not day-to-day wobbles from food or fluid.",
      "Pair sensible eating with gentle activity like walking, if your clinician approves.",
    ],
  },
];

export default function WeightGainPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Grow at a healthy pace</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Healthy weight gain</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Putting on the right amount of weight in pregnancy helps your baby grow well and keeps you healthier
            through delivery and beyond. There’s no single ideal number — your healthy range depends on your
            weight before you conceived, and Indian women are guided by slightly different BMI cut-offs. Here’s
            what a steady, well-nourished pattern of gain looks like.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <GlassCard>
          <SectionTitle eyebrow="By pre-pregnancy BMI" title="Recommended total gain" />
          <ul className="mt-4 space-y-2">
            {BMI_RANGES.map((r) => (
              <li key={r.cat} className="flex justify-between gap-3 text-sm leading-relaxed text-ink">
                <span className="text-plum font-medium">{r.cat}</span>
                <span className="text-muted">{r.range}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">Note: Asian/Indian BMI cut-offs are lower (overweight ≥23) — confirm your target with your clinician.</p>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <div className="mt-6">
          <GlassCard>
            <SectionTitle eyebrow="Carrying more than one" title="Expecting twins?" />
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Twin pregnancies need noticeably more total gain to support two babies. Typical guidance for a
              normal-BMI mother carrying twins is around 17–25 kg, with adjusted ranges for other BMI
              categories. Your obstetrician will set your personal target.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Twins gain more</Badge>
              <Badge>Individualised target</Badge>
            </div>
          </GlassCard>
        </div>
      </SectionReveal>

      <div className="mt-6 space-y-6">
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          For education only and not a substitute for medical advice. Your healthy weight-gain target should be
          individualised by your obstetrician based on your BMI, health and pregnancy. In a medical emergency in
          India, dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
