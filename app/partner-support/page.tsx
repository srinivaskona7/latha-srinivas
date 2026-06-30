import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Partner support & the science — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why support matters",
    title: "Partners shape the pregnancy too",
    body: "A supportive partner is one of the strongest sources of comfort during pregnancy, easing the emotional and practical load a mother carries.",
    tips: [
      "Pregnancy brings physical demands and big emotions, and steady support helps the mother feel safe and cared for.",
      "Support is not only practical help but also feeling heard, valued, and not alone in the journey.",
      "When a mother feels supported, she is freer to rest, recover, and connect with her baby.",
      "Partner involvement also helps the partner build their own bond with the baby before birth.",
    ],
  },
  {
    eyebrow: "What the research shows",
    title: "Support buffers stress and protects mood",
    body: "Studies suggest that strong partner and social support during pregnancy is linked with lower stress, reduced risk of depression, and better outcomes for mother and baby.",
    tips: [
      "Research suggests women with good social and partner support report lower anxiety and stress during pregnancy.",
      "Studies indicate that strong support is associated with a reduced risk of antenatal and postnatal depression.",
      "Reviews link social support in pregnancy with healthier maternal wellbeing and more positive birth experiences.",
      "The evidence points to support acting as a buffer that softens the impact of life's stresses on a pregnant mother.",
    ],
  },
  {
    eyebrow: "Practical help",
    title: "Sharing the everyday load",
    body: "Much of the support a partner gives is simple and practical, lightening daily tasks so the mother can rest and recover.",
    tips: [
      "Take on more of the cooking, cleaning, and errands, especially when she is tired or unwell.",
      "Help with appointments by attending scans and check-ups and remembering questions to ask.",
      "Make sure she has time to rest, nap, and take breaks without guilt.",
      "Look ahead together at practical preparations like the hospital bag and plans for the early weeks.",
    ],
  },
  {
    eyebrow: "Emotional support",
    title: "Being present and listening",
    body: "Emotional support is about presence and understanding, and it can matter as much as any practical task.",
    tips: [
      "Listen to her feelings without rushing to fix everything, as feeling heard is itself a comfort.",
      "Offer reassurance and patience through mood changes, worries, and physical discomfort.",
      "Check in regularly with simple questions about how she is feeling that day.",
      "Notice and gently name signs of low mood or anxiety, and encourage seeking help when needed.",
    ],
  },
  {
    eyebrow: "Bonding with the bump",
    title: "Building your own connection",
    body: "A partner can form a real bond with the baby before birth, which deepens connection for the whole family.",
    tips: [
      "Talk and sing to the bump so your baby grows familiar with your voice too.",
      "Place a hand on the bump to feel kicks and movements and share those moments together.",
      "Join in reading, music, or quiet time with the baby as a shared ritual.",
      "Take part in choosing names and imagining your life together as a family.",
    ],
  },
  {
    eyebrow: "Indian context",
    title: "Support within the joint family",
    body: "In many Indian homes, support comes from a wider circle, and a partner can help make sure that circle truly lifts the mother up.",
    tips: [
      "Grandparents, siblings, and extended family can share care, cooking, and companionship during pregnancy.",
      "A partner can help balance well-meaning advice so the mother does not feel overwhelmed by it.",
      "Including family in scans, celebrations, and preparations builds a warm support network for the baby.",
      "The partner can act as the mother's advocate, ensuring her wishes and comfort come first.",
    ],
  },
  {
    eyebrow: "Caring for the carer",
    title: "Partners need support too",
    body: "Partners experience their own worries and adjustments, and looking after their wellbeing helps them support the mother better.",
    tips: [
      "It is normal for partners to feel anxious or unsure, and acknowledging this is healthy.",
      "Resting, staying connected with friends, and sharing feelings help partners stay steady.",
      "Learning about pregnancy and birth together can ease worry and build confidence.",
      "A partner who feels supported is better able to be a calm, reliable presence for the mother.",
    ],
  },
];

export default function PartnerSupportPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Together through pregnancy</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Partner support & the science</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">A supportive partner can buffer stress, protect mood, and improve outcomes for mother and baby. Here is what the science says about support in pregnancy, plus practical ways partners can help and bond with the bump.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education and emotional wellbeing only and is not medical advice. If either parent feels persistently low or anxious, please speak with your doctor.</p>
      </SectionReveal>
    </main>
  );
}
