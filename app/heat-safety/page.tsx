import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Heat & temperature safety — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Your core temperature is shared with baby",
    body: "A growing baby cannot cool itself and relies entirely on your body to stay at a safe temperature, so a sustained rise in your core temperature reaches your baby too.",
    tips: [
      "Your blood volume and metabolism rise in pregnancy, so you naturally feel warmer and may sweat more than before.",
      "Baby has no way to sweat or move away from heat, so keeping your own temperature steady is the simplest protection you can offer.",
      "Brief warmth, like a warm room or a short walk, is very different from a deliberately high heat source held for a long time.",
      "Listening to your body, feeling dizzy, flushed, or unusually tired, is a reliable early signal to cool down.",
      "Staying comfortable, not cold, is the goal; there is no need to fear normal daily warmth.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What studies say about overheating in early pregnancy",
    body: "Researchers have looked closely at high fever and external heat sources during the first trimester, when the baby's brain and spine are forming.",
    tips: [
      "Studies suggest that a sustained high fever in early pregnancy may be associated with a higher chance of certain developmental concerns, which is why fevers are taken seriously.",
      "Evidence indicates the first trimester is the most sensitive window, because the neural tube that becomes the brain and spinal cord is closing in those early weeks.",
      "Reviews of hot-tub and sauna use have found that deliberately raising core temperature for prolonged periods is the concern, rather than ordinary daily warmth.",
      "Trials and observational work consistently point to the same practical message, which is to treat fever promptly and avoid intentionally overheating the body.",
      "The research describes patterns across groups of people and never predicts any single pregnancy, so it is a guide for caution, not a cause for alarm.",
    ],
  },
  {
    eyebrow: "Fever",
    title: "Treating a fever calmly and promptly",
    body: "A fever is your body responding to infection, and bringing it down gently is usually straightforward with the right guidance.",
    tips: [
      "Tell your doctor about any fever in pregnancy so the cause can be checked and the safest way to lower it can be advised.",
      "Paracetamol is commonly used in pregnancy to manage fever, but always confirm the dose and timing with your clinician first.",
      "Rest, sips of cool water, and a lukewarm sponge can help your body settle while you arrange medical advice.",
      "Avoid reaching for any new medicine on your own, since some over-the-counter options are not advised in pregnancy.",
      "A fever with a rash, severe headache, or breathing trouble needs same-day medical attention.",
    ],
  },
  {
    eyebrow: "Hot soaks",
    title: "Hot baths, saunas, steam, and heated yoga",
    body: "These deliberately raise your core temperature for an extended time, which is the situation the cautious guidance is aimed at.",
    tips: [
      "Choose warm rather than hot baths, and step out before you feel flushed or your heart begins to race.",
      "Saunas, steam rooms, and very hot tubs are best avoided or kept brief, because they push core temperature up quickly.",
      "Hot or heated yoga classes, sometimes called hot flow, deliberately raise room temperature and are worth swapping for a gentle room-temperature class.",
      "If you exercise, prefer cooler parts of the day and stop if you feel overheated rather than pushing through.",
      "A short warm shower is a gentle, comfortable alternative when you simply want to relax tired muscles.",
    ],
  },
  {
    eyebrow: "India in summer",
    title: "Coping with the Indian summer and humidity",
    body: "In much of India the summer combines high heat with humidity, which makes it harder for the body to cool itself through sweat.",
    tips: [
      "Plan errands, walks, and travel for the early morning or after sunset, and rest indoors during the hottest afternoon hours.",
      "Humid heat slows down sweat evaporation, so a fan, damp cloth, or cool shower can help more than waiting it out.",
      "Power cuts can make a warm room hotter quickly, so keep a hand fan, water, and a shaded spot in mind as a backup.",
      "If you travel by crowded bus or train, carry water and step into shade or air-conditioning whenever you can.",
      "During festivals or long temple visits in peak heat, pace yourself and find a cool, shaded place to sit and rest.",
    ],
  },
  {
    eyebrow: "Hydration",
    title: "Staying hydrated as your first cooling tool",
    body: "Good hydration helps your body regulate temperature and supports the extra blood volume pregnancy needs.",
    tips: [
      "Sip water through the day rather than waiting until you feel thirsty, since thirst arrives after you are already low.",
      "Dark or strong-smelling urine is a simple sign that you need more fluids, while pale urine suggests you are doing well.",
      "Buttermilk, coconut water, lemon water, and light dals add fluid and salts that plain water alone does not.",
      "Limit very sugary cold drinks, which can leave you thirstier, and prefer cooling home options instead.",
      "Carry a water bottle whenever you leave home, especially in the heat or on long journeys.",
    ],
  },
  {
    eyebrow: "Cooling habits",
    title: "Simple ways to keep cool through the day",
    body: "Small everyday choices add up to a steadier, more comfortable core temperature.",
    tips: [
      "Wear loose, light, breathable cotton clothing in pale colours that reflect rather than absorb heat.",
      "Keep a cool damp cloth for your neck and wrists, where cooling the blood close to the skin helps the whole body.",
      "Use fans, cross-ventilation, and shaded curtains to keep your resting space comfortable without overcooling.",
      "Cool your feet in a basin of water in the evening, which many find soothing for swelling and heat together.",
      "Rest lying on your side in the coolest room when the day peaks, giving your body a chance to settle.",
    ],
  },
  {
    eyebrow: "When to call",
    title: "Signs that need medical attention",
    body: "Most warmth is harmless, but a few signals mean it is time to reach out rather than wait.",
    tips: [
      "Call your doctor for any fever, or if you feel faint, very dizzy, or stop sweating despite the heat.",
      "Heat exhaustion, with nausea, headache, and clammy skin, should be treated by cooling down and seeking advice.",
      "Reduced baby movements, severe headache, or vision changes alongside heat need prompt medical review.",
      "Keep your clinic's number and your maternity hospital's details handy so you are not searching in a hurry.",
      "Trust your instinct; if something feels wrong in the heat, it is always reasonable to get checked.",
    ],
  },
];

export default function HeatSafetyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">STAYING COOL TOGETHER</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Heat & temperature safety</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Your baby depends on your body to stay at a safe temperature, so keeping cool and treating fevers promptly is a gentle, practical way to protect both of you, especially through an Indian summer.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Always follow the guidance of your own doctor or midwife about fever, medicines, and staying cool. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
