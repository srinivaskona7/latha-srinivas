import Link from "next/link";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Garbha Sanskar — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Tradition meets science",
    title: "What Garbha Sanskar really means",
    body: "Garbha Sanskar is a centuries-old Indian practice — rooted in Ayurveda and texts like the Charaka and Sushruta Samhita — built on the belief that a mother's thoughts, diet, sounds and surroundings shape the growing child. Modern prenatal-bonding research does not prove that you can 'design' a baby's personality, but it does support the gentler core idea: a calm, nourished, connected pregnancy is good for both mother and baby. Read these practices as a loving daily ritual and a way to bond, not as a recipe for guaranteed traits.",
    tips: [
      "Think of Garbha Sanskar as a structured way to slow down, connect and care for yourself — the bonding is the benefit.",
      "Where tradition and evidence agree (calm, music, nutrition, routine), lean in fully.",
      "Where tradition promises specific outcomes (a 'genius' or 'fair' child), treat it as cultural belief, not medical fact.",
      "Nothing here replaces your antenatal check-ups, scans, iron and folic acid, or your doctor's advice.",
    ],
  },
  {
    eyebrow: "Hearing & sound",
    title: "When your baby starts to hear you",
    body: "The structures of the inner ear are largely formed by mid-pregnancy. Babies begin responding to sound from around week 18, and by roughly weeks 25–27 most fetuses react consistently to voices and music from outside the womb. Your own voice carries especially well because it also travels through your body. After birth, newborns recognise their mother's voice and even familiar tunes or rhymes heard repeatedly in late pregnancy — a real, measured form of prenatal memory.",
    tips: [
      "From the second trimester onward, sound exposure becomes meaningful — there is no need to start 'lessons' before then.",
      "Your speaking and singing voice is the single most valuable sound your baby hears.",
      "Keep volume moderate; the womb already amplifies low frequencies, so loud direct sound is unnecessary and unhelpful.",
      "Repetition matters — a tune or shloka heard daily in the third trimester may be recognised after birth.",
    ],
  },
  {
    eyebrow: "Music & raga",
    title: "Music, classical ragas and the womb",
    body: "Playing soothing music is one of the most cherished Garbha Sanskar rituals, and Indian classical ragas — gentle morning ragas, devotional bhajans and instrumental flute or veena — are traditional favourites. Evidence shows that calming music lowers maternal heart rate and stress and that babies respond to rhythm and melody. What the research does NOT show is that any particular raga raises IQ or musical talent. Enjoy music for the shared calm and connection it creates, not as brain-boosting medicine.",
    tips: [
      "Choose slow, melodic, low-to-moderate volume music — classical ragas, bhajans, lullabies or soft instrumentals all work.",
      "Play it through the room, not pressed against the belly; the baby hears it well from a normal speaker.",
      "Let the music relax YOU first — your calmer state is much of the benefit the baby receives.",
      "Variety is fine, but a few repeated, familiar pieces build the strongest post-birth recognition.",
    ],
  },
  {
    eyebrow: "Talking & reading",
    title: "Talking, reading and naming",
    body: "Talking and reading aloud to your baby — a practice families across India do naturally, from reciting prayers to telling stories — is gentle, free and genuinely bonding. Hearing language patterns in the womb helps newborns tune into the rhythm and melody of their mother tongue. The aim is not early academics; it is rhythm, warmth and the start of a relationship. Many parents find that narrating their day or reading a favourite book becomes a calming daily anchor for both of them.",
    tips: [
      "Narrate ordinary moments aloud — what you are cooking, seeing or feeling — in whatever language is natural to you.",
      "Reading the same story or reciting the same prayer daily builds familiar rhythm and routine.",
      "Invite the baby's name (or a loving nickname) into conversation once you have chosen one.",
      "Multilingual homes are an asset, not a confusion — exposure to more than one language is fine.",
    ],
  },
  {
    eyebrow: "Calm & cortisol",
    title: "Meditation, stress and your baby",
    body: "Garbha Sanskar places great value on a serene mind, and here science strongly agrees. Chronically high maternal stress raises cortisol, and prolonged high stress in pregnancy is linked in research to outcomes such as preterm birth and lower birth weight. Practices like meditation, pranayama (gentle breathing), prayer and prenatal yoga are associated with lower maternal stress and better wellbeing. Managing stress is one of the most evidence-backed gifts you can give your pregnancy — but everyday worry is normal and not something to feel guilty about.",
    tips: [
      "Aim for short, regular calm — 10–15 minutes of breathing, meditation or prayer most days beats rare long sessions.",
      "Gentle prenatal yoga and walking support sleep, mood and circulation; clear new exercise with your doctor.",
      "Protect your sleep and lean on family support — rest is a legitimate part of prenatal self-care.",
      "If anxiety or low mood is persistent or overwhelming, tell your obstetrician; antenatal mental health matters and is treatable.",
    ],
  },
  {
    eyebrow: "Nourishment",
    title: "Nutrition, mind and the sattvic ideal",
    body: "Ayurveda's Garbha Sanskar emphasises a 'sattvic' diet — fresh, wholesome, balanced food eaten mindfully and joyfully. Modern nutrition science aligns well: a varied diet with enough protein, iron, calcium, fibre and the right supplements supports both fetal growth and maternal mood, and eating without stress aids digestion. The traditional mind-body link — eat calmly and happily — is reasonable, but it does not replace medical essentials like folic acid, iron supplementation and managing conditions such as gestational diabetes.",
    tips: [
      "Take folic acid and any iron, calcium or supplements your doctor prescribes — these are non-negotiable, not optional rituals.",
      "Favour fresh home-cooked meals, fruits, vegetables, dals, whole grains and adequate hydration.",
      "Eat in a calm setting when you can; mindful, unhurried meals support both digestion and mood.",
      "Discuss any fasting, restrictive diets or strong food beliefs with your doctor before following them in pregnancy.",
    ],
  },
  {
    eyebrow: "Family & partner",
    title: "Bringing in your partner and family",
    body: "Garbha Sanskar is traditionally a family-centred practice, with partners, parents and grandparents all participating. This fits the bonding evidence beautifully: when partners talk to the bump, attend scans, share calm activities and support the mother, they begin their own attachment early, and a supported mother is a calmer, healthier mother. The baby cannot tell who is reading the story — but the whole family is rehearsing the relationship that will continue after birth.",
    tips: [
      "Invite your partner to talk, sing or read to the bump — their voice becomes familiar too.",
      "Share calm rituals: a daily walk, music time, or a few quiet minutes together each evening.",
      "Let family support practically — meals, rest and reassurance reduce the mother's load and stress.",
      "Keep well-meaning advice in perspective; route medical questions to your obstetrician, not to anxiety.",
    ],
  },
  {
    eyebrow: "Myths vs evidence",
    title: "Holding tradition responsibly",
    body: "Garbha Sanskar carries deep cultural meaning, and you can honour it without believing every claim attached to it. Practices that promise to determine a baby's intelligence, gender, complexion or destiny are cultural beliefs, not science, and some — like strict fasting or unverified herbal remedies — can even be harmful in pregnancy. Embrace the connection, calm and care; gently set aside the guarantees and anything that adds pressure or risk.",
    tips: [
      "Myth: specific rituals make a 'fairer', 'smarter' or particular-gender baby. Evidence: these are not supported and gender is set at conception.",
      "Myth: any herbal tonic is safe because it is 'natural'. Evidence: many herbs are unsafe in pregnancy — always ask your doctor first.",
      "Do: keep the bonding, music, calm, nutrition and family involvement — these are genuinely good for you both.",
      "Don't: let Garbha Sanskar become a source of guilt or pressure; a loving, ordinary pregnancy is more than enough.",
    ],
  },
];

export default function GarbhaSanskarPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Bonding before birth
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Garbha Sanskar
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            India&apos;s traditional art of nurturing the baby in the womb, set
            beside what prenatal-bonding science actually supports. Keep the
            calm, the music, the voices and the love &mdash; and hold the rest
            lightly. For your medical care, always follow your obstetrician.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="peach">Ayurveda tradition</Badge>
            <Badge tone="sage">Evidence-informed</Badge>
            <Badge tone="plum">Family-centred</Badge>
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
                  <li
                    key={t}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This page is for education and bonding only and is not a substitute
          for professional medical advice. Garbha Sanskar is a cultural
          practice; it does not guarantee any outcome for your baby. In India,
          consult your obstetrician or registered midwife for personalised care,
          and dial 108 for medical emergencies.
        </p>
      </SectionReveal>
    </main>
  );
}
