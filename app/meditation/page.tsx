import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Meditation in pregnancy — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "A calmer mind is a gift to your baby",
    body: "Meditation is simply training your attention to rest, gently and on purpose, in the present moment. Practised even a few minutes a day in pregnancy, it can soften the stress response that you and your baby share.",
    tips: [
      "Your baby cannot meditate, but your baby feels the effects of your calm through your hormones, heartbeat and breathing.",
      "You do not need a guru, a special posture or perfect silence; a quiet corner and a few honest minutes are enough.",
      "Think of it as rest for the nervous system, the way an afternoon nap is rest for the body.",
      "Consistency matters far more than duration; five calm minutes daily beats one long session once a week.",
    ],
  },
  {
    eyebrow: "The hormone story",
    title: "Lowering cortisol, the stress hormone",
    body: "When you are tense, your body releases cortisol and adrenaline. Meditation activates the body's rest-and-digest system, which helps these stress hormones settle back to healthy levels.",
    tips: [
      "Cortisol is normal and necessary in small amounts; the aim is to avoid it staying high all day, every day.",
      "Slow, attentive breathing during meditation signals safety to the brain, which eases the cortisol surge.",
      "Lower maternal stress hormones are linked with a steadier internal environment for the developing baby.",
      "Many mothers notice that a regular practice makes everyday irritations feel smaller and easier to let go.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Across many trials, mindfulness and meditation programs in pregnancy have been studied for their effect on mood, stress and even birth. The findings are consistent and reassuring.",
    tips: [
      "Randomised trials suggest meditation-based programs reduce symptoms of anxiety and depression during pregnancy.",
      "Studies indicate that regular practice can lower perceived stress and improve overall emotional wellbeing.",
      "Some research links lower maternal stress with healthier blood pressure and a reduced chance of certain complications.",
      "Reviews of multiple studies find these benefits hold across different cultures and meditation styles.",
      "Importantly, no study suggests gentle meditation is harmful; the evidence points only toward benefit and calm.",
    ],
  },
  {
    eyebrow: "Blood pressure",
    title: "Gentle support for a healthy heart and vessels",
    body: "High blood pressure is one of the things doctors watch carefully in pregnancy. A relaxed nervous system tends to keep blood pressure in a healthier range.",
    tips: [
      "Slow breathing during meditation widens blood vessels slightly and can ease pressure on the circulation.",
      "A daily practice is a helpful companion to, never a replacement for, your regular antenatal checkups.",
      "If your doctor has flagged high blood pressure, keep all appointments and take prescribed medicines exactly as advised.",
      "Tracking how calm you feel can be a gentle early signal to slow down and rest more.",
    ],
  },
  {
    eyebrow: "Birth outcomes",
    title: "Walking into labour a little more at ease",
    body: "Fear and tension can make labour feel harder. Mothers who practise meditation often report feeling more prepared and less overwhelmed when the day arrives.",
    tips: [
      "Research suggests women who practise mindfulness report less fear of childbirth and more confidence.",
      "A calm, familiar breathing rhythm becomes an anchor you can return to during contractions.",
      "Feeling in control of your breath can reduce the sense of panic that sometimes amplifies pain.",
      "These are supports for your experience, not guarantees about how any individual birth will unfold.",
    ],
  },
  {
    eyebrow: "Your baby's temperament",
    title: "A steadier start for your little one",
    body: "The environment a baby grows in, shaped partly by your stress levels, may influence how settled they are after birth. A calmer pregnancy is associated with calmer outcomes.",
    tips: [
      "Studies hint that lower maternal stress is linked with babies who are, on average, easier to soothe.",
      "This is a gentle tendency across groups, not a promise about your specific baby; every child is unique.",
      "Your warmth, touch and voice after birth matter just as much as anything during pregnancy.",
      "Please never blame yourself for a fussy baby; many things shape temperament, most of them outside your control.",
    ],
  },
  {
    eyebrow: "How to begin",
    title: "A simple practice you can start today",
    body: "You do not need any equipment. The goal is not to empty your mind, but to notice when it wanders and gently bring it back, again and again, with kindness.",
    tips: [
      "Sit comfortably or lie on your left side, close your eyes, and breathe slowly for five minutes.",
      "Silently count your breaths from one to ten, then start again; when you lose count, simply begin once more.",
      "Try a body scan: move your attention slowly from your toes to your head, softening each part as you go.",
      "Place a hand on your bump and breathe with the intention of sending calm to your baby.",
      "Free guided audio in Hindi, Tamil, Telugu and English is widely available; choose a voice that soothes you.",
    ],
  },
  {
    eyebrow: "Fitting it into Indian life",
    title: "Small windows in a full day",
    body: "Between work, household duties and a joint family, finding quiet time can feel impossible. The trick is to attach meditation to moments that already exist in your day.",
    tips: [
      "Try a few minutes after your morning bath, or in the early calm before the household wakes.",
      "The cooler hours of early morning and evening are often the most peaceful, especially in hot weather.",
      "Tell your family you are taking five minutes for the baby's wellbeing; most elders will happily protect that time.",
      "If a quiet room is hard to find, even sitting on the terrace or near a window with your eyes closed works.",
      "A short practice while diffusing a calming scent or after evening prayers can blend naturally into routine.",
    ],
  },
  {
    eyebrow: "When to reach out",
    title: "Meditation is a help, not a substitute for care",
    body: "Meditation supports your wellbeing, but it does not replace medical care or treatment for anxiety and depression. Knowing when to ask for more is a sign of strength.",
    tips: [
      "If low mood, constant worry or sleeplessness lasts more than two weeks, speak to your doctor without shame.",
      "Persistent sadness, panic or frightening thoughts deserve professional support, and effective help exists.",
      "In India, you can call the Tele-MANAS mental health helpline on 14416 for free, confidential support.",
      "Combine meditation with good food, gentle movement, sleep and the company of people who lift you up.",
    ],
  },
];

export default function MeditationPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Mind and body</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Meditation in pregnancy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">A few quiet minutes each day can ease your stress, support your blood pressure and create a calmer environment for your growing baby. Here is what meditation does, why it helps, and how to begin gently.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. If you feel persistently low or anxious, reach out to a professional or call Tele-MANAS on 14416. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
