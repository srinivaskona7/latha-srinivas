import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Omega-3 & DHA for brain — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it matters",
    title: "DHA is a building block of the brain",
    body: "Docosahexaenoic acid (DHA) is an omega-3 fat that makes up a large share of the structural fat in the brain and the retina of the eye. During pregnancy your baby draws DHA from you to build these tissues.",
    tips: [
      "DHA is concentrated in the parts of brain cells that handle signalling, so a steady supply supports how neurons connect.",
      "The retina at the back of the eye is rich in DHA, which is why this fat is linked to early visual development.",
      "Your baby cannot make enough DHA alone and depends on what crosses the placenta from your diet and body stores.",
      "Most of the brain and eye DHA is laid down in the last trimester and the first months after birth, so intake stays important late in pregnancy.",
    ],
  },
  {
    eyebrow: "The transfer",
    title: "How DHA reaches your baby",
    body: "Omega-3 fats travel across the placenta to the growing baby, and the third trimester is when this transfer peaks. Your own stores act as a reserve that the baby can draw on.",
    tips: [
      "The placenta actively moves DHA from your blood to your baby, favouring it over many other fats.",
      "If your diet is low in omega-3s, your body taps its own reserves, which can leave you running low after birth.",
      "Breast milk also carries DHA, so what you eat continues to matter while feeding.",
      "Spreading omega-3 rich foods across the week gives a more even supply than one large meal.",
    ],
  },
  {
    eyebrow: "Food first",
    title: "Where DHA and omega-3s come from",
    body: "Oily fish are the richest direct source of DHA. Plant foods provide ALA, a shorter omega-3 that the body converts to DHA only in small amounts, so vegetarians may need to plan more carefully.",
    tips: [
      "Low-mercury oily fish such as sardines, mackerel, and Indian salmon (rawas) are among the most concentrated food sources of DHA.",
      "Walnuts, flaxseed (alsi), chia seeds, and mustard oil supply ALA, a plant omega-3 the body partly turns into DHA.",
      "Algae-derived DHA is made from the same algae fish eat and is a fully vegetarian direct source.",
      "Soaking and grinding flaxseed into chutneys or adding it to roti dough makes its omega-3 easier to use.",
      "Pairing plant omega-3s with an overall balanced diet helps the limited ALA-to-DHA conversion work better.",
    ],
  },
  {
    eyebrow: "For vegetarians",
    title: "Building DHA on an Indian vegetarian plate",
    body: "Many families in India eat little or no fish, so plant omega-3s and algae sources carry more weight. A little planning keeps intake steady without meat or fish.",
    tips: [
      "Add a daily spoon of ground flaxseed or chia to curd, poha, or smoothies for a regular ALA dose.",
      "Use mustard oil or a flax oil drizzle in cooking, as both carry plant omega-3s.",
      "Walnuts make an easy mid-morning snack that doubles as an omega-3 source.",
      "Algae-based DHA supplements are vegetarian and worth discussing with your clinician if your fish intake is low.",
      "Eggs from omega-3 enriched hens are another option for those who eat eggs.",
    ],
  },
  {
    eyebrow: "What studies show",
    title: "Evidence on cognition and preterm risk",
    body: "Researchers have studied omega-3s in pregnancy across many trials. The findings are encouraging in places and uncertain in others, so they are best read as patterns rather than promises.",
    tips: [
      "Reviews of trials suggest that omega-3 supplementation in pregnancy may reduce the chance of early preterm birth in some women.",
      "Studies linking maternal DHA to later child cognition show mixed results, with some finding small benefits and others finding little difference.",
      "Trials have found that women with very low baseline omega-3 levels tend to show the clearest benefit from adding it.",
      "Observational studies associate regular oily-fish eating with favourable eye and brain development, though they cannot prove cause alone.",
      "Because results vary, experts treat adequate omega-3 intake as a sensible goal rather than a guaranteed boost.",
    ],
  },
  {
    eyebrow: "Safety",
    title: "Fish, mercury, and sensible limits",
    body: "Fish is a top DHA source, but some large fish carry mercury that can harm a developing nervous system. The aim is to choose smaller, lower-mercury fish and keep portions moderate.",
    tips: [
      "Favour small oily fish like sardines and mackerel, which are lower in mercury than large predatory fish.",
      "Limit high-mercury fish such as shark, swordfish, and king mackerel during pregnancy.",
      "Cook fish thoroughly, as raw or undercooked seafood carries an infection risk in pregnancy.",
      "Rinse, store, and handle fish carefully to avoid spoilage in warm climates.",
    ],
  },
  {
    eyebrow: "Supplements",
    title: "When a supplement may help",
    body: "Food remains the foundation, but a DHA or fish-oil supplement can fill a gap when diet falls short. Dose and product choice should be guided by your own clinician.",
    tips: [
      "If you eat little fish or follow a vegetarian diet, a DHA supplement may help reach a steady intake.",
      "Algae-based DHA capsules suit vegetarians and avoid any fishy aftertaste.",
      "Choose reputable, purified products to reduce the chance of contaminants, and confirm the brand with your clinician.",
      "Tell your clinician about all supplements, as omega-3s can interact with blood-thinning medicines.",
      "Do not start high-dose supplements on your own; have the dose confirmed with the person caring for you.",
    ],
  },
  {
    eyebrow: "Everyday habits",
    title: "Making omega-3s a routine",
    body: "Small, repeatable habits beat occasional big efforts. Weaving omega-3 foods into normal meals keeps intake reliable across the whole pregnancy.",
    tips: [
      "Keep a jar of ground flaxseed in the fridge and add a spoon to one meal each day.",
      "Stock walnuts and a small fish or algae option so the easy choice is also the omega-3 choice.",
      "Plan one or two oily-fish meals a week if you eat fish, sticking to low-mercury types.",
      "Combine omega-3 foods with a varied, colourful plate so your baby gets a broad mix of nutrients.",
    ],
  },
];

export default function OmegaDhaPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Brain & eyes</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Omega-3 & DHA for brain</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">DHA is an omega-3 fat your baby uses to build the brain and eyes. Here is how it works, where to find it (including Indian vegetarian sources), and what the research really says.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Confirm any supplement and its dose with the clinician caring for you before starting.</p>
      </SectionReveal>
    </main>
  );
}
