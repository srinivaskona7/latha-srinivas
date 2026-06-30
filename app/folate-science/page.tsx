import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Folate & the neural tube — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "What folate does",
    body: "Folate is a B-vitamin (B9) that cells need to copy their DNA and divide. Folic acid is the man-made form used in supplements and fortified foods. Both feed the rapid cell growth of early pregnancy.",
    tips: [
      "Folate is essential whenever cells are dividing quickly, which is exactly what happens as an embryo forms.",
      "Folic acid is a stable form of the vitamin that the body converts into active folate.",
      "Because the demand rises sharply in pregnancy, ordinary food intake alone often falls short early on.",
      "Adequate folate also supports the making of healthy red blood cells, helping prevent one kind of anaemia.",
    ],
  },
  {
    eyebrow: "The neural tube",
    title: "How the spine and brain begin",
    body: "In the first weeks the embryo forms a structure called the neural tube, which closes to become the brain and spinal cord. Folate is critical while this tube is closing.",
    tips: [
      "The neural tube closes very early, often before many women realise they are pregnant.",
      "If the tube does not close fully, the result is a neural tube defect such as spina bifida or anencephaly.",
      "Good folate status during this closing window is the single best-studied way to lower that risk.",
      "Because the window is so early, intake before conception matters as much as intake after.",
    ],
  },
  {
    eyebrow: "What trials show",
    title: "The strong evidence behind folic acid",
    body: "Folic acid is one of the few pregnancy nutrients backed by strong trial evidence. Researchers tested it directly rather than only observing diets, which makes the conclusion firm.",
    tips: [
      "Randomised trials have found that folic acid taken around conception sharply reduces the chance of neural tube defects.",
      "Studies in women who had a previous affected pregnancy showed a clear protective effect from supplementation.",
      "On the strength of this evidence, health authorities worldwide recommend folic acid for women who may become pregnant.",
      "Population studies after countries began fortifying flour with folic acid found fewer neural tube defects, supporting the trial findings.",
      "The evidence is consistent enough that folic acid is treated as a routine recommendation, not an optional extra.",
    ],
  },
  {
    eyebrow: "Timing",
    title: "Start before, continue early",
    body: "Because the neural tube closes in the first weeks, folic acid works best when started before pregnancy and continued through the early stage. Waiting until a positive test can miss the key window.",
    tips: [
      "Ideally begin folic acid in the months before trying to conceive so stores are already topped up.",
      "Continue at least through the first trimester, when the neural tube is forming and closing.",
      "If a pregnancy is unplanned, start as soon as you know, since some benefit remains.",
      "Many clinicians advise any woman who could become pregnant to keep a regular folic acid habit.",
    ],
  },
  {
    eyebrow: "How much",
    title: "The usual amount",
    body: "A common general recommendation is around 400 micrograms of folic acid a day before and in early pregnancy. Some women need more, and that decision belongs with your clinician.",
    tips: [
      "Around 400 micrograms daily is the typical amount advised for women planning a pregnancy.",
      "Women with a past neural-tube-affected pregnancy, diabetes, or certain medicines may be advised a higher dose.",
      "Do not raise the dose on your own; a higher amount should be set by the clinician caring for you.",
      "Folic acid is usually taken as a small daily tablet, often combined with other pregnancy nutrients.",
      "Confirm the exact amount and product with your clinician rather than guessing.",
    ],
  },
  {
    eyebrow: "Food sources",
    title: "Folate-rich foods",
    body: "Food cannot fully replace a supplement in early pregnancy, but folate-rich foods round out your intake and bring other nutrients. Many everyday Indian foods are good sources.",
    tips: [
      "Dark leafy greens such as spinach (palak), methi, and amaranth (chaulai) are among the best natural folate sources.",
      "Legumes like rajma, chana, lentils (dal), and black-eyed peas (lobia) are rich in folate.",
      "Citrus fruits, oranges, and bananas add useful amounts.",
      "Fortified breakfast cereals and some fortified flours add folic acid to the diet.",
      "Steaming or lightly cooking greens preserves more folate than long boiling.",
    ],
  },
  {
    eyebrow: "Holding on to folate",
    title: "Cooking and storage tips",
    body: "Folate is fragile and can be lost through heat, water, and long storage. A few small kitchen habits keep more of it on your plate.",
    tips: [
      "Cook greens quickly with little water, as folate leaches into cooking water and breaks down with heat.",
      "Use fresh produce sooner rather than later, since folate drops as vegetables sit.",
      "Eat some folate sources raw where safe, such as well-washed fruit.",
      "Avoid throwing away nutrient-rich cooking water; use it in dals or soups when practical.",
    ],
  },
  {
    eyebrow: "Putting it together",
    title: "A simple folate plan",
    body: "The reliable approach is a daily supplement plus folate-rich meals, started early and confirmed with your clinician. Consistency matters more than any single perfect day.",
    tips: [
      "Take your folic acid at the same time each day so it becomes automatic.",
      "Build greens and legumes into regular meals for a steady food contribution.",
      "If you are planning a pregnancy, start the habit now rather than later.",
      "Review your folic acid plan with your clinician at your first pregnancy visit.",
    ],
  },
];

export default function FolateSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Early development</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Folate & the neural tube</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Folic acid is one of the most strongly evidenced steps in early pregnancy. Here is why it protects the forming spine and brain, when to start, how much, and which foods help.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. The right folic acid dose for you should be confirmed with the clinician caring for you.</p>
      </SectionReveal>
    </main>
  );
}
