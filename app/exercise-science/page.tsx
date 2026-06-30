import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "The science of movement — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Movement is medicine in pregnancy",
    body: "Regular, moderate activity is one of the most reliably helpful things you can do for a healthy pregnancy, and most women with uncomplicated pregnancies can keep moving safely.",
    tips: [
      "Moderate exercise supports a healthy weight gain pattern and steadier energy through the day.",
      "Staying active helps your body adapt to the growing load on your back, hips and pelvis.",
      "You do not need a gym; brisk walking in your colony or housing complex counts fully.",
      "If you were active before pregnancy, you can usually continue; if not, you can start gently now.",
      "Always get a green light from your obstetrician before beginning, especially with any complication.",
    ],
  },
  {
    eyebrow: "Mood and mind",
    title: "How activity lifts your mood",
    body: "Movement releases feel-good chemicals and gives a sense of routine and control, both of which matter a lot during the emotional ups and downs of pregnancy.",
    tips: [
      "Even a short daily walk can ease low mood, anxiety and the feeling of being overwhelmed.",
      "Outdoor movement in the cooler morning hours combines exercise with fresh air and daylight.",
      "Gentle activity can reduce pregnancy-related stress hormones over time.",
      "Walking with a friend or your partner adds social connection, which further protects mood.",
      "If sadness or anxiety feels heavy or constant, treat it as a health issue and tell your doctor.",
    ],
  },
  {
    eyebrow: "Blood sugar",
    title: "Lowering the risk of gestational diabetes",
    body: "Active muscles use up sugar from the blood, which helps your body manage insulin and keep blood glucose in a healthy range.",
    tips: [
      "Regular movement is linked to a lower chance of developing gestational diabetes.",
      "A 10 to 15 minute walk after meals helps blunt the rise in blood sugar.",
      "Given India's high background rate of diabetes, this benefit is especially valuable here.",
      "If you already have gestational diabetes, exercise is usually part of the management plan.",
      "Pair movement with balanced meals rather than using it to cancel out heavy, sugary food.",
    ],
  },
  {
    eyebrow: "Rest and recovery",
    title: "Better sleep and less discomfort",
    body: "Women who stay active often report deeper sleep and fewer aches, because movement keeps joints supple and muscles strong enough to carry the extra weight.",
    tips: [
      "Daytime activity can help you fall asleep faster and wake less at night.",
      "Strengthening your back and core muscles eases the common low-back and pelvic pain of pregnancy.",
      "Gentle stretching reduces leg cramps and that heavy, swollen feeling in the evenings.",
      "Avoid vigorous exercise right before bed, as it can leave you too alert to settle.",
      "Listen to genuine tiredness; rest days are part of a healthy routine, not a failure.",
    ],
  },
  {
    eyebrow: "For your baby",
    title: "What it may mean for the baby",
    body: "The clearest benefits of exercise are for the mother, but there are encouraging signs that an active pregnancy is good for the baby too.",
    tips: [
      "Studies suggest babies of active mothers may show a calmer, more efficient fetal heart rate pattern.",
      "Research links regular maternal exercise to a healthy birth weight rather than too high or too low.",
      "Some early research explores possible benefits for the developing brain, though this is still emerging.",
      "An active pregnancy is associated with smoother labour and recovery for many women.",
      "These are general patterns from research, not promises about any one pregnancy.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What the studies actually show",
    body: "Major health bodies recommend exercise in pregnancy because a large body of research consistently points the same way.",
    tips: [
      "Research links around 150 minutes of moderate activity a week to better pregnancy outcomes.",
      "Studies suggest active mothers have lower rates of gestational diabetes and excessive weight gain.",
      "Evidence indicates moderate exercise does not raise the risk of miscarriage or early birth in healthy pregnancies.",
      "Reviews of many trials find improved mood and fitness without harm to the baby.",
      "This is general evidence; your own plan should always be guided by your doctor.",
    ],
  },
  {
    eyebrow: "Doing it safely",
    title: "Safe guidelines to follow",
    body: "Aiming for roughly 150 minutes of moderate movement a week, spread across most days, is a widely recommended target for healthy pregnancies.",
    tips: [
      "Choose the talk test: you should be able to hold a conversation while you move.",
      "Walking, stationary cycling, swimming and gentle prenatal classes are good low-impact options.",
      "Warm up slowly, stay hydrated, and stop to rest whenever you need to.",
      "In India's heat, exercise in the early morning or evening and avoid the midday sun.",
      "Build up gradually rather than pushing hard on any single day.",
    ],
  },
  {
    eyebrow: "Caution",
    title: "What to avoid and when to stop",
    body: "A few activities and warning signs mean it is time to ease off or call your doctor straight away.",
    tips: [
      "Avoid contact sports, activities with a fall risk, and lying flat on your back for long periods later in pregnancy.",
      "Skip exercise in extreme heat and never push to the point of breathlessness or dizziness.",
      "Stop and seek help for vaginal bleeding, fluid leaking, regular painful contractions or chest pain.",
      "Stop for sudden severe headache, calf pain or swelling, or reduced baby movements.",
      "When in doubt, rest first and check with your doctor before continuing.",
    ],
  },
];

export default function ExerciseSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Body and baby</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">The science of movement</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Regular, moderate exercise is one of the safest and most powerful gifts you can give yourself and your baby. Here is what the evidence says about how movement helps, how much to aim for, and what to avoid.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. Always discuss your exercise plan with your obstetrician, especially if you have any pregnancy complication. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
