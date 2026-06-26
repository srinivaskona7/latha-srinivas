import Link from "next/link";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Maternal Health — Baby Journey" };

interface HealthSection {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
  href?: string;
  hrefLabel?: string;
}

const SECTIONS: HealthSection[] = [
  {
    eyebrow: "Fuel for two",
    title: "Nutrition",
    body: "A varied, balanced diet supports your baby's growth and keeps your own energy steady. Focus on whole grains, dals and pulses, dairy, fruits, and plenty of vegetables, and take any supplements your clinician recommends.",
    tips: [
      "Eat small, frequent meals to ease nausea and heartburn.",
      "Include an iron and a vitamin-C source together to boost absorption.",
      "Take folic acid and other prescribed supplements consistently.",
    ],
    href: "/nutrition",
    hrefLabel: "Explore the nutrition guide",
  },
  {
    eyebrow: "Stay refreshed",
    title: "Hydration",
    body: "Your blood volume rises in pregnancy, so your body needs more fluid. Good hydration supports digestion, reduces swelling and constipation, and helps prevent urinary infections.",
    tips: [
      "Aim for regular sips through the day rather than large amounts at once.",
      "Keep a water bottle nearby as a gentle reminder.",
      "Increase fluids in hot weather or after activity.",
    ],
  },
  {
    eyebrow: "Rest & restore",
    title: "Sleep",
    body: "Quality rest helps your body adapt to the demands of pregnancy. Sleep needs can change trimester to trimester, and side-sleeping (especially the left) is often most comfortable later on.",
    tips: [
      "Use a pillow between your knees or under your bump for support.",
      "Wind down with a calm, screen-light routine before bed.",
      "Short daytime rests are fine if nights feel broken.",
    ],
  },
  {
    eyebrow: "Move gently",
    title: "Exercise",
    body: "Regular, moderate activity supports mood, sleep, circulation, and stamina for birth. Walking, swimming, and prenatal yoga are widely enjoyed — always within your comfort and your clinician's guidance.",
    tips: [
      "Aim for gentle movement most days, listening to your body.",
      "Avoid contact sports and activities with a fall risk.",
      "Stop and rest if you feel dizzy, breathless, or unwell.",
    ],
  },
  {
    eyebrow: "Mind & heart",
    title: "Emotional well-being",
    body: "Pregnancy brings real emotional shifts, and caring for your mind matters as much as your body. Connection, rest, and gentle honesty about how you feel all help.",
    tips: [
      "Share how you're feeling with people you trust.",
      "Make small pockets of time for things that calm you.",
      "Reach out to your clinician if low mood or anxiety persists.",
    ],
  },
  {
    eyebrow: "Stay on track",
    title: "Prenatal appointments",
    body: "Regular check-ups let your care team follow your baby's growth and your own health, and answer your questions along the way. Visits typically become more frequent as your due date approaches.",
    tips: [
      "Keep a running list of questions to bring to each visit.",
      "Note down dates for scans and recommended tests.",
      "Bring up any new or worrying symptoms, however small.",
    ],
  },
  {
    eyebrow: "Know the signs",
    title: "Common symptoms & when to call your clinician",
    body: "Many symptoms — mild nausea, tiredness, occasional aches, swelling of the feet — are a normal part of pregnancy. Some signs, though, deserve prompt attention so they can be checked.",
    tips: [
      "Most everyday discomforts ease with rest, fluids, and small adjustments.",
      "Trust your instincts — if something feels wrong, it is worth a call.",
      "Save your maternity unit's number somewhere easy to reach.",
    ],
  },
];

const WARNING_SIGNS = [
  "Heavy or sudden vaginal bleeding",
  "A severe or persistent headache, or changes in your vision",
  "Reduced or absent fetal movement",
  "Severe abdominal pain or cramping",
  "Sudden swelling of the face, hands, or feet",
  "Fluid leaking from the vagina",
  "A high fever, fainting, or difficulty breathing",
  "Pain or burning when passing urine that won't settle",
];

export default function HealthPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Caring for you
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Maternal health
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Looking after yourself is one of the most loving things you can do
            for your baby. These gentle, everyday foundations — nourishment,
            rest, movement, and connection — help you feel well through every
            trimester.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-6">
        {SECTIONS.map((section, i) => (
          <SectionReveal key={section.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={section.eyebrow} title={section.title} />
              <p className="mt-3 text-sm leading-relaxed text-ink">
                {section.body}
              </p>
              <ul className="mt-4 space-y-2">
                {section.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              {section.href && (
                <Link
                  href={section.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta transition-colors hover:text-plum"
                >
                  {section.hrefLabel} &rarr;
                </Link>
              )}
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.1}>
        <GlassCard className="mt-10 border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="peach">Important</Badge>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-terracotta sm:text-3xl">
              Contact your healthcare provider
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Contact your healthcare provider promptly, or go to your maternity
            unit, if you notice any of the following:
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {WARNING_SIGNS.map((sign) => (
              <li
                key={sign}
                className="flex gap-3 text-sm leading-relaxed text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This page is for general education only and is not a substitute for
          professional medical advice. Always contact your clinician with any
          concerns about your health or your pregnancy.
        </p>
      </SectionReveal>
    </main>
  );
}
