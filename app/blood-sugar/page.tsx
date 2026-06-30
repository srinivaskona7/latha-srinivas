import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Balancing blood sugar — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The science",
    title: "What blood sugar is",
    body: "Blood sugar is the glucose carried in your blood to fuel your cells. After you eat carbohydrates, glucose rises, and the hormone insulin helps move it into cells. Keeping this in balance is what we mean by glycaemic balance.",
    tips: [
      "Carbohydrate foods break down into glucose, which raises blood sugar after a meal.",
      "Insulin acts like a key that lets glucose move from the blood into your cells for energy.",
      "Blood sugar that rises gently and returns to normal smoothly reflects good glycaemic balance.",
      "Large, rapid spikes and crashes are the pattern that healthy eating tries to soften.",
    ],
  },
  {
    eyebrow: "Pregnancy shift",
    title: "Why pregnancy changes blood sugar",
    body: "Pregnancy hormones make the body somewhat more resistant to insulin, so it has to work harder to keep blood sugar steady. For most this is managed, but for some it tips into gestational diabetes.",
    tips: [
      "Hormones from the placenta naturally reduce how well insulin works as pregnancy advances.",
      "The body usually responds by making more insulin to keep blood sugar in range.",
      "When the body cannot keep up, blood sugar rises and gestational diabetes can develop.",
      "This is why blood-sugar screening is a routine part of antenatal care.",
    ],
  },
  {
    eyebrow: "Higher risk",
    title: "South Asians face greater risk",
    body: "Gestational diabetes is more common in South Asian women, including those of Indian heritage, than in many other groups. Knowing this helps you take screening and balanced eating seriously.",
    tips: [
      "Studies report higher rates of gestational diabetes among South Asian women compared with several other populations.",
      "A family history of diabetes, which is common in India, adds to the risk.",
      "Carrying extra weight before pregnancy or gaining a lot during it raises the risk further.",
      "Because of this, many clinicians screen South Asian women carefully, sometimes earlier.",
      "Higher risk is not a verdict; balanced eating and care meaningfully help.",
    ],
  },
  {
    eyebrow: "Glycaemic index",
    title: "Fast versus slow carbohydrates",
    body: "Not all carbohydrates affect blood sugar the same way. The glycaemic index describes how quickly a food raises blood sugar; lower-GI foods release glucose more gently.",
    tips: [
      "High-GI foods like white rice, refined flour (maida), and sugary sweets raise blood sugar quickly.",
      "Lower-GI choices like whole grains, millets (bajra, ragi, jowar), legumes, and most vegetables release glucose more slowly.",
      "Pairing carbohydrates with protein, fat, or fibre slows the rise in blood sugar.",
      "How a food is cooked and processed changes its effect, so whole forms are often gentler than refined ones.",
      "Swapping some refined grains for whole grains and legumes is a simple way to lower the overall glycaemic load.",
    ],
  },
  {
    eyebrow: "What studies show",
    title: "Evidence on low-GI eating",
    body: "Researchers have studied dietary patterns and blood sugar in pregnancy. The findings support gentle, balanced eating, while reminding us that diet is one part of overall care.",
    tips: [
      "Trials suggest that lower-GI eating patterns can help smooth blood-sugar rises after meals in pregnancy.",
      "Studies link diets high in refined carbohydrates and sugary drinks with a greater risk of high blood sugar.",
      "Research on gestational diabetes finds that balanced eating, together with activity, helps many women manage blood sugar.",
      "Reviews note that no single food is decisive; the overall pattern across the day matters most.",
      "Because diet alone is not always enough, evidence supports combining it with monitoring and medical care when advised.",
    ],
  },
  {
    eyebrow: "The plate method",
    title: "A simple way to balance meals",
    body: "The plate method is an easy visual guide to balanced meals without counting. It naturally lowers the glycaemic load by leaning on vegetables, protein, and whole grains.",
    tips: [
      "Fill about half the plate with non-starchy vegetables like greens, beans, gourd, and salad.",
      "Use about a quarter for protein such as dal, paneer, egg, fish, or chicken.",
      "Keep about a quarter for whole-grain or starchy foods like brown rice, millet, or whole-wheat roti.",
      "Add a little healthy fat and a small portion of fruit rather than sugary desserts.",
      "Drinking water rather than sugary drinks keeps the meal's glycaemic load lower.",
    ],
  },
  {
    eyebrow: "Daily rhythm",
    title: "Timing, portions, and movement",
    body: "How and when you eat matters alongside what you eat. Steady portions and gentle activity help your body keep blood sugar in a smoother range.",
    tips: [
      "Eating regular, moderate meals rather than skipping then overeating helps avoid large swings.",
      "Spreading carbohydrates across the day instead of one big load eases each rise.",
      "A short walk after meals, if your clinician agrees it is safe, can help blunt the post-meal rise.",
      "Being mindful of portion sizes for rice, breads, and sweets keeps the overall load gentle.",
      "Keeping a consistent eating routine makes blood sugar easier to manage day to day.",
    ],
  },
  {
    eyebrow: "Care and limits",
    title: "Working with your clinician",
    body: "Balanced eating supports blood sugar, but it does not replace medical care. Screening, monitoring, and any treatment should be guided by the clinician caring for you.",
    tips: [
      "Attend your blood-sugar screening so any rise is found and managed early.",
      "If gestational diabetes is diagnosed, follow the monitoring and care plan your clinician sets.",
      "Do not start or stop any diabetes medicine on your own; that decision belongs with your clinician.",
      "Use this page to understand the science, and bring your questions to your antenatal visits.",
      "Every pregnancy differs, so your own plan should be tailored with your care team.",
    ],
  },
];

export default function BloodSugarPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Glycaemic balance</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Balancing blood sugar</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Understanding the science of blood sugar helps you eat in a way that keeps it steady. Gestational diabetes is more common in South Asians, so here is how glycaemic balance, low-GI eating, and the plate method work.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page explains the science of blood sugar for education only and is not medical advice. Screening, monitoring, and any treatment for blood sugar should be confirmed with the clinician caring for you.</p>
      </SectionReveal>
    </main>
  );
}
