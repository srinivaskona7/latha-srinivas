import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Prenatal bonding & attachment — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "What it means",
    title: "Bonding begins before birth",
    body: "The emotional connection a mother and father form with their baby during pregnancy is known as antenatal or maternal-fetal attachment, and it is a real and meaningful relationship.",
    tips: [
      "Antenatal attachment describes the growing sense of love, care, and connection you feel toward your baby while pregnant.",
      "It often deepens as pregnancy progresses, especially once you feel your baby move.",
      "This bond is not automatic for everyone, and it can grow gradually, which is completely normal.",
      "Both mothers and fathers can form their own meaningful attachment to the baby before birth.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Why the prenatal bond matters",
    body: "Studies suggest that a stronger prenatal bond is linked with healthier behaviours in pregnancy and a smoother emotional connection with the baby after birth.",
    tips: [
      "Research suggests mothers with a stronger antenatal bond are more likely to look after their own health during pregnancy.",
      "Studies indicate that prenatal attachment is associated with more responsive, warm caregiving in the early months after birth.",
      "Trials and reviews link a positive prenatal bond with better maternal emotional wellbeing.",
      "The evidence points to bonding as something that can be gently nurtured, not a fixed trait you either have or lack.",
    ],
  },
  {
    eyebrow: "Ways to connect",
    title: "Simple acts that build the bond",
    body: "Small, regular gestures of connection are what build attachment, and they need nothing more than a little time and attention.",
    tips: [
      "Place a hand on your bump and notice your baby's movements, responding gently when you feel them.",
      "Talk, sing, or read to your baby so your voice becomes a familiar comfort.",
      "Picture your baby and imagine meeting them, as this kind of warm daydreaming strengthens the bond.",
      "Mark milestones like scans and first kicks as moments to pause and connect.",
    ],
  },
  {
    eyebrow: "Garbha Sanskar",
    title: "An ancient view of prenatal connection",
    body: "The Indian tradition of Garbha Sanskar reflects a long-held belief that a mother's calm, loving state nurtures the baby in the womb.",
    tips: [
      "Garbha Sanskar encourages calm thoughts, gentle music, good company, and positive surroundings during pregnancy.",
      "Its core idea, that a mother's emotional state matters for her baby, resonates with the modern science of bonding and wellbeing.",
      "Practices like soothing music, reading, and prayer offer natural, culturally familiar ways to connect with your baby.",
      "You can draw on these traditions in whatever way feels meaningful and comfortable to you.",
    ],
  },
  {
    eyebrow: "When bonding feels hard",
    title: "It is okay if it takes time",
    body: "Not every parent feels an instant bond, and a slower or quieter connection during pregnancy does not mean anything is wrong.",
    tips: [
      "Tiredness, worry, a difficult pregnancy, or past loss can all make bonding feel harder, and that is understandable.",
      "Attachment can grow steadily over weeks and months rather than arriving all at once.",
      "Gentle, regular moments of connection often help the bond deepen naturally over time.",
      "If you feel persistently low, numb, or disconnected, it is worth sharing this with your doctor for support.",
    ],
  },
  {
    eyebrow: "Calm and wellbeing",
    title: "Looking after you helps the bond",
    body: "Your own emotional wellbeing and the bond with your baby are closely linked, so caring for yourself is also caring for the connection.",
    tips: [
      "Rest, gentle movement, and time to relax help create the calm in which bonding flourishes.",
      "Lowering everyday stress where you can supports both your wellbeing and your sense of connection.",
      "Sharing your feelings with people you trust eases the emotional load of pregnancy.",
      "Treat moments of connection with your baby as nourishment for you, not as another duty.",
    ],
  },
  {
    eyebrow: "A shared journey",
    title: "Bringing in partner and family",
    body: "Bonding is richer when it is shared, and involving your partner and family helps build the warm circle your baby will be born into.",
    tips: [
      "Encourage your partner to talk to and feel the baby's movements so their own bond can grow.",
      "In a joint family, including grandparents and siblings creates many loving connections around the baby.",
      "Sharing scans, kicks, and quiet moments together strengthens both the family and the bond with the baby.",
      "A supported, connected mother finds it easier to nurture her own attachment to her baby.",
    ],
  },
];

export default function PrenatalBondingPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Love & attachment</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Prenatal bonding & attachment</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">The bond you form with your baby before birth is a real relationship that matters for you both. Here is what the science says about antenatal attachment, how it relates to Garbha Sanskar, and gentle ways to nurture it.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education and emotional wellbeing only and is not medical advice. If you feel persistently low, anxious, or disconnected during pregnancy, please speak with your doctor.</p>
      </SectionReveal>
    </main>
  );
}
