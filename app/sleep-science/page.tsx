import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "The science of sleep — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Sleep is when your body rebuilds",
    body: "Sleep is not idle time; it is when your body repairs, your mind sorts through the day, and your hormones rebalance. In pregnancy, when so much is changing, good sleep does quiet, essential work for you and your baby.",
    tips: [
      "Sleep needs often rise in early pregnancy as your body works harder behind the scenes.",
      "Broken or shortened sleep is common and usually normal, but it is worth tending to.",
      "Rest supports your immune system, mood and blood sugar balance, all important now.",
      "Quality matters as much as quantity; deep, unbroken stretches restore you most.",
    ],
  },
  {
    eyebrow: "Sleep architecture",
    title: "The cycles your night moves through",
    body: "Sleep is not one flat state but a series of cycles, moving between light sleep, deep sleep and dreaming REM sleep. Each stage has a job, and pregnancy can reshape the pattern.",
    tips: [
      "Deep sleep is when the body repairs tissue, while REM sleep helps the brain process emotions.",
      "Pregnancy often increases lighter sleep and night-time waking, especially later on.",
      "Waking briefly between cycles is normal; the aim is to drift back without full alertness.",
      "More vivid dreams in pregnancy are common and harmless, driven by hormones and more REM time.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Sleep in pregnancy has been studied closely, including its links to mood, blood pressure and birth. The findings underline that sleep is worth protecting, without cause for alarm.",
    tips: [
      "Studies suggest that consistently short or poor sleep is associated with higher rates of low mood.",
      "Research indicates links between very poor sleep and conditions like high blood pressure and gestational diabetes.",
      "Trials show that treating insomnia, even without medicine, improves both sleep and mood.",
      "Evidence has linked back sleeping in the third trimester with a higher stillbirth risk, which is why side sleep is advised.",
      "Reassuringly, the occasional restless night carries no such risk; it is the steady pattern that matters.",
    ],
  },
  {
    eyebrow: "Left-side sleep",
    title: "Why your side matters in the third trimester",
    body: "From around the third trimester, going to sleep on your side, ideally the left, is recommended. This keeps blood flowing freely to your baby and is one of the simplest protective habits.",
    tips: [
      "Lying flat on your back lets the heavy womb press on a large vein, reducing blood flow to the baby.",
      "Side sleeping, especially left, keeps circulation to the womb and your kidneys at its best.",
      "If you wake on your back, do not panic; simply turn back onto your side and settle again.",
      "A pillow tucked behind your back or between your knees makes side sleeping far more comfortable.",
      "This advice applies to settling to sleep in late pregnancy; brief shifts in position are fine.",
    ],
  },
  {
    eyebrow: "Circadian rhythm",
    title: "Working with your body clock",
    body: "Your body runs on a roughly 24-hour clock set mainly by light. Keeping this rhythm steady helps you fall asleep more easily and feel more alert by day.",
    tips: [
      "Morning daylight, ideally outdoors, helps anchor your body clock and improves night sleep.",
      "Dim the lights and reduce screen time in the hour before bed to let sleep hormones rise.",
      "Keep your wake-up time fairly consistent, even after a poor night, to steady the rhythm.",
      "A cool, dark, quiet room signals to your body that it is truly time to rest.",
    ],
  },
  {
    eyebrow: "Naps",
    title: "Resting well during the day",
    body: "Daytime tiredness is real in pregnancy, and a well-timed nap can restore you. The key is to nap in a way that tops you up without stealing from your night.",
    tips: [
      "A short nap of twenty to thirty minutes refreshes without leaving you groggy.",
      "Early afternoon is the natural dip and the best time for a nap.",
      "Avoid long or late-afternoon naps if you struggle to fall asleep at night.",
      "In hot Indian afternoons, a short rest in a cool room is both restorative and culturally natural.",
    ],
  },
  {
    eyebrow: "Insomnia without medicine",
    title: "Gentle, drug-free ways to sleep better",
    body: "Many sleep medicines are not advised in pregnancy, so non-drug approaches are both the safest and the best-studied first step. Small, consistent changes work surprisingly well.",
    tips: [
      "Keep a steady wind-down routine: a warm bath, slow breathing or light reading before bed.",
      "If you cannot sleep after about twenty minutes, get up, do something calm, and return when drowsy.",
      "Avoid heavy meals, caffeine and too much fluid close to bedtime to reduce waking.",
      "Cognitive behavioural therapy for insomnia (CBT-I) is well studied and safe in pregnancy; ask your doctor.",
      "Never take any sleep medicine, herbal or otherwise, without checking with your doctor first.",
    ],
  },
  {
    eyebrow: "When to ask",
    title: "Signs worth mentioning to your doctor",
    body: "Most pregnancy sleep changes are normal, but a few patterns deserve a conversation with your care provider. Raising them early keeps you and your baby safe.",
    tips: [
      "Tell your doctor if you snore heavily, gasp or stop breathing in sleep, which can signal sleep apnoea.",
      "Mention persistent insomnia, restless legs or daytime exhaustion that disrupts your life.",
      "If poor sleep comes with low mood or constant worry, please reach out or call Tele-MANAS on 14416.",
      "Sudden severe headache, vision changes or swelling with poor sleep need prompt medical attention.",
    ],
  },
];

export default function SleepSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Rest and recovery</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">The science of sleep</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Sleep is quiet, essential work for you and your baby. Here is the science: how sleep cycles change in pregnancy, why left-side sleep matters in the third trimester, the role of your body clock, and how to sleep better without medicines.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. Never take any sleep medicine in pregnancy without medical advice. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
