import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Nature & wellbeing — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The idea",
    title: "Why nature soothes us",
    body: "Time among trees, plants and open sky has a calming effect that many of us feel instinctively, and researchers call this restorative effect green time.",
    tips: [
      "Being in green spaces tends to slow a racing mind and ease tension in the body.",
      "Natural sights and sounds give your attention a gentle rest from busy daily demands.",
      "You do not need a forest; a park, garden or row of trees can give the same lift.",
      "Even looking at greenery from a window has a small soothing effect.",
      "In pregnancy, when stress and tiredness run high, these small pauses matter even more.",
    ],
  },
  {
    eyebrow: "Calmer mind",
    title: "Lower stress and steadier mood",
    body: "Spending unhurried time in nature is linked with feeling calmer, less anxious and more able to cope.",
    tips: [
      "A quiet walk among greenery can lower the feeling of stress that builds up indoors.",
      "Nature time is associated with brighter mood and less anxiety for many people.",
      "Soft natural light and fresh air add to the sense of calm during a green break.",
      "Sharing the walk with your partner or a friend adds comforting connection.",
      "If low mood or anxiety feels heavy or constant, treat it as a health matter and tell your doctor.",
    ],
  },
  {
    eyebrow: "Body benefits",
    title: "Green time and blood pressure",
    body: "The calming effect of nature shows up in the body too, including gentler effects on heart rate and blood pressure.",
    tips: [
      "Relaxing time in green spaces is linked with slightly lower blood pressure for many people.",
      "A slower, calmer state eases the load on your heart and circulation.",
      "Gentle walking in a park combines the calm of nature with healthy movement.",
      "Keeping blood pressure in a healthy range is especially important during pregnancy.",
      "Nature time supports, but does not replace, your regular blood-pressure checks with your doctor.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What the studies suggest",
    body: "Researchers across many countries have measured how time in nature affects stress and the body.",
    tips: [
      "Studies suggest that time in green spaces lowers self-reported stress and improves mood.",
      "Research links regular contact with nature to small reductions in blood pressure and heart rate.",
      "Evidence indicates even short green breaks can refresh attention and reduce mental fatigue.",
      "Some studies note that access to nearby green space is associated with better wellbeing in pregnancy.",
      "These are general findings; your own health plan should always be guided by your doctor.",
    ],
  },
  {
    eyebrow: "City life",
    title: "Finding green in Indian cities",
    body: "Even in dense, busy cities, small pockets of green are usually closer than they seem.",
    tips: [
      "Visit a neighbourhood park or maidan in the cooler morning or evening hours.",
      "Temple grounds, college campuses and lake fronts often have quiet, shaded greenery.",
      "A potted-plant corner on your balcony can become a small daily green retreat.",
      "Tend a few tulsi or flowering plants at home for a calming, hands-on routine.",
      "On hot days, choose shaded green spots and carry water to stay comfortable.",
    ],
  },
  {
    eyebrow: "Simple habits",
    title: "Easy ways to get green time",
    body: "You do not need a special trip; small daily doses of nature add up.",
    tips: [
      "Aim for a short, unhurried walk in a green spot most days of the week.",
      "Take your morning tea or a phone call out near plants or a garden when you can.",
      "Sit quietly for a few minutes under a tree and simply notice the sounds and breeze.",
      "Open a window with a view of greenery while you rest or breathe slowly.",
      "Invite your partner along so the habit feels easy and shared.",
    ],
  },
  {
    eyebrow: "Mindful moments",
    title: "Making the most of being outside",
    body: "A little attention turns an ordinary walk into a genuinely restful break.",
    tips: [
      "Slow your pace and let your shoulders and jaw soften as you walk.",
      "Notice three things you can see, hear and feel to settle a busy mind.",
      "Leave the phone in your pocket for a few minutes to truly unwind.",
      "Breathe slowly and deeply to deepen the calming effect.",
      "Be kind to yourself; even five quiet minutes outdoors counts.",
    ],
  },
  {
    eyebrow: "Staying safe",
    title: "Comfort and care outdoors",
    body: "A few sensible steps keep your green time refreshing rather than tiring.",
    tips: [
      "Choose even, well-lit paths and comfortable footwear to avoid slips and falls.",
      "Go out in the cooler parts of the day and rest in the shade when needed.",
      "Carry water and a small snack, and stop if you feel dizzy or overheated.",
      "Avoid crowded, polluted or unsafe areas, especially on high-pollution days.",
      "Tell someone where you are going if you walk alone, and keep your phone handy.",
    ],
  },
];

export default function NatureWellbeingPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Calm and connection</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Nature & wellbeing</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">A little time among trees and greenery can quietly lower stress and soften the day's tension. Here is the evidence behind green time and simple ways to find it, even in the busiest Indian city.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. If low mood, anxiety or blood-pressure concerns persist, speak with your doctor. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
