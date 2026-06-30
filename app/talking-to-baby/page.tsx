import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Talking to your baby — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The womb is loud",
    title: "Your voice reaches your baby",
    body: "Your voice carries through your body to your baby with a clarity that outside voices cannot match, making it the most familiar sound in their world.",
    tips: [
      "Because your voice travels through your bones and tissues, it reaches your baby richer and clearer than sounds from outside.",
      "From around the middle of pregnancy, your baby's hearing is developed enough to take in the rhythm and melody of speech.",
      "Your baby cannot understand words, but they soak up the patterns, pitch, and music of your language.",
      "Every conversation, hum, and bedtime word is gentle practice for the listening your baby will do after birth.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Newborns already know your voice",
    body: "Studies suggest that within days of birth, babies prefer their mother's voice over a stranger's and respond to the rhythm of their native language.",
    tips: [
      "Trials have found that newborns will work, by sucking patterns, to hear a recording of their own mother rather than another woman.",
      "Research suggests babies show preference for the language they heard in the womb over an unfamiliar one, recognising its melody.",
      "Studies of newborn cries indicate they can carry the melodic shape of the mother's native language, learned before birth.",
      "The evidence points to late pregnancy as a real window for language exposure, not just early infancy.",
    ],
  },
  {
    eyebrow: "Why rhythm matters",
    title: "Language as music first",
    body: "Babies learn the music of speech, its rhythm and rise and fall, long before they learn meaning, and this early tuning helps language develop later.",
    tips: [
      "The sing-song patterns of any language are what your baby absorbs first, well before words make sense.",
      "Hearing the natural flow of your mother tongue in the womb gives your baby a head start in recognising it later.",
      "Speaking warmly and expressively gives your baby a richer pattern to learn from than flat, hurried speech.",
      "There is no single correct language, so speak whichever tongues feel most natural and loving to you.",
    ],
  },
  {
    eyebrow: "How to talk",
    title: "Simple ways to chat with your bump",
    body: "Talking to your baby can be as easy as narrating your day, and it strengthens your bond as much as it exposes your baby to language.",
    tips: [
      "Describe what you are doing, like cooking, walking, or resting, so your baby hears the steady stream of your voice.",
      "Use a warm, gentle, slightly sing-song tone, which babies are naturally drawn to.",
      "Greet your baby by a chosen name or nickname so the sound becomes familiar before birth.",
      "There is no need for special scripts, as ordinary affectionate talk is exactly what helps.",
    ],
  },
  {
    eyebrow: "When to talk",
    title: "Finding moments in the day",
    body: "Quiet, regular moments are ideal for talking, because your baby is more likely to be settled and attentive to your voice.",
    tips: [
      "Many parents find evenings or bedtime peaceful for a few minutes of gentle talking.",
      "Your baby may have more active, alert spells after you eat or rest, which can be lovely times to connect.",
      "Pausing as if waiting for a reply builds a turn-taking rhythm that mirrors real conversation.",
      "Even a minute or two each day, done consistently, is more meaningful than long sessions done rarely.",
    ],
  },
  {
    eyebrow: "Bring in the family",
    title: "Familiar voices all around",
    body: "Your baby can grow familiar with more than one voice, and the loving sounds of family are part of the warm world your baby will be born into.",
    tips: [
      "Encourage your partner to talk to the bump daily, so their voice becomes recognised and comforting too.",
      "In a joint family, grandparents and siblings can share stories, blessings, and chatter that wrap your baby in familiar sound.",
      "Hearing several caring voices helps your baby feel secure with the people who will surround them after birth.",
      "Reading aloud, singing, or simply talking together turns family time into bonding time for your baby.",
    ],
  },
  {
    eyebrow: "Gentle perspective",
    title: "Connection over performance",
    body: "Talking to your baby is about building closeness, not hitting a target, so let it be a source of joy rather than pressure.",
    tips: [
      "If some days are too busy or tiring, missing them does no harm, and you can simply return when you can.",
      "The warmth and intention behind your words matter more than how often or how long you speak.",
      "Talking to your baby can also calm you, which is a quiet gift you give yourself.",
      "Trust that your everyday voice, just as it is, is already meaningful to your baby.",
    ],
  },
];

export default function TalkingToBabyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Voice & language</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Talking to your baby</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Your baby is learning the music of your voice in the womb. Here is what the science says about prenatal language exposure, why newborns prefer their mother's voice, and simple ways to chat with your bump.</p>
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
