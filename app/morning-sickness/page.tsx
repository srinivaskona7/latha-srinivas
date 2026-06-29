import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Morning Sickness — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "What & when",
    title: "What it is and when it happens",
    body: "Nausea and vomiting in early pregnancy are very common. They usually begin around week 6, peak between weeks 8 and 11, and often ease by around week 16 for most women. The name ’morning sickness’ is a misnomer — the queasiness can strike at any time of day or night, and for some it lasts all day.",
    tips: [
      "Most often shows up between week 6 and week 12, then settles for the majority by about week 16.",
      "It is not only a morning problem — many feel it in the afternoon, evening, or whenever the stomach is empty.",
      "Every pregnancy is different; some women have very little nausea and that is perfectly normal too.",
    ],
  },
  {
    eyebrow: "Why it happens",
    title: "Why you feel this way",
    body: "Doctors believe the surge in pregnancy hormones is the main reason. The hormone hCG (human chorionic gonadotropin) rises quickly in the first trimester, and rising oestrogen plus a heightened sense of smell can make everyday odours feel overwhelming. As hCG levels naturally settle later in pregnancy, the nausea usually fades.",
    tips: [
      "Higher hCG and changing hormone levels are the leading explanation for the queasiness.",
      "A sharper sense of smell in pregnancy can turn cooking, fuel, or perfume smells into strong triggers.",
      "An empty stomach and low blood sugar often make nausea worse, which is why timing of meals matters.",
    ],
  },
  {
    eyebrow: "Reassurance",
    title: "Is it harming the baby?",
    body: "Mild to moderate nausea and vomiting are common and, in most cases, are not harmful to your baby. Many women worry that being unable to eat much will starve the baby, but in early pregnancy the baby’s needs are small. Try to focus on keeping fluids down and eating whatever sits well, even if it is not a full balanced meal.",
    tips: [
      "Mild to moderate symptoms are a normal part of early pregnancy for many women.",
      "If you can keep some fluids and small amounts of food down, your baby is usually getting what it needs.",
      "What matters most early on is staying hydrated — full meals can wait until you feel better.",
    ],
  },
  {
    eyebrow: "Eating",
    title: "Eating to settle the stomach",
    body: "Small, frequent meals work better than large ones, because an empty stomach and a very full stomach can both trigger nausea. Keep dry, bland foods like plain biscuits or toast by your bed and nibble a little before getting up in the morning. Cold foods often smell less than hot, freshly cooked food, so they may be easier to face.",
    tips: [
      "Eat small amounts every two to three hours instead of three big meals.",
      "Keep dry, bland snacks (plain biscuits, toast, rusk) by the bed and eat a little before rising.",
      "Choose cold or room-temperature foods when strong cooking smells feel too much.",
      "Lean towards plain, starchy, low-spice foods when nausea is at its worst.",
    ],
  },
  {
    eyebrow: "Natural remedies",
    title: "Ginger, lemon and Indian home foods",
    body: "Ginger (adrak) has good evidence for easing pregnancy nausea — try ginger tea, a small piece of ginger candy, or grated ginger in warm water. The fresh scent of lemon (nimbu) can also help, whether sniffed or sipped in water. Many gentle Indian home foods are soothing and easy to keep down on a rough day.",
    tips: [
      "Adrak (ginger) as tea or candy is supported by evidence for reducing nausea.",
      "Nimbu (lemon) — smelling a cut lemon or sipping lemon water can calm a queasy stomach.",
      "Curd with plain rice (dahi-chawal) and khichdi are light, bland and easy to digest.",
      "Roasted jeera (cumin) water and saunf (fennel) after meals are gentle traditional settlers.",
    ],
  },
  {
    eyebrow: "Hydration",
    title: "Staying hydrated",
    body: "Vomiting and poor appetite can quickly lead to dehydration, so fluids matter even more than food in tough phases. Take frequent small sips rather than large gulps, which can feel heavy. Cool, mildly flavoured drinks are often easier to keep down than plain water when you feel sick.",
    tips: [
      "Sip small amounts often through the day instead of drinking a lot at once.",
      "Nimbu pani (lemon water) and coconut water (nariyal pani) are refreshing and replace lost fluids.",
      "If vomiting is frequent, an ORS solution helps restore salts and water — ask your doctor if unsure.",
      "Try sipping fluids between meals rather than with meals, which can feel filling.",
    ],
  },
  {
    eyebrow: "Triggers & vitamins",
    title: "Avoiding triggers and helpful vitamins",
    body: "Notice what sets off your nausea and gently steer around it — for many women that means strong-smelling, spicy, oily or deep-fried foods. Fresh air and rest help, so step away from the kitchen when cooking smells build up. Vitamin B6 (pyridoxine) is commonly recommended for pregnancy nausea, but always ask your doctor before starting any medicine or supplement.",
    tips: [
      "Avoid spicy, oily and deep-fried food and any specific smells that trigger your nausea.",
      "Vitamin B6 (pyridoxine) is often suggested for nausea — discuss it with your doctor before taking it.",
      "Take your prenatal vitamins at night with food, as they can feel harsh on an empty or queasy stomach.",
      "Rest when you can; tiredness tends to make nausea feel worse.",
    ],
  },
  {
    eyebrow: "When it is serious",
    title: "Warning signs: hyperemesis gravidarum",
    body: "A small number of women develop hyperemesis gravidarum — severe, persistent vomiting that goes beyond ordinary morning sickness. This can lead to dehydration and weight loss and needs medical care, sometimes including medicines or IV fluids in hospital. Do not try to manage these warning signs at home; contact your obstetrician promptly.",
    tips: [
      "You cannot keep any fluids or food down for a whole day, or vomit many times daily.",
      "You are losing weight, feel very weak, dizzy or faint.",
      "You pass very little urine, or urine is dark — signs of dehydration.",
      "See your doctor without delay; treatment may include anti-nausea medicines or IV fluids.",
    ],
  },
];

export default function MorningSicknessPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Easing the queasy days</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Morning sickness</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="peach">Usually weeks 6–12</Badge>
            <Badge tone="sage">Often eases by ~16 weeks</Badge>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Feeling queasy or being sick in early pregnancy is one of the most common experiences for expecting mothers in India. Here’s what is happening, simple home remedies that help, and the warning signs that mean it is time to see your doctor.
          </p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This page is for general education only and is not a substitute for medical advice. Please consult your obstetrician or doctor about your symptoms, any medicines or supplements, and your prenatal vitamins. In an emergency in India, dial 108 for ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
