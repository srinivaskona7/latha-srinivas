import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Laughter & joy — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Joy is part of caring for your baby",
    body: "Looking after your own happiness is not a luxury during pregnancy; your emotional world and your body chemistry are closely linked and gently shared with your baby.",
    tips: [
      "Feeling joy is a real, physical event in the body, not just a mood, so it is worth making room for it.",
      "You do not need to be cheerful all the time; the aim is simply to invite more small moments of lightness.",
      "Laughter is free, needs no equipment, and can be woven into an ordinary day at home.",
      "Caring for your own wellbeing is one of the kindest things you can do for the baby growing inside you.",
      "Joy and worry can coexist, and welcoming one does not mean denying the other.",
    ],
  },
  {
    eyebrow: "The science",
    title: "What research says about positive emotion",
    body: "Scientists have studied how positive feelings and laughter affect stress hormones and the body's sense of calm.",
    tips: [
      "Studies suggest that laughter and positive emotion can lower levels of stress hormones such as cortisol in the body.",
      "Evidence indicates that genuine laughter relaxes muscles, eases tension, and supports a calmer state for several minutes afterwards.",
      "Trials of humour and laughter-based activities have found improvements in mood and a greater sense of relaxation in many participants.",
      "Research on wellbeing in pregnancy points to lower stress and better rest as plausible benefits of feeling positive emotion regularly.",
      "These findings describe gentle, supportive effects across groups of people, not a cure or a guarantee for any single pregnancy.",
    ],
  },
  {
    eyebrow: "The body",
    title: "How a good laugh settles your system",
    body: "A real laugh briefly changes your breathing, your muscles, and the chemistry that signals safety to your body.",
    tips: [
      "Laughter deepens your breathing, which can steady your heart rate and bring a feeling of calm.",
      "A good laugh releases muscle tension you may not have noticed you were holding in your shoulders and jaw.",
      "Positive emotion is linked with feel-good chemistry that helps you feel more at ease and connected.",
      "When you feel safe and relaxed, your body spends less time in the alert, stressed state.",
      "Even a smile or a soft chuckle nudges the body gently towards that calmer place.",
    ],
  },
  {
    eyebrow: "Small joys",
    title: "Simple ways to invite joy each day",
    body: "Joy rarely arrives on a schedule, but you can set the stage for it with small, repeatable habits.",
    tips: [
      "Keep a short list of things that reliably make you smile, from a favourite song to a funny clip, and reach for it when you need a lift.",
      "Watch a light-hearted film or comedy show in the evening instead of distressing news.",
      "Call or sit with the person who always makes you laugh, even for a few minutes.",
      "Notice and savour tiny good moments, like the first sip of warm tea or sunlight on the floor.",
      "Let yourself be a little playful, humming, dancing softly, or sharing a silly joke at home.",
    ],
  },
  {
    eyebrow: "Together",
    title: "Joy in a joint family and with loved ones",
    body: "In many Indian homes, shared laughter and togetherness are already woven into daily life, which can be a real source of support.",
    tips: [
      "Share a meal or evening chai with family and let the easy conversation and teasing lift your mood.",
      "Ask elders to share funny stories from their own pregnancies, which often brings warmth and laughter.",
      "Spend a little time with children in the home, whose play and silliness invite spontaneous joy.",
      "Lean on your partner or a trusted relative to plan small, cheerful moments together in the week.",
      "Festivals, songs, and small celebrations are natural chances to feel lightness with people you love.",
    ],
  },
  {
    eyebrow: "Companions",
    title: "How joy complements meditation and gratitude",
    body: "Laughter sits comfortably alongside quieter practices like meditation and gratitude, and the three support one another.",
    tips: [
      "Meditation calms a busy mind, while laughter releases tension, so practising both gives you two gentle paths to ease.",
      "Noting a few things you are grateful for each day can make joyful moments easier to notice and savour.",
      "A short breathing practice before bed and a light, happy moment in the day balance calm with brightness.",
      "There is no single right practice; the best one is whichever you will actually return to.",
      "Pairing gratitude, calm, and laughter builds a steady, kind backdrop for the months ahead.",
    ],
  },
  {
    eyebrow: "Gentle days",
    title: "Letting joy in without pressure",
    body: "Pregnancy has hard days too, and joy is an invitation rather than an obligation.",
    tips: [
      "If you are not feeling cheerful, that is completely normal, and you can simply aim for a moment of comfort instead.",
      "Avoid the trap of forced positivity; pretending to feel fine can be more tiring than resting honestly.",
      "On low days, a warm drink, soft music, or a kind word can be enough without any need to laugh.",
      "Let joy be light and unforced, arriving in small doses rather than as a daily target to hit.",
      "Be as gentle with yourself as you would be with a dear friend who is expecting.",
    ],
  },
  {
    eyebrow: "When to reach out",
    title: "When low mood needs more support",
    body: "Persistent sadness or anxiety in pregnancy is common and treatable, and reaching out is a sign of strength.",
    tips: [
      "If low mood, hopelessness, or worry lasts most days for two weeks or more, talk to your doctor or midwife.",
      "Trouble sleeping, eating, or finding any enjoyment is worth mentioning at your next check-up.",
      "Confiding in a trusted family member or friend can ease the load and help you take the next step.",
      "Mental wellbeing in pregnancy matters as much as physical health, and support is available.",
      "If you ever have thoughts of harming yourself, seek help straight away rather than waiting.",
    ],
  },
];

export default function LaughterJoyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">LIGHTNESS FOR TWO</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Laughter & joy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Positive emotion and a good laugh can ease stress hormones and bring a calmer, warmer feeling to your day, gently supporting your wellbeing and your baby's through the months ahead.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. If low mood or anxiety lasts or feels overwhelming, please speak with your doctor or midwife. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
