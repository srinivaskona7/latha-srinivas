import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Hospital Bag — Baby Journey" };

interface Category {
  eyebrow: string;
  title: string;
  items: string[];
}

const CHECKLIST: Category[] = [
  {
    eyebrow: "Keep in one folder",
    title: "Documents",
    items: [
      "Aadhaar card (mother) and a photocopy",
      "MCP / antenatal card with all reports and scan films (USG, blood tests)",
      "Blood group card for mother (and partner, if available)",
      "Hospital registration slip or patient ID",
      "Insurance / ECHS / CGHS / Ayushman Bharat card and policy number",
      "Cashless pre-authorisation papers, if applicable",
      "Referral letter from your obstetrician, if any",
      "Some cash plus a UPI-ready phone for quick payments",
    ],
  },
  {
    eyebrow: "Comfort and recovery",
    title: "For mother",
    items: [
      "Loose nighties or kurtas with front-open buttons for easy feeding",
      "Maternity pads / sanitary napkins (carry plenty)",
      "Toiletries: toothbrush, toothpaste, soap, comb, lip balm",
      "A dupatta or shawl for warmth and modesty",
      "Easy-to-wear slippers or flip-flops",
      "A couple of nursing bras",
      "A comfortable going-home outfit",
      "Phone and charger with a long cable",
      "Light snacks, dry fruits and a water bottle",
    ],
  },
  {
    eyebrow: "First few days",
    title: "For baby",
    items: [
      "Soft cotton clothes and onesies (newborn size)",
      "Swaddle or receiving blankets",
      "Mittens, caps and socks to keep baby warm",
      "Newborn nappies / diapers",
      "Soft cotton towels",
      "Mild, fragrance-free baby wipes",
      "A warm baby blanket",
    ],
  },
  {
    eyebrow: "Support person",
    title: "For partner / companion",
    items: [
      "Snacks and a water bottle for the wait",
      "A spare change of clothes",
      "A written list of emergency contacts and the doctor's number",
    ],
  },
];

const BIRTH_PLAN: string[] = [
  "Preferences for labour: positions, movement, music or a calm environment",
  "Pain-relief options you are open to (or wish to avoid) — discuss with your doctor",
  "Who will be present with you during labour and delivery",
  "Your feeding choice — we plan exclusive breastfeeding",
  "Skin-to-skin contact and early initiation of breastfeeding after birth",
  "Delayed cord clamping, if medically appropriate",
  "A note that all preferences stay flexible — your and baby's safety comes first",
];

export default function HospitalBagPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Ready by week 36</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Hospital bag</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Babies in India often arrive a little early, so it helps to pack by around 36 weeks and keep the bag by the
            door. Tick off each list below, and keep every document together in one folder so nothing is hunted for at
            the last minute. <Badge tone="sage">Pack early</Badge>
          </p>
        </header>
      </SectionReveal>
      <div className="space-y-6">
        {CHECKLIST.map((c, i) => (
          <SectionReveal key={c.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={c.eyebrow} title={c.title} />
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
        <SectionReveal delay={0.3}>
          <GlassCard>
            <SectionTitle eyebrow="Your preferences" title="Birth plan" />
            <ul className="mt-4 space-y-2">
              {BIRTH_PLAN.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </SectionReveal>
      </div>
      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Always adapt this list to your hospital’s own instructions and your obstetrician’s advice. This page
          is for general education only and is not medical advice. In India, dial 108 for emergency ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
