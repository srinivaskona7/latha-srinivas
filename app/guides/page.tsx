import Link from "next/link";
import { SectionTitle } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Guides — Baby Journey" };

interface Guide {
  href: string;
  icon: string;
  title: string;
  blurb: string;
}

interface Category {
  eyebrow: string;
  title: string;
  guides: Guide[];
}

/** India-focused educational guides, grouped by theme. Each links to a page. */
const CATEGORIES: Category[] = [
  {
    eyebrow: "Care & check-ups",
    title: "Your pregnancy care",
    guides: [
      { href: "/anc-visits", icon: "🩺", title: "Antenatal visits", blurb: "Visit schedule, routine tests, and what happens at each ANC contact." },
      { href: "/trimester-checklists", icon: "✅", title: "Trimester checklists", blurb: "What to book, take and arrange in each trimester." },
      { href: "/vaccinations", icon: "💉", title: "Vaccinations", blurb: "Maternal vaccines plus India’s UIP immunisation schedule." },
      { href: "/concerns", icon: "🩹", title: "Common concerns", blurb: "Anaemia, GDM, thyroid and more — what to screen for in India." },
      { href: "/high-risk", icon: "🛟", title: "High-risk pregnancy", blurb: "What it means, who needs extra care, and the reassurance behind it." },
      { href: "/infections", icon: "🦟", title: "Infections & safety", blurb: "Prevent UTIs, dengue, food-borne illness and TORCH infections." },
    ],
  },
  {
    eyebrow: "Body & wellbeing",
    title: "Looking after you",
    guides: [
      { href: "/diet-plan", icon: "🍲", title: "Indian diet plan", blurb: "Trimester thalis, key nutrients and GDM-friendly swaps." },
      { href: "/weight-gain", icon: "⚖️", title: "Healthy weight gain", blurb: "How much to gain by BMI, and where the weight goes." },
      { href: "/morning-sickness", icon: "🤢", title: "Morning sickness", blurb: "Practical, India-friendly relief for nausea and vomiting." },
      { href: "/sleep-comfort", icon: "🛌", title: "Sleep & comfort", blurb: "Best positions, pillows, and easing aches at night." },
      { href: "/yoga", icon: "🧘", title: "Prenatal yoga", blurb: "Safe trimester-wise asanas and calming pranayama." },
      { href: "/mental-wellness", icon: "🌸", title: "Mental wellness", blurb: "Emotional ups and downs, and where to find support." },
    ],
  },
  {
    eyebrow: "Baby & bonding",
    title: "Your baby",
    guides: [
      { href: "/kick-count", icon: "👣", title: "Counting kicks", blurb: "How and when to track movements — and when to act." },
      { href: "/garbha-sanskar", icon: "🪔", title: "Garbha Sanskar", blurb: "Prenatal bonding — tradition blended with the evidence." },
      { href: "/twins", icon: "👯", title: "Twins & multiples", blurb: "Extra care, nutrition and what to expect with multiples." },
      { href: "/baby-names", icon: "🔤", title: "Baby names", blurb: "100+ Indian names with meanings, by theme." },
    ],
  },
  {
    eyebrow: "Birth & beyond",
    title: "Birth & after",
    guides: [
      { href: "/labour-signs", icon: "⏱️", title: "Signs of labour", blurb: "True vs false labour, the stages, and when to go in." },
      { href: "/hospital-bag", icon: "🧳", title: "Hospital bag", blurb: "Checklist for mother, baby and documents — plus a birth plan." },
      { href: "/breastfeeding", icon: "🤱", title: "Breastfeeding", blurb: "Latch, supply, common problems and myth-busting." },
      { href: "/postpartum", icon: "🍼", title: "Postpartum & newborn", blurb: "Recovery, newborn care and the fourth trimester." },
    ],
  },
  {
    eyebrow: "Practical & rights",
    title: "Plans & entitlements",
    guides: [
      { href: "/schemes", icon: "🏛️", title: "Government schemes", blurb: "PMMVY, JSY, JSSK and benefits you may be entitled to." },
      { href: "/working-pregnancy", icon: "💼", title: "Working in pregnancy", blurb: "Maternity leave rights and staying well at work." },
      { href: "/cost-planning", icon: "💰", title: "Cost planning", blurb: "Budgeting delivery costs, insurance and free options." },
      { href: "/travel", icon: "✈️", title: "Travel safely", blurb: "Car, train and air travel tips for each trimester." },
    ],
  },
  {
    eyebrow: "Science & wellbeing",
    title: "Mind & calm",
    guides: [
      { href: "/meditation", icon: "🧎", title: "Meditation in pregnancy", blurb: "How meditation lowers stress hormones and benefits mother and baby." },
      { href: "/mindfulness", icon: "🌿", title: "Mindfulness", blurb: "Present-moment awareness to ease anxiety and fear of birth." },
      { href: "/breathing-science", icon: "💨", title: "The science of breathing", blurb: "How slow breathing calms the nervous system and helps in labour." },
      { href: "/stress-science", icon: "🌬️", title: "Stress & your baby", blurb: "What the science really says — reassuring, not alarming." },
      { href: "/gratitude-positivity", icon: "🙏", title: "Gratitude & positivity", blurb: "Positive emotion, optimism and gentle journaling." },
      { href: "/sleep-science", icon: "🌙", title: "The science of sleep", blurb: "Sleep, circadian rhythm and why side-sleeping matters." },
    ],
  },
  {
    eyebrow: "Science & wellbeing",
    title: "Sound & bonding",
    guides: [
      { href: "/music-and-baby", icon: "🎵", title: "Music & your baby", blurb: "Fetal hearing, soothing melodies and the Mozart myth." },
      { href: "/talking-to-baby", icon: "🗣️", title: "Talking to your baby", blurb: "Language in the womb and your voice they will know." },
      { href: "/reading-to-baby", icon: "📖", title: "Reading to your baby", blurb: "Stories and rhymes your baby can recognise after birth." },
      { href: "/singing-lullabies", icon: "🎶", title: "Singing & lullabies", blurb: "Why singing soothes you both — India's lullaby tradition." },
      { href: "/prenatal-bonding", icon: "💗", title: "Prenatal bonding", blurb: "The science of attachment before birth." },
      { href: "/partner-support", icon: "🤝", title: "Partner support", blurb: "How support buffers stress and improves outcomes." },
    ],
  },
  {
    eyebrow: "Science & wellbeing",
    title: "Nutrition science",
    guides: [
      { href: "/omega-dha", icon: "🐟", title: "Omega-3 & DHA", blurb: "Fats that build your baby's brain and eyes." },
      { href: "/folate-science", icon: "🥬", title: "Folate & neural tube", blurb: "Why folic acid early prevents serious defects." },
      { href: "/iron-science", icon: "🩸", title: "Iron & the brain", blurb: "Anaemia is common in India — and very treatable." },
      { href: "/vitamin-d", icon: "☀️", title: "Vitamin D & sunlight", blurb: "Widespread deficiency despite the sun, and how to fix it." },
      { href: "/probiotics", icon: "🥛", title: "Probiotics & curd", blurb: "Gut health and fermented foods — proven and not." },
      { href: "/blood-sugar", icon: "🍯", title: "Balancing blood sugar", blurb: "The science of glycaemic balance and GDM risk." },
    ],
  },
  {
    eyebrow: "Science & wellbeing",
    title: "Lifestyle & environment",
    guides: [
      { href: "/exercise-science", icon: "🚶", title: "The science of movement", blurb: "How regular activity helps mother and baby." },
      { href: "/hydration-science", icon: "💧", title: "Hydration", blurb: "Water, amniotic fluid and India's heat." },
      { href: "/sunlight-circadian", icon: "🌅", title: "Sunlight & body clock", blurb: "Morning light for sleep, mood and vitamin D." },
      { href: "/nature-wellbeing", icon: "🌳", title: "Nature & wellbeing", blurb: "How green time lowers stress and blood pressure." },
      { href: "/air-quality", icon: "🌫️", title: "Air quality", blurb: "Protecting your baby from pollution and indoor smoke." },
      { href: "/caffeine-science", icon: "☕", title: "Caffeine & chai", blurb: "What the evidence says — balanced, not alarmist." },
    ],
  },
  {
    eyebrow: "Science & wellbeing",
    title: "Body & beyond",
    guides: [
      { href: "/heat-safety", icon: "🌡️", title: "Heat & temperature", blurb: "Overheating, fever and staying cool safely." },
      { href: "/laughter-joy", icon: "😊", title: "Laughter & joy", blurb: "How positive emotion lowers stress hormones." },
      { href: "/epigenetics", icon: "🧬", title: "Epigenetics", blurb: "How the womb shapes lifelong health — empowering, not blaming." },
      { href: "/skin-to-skin", icon: "🤱", title: "Skin-to-skin & oxytocin", blurb: "Kangaroo care, bonding and the first hour." },
      { href: "/immunity-microbiome", icon: "🦠", title: "Immunity & microbiome", blurb: "How your baby's immune system is seeded." },
      { href: "/fetal-movement-science", icon: "👣", title: "Baby's movements", blurb: "What kick patterns mean and when they matter." },
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Knowledge for your journey
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Guides
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Caring, research-backed guides tailored to pregnancy care in India —
            from antenatal visits and nutrition to government benefits, yoga,
            labour, breastfeeding and newborn care.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <Link
          href="/plan"
          className="glass mb-10 flex items-center gap-4 rounded-4xl border border-terracotta/25 bg-peach/10 p-5 shadow-glass transition-transform hover:-translate-y-1"
        >
          <span aria-hidden className="text-3xl">🗺</span>
          <span className="flex-1">
            <span className="block font-display text-lg font-semibold text-plum">
              Your week-by-week pregnancy plan
            </span>
            <span className="mt-0.5 block text-sm leading-relaxed text-muted">
              Care, tests, nutrition, movement and bonding — all tied into one timeline that
              highlights exactly what to do now.
            </span>
          </span>
          <span className="text-sm font-medium text-terracotta">Open plan &rarr;</span>
        </Link>
      </SectionReveal>

      <div className="space-y-10">
        {CATEGORIES.map((cat, c) => (
          <section key={cat.title}>
            <SectionReveal delay={c * 0.04}>
              <SectionTitle eyebrow={cat.eyebrow} title={cat.title} className="mb-4" />
            </SectionReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.guides.map((g, i) => (
                <SectionReveal key={g.href} delay={i * 0.04}>
                  <Link
                    href={g.href}
                    className="glass flex h-full flex-col gap-2 rounded-4xl p-5 shadow-glass transition-transform hover:-translate-y-1"
                  >
                    <span aria-hidden className="text-3xl">
                      {g.icon}
                    </span>
                    <span className="font-display text-lg font-semibold text-plum">
                      {g.title}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{g.blurb}</p>
                    <span className="mt-auto pt-2 text-sm font-medium text-terracotta">
                      Read more &rarr;
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SectionReveal delay={0.2}>
        <p className="mt-10 text-center text-xs leading-relaxed text-muted">
          These guides are for general education only and are not a substitute
          for professional medical advice. Always follow your obstetrician and
          care team. In India, dial 108 for emergency ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
