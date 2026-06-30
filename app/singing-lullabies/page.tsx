import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Singing & lullabies — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why sing",
    title: "Singing is a gift to you both",
    body: "When you sing, you share your living voice with your baby and calm your own body at the same time, making it one of the simplest ways to bond.",
    tips: [
      "Your singing voice carries through your body to your baby, clear and close in a way recordings cannot match.",
      "Singing slows your breathing and eases tension, and that calmer state is shared with your baby.",
      "Repeating the same songs builds a familiar, comforting pattern your baby comes to know.",
      "You do not need to sing well, as your baby is drawn to your voice, not your skill.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Less stress, and a melody remembered",
    body: "Studies suggest that singing can lower a mother's stress and that babies recognise sung melodies they heard often in the womb.",
    tips: [
      "Research suggests singing is linked with reduced anxiety and a greater sense of calm and wellbeing in expectant mothers.",
      "Trials have found that babies respond with recognition to a song their mother sang repeatedly during pregnancy.",
      "Studies indicate that after birth, a familiar sung melody can soothe a baby more effectively than an unfamiliar one.",
      "The evidence points to the mother's own voice as especially powerful, beyond the tune alone.",
    ],
  },
  {
    eyebrow: "Live beats recorded",
    title: "Why your voice wins",
    body: "A live song from you reaches your baby with a warmth and presence that a recording, however beautiful, cannot fully recreate.",
    tips: [
      "Your singing travels through your body directly to your baby, while recordings reach them only through the air outside.",
      "Your voice is the one your baby already knows best, so singing it yourself adds a layer of familiar comfort.",
      "Singing lets you respond to your baby and your own mood in the moment, unlike a fixed recording.",
      "Recordings are a fine extra, but they work best alongside your own voice rather than in place of it.",
    ],
  },
  {
    eyebrow: "Indian tradition",
    title: "The lullaby heritage of India",
    body: "India has a deep and loving tradition of cradle songs in every language, giving you a rich source of melodies to make your own.",
    tips: [
      "A Telugu jola pata, a Hindi lori, a Tamil thaalattu, or a Bengali ghum-parani all carry generations of warmth.",
      "These songs are usually slow and repetitive, which is exactly what tiny ears find most soothing.",
      "Singing in your mother tongue weaves your baby into the language and culture of your family.",
      "Gentle bhajans and devotional songs also fit the calm, nurturing spirit of Garbha Sanskar.",
    ],
  },
  {
    eyebrow: "Choosing songs",
    title: "Pick a few and keep them close",
    body: "A small handful of songs sung often will mean far more to your baby than a large, ever-changing list.",
    tips: [
      "Choose one or two lullabies and a favourite song or two that you genuinely love to sing.",
      "Slow, gentle melodies suit settling and sleep better than fast or loud ones.",
      "Songs from your own childhood carry extra warmth and are easy to remember and repeat.",
      "Returning to the same songs lets your baby recognise them as familiar after birth.",
    ],
  },
  {
    eyebrow: "Making it a habit",
    title: "Weaving song into your day",
    body: "Singing fits naturally into ordinary moments, so it is easy to make it a gentle daily ritual.",
    tips: [
      "Sing softly while resting, bathing, or before sleep so it becomes part of a calming routine.",
      "Hum your chosen tune during everyday tasks so your baby hears it often.",
      "Invite your partner to sing too, so your baby grows familiar with more than one loving voice.",
      "A minute of song done daily means more than a long session done only now and then.",
    ],
  },
  {
    eyebrow: "Gentle perspective",
    title: "Joy over perfection",
    body: "Singing to your baby is about love and connection, not performance, so let go of any worry about how it sounds.",
    tips: [
      "There is no audience and no judgement, only you and your baby sharing a quiet moment.",
      "If you feel shy, sing softly to yourself, as even a whisper of a tune reaches your baby.",
      "Let singing be something that lifts your mood rather than another task to manage.",
      "Trust that your voice, exactly as it is, is already deeply comforting to your baby.",
    ],
  },
];

export default function SingingLullabiesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Voice & comfort</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Singing & lullabies</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Singing calms you and reaches your baby with a warmth no recording can match. Here is what the science says about singing in pregnancy, India's rich lullaby tradition, and how to make song a daily ritual.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education and emotional wellbeing only and is not medical advice. For any concerns about your pregnancy or your wellbeing, please speak with your doctor.</p>
      </SectionReveal>
    </main>
  );
}
