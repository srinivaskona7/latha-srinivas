import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Air quality & your baby — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "The air you breathe reaches your baby",
    body: "When you breathe in polluted air, tiny particles can affect your blood and circulation, which is how clean air becomes part of caring for your baby.",
    tips: [
      "Fine particles in polluted air can enter your bloodstream and affect how it carries oxygen.",
      "Healthy circulation and oxygen flow support your baby's growth.",
      "You cannot control all the air around you, but small steps can lower your exposure.",
      "Clean air is one part of a healthy pregnancy alongside food, rest and check-ups.",
      "This page is about reducing risk gently, not about adding worry.",
    ],
  },
  {
    eyebrow: "India's context",
    title: "Living with high pollution",
    body: "Many Indian cities see high air pollution, especially in winter and around festivals, so awareness here is practical rather than alarmist.",
    tips: [
      "Air quality often worsens in winter months and during crop-burning and festival seasons.",
      "Check the daily Air Quality Index, or AQI, on a trusted weather or government app.",
      "On high-AQI days, plan indoor activities and limit long spells outside.",
      "Traffic-heavy roads and busy junctions usually have the worst air, so avoid lingering there.",
      "Treat very high AQI days the way you would treat extreme heat, with extra care.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What research suggests about birth outcomes",
    body: "Scientists have studied how air pollution during pregnancy relates to the health of newborns.",
    tips: [
      "Studies suggest higher exposure to fine-particle pollution is linked with lower average birth weight.",
      "Research links heavy air pollution in pregnancy with a somewhat higher chance of early birth.",
      "Evidence indicates these are population-level trends, not certainties for any single pregnancy.",
      "Studies note that reducing exposure, where possible, is associated with better outcomes.",
      "These findings guide sensible caution; your own care should be guided by your doctor.",
    ],
  },
  {
    eyebrow: "Indoor air",
    title: "Cleaning the air at home",
    body: "Much of your day is spent indoors, so making your home air cleaner is one of the most useful steps you can take.",
    tips: [
      "On high-pollution days, keep windows closed during the worst hours, often early morning and night.",
      "On cleaner days, open windows to let fresh air move through the home.",
      "A good air purifier with a HEPA filter can lower indoor particle levels in your main rooms.",
      "Keep the home dust-free with damp cleaning rather than dry sweeping that stirs up dust.",
      "Avoid burning incense, mosquito coils and candles in closed rooms where you spend long hours.",
    ],
  },
  {
    eyebrow: "No indoor smoke",
    title: "Keeping smoke out of the home",
    body: "Smoke from cooking fires and tobacco is a major and avoidable source of harmful indoor air.",
    tips: [
      "Cooking on a chulha or open biomass fire fills the home with harmful smoke; prefer LPG or clean stoves.",
      "If a chulha must be used, cook in a well-ventilated area and keep the pregnant mother away from the smoke.",
      "Make your home and car completely smoke-free; ask others not to smoke near you.",
      "Avoid second-hand tobacco smoke, which is harmful to both you and your baby.",
      "Ensure kitchens have a working exhaust or open window to clear cooking fumes.",
    ],
  },
  {
    eyebrow: "Going out",
    title: "Masks, timing and travel",
    body: "When you do step out on polluted days, a few habits can reduce how much bad air you breathe.",
    tips: [
      "A well-fitting N95 or FFP2 mask can filter many fine particles when worn correctly outdoors.",
      "Schedule errands and walks for times when the AQI is lower, often late morning to afternoon.",
      "Keep car windows up and use recirculate mode when driving through heavy traffic.",
      "Choose quieter, greener routes away from busy main roads when you can.",
      "On very high pollution days, shift exercise indoors rather than walking outside.",
    ],
  },
  {
    eyebrow: "Greenery",
    title: "Plants and greener surroundings",
    body: "Greenery will not clean a whole city's air, but it adds small benefits and a sense of calm.",
    tips: [
      "Living near parks and tree-lined areas is associated with somewhat better local air and mood.",
      "A few indoor plants add a pleasant, calming touch to your living space.",
      "Do not rely on houseplants alone to clean indoor air; a purifier does far more.",
      "Choose home walks in greener, less-trafficked lanes when the air allows.",
      "Support and enjoy community green spaces as a gentle, shared resource.",
    ],
  },
  {
    eyebrow: "Stay reassured",
    title: "Balance and when to ask",
    body: "Clean-air habits are about lowering risk steadily, not about fear, and your doctor is there for any worry.",
    tips: [
      "Do your reasonable best on air quality and let go of what you cannot control.",
      "Keep up your regular antenatal check-ups, where your baby's growth is monitored.",
      "Mention any breathing trouble, persistent cough or chest tightness to your doctor.",
      "If you have asthma or a lung condition, ask your doctor for a pregnancy plan.",
      "Seek urgent care for severe breathlessness, chest pain or reduced baby movements.",
    ],
  },
];

export default function AirQualityPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Healthy environment</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Air quality & your baby</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">The air you breathe is part of the world your baby grows in. With India's pollution levels, a few calm, practical habits, from clean cooking fuel to checking the AQI, can meaningfully lower your exposure without adding worry.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. If you have a lung condition or any breathing concern, discuss a plan with your doctor. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
