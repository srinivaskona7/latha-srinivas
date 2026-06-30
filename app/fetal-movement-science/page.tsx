import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "The science of baby's movements — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Movement is a sign of wellbeing",
    body: "Your baby's kicks, rolls, and wriggles are one of the clearest everyday signs that they are active and developing.",
    tips: [
      "Feeling regular movement is reassuring, because an active baby is usually a healthy baby.",
      "This page explains the science of why movements matter, and works alongside, not instead of, any kick-count tool you use.",
      "Movement is something only you can feel, which makes you an important observer of your baby's wellbeing.",
      "There is no single right number of movements; the focus is on what is usual for your own baby.",
      "Understanding the why behind movement helps you notice meaningful changes with calm rather than alarm.",
    ],
  },
  {
    eyebrow: "First flutters",
    title: "When and how movements begin",
    body: "Movements start subtly and grow stronger and more defined as your baby develops.",
    tips: [
      "Early movements, sometimes called quickening, often feel like flutters or bubbles before they become clear kicks.",
      "First-time mothers may notice movements a little later than those who have been pregnant before.",
      "As weeks pass, gentle flutters usually turn into stronger kicks, rolls, and stretches.",
      "The way movements feel can change as your baby grows and has less room to move.",
      "Getting to know your baby's early pattern helps you recognise it later in pregnancy.",
    ],
  },
  {
    eyebrow: "Patterns",
    title: "What kick patterns actually mean",
    body: "Babies, like all of us, have busier and quieter times, and learning your baby's rhythm matters more than counting to a fixed total.",
    tips: [
      "Babies have sleep and wake cycles in the womb, so quiet spells during their rest are normal.",
      "Many babies are more active after you eat, drink something cold, or lie down to rest.",
      "Your own busy day can make movements easier to miss, even when your baby is active.",
      "What matters is your baby's usual pattern, rather than matching anyone else's experience.",
      "A baby slowing down because they are running low on room is not the same as a real reduction in movement.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What research says about monitoring",
    body: "Scientists have studied how paying attention to fetal movements relates to wellbeing and outcomes.",
    tips: [
      "Studies suggest that a clear, lasting reduction or change in movement can sometimes be an early signal worth checking.",
      "Evidence indicates that mothers' awareness of their own baby's usual pattern is a valuable part of monitoring.",
      "Trials comparing strict counting methods have found mixed results, which is why awareness of change is emphasised over a fixed number.",
      "Research generally supports prompt contact with a clinician when movements clearly reduce, rather than waiting.",
      "These findings describe patterns across many pregnancies and never replace getting your own baby checked.",
    ],
  },
  {
    eyebrow: "Knowing your baby",
    title: "Getting to know your baby's normal",
    body: "There is no universal target; the most useful thing is a sense of what is normal for your baby.",
    tips: [
      "Notice the times of day your baby tends to be most active, and the kinds of movement you usually feel.",
      "If you want to focus, sit or lie quietly on your side at a time your baby is usually active.",
      "Avoid worrying about hitting a fixed count; trends and changes matter more than exact numbers.",
      "Trust your growing familiarity, since you come to know your own baby's rhythm better than anyone.",
      "Use any kick-count tool you like as a gentle aid, while paying attention to the overall pattern.",
    ],
  },
  {
    eyebrow: "Changes",
    title: "When a change in movement matters",
    body: "A clear, sustained change from your baby's usual pattern is the signal to take seriously.",
    tips: [
      "A noticeable reduction in movement, or movements that feel clearly different, is worth acting on, not waiting out.",
      "It is a myth that babies move less near the end of pregnancy; they should keep moving in their usual way right up to birth.",
      "Do not rely only on home tricks like sugary drinks to make a quiet baby move before seeking advice.",
      "If you are unsure whether a change is real, it is always reasonable to get checked rather than wonder.",
      "You can never be a nuisance for checking on your baby's movements.",
    ],
  },
  {
    eyebrow: "Contact your clinician",
    title: "Reach out promptly if movements reduce",
    body: "If your baby's movements reduce or clearly change, contacting your clinician straight away is the right thing to do.",
    tips: [
      "Call your midwife, doctor, or maternity unit promptly if you feel fewer or clearly different movements; do not wait until the next day.",
      "Reduced movement does not always mean something is wrong, but it should always be checked without delay.",
      "Trained staff can quickly listen to your baby's heartbeat and reassure you or act if needed.",
      "Reach out every time you are worried, even if you were checked recently and all was well.",
      "Save your maternity unit's number where you can find it instantly, day or night.",
    ],
  },
  {
    eyebrow: "Reassurance",
    title: "Awareness with calm, not anxiety",
    body: "Knowing the science is meant to make you feel capable and confident, not constantly on edge.",
    tips: [
      "The goal is gentle awareness of your baby's pattern, not anxious counting all day long.",
      "Most checks for reduced movement turn out reassuring, and getting checked is always worthwhile.",
      "Lean on your partner or family to help you stay calm and act if you notice a change.",
      "Trusting your instincts and seeking help early is exactly what good monitoring looks like.",
      "You and your care team are a team, working together to keep your baby well.",
    ],
  },
];

export default function FetalMovementSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">FEELING YOUR BABY MOVE</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">The science of baby's movements</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Your baby's movements are a window into their wellbeing, and knowing your own baby's usual pattern, rather than a fixed number, helps you notice a meaningful change and reach out promptly if movements reduce.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. If your baby's movements reduce or clearly change, contact your midwife, doctor, or maternity unit promptly, day or night, and do not wait. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
