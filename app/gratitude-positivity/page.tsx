import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Gratitude and positive emotion — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "Positive feelings are good medicine too",
    body: "We often focus on reducing stress, but actively cultivating warmth, gratitude and optimism is its own kind of care. Positive emotion is not just pleasant; it gently steadies the body and mind.",
    tips: [
      "Positive feelings broaden your outlook and build resilience for harder days.",
      "Gratitude and optimism are skills you can practise, not fixed traits you either have or lack.",
      "This is not about forced cheerfulness; it is about noticing the good that is already present.",
      "A warmer inner climate complements stress reduction rather than replacing it.",
    ],
  },
  {
    eyebrow: "The body link",
    title: "How good feelings ripple through you",
    body: "Positive emotion tends to calm the same stress systems that worry winds up. When you feel safe, grateful or content, your body relaxes in measurable ways.",
    tips: [
      "Feeling positive is linked with a calmer nervous system and steadier heart rhythm.",
      "Optimistic, supported mothers often report better sleep and more energy.",
      "Warm emotions encourage healthier habits, like eating well and staying active.",
      "These small physical shifts add up to a gentler environment for you and your baby.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Researchers have studied optimism, positive affect and gratitude in pregnancy and beyond. The findings suggest that a positive outlook is associated with real benefits.",
    tips: [
      "Studies suggest that greater optimism in pregnancy is linked with lower stress and better wellbeing.",
      "Research indicates that positive emotion is associated with healthier habits and self-care.",
      "Gratitude journaling experiments have found improvements in mood, sleep and life satisfaction.",
      "Trials of savouring and gratitude practices show reductions in anxiety and depressive symptoms.",
      "Evidence points to optimism being protective, though it works alongside, not instead of, good care.",
    ],
  },
  {
    eyebrow: "Gratitude journaling",
    title: "A few lines that shift your day",
    body: "One of the best-studied positive practices is simply writing down what you are thankful for. It trains your attention to notice the good, which over time changes your default outlook.",
    tips: [
      "Each evening, write three things from the day you are grateful for, however small.",
      "Be specific; 'the smell of fresh rotis at breakfast' lands deeper than 'food'.",
      "Notice why each good thing happened, which deepens the sense of connection and gratitude.",
      "Even two or three nights a week brings benefit; you do not need to write daily.",
      "Keep your notebook by the bed so the habit is easy to reach.",
    ],
  },
  {
    eyebrow: "Savouring",
    title: "Stretching out the good moments",
    body: "Savouring means lingering in a pleasant experience so it nourishes you more fully, rather than letting it pass by unnoticed. It turns ordinary moments into small sources of joy.",
    tips: [
      "When something feels good, pause and let yourself fully take it in for a few breaths.",
      "Feel your baby's kicks with full attention, as a private, shared moment of wonder.",
      "Recall a happy memory in detail, or look forward warmly to meeting your baby.",
      "Sharing a good moment with someone you love makes it linger longer.",
    ],
  },
  {
    eyebrow: "Optimism, gently",
    title: "Hopeful, not unrealistic",
    body: "Healthy optimism is not pretending everything is perfect; it is trusting that you can cope and that good things are possible. This balanced hope is what the research connects with wellbeing.",
    tips: [
      "Acknowledge real worries, then remind yourself of your strengths and your support.",
      "Picture a calm, positive outcome for your birth as a gentle rehearsal for confidence.",
      "Notice and challenge harsh 'what if' thoughts with kinder, more balanced ones.",
      "Surround yourself with reassuring voices rather than fearful birth stories.",
    ],
  },
  {
    eyebrow: "Woven into Indian life",
    title: "Gratitude already lives in your day",
    body: "Many Indian rituals are quiet acts of gratitude and connection. Leaning into these familiar moments makes a positive practice feel natural rather than added on.",
    tips: [
      "Morning prayers or a moment of thanks before a meal are ready-made gratitude practices.",
      "Festivals and family gatherings are rich chances to savour warmth and belonging.",
      "Express thanks aloud to family who help you; spoken gratitude strengthens bonds for everyone.",
      "A short evening walk noticing small beauties, a sunset or a child's laugh, lifts the mood.",
    ],
  },
  {
    eyebrow: "A kind balance",
    title: "Positivity is support, not pressure",
    body: "Cultivating good feelings should never mean hiding hard ones. Real wellbeing makes room for the full range of emotions while gently tending the positive.",
    tips: [
      "It is healthy to feel sad, anxious or angry sometimes; let those feelings pass without judgement.",
      "Toxic positivity, pretending you are fine when you are not, helps no one, so be honest.",
      "If low mood lingers beyond two weeks, gratitude practice is not enough; please seek support.",
      "In India, you can call Tele-MANAS on 14416 for free, confidential mental health help.",
    ],
  },
];

export default function GratitudePositivityPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Warmth and hope</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Gratitude and positive emotion</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Cultivating gratitude, optimism and small joys is its own kind of care in pregnancy. Here is what research says about positive emotion, plus gentle practices like gratitude journaling and savouring that you can weave into your day.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. If low mood lingers beyond two weeks, please reach out or call Tele-MANAS on 14416. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
