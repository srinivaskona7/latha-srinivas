import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Music & your baby — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "When hearing begins",
    title: "Your baby's ears come alive",
    body: "Your baby's hearing develops gradually, with the structures maturing through the second trimester and clear responses to outside sound emerging around the middle of pregnancy.",
    tips: [
      "The inner ear and hearing pathways take shape roughly between weeks 18 and 25, so the second half of pregnancy is when sound truly reaches your baby.",
      "By the third trimester, babies often startle, still, or shift in response to a sudden or familiar sound.",
      "Sound travels to your baby through your body, so it arrives softened and muffled, like music heard from another room.",
      "Your own voice and heartbeat are the constant background score of your baby's world long before birth.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Babies hear, and they remember",
    body: "Studies suggest that babies can recognise melodies and sounds they were exposed to repeatedly in the womb, showing calmer responses to them after birth.",
    tips: [
      "Trials have found that newborns react differently to a tune played often during pregnancy compared with a brand-new one, hinting at prenatal memory.",
      "Research suggests these sound memories can last for some weeks after birth, fading if the melody is not heard again.",
      "Studies indicate babies tend to settle more easily to music that is steady, gentle, and repeated rather than loud or chaotic.",
      "The evidence points to familiarity, not complexity, as the soothing ingredient, so a simple repeated tune works beautifully.",
    ],
  },
  {
    eyebrow: "The big myth",
    title: "The truth about the Mozart effect",
    body: "The popular idea that playing classical music makes a baby smarter is not well supported, and it is gently worth letting go of any pressure it creates.",
    tips: [
      "The original Mozart studies looked at short-term task performance in adults, not at lasting intelligence in babies.",
      "There is no strong evidence that any genre of music raises a baby's IQ, so you do not need a special playlist to do right by your child.",
      "What music does offer is real and valuable, including bonding, soothing, and a calmer mother, which matter in their own right.",
      "Choose music you genuinely enjoy rather than music you think you are supposed to play.",
    ],
  },
  {
    eyebrow: "Soothing power",
    title: "Music as a calming ritual",
    body: "Music can lower stress for you and create a predictable, comforting rhythm that your baby comes to associate with safety.",
    tips: [
      "Playing the same gentle piece at the same time each day builds a soothing routine your baby can learn to expect.",
      "When you relax to music, your body chemistry shifts, and that calmer state is shared with your baby.",
      "After birth, a melody your baby heard often in the womb can become a powerful tool to settle crying or ease sleep.",
      "Keep the volume soft and comfortable for you, as your baby does not need it loud to hear it.",
    ],
  },
  {
    eyebrow: "Indian tradition",
    title: "Ragas and the rhythm of the day",
    body: "Indian classical music offers ragas tied to moods and times of day, giving you a rich and time-honoured way to bring calm sound into pregnancy.",
    tips: [
      "Gentle morning ragas such as Bhairav or Ahir Bhairav are traditionally felt to be uplifting and serene to begin the day.",
      "Soothing evening and night ragas like Yaman or Bhimpalasi suit winding down and resting together.",
      "Devotional bhajans and the steady hum of a tanpura or harmonium create a warm, repetitive sound your baby can grow familiar with.",
      "These traditions echo the spirit of Garbha Sanskar, which values calm, beautiful sound as nourishment for the growing baby.",
    ],
  },
  {
    eyebrow: "Lullabies",
    title: "Cradle songs across generations",
    body: "Lullabies are among the oldest forms of music made for babies, and their slow, repetitive shape is exactly what tiny ears find comforting.",
    tips: [
      "Regional lullabies such as a Telugu jola pata or a Hindi lori carry your family's language and warmth straight to your baby.",
      "The slow tempo and gentle repetition of a lullaby naturally match a restful heartbeat and breathing.",
      "Singing a lullaby yourself adds the comfort of your own voice, which your baby already knows and loves.",
      "Choosing one or two lullabies to sing often means your baby will recognise them as familiar friends after birth.",
    ],
  },
  {
    eyebrow: "Practical ways",
    title: "Bringing music into your day",
    body: "You do not need anything special to share music with your baby, only a little intention woven into ordinary moments.",
    tips: [
      "Play soft music during quiet times like resting, bathing, or before sleep so it becomes part of a calming pattern.",
      "Hum or sing while you go about daily tasks, as your living voice is the most meaningful music of all.",
      "Invite your partner to play or sing too, so your baby grows familiar with more than one loving voice.",
      "Notice what your baby seems to respond to with movement, and gently return to those sounds.",
      "Keep it joyful and pressure-free, treating music as connection rather than a task to complete.",
    ],
  },
];

export default function MusicAndBabyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Sound & connection</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Music & your baby</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Long before birth, your baby is listening. Here is what the science says about fetal hearing, musical memory, and how gentle melodies, ragas, and lullabies can soothe and connect you both.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education and emotional wellbeing only and is not medical advice. For any concerns about your pregnancy or your baby's hearing, please speak with your doctor.</p>
      </SectionReveal>
    </main>
  );
}
