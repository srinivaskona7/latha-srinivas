import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Immunity & the microbiome — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "The tiny community that lives with us",
    body: "The microbiome is the vast community of friendly microbes that live in and on the body, especially in the gut, working quietly to keep us well.",
    tips: [
      "These helpful microbes assist with digestion, make some vitamins, and help train the immune system.",
      "A baby's own microbiome begins to form around the time of birth and the early days of life.",
      "A varied, balanced community of microbes is generally linked with good health.",
      "This is a normal, natural part of growing up, not something to fear or fight.",
      "Every baby builds their microbiome over time, in their own way.",
    ],
  },
  {
    eyebrow: "Seeding",
    title: "How baby's microbiome is first seeded",
    body: "Around birth and in the early days, a baby begins to gather the microbes that will form their own community.",
    tips: [
      "During and after birth, a baby is exposed to microbes from the mother and the surrounding environment.",
      "Early feeding, skin contact, and everyday closeness all add to this gentle seeding process.",
      "The microbiome keeps developing over the first months and years, not just at the moment of birth.",
      "Many small, ordinary moments of care contribute to building it.",
      "This is a gradual process, so there is no single step that decides everything.",
    ],
  },
  {
    eyebrow: "Breast milk",
    title: "How breast milk nourishes good microbes",
    body: "Breast milk feeds both your baby and the helpful microbes growing in their gut.",
    tips: [
      "Breast milk contains special sugars that feed friendly gut bacteria, helping them flourish.",
      "It also carries antibodies and protective factors that support your baby's developing immunity.",
      "Breast milk itself contains microbes that add to your baby's growing community.",
      "If breastfeeding is hard or not possible, formula feeding still nourishes your baby, and your care team can guide you.",
      "However you feed, holding and caring for your baby supports their wellbeing.",
    ],
  },
  {
    eyebrow: "Birth route",
    title: "Vaginal and caesarean birth, without judgement",
    body: "The route of birth can influence which microbes a baby first meets, and this is shared as information, never as judgement.",
    tips: [
      "After a vaginal birth, a baby first meets microbes from the birth canal, while after a caesarean the first microbes often come from skin and surroundings.",
      "A caesarean is sometimes the safest choice for mother and baby, and choosing or needing one is never a failing.",
      "Babies born by caesarean go on to develop healthy microbiomes too, supported by feeding, contact, and care.",
      "Skin-to-skin and breastfeeding can support microbiome development whatever the birth route.",
      "What matters most is a safe birth and a loved, well-cared-for baby, however they arrive.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What research suggests so far",
    body: "Scientists are actively studying how the early microbiome relates to immunity and long-term health.",
    tips: [
      "Studies suggest that early feeding and birth route can influence the mix of microbes a baby first develops.",
      "Evidence indicates that breastfeeding supports a gut community associated with developing immunity.",
      "Research has found that microbiomes continue to change and mature well beyond the newborn period.",
      "Trials of probiotics in newborns show some promise in specific situations, but are only used on medical advice.",
      "This is an evolving field, so findings describe general patterns rather than firm rules for any single baby.",
    ],
  },
  {
    eyebrow: "Immunity",
    title: "How the microbiome trains immunity",
    body: "The friendly microbes a baby gathers help teach their immune system how to respond to the world.",
    tips: [
      "A developing microbiome helps the immune system learn to tell friendly from harmful.",
      "Antibodies passed through breast milk give extra early protection while a baby's own immunity matures.",
      "Vaccines, given on the recommended schedule, are a key, proven way to protect babies from serious illness.",
      "A baby's immune system strengthens steadily over the first months and years of life.",
      "Everyday loving care and good feeding support this natural development.",
    ],
  },
  {
    eyebrow: "What helps",
    title: "Gentle ways to support baby's microbiome",
    body: "Simple, everyday habits support a healthy start for your baby's microbiome and immunity.",
    tips: [
      "Breastfeed where you can, and seek help from a lactation counsellor if it is difficult.",
      "Offer skin-to-skin contact and plenty of gentle, loving handling in the early days.",
      "Use antibiotics only when prescribed, since they are sometimes essential but are not for casual use.",
      "Keep up recommended vaccinations and routine baby check-ups for proven protection.",
      "Only use probiotics or supplements for your baby on the advice of your doctor.",
    ],
  },
  {
    eyebrow: "Talk it through",
    title: "Bringing your questions to the clinic",
    body: "Your doctor, midwife, or paediatrician can help you make sense of feeding, birth, and your baby's health.",
    tips: [
      "Ask your care team about feeding support that fits your situation and your baby.",
      "Raise any worries about a caesarean openly, knowing your team is there to support, not judge.",
      "Check the recommended vaccination schedule and routine check-ups for your baby.",
      "Ask before giving any probiotic or supplement, so it is right and safe for your child.",
      "Trust that no question about your baby's health is too small to ask.",
    ],
  },
];

export default function ImmunityMicrobiomePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">A HEALTHY START WITHIN</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Immunity & the microbiome</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Your baby's community of friendly microbes is seeded around birth and nurtured by breast milk and care, helping train a developing immune system, and every baby builds a healthy start whatever the birth route.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. The route of birth and way of feeding are shared as information, never as judgement; a safe birth and a loved baby are what matter most. Follow your own care team's guidance. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
