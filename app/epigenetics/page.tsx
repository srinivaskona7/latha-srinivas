import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Epigenetics & fetal programming — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The big idea",
    title: "The womb is baby's first environment",
    body: "Long before birth, the world your baby experiences inside the womb begins to shape how their body grows and settles into its rhythms.",
    tips: [
      "Your baby's genes are like a script, while the womb environment helps decide which lines are read more loudly or softly.",
      "This shaping is normal and ongoing, and it is happening gently in every healthy pregnancy.",
      "The idea is about tendencies and patterns over a lifetime, not about fixed outcomes set in stone.",
      "Understanding it can feel empowering, because some of what shapes your baby is within everyday reach.",
      "It is a reason to be kind to yourself and well supported, not a reason to worry or blame.",
    ],
  },
  {
    eyebrow: "Epigenetics",
    title: "Genes plus the switches that read them",
    body: "Epigenetics is the study of how the body turns genes up or down without changing the genes themselves.",
    tips: [
      "Think of genes as instruments and epigenetics as the volume dial, deciding how strongly each one plays.",
      "Nutrition, stress, and the surrounding environment can nudge these dials during development.",
      "Your baby inherits a fixed set of genes, but how those genes are used can be influenced over time.",
      "These adjustments are part of normal growth and help the body fine-tune itself to the world it expects.",
      "It is a gentle, biological tuning process, not a flaw or a fault in anyone.",
    ],
  },
  {
    eyebrow: "DOHaD & Barker",
    title: "Where the idea comes from",
    body: "The thinking here is often called DOHaD, the Developmental Origins of Health and Disease, and it grew from work by the researcher David Barker.",
    tips: [
      "The Barker hypothesis proposed that conditions in early life, including before birth, can influence long-term health tendencies.",
      "DOHaD is the broader modern name for studying how early development shapes later wellbeing.",
      "The core message is that early environments matter, while later life, choices, and care matter too.",
      "It places pregnancy within a whole life, rather than treating it as the only thing that counts.",
      "It is a hopeful framework, because it highlights moments where gentle support can make a difference.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What studies suggest, carefully read",
    body: "Researchers have followed large groups of people over many years to understand these early-life patterns.",
    tips: [
      "Studies suggest that early nutrition and a baby's growth in the womb are associated with later health tendencies in populations.",
      "Evidence indicates that the body can adapt during development in ways that reflect the environment it senses.",
      "Long-term follow-up research has found links across groups, while never predicting the path of any single child.",
      "Trials of better maternal nutrition and care have found benefits for pregnancy outcomes, supporting gentle intervention.",
      "These findings describe averages across many people and should be read as encouragement, not as a verdict on one family.",
    ],
  },
  {
    eyebrow: "Not your fault",
    title: "Empowering, never a source of blame",
    body: "It is important to hold this knowledge gently, because so much of pregnancy is outside any mother's control.",
    tips: [
      "Many factors, including income, access to care, and circumstance, shape pregnancy and are not a mother's fault.",
      "These patterns describe groups of people, so they can never be used to blame an individual mother for an outcome.",
      "Doing your best with what you have is exactly enough, and worry itself is not a failing.",
      "The aim is to feel informed and supported, not anxious or judged.",
      "Be as gentle with yourself as you would be with someone you love who is expecting.",
    ],
  },
  {
    eyebrow: "What helps",
    title: "What mothers can gently influence",
    body: "Within everyday life there are caring, ordinary habits that support a healthy womb environment.",
    tips: [
      "Eating a varied, balanced diet, including local dals, vegetables, fruit, and whole grains, supports steady nourishment.",
      "Taking the supplements your doctor advises, such as folic acid and iron, helps cover key nutritional needs.",
      "Resting well and finding gentle ways to ease stress support a calmer environment for your baby.",
      "Attending your routine antenatal check-ups helps catch and manage anything that needs attention early.",
      "Avoiding tobacco, alcohol, and unprescribed medicines protects this sensitive period of development.",
    ],
  },
  {
    eyebrow: "Beyond birth",
    title: "Early life keeps shaping health too",
    body: "The womb is a beginning, and the months and years after birth continue to shape a child's wellbeing.",
    tips: [
      "Feeding, loving care, and a safe home after birth all continue this gentle shaping of health.",
      "Breastfeeding, where possible, and good early nutrition support a child's growth in the first years.",
      "Warm, responsive care and play help a child's brain and emotions develop well.",
      "Health is built across a whole childhood, so no single moment carries the entire story.",
      "This longer view takes pressure off any one stage and shares it across time.",
    ],
  },
  {
    eyebrow: "Talk it through",
    title: "Bringing questions to your clinician",
    body: "Your doctor or midwife can help you make sense of this in the context of your own pregnancy.",
    tips: [
      "Ask your clinician which nutrition and supplement steps make the most sense for you specifically.",
      "Mention any worries about diet, weight, or stress so they can offer practical, personalised support.",
      "Bring up family history calmly, since your care team can advise on what, if anything, it changes.",
      "Use routine visits to ask the small questions that have been on your mind.",
      "Trust that your care team would rather you ask than carry a worry alone.",
    ],
  },
];

export default function EpigeneticsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">BABY'S FIRST ENVIRONMENT</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Epigenetics & fetal programming</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">The womb environment can gently shape your baby's lifelong health tendencies, and understanding this is meant to be empowering and never a source of blame, because so much of pregnancy is shaped by circumstance and care.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. These patterns describe groups of people and never predict or judge any single pregnancy. Discuss your own care with your doctor or midwife. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
