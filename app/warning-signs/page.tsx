import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Warning Signs — Baby Journey" };

interface Group {
  eyebrow: string;
  title: string;
  body: string;
  signs: string[];
}

const GROUPS: Group[] = [
  {
    eyebrow: "Any trimester",
    title: "Bleeding & severe pain",
    body: "Vaginal bleeding and severe abdominal pain are never &apos;normal&apos; in pregnancy. They can signal miscarriage, ectopic pregnancy, a low-lying placenta (placenta praevia), or placental separation (abruption). Do not wait to see if it settles — these need a doctor straight away.",
    signs: [
      "Vaginal bleeding — any amount, bright red or with clots, with or without pain.",
      "Severe or constant abdominal pain, or a tense, hard, painful tummy.",
      "Bleeding with dizziness, fainting or shoulder-tip pain (possible ectopic — call 108).",
    ],
  },
  {
    eyebrow: "High blood pressure",
    title: "Pre-eclampsia warning signs",
    body: "Pre-eclampsia (high blood pressure in pregnancy) is a leading cause of maternal death in India and often has no early symptoms — which is why every antenatal BP check matters. After about 20 weeks, the signs below are an emergency and need same-day assessment.",
    signs: [
      "Severe or persistent headache that does not ease with rest or paracetamol.",
      "Blurred vision, flashing lights or spots in front of the eyes.",
      "Sudden swelling of the face, hands or feet, or rapid weight gain.",
      "Pain just below the ribs on the right side, with nausea or vomiting.",
    ],
  },
  {
    eyebrow: "After ~28 weeks",
    title: "Reduced baby movements",
    body: "From around 28 weeks, get to know your baby&apos;s usual pattern of movements. A clear drop, or movements stopping, can be the first sign the baby is unwell. Do a Daily Fetal Movement Count (DFMC): lie on your side and count kicks.",
    signs: [
      "Fewer than 10 movements in 2 hours after a meal — contact your doctor or go to the facility.",
      "A noticeable reduction from your baby&apos;s normal pattern.",
      "No movements at all — this is an emergency, go now.",
      "Never wait until the next day to &apos;see&apos; — it is always better to get checked.",
    ],
  },
  {
    eyebrow: "Waters & infection",
    title: "Leaking fluid, fever & infection",
    body: "A gush or steady trickle of fluid may mean your waters have broken (PROM), which raises the risk of infection and early labour. Fever, painful urination or foul-smelling discharge can point to an infection that needs prompt treatment.",
    signs: [
      "A sudden gush or continuous leaking of clear or pinkish fluid (suspected PROM).",
      "Fever above 38°C / 100.4°F, with chills or feeling very unwell.",
      "Burning or pain when passing urine, or passing urine very often.",
      "Greenish or foul-smelling vaginal discharge.",
    ],
  },
  {
    eyebrow: "Eating & itching",
    title: "Severe vomiting & itching",
    body: "Some nausea is common early on, but vomiting that stops you keeping any food or fluids down (hyperemesis) can lead to dangerous dehydration. Persistent severe itching, especially on the palms and soles, may be obstetric cholestasis — a liver condition needing monitoring.",
    signs: [
      "Vomiting so much you cannot keep fluids down, with very little or dark urine.",
      "Dizziness, a racing heart or feeling faint from dehydration.",
      "Intense itching, particularly on the palms and soles, often worse at night.",
      "Itching with dark urine, pale stools or yellowing of the eyes/skin.",
    ],
  },
  {
    eyebrow: "Before 37 weeks",
    title: "Signs of preterm labour",
    body: "Labour that starts before 37 weeks needs urgent care — early treatment can protect the baby and sometimes delay delivery. Call your obstetrician or go to the facility if you notice any of these signs early.",
    signs: [
      "Regular tightenings or cramps, like period pain, that keep coming.",
      "Low, dull backache or a feeling of pressure in the pelvis.",
      "A sudden increase or change in vaginal discharge, or a &apos;show&apos; of mucus.",
      "Leaking fluid or bleeding before 37 weeks.",
    ],
  },
  {
    eyebrow: "Whole body",
    title: "Clots, breathing & anaemia",
    body: "Pregnancy increases the risk of blood clots (DVT). Anaemia is very common in India and severe anaemia is dangerous. Breathlessness or chest pain should always be taken seriously. Get urgent care for the signs below.",
    signs: [
      "Pain, swelling, redness or warmth in one calf or leg (possible DVT).",
      "Sudden breathlessness, chest pain or coughing up blood (call 108 — possible clot on the lung).",
      "Extreme tiredness, breathlessness on mild effort, very pale skin or palpitations (severe anaemia).",
      "Feeling your heart pound or beat very fast at rest.",
    ],
  },
];

const EMERGENCY: string[] = [
  "Heavy vaginal bleeding, or bleeding with severe pain.",
  "A fit, seizure or convulsion (eclampsia) — call 108 immediately.",
  "Severe headache with blurred vision and swelling (pre-eclampsia).",
  "Sudden, severe breathlessness or chest pain.",
  "No baby movements, or a sudden drop after 28 weeks.",
  "High fever with shivering, confusion or feeling very unwell.",
  "Fainting, collapse, or being unable to stay awake.",
  "A gush of fluid or bleeding before 37 weeks with strong cramps.",
];

export default function WarningSignsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Trust your instincts</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Warning signs</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Most pregnancies are healthy, but knowing the danger signs can save your life and your baby&apos;s. If
            something feels wrong, trust your instincts and seek help early — it is always better to be checked and
            reassured. In India, dial <span className="font-semibold text-terracotta">108</span> for a free ambulance,
            or go straight to the nearest hospital or call your obstetrician.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <GlassCard className="border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="peach">Emergency</Badge>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-terracotta sm:text-3xl">Call 108 or go to hospital now if you have</h2>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {EMERGENCY.map((s) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <div className="mt-6 space-y-6">
        {GROUPS.map((g, i) => (
          <SectionReveal key={g.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={g.eyebrow} title={g.title} />
              <p className="mt-3 text-sm leading-relaxed text-ink">{g.body}</p>
              <ul className="mt-4 space-y-2">
                {g.signs.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          When in doubt, always seek care — never wait at home hoping a worrying sign will pass. This page is for
          education only and is not a substitute for professional medical advice, diagnosis or treatment. In India,
          dial 108 for a free ambulance in an emergency, or contact your obstetrician or nearest facility right away.
        </p>
      </SectionReveal>
    </main>
  );
}
