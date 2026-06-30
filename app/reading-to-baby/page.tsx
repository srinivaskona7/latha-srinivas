import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Reading to your baby — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why read aloud",
    title: "Stories your baby can hear",
    body: "Reading aloud bathes your baby in the steady rhythm of your voice and the patterns of language, all wrapped in a calm, loving moment.",
    tips: [
      "Your baby hears the melody and beat of the words rather than their meaning, and that pattern is wonderful practice.",
      "Reading the same passages repeatedly gives your baby a familiar, recognisable rhythm to settle into.",
      "A regular reading time becomes a soothing ritual that calms you as much as your baby.",
      "Reading aloud is simply another loving way to share your voice during the day.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Babies recognise what was read before",
    body: "Studies suggest that babies show recognition after birth of stories and rhymes that were read aloud to them repeatedly during late pregnancy.",
    tips: [
      "In well-known research, mothers read the same passage daily in late pregnancy, and newborns later responded differently to it than to a new one.",
      "Trials have found babies can show calmer or more attentive responses to the familiar rhythm of a previously heard story.",
      "Research suggests it is the repeated, rhythmic pattern of the words, not the storyline, that the baby remembers.",
      "The evidence points to consistency and repetition as the keys, so the same few pieces read often work best.",
    ],
  },
  {
    eyebrow: "Building the habit",
    title: "A small daily ritual",
    body: "The benefit of reading comes from gentle repetition, so a short, regular habit matters far more than long or frequent sessions.",
    tips: [
      "Pick a calm, consistent time such as before sleep to read just a few minutes each day.",
      "Choose one or two favourite passages and return to them often so your baby grows familiar with them.",
      "Reading aloud now also builds your own habit, ready to continue easily after your baby arrives.",
      "If you miss a day, simply pick it back up, as there is no streak to keep.",
    ],
  },
  {
    eyebrow: "What to read",
    title: "Choosing the right material",
    body: "What you read matters far less than how rhythmically and warmly you read it, so pick whatever feels comfortable and pleasant.",
    tips: [
      "Rhyming verses, nursery rhymes, and poems carry strong, repeated rhythms that babies respond to well.",
      "Short children's stories with a sing-song flow are easy and enjoyable to repeat.",
      "Reading in your mother tongue exposes your baby early to the sounds of the language of home.",
      "Even a favourite book, magazine, or shloka read aloud works, since your baby is listening to the rhythm of your voice.",
    ],
  },
  {
    eyebrow: "Reading together",
    title: "A shared family moment",
    body: "Reading aloud is a lovely way for the whole family to bond with the baby and to grow familiar voices around them.",
    tips: [
      "Invite your partner to take turns reading so your baby comes to know their voice too.",
      "In a joint family, grandparents and siblings can share rhymes and tales as part of daily togetherness.",
      "Hearing several loving voices read helps your baby feel surrounded by the family awaiting them.",
      "Turning reading into a shared moment makes it easier and more joyful to keep up.",
    ],
  },
  {
    eyebrow: "Indian context",
    title: "Rhymes, shlokas, and stories of home",
    body: "India's rich tradition of verses, rhymes, and devotional words gives you a deep well to draw from when reading aloud.",
    tips: [
      "Traditional rhymes and lullabies in your regional language carry both rhythm and the culture of your family.",
      "Gently chanted shlokas or simple devotional verses fit the calm spirit of Garbha Sanskar.",
      "Folk tales and grandmother's stories told aloud connect your baby to the voices and heritage of home.",
      "Mixing rhymes in more than one language is perfectly fine and reflects many Indian homes.",
    ],
  },
  {
    eyebrow: "Gentle perspective",
    title: "Closeness, not a curriculum",
    body: "Reading to your baby is about warmth and connection, not early academics, so let it stay a relaxed and happy ritual.",
    tips: [
      "There is no need to worry about your baby understanding anything, as the calm rhythm is the gift.",
      "Let reading be something you look forward to rather than a task on a list.",
      "The bonding and the soothing routine you build now carry on beautifully into your baby's first months.",
      "Trust that a few quiet minutes of your voice is already meaningful to your baby.",
    ],
  },
];

export default function ReadingToBabyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Stories & rhythm</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Reading to your baby</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Babies can recognise stories and rhymes read to them in the womb. Here is what the science says about prenatal reading, how to build a gentle daily habit, and what to read.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education and emotional wellbeing only and is not medical advice. For any concerns about your pregnancy or your baby's development, please speak with your doctor.</p>
      </SectionReveal>
    </main>
  );
}
