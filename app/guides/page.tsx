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

/** India-focused educational guides. Each links to a dedicated page. */
const GUIDES: Guide[] = [
  {
    href: "/anc-visits",
    icon: "🩺",
    title: "Antenatal visits",
    blurb: "Your check-up roadmap — visit schedule, routine tests, and what happens at each ANC contact.",
  },
  {
    href: "/diet-plan",
    icon: "🍲",
    title: "Indian diet plan",
    blurb: "Trimester-wise meal ideas, regional thalis, and key nutrients from everyday Indian foods.",
  },
  {
    href: "/concerns",
    icon: "🩹",
    title: "Common concerns",
    blurb: "Anaemia, gestational diabetes, thyroid and more — what to know and screen for in India.",
  },
  {
    href: "/warning-signs",
    icon: "⚠️",
    title: "Warning signs",
    blurb: "Danger signs in pregnancy and exactly when to call 108 or reach the hospital.",
  },
  {
    href: "/vaccinations",
    icon: "💉",
    title: "Vaccinations",
    blurb: "Maternal vaccines plus India's UIP immunisation schedule from birth onward.",
  },
  {
    href: "/yoga",
    icon: "🧘",
    title: "Prenatal yoga",
    blurb: "Safe, trimester-wise asanas and pranayama to move gently with your breath.",
  },
  {
    href: "/garbha-sanskar",
    icon: "🪔",
    title: "Garbha Sanskar",
    blurb: "Prenatal bonding — music, voice, and calm, blending tradition with the evidence.",
  },
  {
    href: "/hospital-bag",
    icon: "🧳",
    title: "Hospital bag",
    blurb: "What to pack for mother, baby and documents — plus a simple birth plan.",
  },
  {
    href: "/schemes",
    icon: "🏛️",
    title: "Government schemes",
    blurb: "Maternity benefits you may be entitled to — PMMVY, JSY, JSSK and more.",
  },
  {
    href: "/postpartum",
    icon: "🤱",
    title: "Postpartum & newborn",
    blurb: "Recovery, breastfeeding and newborn care through the fourth trimester.",
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
            from antenatal visits and nutrition to government benefits, yoga, and
            newborn care.
          </p>
        </header>
      </SectionReveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {GUIDES.map((g, i) => (
          <SectionReveal key={g.href} delay={i * 0.05}>
            <Link
              href={g.href}
              className="glass flex h-full flex-col gap-2 rounded-4xl p-5 shadow-glass transition-transform hover:-translate-y-1"
            >
              <span aria-hidden className="text-3xl">
                {g.icon}
              </span>
              <SectionTitle eyebrow="" title={g.title} />
              <p className="text-sm leading-relaxed text-muted">{g.blurb}</p>
              <span className="mt-auto pt-2 text-sm font-medium text-terracotta">
                Read more &rarr;
              </span>
            </Link>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.2}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          These guides are for general education only and are not a substitute
          for professional medical advice. Always follow your obstetrician and
          care team. In India, dial 108 for emergency ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
