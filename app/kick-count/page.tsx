import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Kick Counting (DFMC) — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Your baby’s kicks are a daily wellbeing check",
    body: "Counting movements is one of the simplest, cheapest and most powerful ways to keep an eye on your baby between visits. A baby who is well and getting enough oxygen tends to move in a familiar pattern. A clear, lasting drop in movement can be an early warning that something needs attention — so paying attention costs nothing and can make a real difference.",
    tips: [
      "It is free, needs no device, and you can do it anywhere — at home, at work or while resting.",
      "Movements include kicks, rolls, flutters, jabs and turns; even hiccups are reassuring activity.",
      "You are the world expert on your own baby’s pattern — trust what you notice.",
      "Regular counting helps you spot a change quickly, when it matters most.",
    ],
  },
  {
    eyebrow: "When to start",
    title: "Begin around 28 weeks (earlier if high-risk)",
    body: "Most mothers can feel a settled, recognisable pattern of movement by about 28 weeks, which is when formal counting is usually recommended. If your pregnancy is high-risk — for example with diabetes, high blood pressure, growth concerns or a previous loss — your doctor may ask you to start a little earlier, around 26 weeks.",
    tips: [
      "First flutters (quickening) are often felt around 18–22 weeks, earlier in later pregnancies.",
      "By the third trimester the pattern becomes clearer and easier to count.",
      "If you have a high-risk pregnancy, ask your obstetrician when to begin and which method to use.",
      "Once you start, try to count at roughly the same time each day for an easy comparison.",
    ],
  },
  {
    eyebrow: "How to count — method 1",
    title: "Cardiff ’count to ten’",
    body: "This popular method simply asks you to count how long it takes to feel ten movements. Settle somewhere quiet, focus on your baby and note the time of the first movement, then the time you reach the tenth. In a healthy baby this usually happens well within about two hours.",
    tips: [
      "Note the start time, then count distinct movements until you reach ten.",
      "Most mothers feel ten movements within an hour or so when the baby is active.",
      "Reaching ten comfortably within around two hours is reassuring.",
      "If two hours pass and you have not felt ten movements, contact your clinician the same day.",
    ],
  },
  {
    eyebrow: "How to count — method 2",
    title: "DFMC / Sadovsky after-meals method",
    body: "The Daily Fetal Movement Count (Sadovsky) approach counts movements in short sessions after meals, when babies are often most active. A common pattern is to count in three sessions across the day, or to aim for at least ten movements over a twelve-hour stretch.",
    tips: [
      "Count for about an hour after each main meal — breakfast, lunch and dinner.",
      "A reassuring guide is feeling several movements in each session, or ten or more across twelve hours.",
      "Keep a small chart or note on your phone so trends are easy to see.",
      "Compare today with your own usual count rather than with any other mother.",
    ],
  },
  {
    eyebrow: "Best time and position",
    title: "Count when baby is active — lie on your left",
    body: "Babies have rest and active cycles, just like us, so pick a time when yours is usually lively. Many mothers feel the most movement after eating or in the evening. Lying down on your left side, fully focused on the baby, makes the movements easier to feel and to count.",
    tips: [
      "After a meal or a cold drink is a good moment, as babies often stir then.",
      "Lie on your left side; this also improves blood flow to the baby.",
      "Put distractions away and concentrate only on the movements you feel.",
      "A baby sleeping briefly is normal — a gentle nudge, sound or snack can wake them.",
    ],
  },
  {
    eyebrow: "What is normal",
    title: "Every baby has its own pattern",
    body: "There is no single ’correct’ number of kicks that fits all babies. What matters is your baby’s individual rhythm — the times of day they are busy and the strength of their movements. Once you know that pattern, a clear change away from it is the signal worth acting on.",
    tips: [
      "Some babies are most active late at night, others mid-morning — learn yours.",
      "There is no fixed daily total that suits every baby; consistency is the key.",
      "A change from your baby’s normal pattern matters more than any single count.",
      "If you are ever unsure or worried, it is always right to ask — never feel you are wasting anyone’s time.",
    ],
  },
  {
    eyebrow: "Busting a common myth",
    title: "Babies do NOT move less as birth nears",
    body: "It is a widespread but dangerous myth that babies slow down or run out of room near term. The character of movements may change as the baby grows — more rolls and stretches, fewer sharp jabs — but the frequency should not drop. A genuine reduction in movement near your due date should never be dismissed as ’normal for the end’.",
    tips: [
      "Movements change in feel, not in how often they happen.",
      "’The baby has no room’ is a myth — healthy babies keep moving right up to labour.",
      "Never wait it out assuming reduced movement is part of late pregnancy.",
      "Reduced movement at any stage deserves a same-day check.",
    ],
  },
];

export default function KickCountPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Your baby’s daily hello</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Counting kicks</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Every flutter, roll and kick is your baby saying hello. Counting these movements — the Daily Fetal Movement Count, or DFMC — is a free, simple habit that helps you keep watch over your baby’s wellbeing between check-ups. Learn when to start, how to count, and the one safety rule that matters most.</p>
        </header>
      </SectionReveal>
      <SectionReveal delay={0.04}>
        <GlassCard className="border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="peach">Act today</Badge>
            <h2 className="font-display text-xl font-semibold tracking-tight text-terracotta sm:text-2xl">Fewer than 10 movements in 2 hours?</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink">If you feel fewer than ten movements in two hours, or notice a clear drop from your baby’s usual pattern, contact your clinician or go to the maternity unit the same day — do not wait until tomorrow. In India you can call the 108 ambulance service. It is always better to be checked and reassured than to wait.</p>
        </GlassCard>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for medical care. Trust your instincts and your obstetrician — if something feels different about your baby’s movements, get checked the same day. In India you can call the 108 ambulance service in an emergency.</p>
      </SectionReveal>
    </main>
  );
}
