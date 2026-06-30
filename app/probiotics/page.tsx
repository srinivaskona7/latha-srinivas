import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Probiotics & fermented foods — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "What probiotics are",
    body: "Probiotics are live microbes, mostly bacteria, that can offer a health benefit when eaten in adequate amounts. Fermented foods naturally contain such microbes and have been part of Indian diets for generations.",
    tips: [
      "Probiotics are specific live microbes, not just any bacteria, and benefits can differ by strain.",
      "Fermented foods carry living cultures created when microbes break down sugars in the food.",
      "Many traditional Indian foods are fermented, so this is familiar territory, not a new fad.",
      "A food being fermented does not automatically make it a proven probiotic, but it can still support variety.",
    ],
  },
  {
    eyebrow: "Gut health",
    title: "Why the gut microbiome matters",
    body: "Your gut is home to trillions of microbes that help digest food, make some vitamins, and interact with the immune system. A varied, balanced gut community is generally seen as a good thing.",
    tips: [
      "Gut microbes help break down fibre and produce compounds that nourish the gut lining.",
      "The gut community interacts closely with the immune system, which is one reason it draws research interest.",
      "A diet rich in fibre and variety tends to support a more diverse gut community.",
      "Pregnancy brings natural shifts in the gut and the body, so digestion can change along the way.",
    ],
  },
  {
    eyebrow: "Indian foods",
    title: "Familiar fermented foods",
    body: "India has a rich tradition of fermented foods that bring live cultures to everyday meals. These are enjoyable, accessible ways to add fermented variety.",
    tips: [
      "Curd (dahi) is a classic source of live cultures and a staple in many homes.",
      "Idli and dosa batter ferment overnight, developing cultures before cooking.",
      "Fermented foods like dhokla, kanji, and some pickles add variety to the plate.",
      "Buttermilk (chaas) made from cultured curd is a light, familiar option.",
      "Choosing freshly set curd and properly fermented batter keeps quality and safety in mind.",
    ],
  },
  {
    eyebrow: "What studies show",
    title: "Evidence, framed cautiously",
    body: "Research on probiotics in pregnancy is active but mixed, and benefits often depend on the specific strain and situation. It is honest to say some areas look promising while many remain unproven.",
    tips: [
      "Trials suggest certain probiotic strains may help with some digestive complaints, though results vary by strain.",
      "Studies have explored probiotics for conditions like gestational diabetes and infections, with inconsistent findings.",
      "Reviews caution that benefits seen for one strain or dose may not apply to another.",
      "Much of the evidence is preliminary, so probiotics are best seen as a possible support, not a treatment.",
      "Researchers generally agree that more high-quality trials are needed before firm claims can be made.",
    ],
  },
  {
    eyebrow: "Honest limits",
    title: "What is and is not proven",
    body: "It helps to separate reasonable, low-risk habits from bold claims. Fermented foods can be a pleasant part of a varied diet, but they are not a cure-all.",
    tips: [
      "It is reasonable to enjoy traditional fermented foods as part of a balanced, varied diet.",
      "It is not proven that probiotics prevent or treat most pregnancy conditions on their own.",
      "Claims that a single product will fix digestion, immunity, or mood should be treated with healthy scepticism.",
      "Probiotics are not a substitute for evidence-based care like folic acid, iron, or antenatal visits.",
      "When in doubt, a varied whole-food diet does more reliable good than any single supplement.",
    ],
  },
  {
    eyebrow: "Feeding your gut",
    title: "Prebiotics and fibre",
    body: "The microbes you already have thrive on fibre, sometimes called prebiotics. Feeding them is often as useful as adding new ones through fermented foods.",
    tips: [
      "Whole grains, legumes, fruit, and vegetables provide fibre that feeds beneficial gut microbes.",
      "Foods like onions, garlic, bananas, and oats are traditional fibre-rich choices.",
      "A varied plant-based mix supports a more diverse gut community than a narrow diet.",
      "Increasing fibre gradually and drinking enough water helps avoid bloating.",
    ],
  },
  {
    eyebrow: "Safety",
    title: "Keeping fermented foods safe",
    body: "Fermentation and hygiene go hand in hand, especially in warm climates. Safe handling keeps the good microbes in and the harmful ones out.",
    tips: [
      "Use clean utensils and containers when setting curd or fermenting batter.",
      "Ferment and store foods at safe temperatures, and refrigerate once ready in hot weather.",
      "Avoid fermented foods that smell off, look spoiled, or have been left out too long.",
      "Be cautious with unpasteurised or street-sold fermented items where hygiene is uncertain.",
      "If you are considering a probiotic supplement, discuss the choice and dose with your clinician.",
    ],
  },
  {
    eyebrow: "Everyday habits",
    title: "A balanced, gut-friendly routine",
    body: "The sensible approach is variety: enjoy familiar fermented foods, feed your gut with fibre, and keep expectations realistic. Consistency and balance matter more than any single product.",
    tips: [
      "Include a small serving of curd or buttermilk in regular meals if it suits you.",
      "Build fibre-rich plants into most meals to support the microbes you already have.",
      "Treat fermented foods as one helpful part of a varied diet, not a magic fix.",
      "Raise any digestive worries or supplement questions with the clinician caring for you.",
    ],
  },
];

export default function ProbioticsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Gut health</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Probiotics & fermented foods</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Fermented foods like curd, idli, and dosa batter are part of Indian kitchens. Here is what probiotics are, what the research cautiously suggests, and what is and is not proven.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Probiotics are not a substitute for medical care; discuss any supplement with the clinician caring for you.</p>
      </SectionReveal>
    </main>
  );
}
