import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Stress and your baby — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Start here",
    title: "Everyday stress will not harm your baby",
    body: "Let this be the first and most important message: the ordinary ups and downs of life, a tense day, an argument, a worry, are completely normal and do not damage your baby. Your body is built to handle them.",
    tips: [
      "Brief, passing stress is part of every pregnancy and your baby is well protected from it.",
      "The placenta acts as a partial buffer, softening the reach of your stress hormones to the baby.",
      "What researchers study is long-lasting, heavy stress, not the normal feelings of daily life.",
      "Worrying about worrying is its own trap; this page is here to reassure, not to alarm you.",
    ],
  },
  {
    eyebrow: "How it travels",
    title: "Cortisol and the placenta",
    body: "When you are stressed, your body makes cortisol. Some of it can reach the baby, but the placenta contains a special enzyme that breaks much of it down before it gets through.",
    tips: [
      "An enzyme in the placenta, called 11-beta-HSD2, converts much of your cortisol into an inactive form.",
      "This natural shield means only a fraction of your stress hormone actually reaches your baby.",
      "The system is designed for protection, which is why occasional stress causes no lasting harm.",
      "Very high, prolonged stress can partly overwhelm this buffer, which is why steady calm matters most.",
    ],
  },
  {
    eyebrow: "The big concept",
    title: "Fetal programming and DOHaD, explained",
    body: "Scientists use the idea of fetal programming, or DOHaD (Developmental Origins of Health and Disease), to describe how the womb environment can gently shape a baby's developing systems.",
    tips: [
      "The growing baby is sensitive to its environment and adapts to the conditions it senses.",
      "These adaptations are usually small nudges, not switches, and many can be balanced after birth.",
      "DOHaD looks at long-term patterns across large groups, not the destiny of any single child.",
      "Nutrition, sleep and warmth shape this environment too, so stress is only one piece of a larger picture.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Researchers have followed many pregnancies to understand how sustained, severe stress relates to children's development. The findings are nuanced and, on balance, reassuring.",
    tips: [
      "Studies suggest that chronic, severe maternal stress is associated with small differences in some outcomes.",
      "Research consistently indicates that ordinary, short-lived stress shows no such association.",
      "Trials of stress-reduction programs find that lowering maternal stress benefits both mother and baby.",
      "Evidence shows that strong support, from partners, family and care providers, buffers stress effectively.",
      "Importantly, no study suggests a mother should feel guilt; the focus is always on adding support, not blame.",
    ],
  },
  {
    eyebrow: "Chronic versus normal",
    title: "Knowing the difference that matters",
    body: "There is a real difference between the normal stress of life and the heavy, unrelenting kind that wears a person down for weeks. Recognising which you are facing helps you respond well.",
    tips: [
      "Normal stress comes and goes, eases with rest, and does not stop you living your day.",
      "Chronic stress is constant, exhausting, and often comes with poor sleep, low mood or persistent dread.",
      "Ongoing hardship, such as financial strain or an unsafe home, deserves real support, not silence.",
      "If stress feels heavy for more than two weeks, that is a signal to reach out, not to push through alone.",
    ],
  },
  {
    eyebrow: "Buffering stress",
    title: "Simple ways to soften the load",
    body: "You cannot remove every stressor, but you can build a cushion around them. Small, repeatable habits and good support do most of the protective work.",
    tips: [
      "Slow breathing, gentle walks and a few minutes of stillness each day calm the stress response.",
      "Lean on your partner and family; sharing chores and worries genuinely lowers the burden.",
      "Protect sleep where you can, since rest is one of the strongest natural stress buffers.",
      "Nourishing meals, sunlight and time outdoors all steady the body and mind.",
      "Saying no to extra obligations during pregnancy is a healthy, protective choice.",
    ],
  },
  {
    eyebrow: "The whole picture",
    title: "You are more than your stress level",
    body: "Your baby's development rests on many things, most of them positive and within reach. A loving, supported pregnancy gives a strong foundation that far outweighs ordinary stress.",
    tips: [
      "Warmth, connection and feeling cared for shape your baby's environment just as powerfully as calm.",
      "Good antenatal care catches and manages most concerns early and well.",
      "Joint families, when supportive, offer a natural network of help that protects mothers and babies.",
      "Focusing on what you can add, rather than what you fear, is both kinder and more effective.",
    ],
  },
  {
    eyebrow: "Reaching out",
    title: "When stress needs more than self-care",
    body: "Sometimes stress, anxiety or low mood grows beyond what rest and support can ease. Asking for help then is wise and brave, and effective care is available.",
    tips: [
      "Tell your doctor or midwife if stress, worry or sadness lasts beyond two weeks or feels overwhelming.",
      "In India, you can call the Tele-MANAS mental health helpline on 14416, free and confidential.",
      "Counselling and, when needed, safe treatments exist and can help you feel like yourself again.",
      "Getting support for your own wellbeing is one of the most caring things you can do for your baby.",
    ],
  },
];

export default function StressSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Calm reassurance</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Stress and your baby</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Everyday stress will not harm your baby; your body is built to buffer it. This page gently explains how stress hormones travel, what fetal programming really means, and simple ways to soften heavier stress, without any blame.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. If stress or low mood feels heavy or lasts beyond two weeks, please reach out or call Tele-MANAS on 14416. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
