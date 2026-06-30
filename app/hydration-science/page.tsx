import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Hydration & amniotic fluid — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "Why water matters more now",
    body: "Your body is doing extra work in pregnancy, and almost all of it depends on water, from building extra blood to cushioning your baby.",
    tips: [
      "Your blood volume rises sharply in pregnancy, and water is the base of that extra blood.",
      "Water helps carry nutrients to your baby and clear waste from both of you.",
      "Staying hydrated supports digestion and helps ease the constipation many women feel.",
      "Good hydration helps your kidneys handle the extra filtering load of pregnancy.",
      "Feeling thirsty is already a mild signal of low fluids, so it is better to sip steadily.",
    ],
  },
  {
    eyebrow: "Around the baby",
    title: "Water and the amniotic fluid",
    body: "Amniotic fluid is the warm, protective water your baby floats in, and your hydration is one part of keeping it at a healthy level.",
    tips: [
      "Amniotic fluid cushions your baby, lets the limbs move freely, and helps the lungs develop.",
      "In later pregnancy this fluid is largely made and refreshed by your baby's own systems.",
      "Severe dehydration in the mother can be one factor in lower amniotic fluid levels.",
      "If a scan shows low fluid, your doctor will look at many causes, not hydration alone.",
      "Drinking enough water is a simple, supportive habit, but it is not a cure-all on its own.",
    ],
  },
  {
    eyebrow: "Tightenings",
    title: "Dehydration and Braxton-Hicks",
    body: "Braxton-Hicks are the practice tightenings of the womb, and being short on fluids is a common, easily fixed trigger for them.",
    tips: [
      "Braxton-Hicks contractions are usually irregular, painless and ease off with rest.",
      "When you are dehydrated, these practice contractions can feel more frequent.",
      "Having a glass or two of water and lying on your side often calms them down.",
      "True labour contractions get stronger, longer and closer together and do not stop with water.",
      "If tightenings stay regular and painful before your due date, contact your doctor.",
    ],
  },
  {
    eyebrow: "Indian summers",
    title: "Coping with India's heat",
    body: "In much of India, high temperatures and humidity make it very easy to lose fluids through sweat without noticing.",
    tips: [
      "On hot days you lose extra water through sweat, so your needs go up.",
      "Carry a water bottle when you step out and sip even before you feel thirsty.",
      "Coconut water, nimbu pani and buttermilk are familiar, gentle ways to top up fluids and salts.",
      "Avoid being out in the peak afternoon heat, which raises both dehydration and fainting risk.",
      "Cool, light meals with high-water foods like cucumber and watermelon also help.",
    ],
  },
  {
    eyebrow: "Numbers",
    title: "How much to drink",
    body: "A common general guide is around eight to twelve glasses of fluid a day, but your real target shifts with heat, activity and your own body.",
    tips: [
      "Most pregnant women do well with roughly two to three litres of total fluids a day.",
      "Increase this on hot days, when active, or if you have vomiting or loose motions.",
      "Spread your drinking through the day rather than gulping a lot at once.",
      "Plain water is best; limit very sugary drinks and strong caffeinated ones.",
      "Your doctor may give a different target if you have certain heart or kidney conditions.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What research suggests",
    body: "While drinking water feels obvious, researchers have looked at how hydration connects to pregnancy and amniotic fluid.",
    tips: [
      "Studies suggest that increasing a mother's fluid intake can raise amniotic fluid volume when it is low.",
      "Research links dehydration with more frequent Braxton-Hicks-type contractions.",
      "Evidence indicates good hydration supports healthy blood pressure and circulation in pregnancy.",
      "Studies note that adequate fluids help reduce urinary infections, which are common in pregnancy.",
      "These are general findings; your individual fluid needs should be guided by your doctor.",
    ],
  },
  {
    eyebrow: "Read your body",
    title: "Signs you may be dehydrated",
    body: "Your body gives clear signals when it is running low on water, and catching them early is simple to fix.",
    tips: [
      "Dark yellow urine and going less often are early signs you need more fluids.",
      "Headache, dizziness and a dry mouth can point to dehydration.",
      "Feeling unusually tired or having more Braxton-Hicks tightenings can be linked to low fluids.",
      "Aim for pale, straw-coloured urine as a friendly daily check.",
      "Seek urgent help for severe dizziness, very little urine, a racing heart or reduced baby movements.",
    ],
  },
  {
    eyebrow: "Easy habits",
    title: "Simple ways to stay topped up",
    body: "Small, steady habits make hydration effortless rather than another thing to remember.",
    tips: [
      "Keep a filled bottle within reach at home, at work and by your bed.",
      "Have a glass of water with every meal and snack as an easy anchor.",
      "Add a slice of lemon or a few mint leaves if plain water feels boring.",
      "Drink a little before, during and after any walk or activity.",
      "If you wake to use the bathroom at night, that is normal; just keep daytime sips going.",
    ],
  },
];

export default function HydrationSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Everyday wellness</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Hydration & amniotic fluid</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Water quietly powers almost everything your pregnant body does, from your extra blood to the gentle fluid that cushions your baby. Here is how hydration helps, especially through India's heat, and how to know you are getting enough.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. If you have concerns about your fluid levels, swelling or baby movements, contact your doctor. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
