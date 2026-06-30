import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Sunlight & body clock — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Your inner clock",
    title: "What the circadian rhythm is",
    body: "Your body runs on a roughly 24-hour internal clock that controls sleep, hormones, digestion and mood, and light is its main timekeeper.",
    tips: [
      "This inner clock tells your body when to feel alert and when to wind down.",
      "Daylight in the morning sets the clock, while darkness at night signals sleep.",
      "Pregnancy hormones can shake up this rhythm, which is one reason sleep feels different now.",
      "A steady daily rhythm of light, meals and rest helps your body feel more settled.",
      "You do not need anything special, just regular exposure to natural light and darkness.",
    ],
  },
  {
    eyebrow: "Morning light",
    title: "Why early light helps sleep and mood",
    body: "Getting natural light soon after waking is one of the simplest ways to sleep better at night and feel steadier during the day.",
    tips: [
      "Morning daylight helps your body release its sleep hormone at the right time each night.",
      "A few minutes of early light can lift mood and ease the low feelings some women have.",
      "Step onto your balcony, terrace or near a sunny window soon after you wake.",
      "In India's heat, the gentle early morning sun is the most comfortable time to do this.",
      "Pair morning light with a short, easy walk for both light and movement.",
    ],
  },
  {
    eyebrow: "Vitamin D",
    title: "The sunlight and vitamin D link",
    body: "Your skin makes vitamin D when sunlight touches it, and this vitamin matters for your bones and your baby's developing skeleton.",
    tips: [
      "Vitamin D supports calcium balance for both your bones and your baby's growing bones.",
      "Vitamin D deficiency is very common in India, even in sunny regions, partly due to indoor lifestyles.",
      "Short spells of morning or late-afternoon sun on the arms can help your body make vitamin D.",
      "Sun alone is often not enough, so many doctors in India check and supplement vitamin D.",
      "Do not start high-dose supplements on your own; let your doctor guide the dose.",
    ],
  },
  {
    eyebrow: "Mother and baby",
    title: "The mother's clock and the baby",
    body: "Before birth your baby cannot see daylight, so it relies on cues passed from your body to begin setting its own rhythm.",
    tips: [
      "Your daily hormone rhythms reach your baby and help shape its early sense of day and night.",
      "A regular routine in pregnancy may help your newborn settle into day-night patterns more smoothly.",
      "Keeping bright light and activity for daytime sends consistent signals through your body.",
      "Calm, dim, quiet evenings help cue your own body and, indirectly, your baby toward rest.",
      "After birth you can continue these gentle cues to help your baby learn night from day.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What research suggests",
    body: "Scientists studying light, sleep and pregnancy have found consistent links between daily light patterns and wellbeing.",
    tips: [
      "Studies suggest morning light exposure improves sleep quality and mood in many people.",
      "Research links disrupted body-clock patterns in pregnancy with more sleep problems and low mood.",
      "Evidence indicates that the mother's circadian rhythms help programme the baby's developing clock.",
      "Studies note that low vitamin D in pregnancy is widespread, especially in indoor urban populations.",
      "These are general findings; your own light, sleep and vitamin D needs should be guided by your doctor.",
    ],
  },
  {
    eyebrow: "Night time",
    title: "Protecting your evenings",
    body: "Bright screens and lights late at night can confuse your clock and make pregnancy sleep even harder.",
    tips: [
      "Dim the lights in the hour before bed to tell your body that night has arrived.",
      "Put away bright phone and TV screens, or use a warm night mode, before sleep.",
      "Keep the bedroom dark and as cool as you can, which is especially helpful in hot weather.",
      "Try to sleep and wake at similar times so your clock has a steady rhythm.",
      "A short, calming routine such as light reading or prayer can signal rest.",
    ],
  },
  {
    eyebrow: "Shift work",
    title: "If you work nights or rotating shifts",
    body: "Working against your natural clock is harder during pregnancy, so a few extra precautions are worth taking.",
    tips: [
      "Night and rotating shifts can disrupt sleep, mood and the body's rhythms more during pregnancy.",
      "If you can, talk to your employer about steadier hours or fewer night shifts while pregnant.",
      "Protect a dark, quiet space for daytime sleep after a night shift.",
      "Keep meals at regular times to give your body another steady cue.",
      "Mention your work pattern to your doctor so any tiredness or sleep issues can be addressed.",
    ],
  },
  {
    eyebrow: "Gentle sun",
    title: "Enjoying sunlight safely",
    body: "Sunlight is helpful in sensible amounts, but India's strong midday sun calls for some care.",
    tips: [
      "Favour the soft early morning or late afternoon sun rather than harsh midday rays.",
      "A short spell of light is enough; you do not need to sit out until you feel hot.",
      "Stay hydrated and step into shade if you feel dizzy or overheated.",
      "Protect your face and use shade or a hat on bright days to avoid sunburn.",
      "Listen to your body and keep sun time brief and comfortable.",
    ],
  },
];

export default function SunlightCircadianPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Rhythm and rest</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Sunlight & body clock</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Light is the gentle conductor of your body's daily rhythm. A little morning sunlight, calm dark evenings and a steady routine can improve your sleep and mood, support vitamin D, and even help set your baby's developing clock.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. Speak with your doctor about vitamin D, sleep difficulties or shift-work concerns. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
