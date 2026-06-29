import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Indian Diet Plan — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "First trimester",
    title: "Weeks 1–12: folic acid and gentle, frequent meals",
    body: "The first trimester is when the baby's brain and spine form, so folate is the headline nutrient. ICMR and FOGSI advise 400 mcg of folic acid daily from before conception through at least 12 weeks; women with a previous neural-tube-defect pregnancy, diabetes, or on certain medicines are often advised a higher 5 mg dose. Nausea is common, so small frequent meals usually sit better than three large ones.",
    tips: [
      "Take your daily folic acid tablet as prescribed — diet alone rarely meets the target in early pregnancy.",
      "Eat folate-rich Indian foods: palak and methi sabzi, sprouted moong, chana, oranges, and bananas.",
      "Fight morning sickness with dry foods on waking — khakhra, toast, or roasted chana — and sip ginger or jeera water.",
      "Sample veg thali: 2 phulka, palak dal, a small bowl of curd, methi-aloo sabzi, and a banana.",
      "Sample non-veg thali: 2 phulka, 1 boiled egg, fish or chicken curry (well cooked), curd, and a citrus fruit.",
    ],
  },
  {
    eyebrow: "Second trimester",
    title: "Weeks 13–27: calcium, iron and a bigger appetite",
    body: "Appetite returns and the baby grows fast, so this is the trimester to build the plate around protein, iron and calcium. FOGSI and the Ministry of Health (MoHFW) recommend calcium supplementation of about 1 g per day from the second trimester onward, alongside the iron-folic-acid (IFA) tablets supplied through the national programme. Add roughly 350 extra kcal per day from real food, not fried snacks.",
    tips: [
      "Pair every iron source with vitamin C — a squeeze of nimbu or an amla, guava or orange — to boost absorption.",
      "Keep chai and coffee away from meals; the tannins block iron uptake. Drink them between meals instead.",
      "Build calcium with curd, paneer, milk, ragi, til (sesame) chikki, and ragi or bajra rotis.",
      "Sample veg thali: 2 ragi or bajra rotis, rajma, a katori paneer bhurji, salad, curd, and a guava.",
      "Sample non-veg thali: 2 rotis, fish or chicken curry, palak dal, salad with lemon, and a glass of milk.",
    ],
  },
  {
    eyebrow: "Third trimester",
    title: "Weeks 28–40: steady energy and smaller, denser meals",
    body: "As the baby presses on the stomach, large meals cause heartburn and breathlessness, so shift to smaller, nutrient-dense meals every 2–3 hours. Keep protein, iron and calcium high for the baby's final growth and the mother's iron stores for delivery. Continue IFA and calcium tablets as prescribed and keep fibre and fluids up to ease constipation.",
    tips: [
      "Split intake into 5–6 small meals; finish dinner early and stay upright a while to reduce acidity.",
      "Snack smart: roasted chana, dates, peanut chikki, fruit, sprouts chaat, or a bowl of curd.",
      "Keep fibre and fluids high — whole dals, vegetables, fruit and 8–10 glasses of water — to prevent constipation.",
      "Sample veg thali: 1 roti + small rice, mixed-dal khichdi with vegetables, curd, and a handful of dates.",
      "Sample non-veg thali: small portion rice, egg curry or fish, lauki sabzi, salad, and curd.",
    ],
  },
  {
    eyebrow: "Iron",
    title: "Iron from Indian foods plus IFA tablets",
    body: "India runs one of the world's largest iron programmes — Anemia Mukt Bharat — because anaemia in pregnancy is widespread. Pregnant women are advised daily iron-folic-acid (IFA) tablets through this programme, and a high-quality plate adds to that. Plant (non-haem) iron is absorbed less efficiently, so pairing with vitamin C and cooking in iron kadhai both help.",
    tips: [
      "Iron-rich vegetarian foods: ragi, jaggery (gud), dates, green leafy sabzi (palak, methi), rajma, and chana.",
      "Non-veg iron sources: lean chicken, mutton (in moderation) and well-cooked fish add easily-absorbed haem iron.",
      "Always take IFA tablets as prescribed — food alone usually cannot correct or prevent pregnancy anaemia.",
      "Add lemon, amla or tomato to iron meals, and avoid tea or coffee for about an hour around them.",
    ],
  },
  {
    eyebrow: "Protein and calcium",
    title: "Daily protein and bone-building calcium",
    body: "Protein supports the baby's tissues and the mother's expanding blood volume, while calcium builds the baby's skeleton without draining the mother's bones. Indian kitchens cover both well through dals, dairy and millets. Calcium supplementation of about 1 g per day from the second trimester is recommended by FOGSI and MoHFW in addition to dietary sources.",
    tips: [
      "Protein every meal: dal, paneer, eggs, curd, sprouts, and chicken or fish for non-vegetarians.",
      "Combine cereals and pulses — dal-chawal, rajma-rice, idli, dhokla — to get a complete protein profile.",
      "Calcium foods: milk, curd, paneer, ragi, til, and small fish eaten with bones where you eat fish.",
      "Take your calcium tablet at a different time from your iron tablet, since they compete for absorption.",
    ],
  },
  {
    eyebrow: "Eat with care",
    title: "Foods to limit and pregnancy food myths",
    body: "Some Indian beliefs around food are stronger than the evidence. Normal amounts of ripe papaya and pineapple eaten as food are generally fine; the worry is mainly about very large amounts of raw or unripe papaya. The clearer, evidence-based cautions are around uncooked foods, certain fish, and excess caffeine.",
    tips: [
      "Limit raw or unripe papaya in large amounts; ripe papaya and pineapple in normal food quantities are usually fine.",
      "Avoid raw or unpasteurised milk and soft unpasteurised cheeses, raw eggs, and undercooked meat or fish.",
      "Limit high-mercury fish (shark, king mackerel, swordfish); prefer smaller, well-cooked fish like rohit or sardines.",
      "Cap caffeine — keep chai and coffee modest (about 200 mg/day), and skip alcohol and tobacco entirely.",
    ],
  },
  {
    eyebrow: "Hydration and food safety",
    title: "Clean water, safe food and staying hydrated",
    body: "Waterborne and food-borne infections are a real risk in many parts of India and hit harder in pregnancy. Drinking enough fluid also eases constipation, supports amniotic fluid and helps with the increased blood volume. The simplest protection is clean water and freshly cooked, hot food.",
    tips: [
      "Drink about 8–10 glasses of fluid a day — water, nimbu pani, coconut water, chaas, and milk.",
      "Use boiled, filtered or sealed bottled water; be cautious with ice and cut fruit from outside.",
      "Be wary of street food and chaat; choose freshly cooked, piping-hot food over items left standing.",
      "Wash fruit and vegetables well, and keep raw and cooked foods separate while cooking at home.",
    ],
  },
  {
    eyebrow: "GDM and weight",
    title: "Low-GI swaps and healthy weight gain",
    body: "Gestational diabetes (GDM) is common in Indian women, so the type of carbohydrate matters as much as the amount. Swapping polished white rice for millets and whole grains slows the sugar rise. Healthy weight gain depends on your starting weight, so use it as a guide rather than a fixed target and follow your obstetrician's advice.",
    tips: [
      "GDM-friendly swaps: choose low-GI millets — ragi, bajra, jowar, foxtail — over polished white rice.",
      "Prefer whole grains and dals over maida, sugary sweets and refined snacks to steady blood sugar.",
      "Typical total weight gain is around 10–12 kg for a normal-weight woman; less if overweight, more if underweight.",
      "Stay active with gentle walking after meals unless your doctor has advised bed rest.",
    ],
  },
];

export default function DietPlanPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Eating for two, the Indian way</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Indian diet plan</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">A trimester-by-trimester guide built around real Indian foods &mdash; everyday dals, sabzis, millets, curd and thalis &mdash; with vegetarian and non-vegetarian options, plus the national folic-acid, IFA and calcium guidance that supports a healthy pregnancy.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical or dietary advice. Every pregnancy is different &mdash; follow your obstetrician&apos;s and dietitian&apos;s guidance and national IFA and calcium supplementation programmes for your iron, folic-acid and calcium needs. In an emergency in India, dial 108.</p>
      </SectionReveal>
    </main>
  );
}
