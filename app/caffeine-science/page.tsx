import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Caffeine: what the evidence says — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "First, breathe",
    title: "A calm look at caffeine",
    body: "Caffeine in pregnancy is a common worry, but the practical message is simple and reassuring: moderation, not panic, is what the evidence supports.",
    tips: [
      "Most guidance allows a modest daily amount of caffeine rather than asking you to cut it out completely.",
      "If you have already had your usual chai or coffee, there is no need to feel guilty.",
      "Caffeine hides in more than coffee, so it helps to know where it comes from.",
      "This page explains the evidence so you can make an easy, informed choice.",
      "Your doctor can give advice suited to your own pregnancy.",
    ],
  },
  {
    eyebrow: "How it works",
    title: "Caffeine crosses the placenta",
    body: "Caffeine passes freely from your blood across the placenta to your baby, and your baby's body clears it much more slowly than yours.",
    tips: [
      "Caffeine reaches your baby because it easily crosses the placenta.",
      "Your baby cannot break down caffeine as quickly as you can, so it lingers longer.",
      "Your own body also clears caffeine more slowly as pregnancy goes on.",
      "This is why a moderate daily limit is suggested rather than a free-for-all.",
      "It is also why spacing out caffeine through the day is gentler than one large dose.",
    ],
  },
  {
    eyebrow: "The number",
    title: "Current guidance: around 200 mg a day",
    body: "Major health bodies commonly suggest keeping caffeine to roughly 200 milligrams a day during pregnancy.",
    tips: [
      "About 200 mg a day is a widely used moderate limit in pregnancy.",
      "This usually works out to roughly two modest cups of coffee, or a few cups of tea.",
      "Staying within this range is considered low risk by most guidance.",
      "Some women choose to have less, and that is perfectly fine too.",
      "If you are unsure, ask your doctor what target suits you.",
    ],
  },
  {
    eyebrow: "Indian cups",
    title: "Chai, coffee and cola amounts",
    body: "Knowing the rough caffeine in everyday Indian drinks makes it easy to stay within a moderate limit.",
    tips: [
      "A cup of home-style milky chai usually has a relatively small amount of caffeine.",
      "South Indian filter coffee and strong brewed coffee are higher, so one or two cups can be plenty.",
      "Instant coffee varies with how strong you make it, so a heaped spoon adds up faster.",
      "Colas and many energy drinks also contain caffeine, which is easy to forget.",
      "Adding up all your drinks across the day gives a truer picture than counting coffee alone.",
    ],
  },
  {
    eyebrow: "Hidden sources",
    title: "Caffeine you might overlook",
    body: "Caffeine appears in several foods and products beyond your morning cup.",
    tips: [
      "Green tea and black tea both contain caffeine, though usually less than coffee.",
      "Chocolate and cocoa contain small amounts of caffeine, more so in dark chocolate.",
      "Some cold drinks, energy drinks and even certain medicines contain caffeine.",
      "Check labels on energy drinks, which can be surprisingly high.",
      "Counting these alongside your tea and coffee keeps your daily total realistic.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What the studies actually say",
    body: "Research on caffeine in pregnancy is large but mixed, which is exactly why a balanced, moderate message is the wise one.",
    tips: [
      "Studies suggest very high caffeine intake is linked with somewhat higher risks in pregnancy.",
      "Research on moderate intake around the suggested limit is reassuring for most healthy pregnancies.",
      "Evidence indicates findings are mixed and that other lifestyle factors can affect results.",
      "Studies note that staying within roughly 200 mg a day is considered low risk by major bodies.",
      "These are general findings, not certainties for any single pregnancy, so let your doctor guide you.",
    ],
  },
  {
    eyebrow: "Feeling good",
    title: "Caffeine, sleep and comfort",
    body: "Beyond the baby, caffeine can affect how you feel, especially your sleep and your stomach.",
    tips: [
      "Caffeine later in the day can make pregnancy sleep harder, so favour morning cups.",
      "Strong tea or coffee on an empty stomach can worsen acidity and nausea for some women.",
      "If caffeine makes your heart race or leaves you jittery, that is a signal to cut back.",
      "Staying hydrated with water alongside your chai helps you feel your best.",
      "Notice how each drink makes you feel and adjust gently to your own comfort.",
    ],
  },
  {
    eyebrow: "Easy swaps",
    title: "Simple ways to keep it moderate",
    body: "Small, comfortable changes make it easy to enjoy your drinks while staying within a sensible range.",
    tips: [
      "Make your chai or coffee a little weaker, or enjoy a slightly smaller cup.",
      "Mix in caffeine-free options like milk, buttermilk, or herbal drinks your doctor approves.",
      "Switch your afternoon or evening cup to a warm, caffeine-free drink for better sleep.",
      "Keep a simple mental tally of your cups so the day's total stays moderate.",
      "Be kind to yourself; an occasional extra cup within reason is not a cause for alarm.",
    ],
  },
];

export default function CaffeineSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Food and drink</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Caffeine: what the evidence says</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">You do not have to give up your chai or coffee. Here is a calm, balanced look at how caffeine reaches your baby, the moderate daily limit most guidance suggests, and how everyday Indian drinks add up.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not a substitute for professional medical advice. Discuss your own caffeine limit with your doctor, especially with any pregnancy complication. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
