import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Tablets & Supplements — Baby Journey" };

type Tag = "Routine in India" | "Often advised" | "If needed";

interface Tablet {
  name: string;
  icon: string;
  tag: Tag;
  /** What it is, in one line. */
  what: string;
  /** Why it is given / what it does. */
  uses: string[];
  /** When it is typically taken (guidance only — dose is set by your doctor). */
  timing: string;
  /** Food sources of the same nutrient. */
  foods: string;
  /** A practical caution or tip. */
  note: string;
}

/**
 * The main tablets and supplements used in pregnancy in India, with their uses.
 * Educational only — every tablet, brand and dose must be confirmed with the
 * clinician caring for you. Do not start, stop or change anything on your own.
 */
const TABLETS: Tablet[] = [
  {
    name: "Folic acid",
    icon: "🌿",
    tag: "Routine in India",
    what: "A B-vitamin (B9) tablet, ideally started before pregnancy and through the first trimester.",
    uses: [
      "Helps prevent serious birth defects of the brain and spine (neural tube defects).",
      "Supports the rapid cell division of very early development.",
      "Works best when started before conception and continued to about 12 weeks.",
    ],
    timing: "Commonly 400 mcg daily from pre-pregnancy through the first trimester; higher doses only if your doctor advises.",
    foods: "Dark leafy greens (palak, methi), beans and dals, citrus fruit, fortified cereals.",
    note: "If you have had a baby with a neural tube defect or take certain medicines, your doctor may prescribe a much higher dose.",
  },
  {
    name: "Iron + Folic Acid (IFA)",
    icon: "🩸",
    tag: "Routine in India",
    what: "Combined iron and folic acid tablets given through India's national programme.",
    uses: [
      "Prevents and treats iron-deficiency anaemia, which is very common in India.",
      "Supports the extra blood volume of pregnancy and the baby's oxygen supply.",
      "Helps reduce the risk of low birth weight and preterm birth linked to anaemia.",
    ],
    timing: "Usually started after the first trimester (about 14 weeks) and continued daily; taken on an empty stomach or as advised.",
    foods: "Green leafy vegetables, jaggery (gur), dates, beans, ragi, and lean meat or liver if you eat them.",
    note: "Take with vitamin-C foods (amla, lemon, guava) to boost absorption, and avoid tea or coffee within an hour of the tablet. May cause dark stools or mild constipation.",
  },
  {
    name: "Calcium (with vitamin D)",
    icon: "🦴",
    tag: "Routine in India",
    what: "Calcium tablets, often combined with vitamin D, given from the second trimester.",
    uses: [
      "Builds the baby's bones and teeth and protects the mother's bone stores.",
      "Helps lower the risk of high blood pressure and pre-eclampsia.",
      "Can ease leg cramps for some women.",
    ],
    timing: "Commonly from about 14 weeks onward; taken at a different time of day from iron, since the two compete for absorption.",
    foods: "Milk, curd, paneer, ragi, sesame (til), almonds and green leafy vegetables.",
    note: "Do not take calcium and iron tablets together — space them a few hours apart for best absorption.",
  },
  {
    name: "Vitamin D3",
    icon: "☀️",
    tag: "Often advised",
    what: "A vitamin-D supplement, sometimes given as a weekly or monthly higher dose sachet.",
    uses: [
      "Helps the body absorb calcium for the baby's bones and the mother's.",
      "Supports immunity and muscle function.",
      "Corrects the deficiency that is very common in India despite the sunshine.",
    ],
    timing: "Daily, weekly or as a periodic higher dose, exactly as your doctor prescribes after assessing your levels.",
    foods: "Sunlight on the skin, fortified milk, egg yolk and fatty fish.",
    note: "Vitamin D is fat-soluble and can build up, so never take high doses without medical advice.",
  },
  {
    name: "DHA / Omega-3",
    icon: "🐟",
    tag: "Often advised",
    what: "An omega-3 fatty-acid supplement (fish-oil or vegetarian algal DHA).",
    uses: [
      "Supports the baby's brain and eye (retina) development, especially in the third trimester.",
      "May modestly lower the risk of early preterm birth.",
      "Useful when the diet has little oily fish.",
    ],
    timing: "Often taken from the second trimester onward, as advised; vegetarian algal-oil versions are available.",
    foods: "Oily fish (where eaten), walnuts, flax seeds (alsi), chia and algal-oil supplements.",
    note: "Choose a reputable, purified product to avoid contaminants, and confirm the type and dose with your doctor.",
  },
  {
    name: "Vitamin B12",
    icon: "🧬",
    tag: "If needed",
    what: "A vitamin-B12 supplement, particularly important for vegetarian and vegan diets.",
    uses: [
      "Works with folate to build healthy blood and the baby's nervous system.",
      "Helps prevent a type of anaemia and supports energy.",
      "Often low in purely vegetarian Indian diets.",
    ],
    timing: "Daily or periodic, as prescribed after checking your levels.",
    foods: "Dairy and eggs; fortified foods; B12 is scarce in plant foods, so supplements are often needed for vegetarians.",
    note: "Tell your doctor if you are vegetarian or vegan so your B12 can be checked.",
  },
  {
    name: "Albendazole (deworming)",
    icon: "💊",
    tag: "Routine in India",
    what: "A single-dose deworming tablet given as part of routine antenatal care in India.",
    uses: [
      "Clears intestinal worm infections that can worsen anaemia.",
      "Helps the body hold on to iron and nutrients.",
      "Part of the standard ANC package after the first trimester.",
    ],
    timing: "Usually a single dose after the first trimester, given by your ANC provider.",
    foods: "Not a nutrient — this is a medicine; pair with good hygiene and clean water to prevent reinfection.",
    note: "Avoided in the first trimester; only taken when given or advised by your health provider.",
  },
  {
    name: "Antacids (for heartburn)",
    icon: "🫗",
    tag: "If needed",
    what: "Acidity-relieving tablets or syrups sometimes used for pregnancy heartburn.",
    uses: [
      "Ease the burning and reflux that are common as the bump grows.",
      "Provide short-term comfort when diet and posture changes are not enough.",
    ],
    timing: "Only when needed and only the type your doctor approves; many ordinary acidity medicines are not suitable in pregnancy.",
    foods: "Small frequent meals, avoiding spicy/fried food and not lying down right after eating help naturally.",
    note: "Some antacids interfere with iron absorption — ask your doctor how to space them.",
  },
];

const TAG_TONE: Record<Tag, "peach" | "sage" | "plum"> = {
  "Routine in India": "peach",
  "Often advised": "sage",
  "If needed": "plum",
};

const SAFETY: string[] = [
  "Never start, stop or change a tablet or its dose on your own — always ask the clinician caring for you.",
  "Take supplements with food or water as advised; report side effects like severe nausea, constipation or rash.",
  "Avoid common over-the-counter painkillers (such as ibuprofen) unless your doctor approves them.",
  "Keep all tablets out of children's reach, and check expiry dates.",
  "Tell every doctor and pharmacist that you are pregnant before taking any new medicine.",
];

export default function TabletsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            What the tablets are for
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Tablets &amp; supplements
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A clear guide to the main tablets and supplements used in pregnancy in India and what
            each one is for. This explains the purpose of each — it is not a prescription. Your
            doctor decides which you need, the brand, and the exact dose.
          </p>
          <div className="mt-5">
            <Badge>Education only &middot; not medical advice</Badge>
          </div>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <GlassCard className="border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="peach">Read first</Badge>
            <h2 className="font-display text-xl font-semibold tracking-tight text-terracotta sm:text-2xl">
              Taking tablets safely
            </h2>
          </div>
          <ul className="mt-4 space-y-2">
            {SAFETY.map((s) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <div className="mt-6 space-y-5">
        {TABLETS.map((t, i) => (
          <SectionReveal key={t.name} delay={i * 0.05}>
            <GlassCard>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="text-2xl">{t.icon}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-plum">
                    {t.name}
                  </h3>
                </div>
                <Badge tone={TAG_TONE[t.tag]}>{t.tag}</Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{t.what}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-peach">
                What it is for
              </p>
              <ul className="mt-2 space-y-2">
                {t.uses.map((u) => (
                  <li key={u} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-linen/60 p-4">
                  <p className="text-xs font-semibold text-plum">When it is taken</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{t.timing}</p>
                </div>
                <div className="rounded-3xl bg-linen/60 p-4">
                  <p className="text-xs font-semibold text-plum">Also found in food</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{t.foods}</p>
                </div>
              </div>

              <div className="mt-3 rounded-3xl border border-terracotta/20 bg-peach/10 p-4">
                <p className="text-sm leading-relaxed text-ink">
                  <span className="font-semibold text-terracotta">Good to know — </span>
                  {t.note}
                </p>
              </div>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This page is for general education only and is not medical advice or a prescription.
          Doses and choices vary for every woman — always follow the obstetrician and care team
          looking after you. In India, dial 108 for emergencies.
        </p>
      </SectionReveal>
    </main>
  );
}
