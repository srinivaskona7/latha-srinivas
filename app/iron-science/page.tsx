import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Iron, anaemia & the brain — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The basics",
    title: "What iron does",
    body: "Iron is the core of haemoglobin, the protein in red blood cells that carries oxygen around your body and to your baby. In pregnancy your blood volume rises, so your iron need climbs too.",
    tips: [
      "Haemoglobin uses iron to bind oxygen in the lungs and release it to tissues, including the placenta.",
      "Pregnancy expands your blood volume, which means you need more iron just to keep haemoglobin levels up.",
      "Your baby also stores iron before birth to use in the first months of life.",
      "When iron runs low, the body makes fewer or smaller red cells, and oxygen delivery suffers.",
    ],
  },
  {
    eyebrow: "Iron and the brain",
    title: "Why iron matters for development",
    body: "A developing brain needs oxygen and iron itself to build cells and the chemicals nerves use to signal. Iron is woven into the early wiring of the brain.",
    tips: [
      "Steady oxygen delivery, which depends on iron, supports the energy-hungry work of building a brain.",
      "Iron is used directly in processes that help nerve cells form their signalling chemicals.",
      "Early iron status is studied for its links to later attention, learning, and development.",
      "Because brain growth is fast and continuous, a reliable iron supply matters throughout pregnancy.",
    ],
  },
  {
    eyebrow: "A common problem",
    title: "Anaemia is widespread in India",
    body: "Anaemia, most often from iron deficiency, is very common among pregnant women in India. Recognising it early is the first step to treating it.",
    tips: [
      "National surveys in India have repeatedly found a high share of pregnant women living with anaemia.",
      "Diets low in well-absorbed iron, frequent pregnancies, and infections all contribute to the high rates.",
      "Symptoms like tiredness, breathlessness, and pallor can be easy to dismiss but deserve a check.",
      "A simple blood test for haemoglobin is the usual way anaemia is found at antenatal visits.",
      "Catching anaemia early gives the most time to correct it before delivery.",
    ],
  },
  {
    eyebrow: "What studies show",
    title: "Evidence linking anaemia to outcomes",
    body: "Researchers have studied maternal iron and anaemia in many populations. The patterns are consistent enough to take seriously, while individual risk still varies.",
    tips: [
      "Observational studies associate moderate-to-severe maternal anaemia with higher risks of low birth weight and preterm birth.",
      "Trials of iron supplementation have found it raises haemoglobin and reduces the chance of anaemia at delivery.",
      "Studies link early-life iron status to aspects of child development, supporting attention to iron in pregnancy.",
      "Researchers note that both too little and excessive iron can be unhelpful, which is why testing guides treatment.",
      "Because findings come from many settings, adequate iron is treated as an important, well-supported goal.",
    ],
  },
  {
    eyebrow: "Food sources",
    title: "Where iron comes from",
    body: "Iron in food comes in two forms: heme iron from animal foods, which is absorbed easily, and non-heme iron from plants, which is absorbed less well but still valuable. Indian kitchens offer both.",
    tips: [
      "Animal sources like lean meat, liver, and eggs supply heme iron, the most easily absorbed form.",
      "Plant sources include legumes (rajma, chana, dal), dark greens (palak, methi), and jaggery (gur).",
      "Cooking in iron utensils such as a kadhai can add a little extra iron to acidic dishes.",
      "Dried fruits like raisins and dates, and seeds like sesame (til), add useful non-heme iron.",
      "Combining several iron sources across the day helps make up for lower absorption from plants.",
    ],
  },
  {
    eyebrow: "Absorption",
    title: "Getting more from the iron you eat",
    body: "How you combine foods strongly affects how much iron your body absorbs. A few pairings can meaningfully improve it, especially on a vegetarian diet.",
    tips: [
      "Pair iron-rich foods with vitamin C sources like lemon, amla, guava, or tomato to boost non-heme iron absorption.",
      "Avoid tea and coffee with meals, as their tannins bind iron and reduce how much you take in.",
      "Leave a gap between calcium-rich foods or supplements and your main iron-rich meal, since calcium competes with iron.",
      "A squeeze of lemon over dal or greens is a simple way to raise absorption.",
      "Soaking and sprouting legumes can lower compounds that block iron uptake.",
    ],
  },
  {
    eyebrow: "Supplements",
    title: "When iron tablets are advised",
    body: "Diet alone often cannot meet pregnancy iron needs, so iron supplements are commonly recommended. The dose and form should be set by your clinician based on your blood results.",
    tips: [
      "Iron and folic acid tablets are widely provided in Indian antenatal programmes.",
      "If a blood test shows anaemia, your clinician may advise a treatment dose rather than the routine amount.",
      "Take iron as directed, and ask your clinician how to manage common effects like constipation or nausea.",
      "Do not double up or stop iron on your own; changes should be discussed with the person caring for you.",
      "Bring any other supplements to your clinician's attention, as some affect iron absorption.",
    ],
  },
  {
    eyebrow: "Everyday habits",
    title: "Building an iron-friendly routine",
    body: "Small, steady habits make iron intake reliable. The aim is to eat iron-rich foods, pair them wisely, and keep up any prescribed tablets.",
    tips: [
      "Add a vitamin C food to at least one iron-rich meal each day.",
      "Keep tea and coffee for between meals rather than with them.",
      "Include a legume or green leafy vegetable in your daily plan.",
      "Attend antenatal visits so your haemoglobin can be checked and treatment adjusted if needed.",
    ],
  },
];

export default function IronSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Oxygen & growth</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Iron, anaemia & the brain</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Iron carries oxygen to you and your baby and supports brain development. Anaemia is common in India, so here is the science, the evidence, and practical ways to absorb more iron.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Any iron dose or treatment for anaemia should be confirmed with the clinician caring for you, based on your own blood tests.</p>
      </SectionReveal>
    </main>
  );
}
