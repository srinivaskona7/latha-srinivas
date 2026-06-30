import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Mindfulness — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "What it is",
    title: "Being here, in this moment, on purpose",
    body: "Mindfulness is the simple skill of paying friendly attention to what is happening right now, without rushing to fix or judge it. In pregnancy, it means meeting each day, and each sensation, as it actually is.",
    tips: [
      "It is different from meditation: meditation is a formal practice, mindfulness is a way of being you can carry all day.",
      "You are being mindful whenever you fully feel the warm water of a bath or really taste your morning chai.",
      "The mind naturally drifts to worries about the future; mindfulness gently returns you to the present.",
      "There is no goal to achieve and nothing to get right; you only notice, and begin again.",
    ],
  },
  {
    eyebrow: "Why pregnancy",
    title: "A mind that races, a body that changes",
    body: "Pregnancy brings a flood of new sensations and unknowns, which can feed anxious thoughts. Mindfulness helps you observe these thoughts as passing weather rather than facts that demand action.",
    tips: [
      "Worry often lives in imagined futures; noticing this lets you set the worry down and return to today.",
      "Mindful awareness of your body helps you respond to its signals for rest, food and movement.",
      "It builds a steadier relationship with discomfort, which is useful preparation for labour.",
      "Even one mindful breath before reacting can change how a stressful moment unfolds.",
    ],
  },
  {
    eyebrow: "Structured programs",
    title: "MBSR and MBCP, made for this season",
    body: "Two well-known programs bring mindfulness to expectant parents. MBSR (Mindfulness-Based Stress Reduction) is general, while MBCP (Mindfulness-Based Childbirth and Parenting) is shaped specifically for pregnancy and birth.",
    tips: [
      "MBSR is a classic eight-week course teaching breath awareness, body scans and gentle movement.",
      "MBCP adapts these tools for labour, birth and early parenting, often practised alongside a partner.",
      "Both can be learned in person or through reputable online courses and apps in several Indian languages.",
      "You do not need a formal course to begin; the daily habit of attention is the heart of it all.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Mindfulness programs in pregnancy have been studied in many trials, with attention to stress, mood and how women feel about birth itself. The pattern of findings is encouraging.",
    tips: [
      "Trials have found that mindfulness training reduces perceived stress during pregnancy.",
      "Research indicates lower symptoms of anxiety and depression in mothers who complete these programs.",
      "Studies suggest mindfulness can ease fear of childbirth, helping women approach labour with more confidence.",
      "Some evidence points to better sleep and greater overall wellbeing as additional benefits.",
      "Reviews note that these are gentle, low-risk practices that complement standard antenatal care.",
    ],
  },
  {
    eyebrow: "Fear of birth",
    title: "Turning toward labour with less dread",
    body: "A strong fear of childbirth is common and very human. Mindfulness does not pretend labour is painless; instead it helps you stay present with intense sensation rather than fighting it.",
    tips: [
      "Practising with mild discomfort, like holding ice, can teach the mind to stay steady during contractions.",
      "Naming a feeling, such as 'this is fear', often loosens its grip on you.",
      "A familiar breathing rhythm becomes a reliable anchor when sensations rise.",
      "Lower fear is linked in studies with a calmer experience of labour and birth.",
    ],
  },
  {
    eyebrow: "Everyday practice",
    title: "Mindful moments woven through the day",
    body: "You do not need extra time, only a shift in attention to things you already do. These small anchors build the habit far more reliably than waiting for a free hour.",
    tips: [
      "Take three slow, fully felt breaths before you get out of bed each morning.",
      "Eat one meal a day slowly, noticing colour, smell and taste, the way you might savour a festival sweet.",
      "When walking, feel your feet meeting the ground instead of replaying your to-do list.",
      "Pause at a doorway, breathe once, and notice how your body feels before stepping through.",
      "Place a hand on your bump and simply feel it rise and fall for a minute.",
    ],
  },
  {
    eyebrow: "In a joint family",
    title: "Staying centred amid a busy household",
    body: "A full home of relatives, opinions and noise can pull your attention in many directions. Mindfulness helps you stay grounded without needing everyone to go quiet.",
    tips: [
      "You can be mindful in a crowded kitchen simply by feeling your breath while you work.",
      "When advice feels overwhelming, take one breath before responding rather than reacting at once.",
      "Early morning, before the household stirs, is often the easiest window for a few quiet minutes.",
      "Invite a supportive family member to practise with you; shared calm is contagious.",
    ],
  },
  {
    eyebrow: "Gentle reminders",
    title: "Kindness is part of the practice",
    body: "Mindfulness is meant to soften your inner voice, not add another task to feel guilty about. If you forget for days, you simply notice and begin again, without self-criticism.",
    tips: [
      "Missing a day is not failure; returning is the whole practice, and it is always available.",
      "Mindfulness supports your wellbeing but does not replace medical care for mood or anxiety.",
      "If worry or sadness lingers beyond two weeks, please speak to your doctor or call Tele-MANAS on 14416.",
      "Be as patient with yourself as you hope to be with your baby.",
    ],
  },
];

export default function MindfulnessPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Present-moment awareness</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Mindfulness</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Mindfulness is the gentle art of being fully here, right now. Practised through pregnancy, it can ease stress, soften the fear of birth and help you meet each day with a calmer, kinder mind.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. If you feel persistently anxious or low, reach out to a professional or call Tele-MANAS on 14416. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
