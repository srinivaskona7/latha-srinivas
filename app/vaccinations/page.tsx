import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Vaccinations (India) — Baby Journey" };

interface Milestone {
  eyebrow: string;
  title: string;
  note?: string;
  items: string[];
}

const MATERNAL: Milestone[] = [
  {
    eyebrow: "Tetanus protection",
    title: "Td / Tdap (tetanus–diphtheria)",
    note: "India&apos;s Universal Immunization Programme switched from plain TT (tetanus toxoid) to Td, which adds a diphtheria component for the mother. Td is the routine antenatal vaccine offered free at government facilities.",
    items: [
      "If never immunised before: 2 doses of Td given 4 weeks apart during pregnancy (typically the early dose around the first antenatal visit, the second about a month later).",
      "If immunised in a previous pregnancy within the last 3 years: a single Td booster dose is usually sufficient.",
      "Tdap (which also covers pertussis / whooping cough) is recommended by IAP and FOGSI, ideally between 27 and 36 weeks, to pass antibodies to the newborn against whooping cough.",
      "Prevents maternal and neonatal tetanus — a key reason India has achieved maternal & neonatal tetanus elimination.",
    ],
  },
  {
    eyebrow: "Seasonal protection",
    title: "Inactivated influenza (flu) vaccine",
    note: "The inactivated flu shot is considered safe in any trimester and is recommended for pregnant women, who are at higher risk of severe influenza.",
    items: [
      "Use only the inactivated injectable vaccine in pregnancy — the live nasal spray is not given to pregnant women.",
      "Can be administered in any trimester; many providers offer it before or during the flu season.",
      "Protects the mother and passes some antibody protection to the baby in the early months of life.",
    ],
  },
  {
    eyebrow: "Respiratory protection",
    title: "COVID-19 vaccination",
    note: "MoHFW guidance has recommended COVID-19 vaccination for pregnant and lactating women, as pregnancy can increase the risk of severe COVID-19.",
    items: [
      "Eligibility, dose, and timing have been updated several times — follow the latest MoHFW / CoWIN guidance current at your due date.",
      "Discuss timing and the specific approved vaccine with your obstetrician.",
    ],
  },
];

const INFANT: Milestone[] = [
  {
    eyebrow: "At birth",
    title: "Birth doses",
    items: [
      "BCG — protects against severe forms of childhood tuberculosis.",
      "OPV-0 — the zero (birth) dose of oral polio vaccine.",
      "Hepatitis B birth dose — given within 24 hours of birth wherever possible.",
    ],
  },
  {
    eyebrow: "6 weeks",
    title: "First primary visit",
    items: [
      "OPV-1 — oral polio vaccine, dose 1.",
      "Pentavalent-1 — combined DPT + Hepatitis B + Hib (Haemophilus influenzae type b).",
      "RVV-1 — rotavirus vaccine, dose 1 (protects against rotavirus diarrhoea).",
      "fIPV-1 — fractional inactivated polio vaccine, dose 1 (given intradermally).",
      "PCV-1 — pneumococcal conjugate vaccine, dose 1.",
    ],
  },
  {
    eyebrow: "10 weeks",
    title: "Second primary visit",
    items: [
      "OPV-2 — oral polio vaccine, dose 2.",
      "Pentavalent-2 — DPT + HepB + Hib, dose 2.",
      "RVV-2 — rotavirus vaccine, dose 2.",
    ],
  },
  {
    eyebrow: "14 weeks",
    title: "Third primary visit",
    items: [
      "OPV-3 — oral polio vaccine, dose 3.",
      "Pentavalent-3 — DPT + HepB + Hib, dose 3.",
      "RVV-3 — rotavirus vaccine, dose 3.",
      "fIPV-2 — fractional inactivated polio vaccine, dose 2.",
      "PCV-2 — pneumococcal conjugate vaccine, dose 2.",
    ],
  },
  {
    eyebrow: "9–12 months",
    title: "Measles–Rubella & boosters",
    items: [
      "MR-1 — first dose of measles–rubella vaccine.",
      "PCV booster — pneumococcal conjugate vaccine booster.",
      "JE-1 — Japanese encephalitis vaccine, dose 1 (only in JE-endemic districts).",
      "Vitamin A — first dose of the supplementation schedule.",
    ],
  },
  {
    eyebrow: "16–24 months",
    title: "Booster visit",
    items: [
      "DPT booster-1 — diphtheria, pertussis, tetanus booster.",
      "OPV booster — oral polio vaccine booster.",
      "MR-2 — second dose of measles–rubella vaccine.",
      "JE-2 — Japanese encephalitis vaccine, dose 2 (in endemic areas).",
    ],
  },
];

export default function VaccinationsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Protection from day one
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Vaccinations
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A clear guide to maternal vaccines in pregnancy and your baby&apos;s
            immunisation schedule under India&apos;s Universal Immunization
            Programme (UIP). It draws on MoHFW guidance and the recommendations
            of IAP (Indian Academy of Pediatrics) and FOGSI. Government
            facilities provide the UIP vaccines free of cost.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <h2 className="mb-4 font-display text-2xl font-semibold text-plum">
          For the mother
        </h2>
      </SectionReveal>
      <div className="space-y-6">
        {MATERNAL.map((m, i) => (
          <SectionReveal key={m.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={m.eyebrow} title={m.title} />
              {m.note && (
                <p className="mt-3 text-sm leading-relaxed text-ink">{m.note}</p>
              )}
              <ul className="mt-4 space-y-2">
                {m.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.05}>
        <h2 className="mb-4 mt-10 font-display text-2xl font-semibold text-plum">
          For your baby (UIP schedule)
        </h2>
      </SectionReveal>
      <div className="space-y-6">
        {INFANT.map((m, i) => (
          <SectionReveal key={m.title} delay={i * 0.06}>
            <GlassCard>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="sage">{m.eyebrow}</Badge>
              </div>
              <SectionTitle eyebrow="" title={m.title} className="mt-1" />
              <ul className="mt-4 space-y-2">
                {m.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.1}>
        <GlassCard className="mt-6">
          <SectionTitle
            eyebrow="Beyond the UIP"
            title="Optional vaccines (private / IAP)"
          />
          <ul className="mt-4 space-y-2">
            {[
              "IAP recommends additional vaccines that are not part of the free UIP and are available in the private sector — for example influenza for infants, hepatitis A, varicella (chickenpox), typhoid conjugate, and MMR.",
              "Some optional vaccines (such as additional pneumococcal or meningococcal options) may be advised based on the child&apos;s risk and your paediatrician&apos;s judgement.",
              "Carry and update the baby&apos;s Mother and Child Protection (MCP) card / immunisation card at every visit so the record stays complete.",
            ].map((it) => (
              <li
                key={it}
                className="flex gap-3 text-sm leading-relaxed text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Schedules can be updated by MoHFW / IAP from time to time. Always
          confirm the exact vaccines and timing with your paediatrician and the
          baby&apos;s MCP / immunisation card. This page is for education only
          and is not medical advice. For emergencies in India, dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
