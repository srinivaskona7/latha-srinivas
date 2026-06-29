import Link from "next/link";
import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "ANC Visits (India) — Baby Journey" };

interface Visit {
  eyebrow: string;
  title: string;
  body: string;
  checks: string[];
}

const VISITS: Visit[] = [
  {
    eyebrow: "Visit 1 · Within 12 weeks (or as soon as possible)",
    title: "Registration & first check-up",
    body:
      "The first contact should ideally happen in the first trimester, within 12 weeks, or as early as pregnancy is confirmed. Your pregnancy is registered and you receive your Mother and Child Protection (MCP) card, which carries your records through pregnancy and your baby's early years.",
    checks: [
      "Registration and issue of the MCP card; detailed history (past pregnancies, illnesses, medicines, last menstrual period to estimate the due date)",
      "Baseline weight, height, blood pressure and a general physical examination",
      "Blood tests: haemoglobin for anaemia, blood group and Rh typing, blood sugar, HIV, syphilis (VDRL/RPR) and HBsAg (hepatitis B); urine routine for protein and sugar",
      "First tetanus-diphtheria (Td/TT) dose and the start of daily iron-folic acid (IFA) tablets",
      "Counselling on diet, rest, danger signs and a dating ultrasound around 6–9 weeks to confirm gestational age",
    ],
  },
  {
    eyebrow: "Visit 2 · Around 14–26 weeks",
    title: "Second-trimester review",
    body:
      "The second visit falls in the comfortable middle stretch of pregnancy. The focus shifts to confirming healthy growth, completing immunisation, and screening for conditions that tend to appear in mid-pregnancy.",
    checks: [
      "Weight, blood pressure, abdominal examination and fundal height to track that the uterus is growing as expected",
      "Listening for the fetal heart rate, usually audible from around 18–20 weeks with a Doppler",
      "Second Td/TT dose (given at least 4 weeks after the first), plus continued IFA and calcium supplementation",
      "Repeat haemoglobin and urine checks; screening for gestational diabetes (OGTT, often around 24–28 weeks)",
      "The detailed anomaly scan (TIFFA) is recommended around 18–22 weeks to examine the baby's organs and structure",
    ],
  },
  {
    eyebrow: "PMSMA · 9th of every month",
    title: "Free fixed-day specialist check-up",
    body:
      "Under the Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA), pregnant women in their 2nd and 3rd trimesters receive a free, quality check-up by a specialist (obstetrician or trained doctor) on the 9th of every month at designated government health facilities.",
    checks: [
      "A thorough examination by a specialist, with extra attention to identifying high-risk pregnancies",
      "Free investigations such as haemoglobin, blood sugar, blood group, urine tests and an ultrasound where available",
      "Risk stratification — women flagged as high-risk are tracked and supported through delivery",
      "Counselling on nutrition, danger signs, institutional delivery and birth preparedness",
    ],
  },
  {
    eyebrow: "Visit 3 · Around 28–34 weeks",
    title: "Third-trimester growth check",
    body:
      "As the third trimester begins, visits look closely at the baby's growth and position and at your own wellbeing, watching carefully for signs of pre-eclampsia and anaemia.",
    checks: [
      "Weight, blood pressure, fundal height and abdominal palpation to assess growth and the baby&apos;s lie and position",
      "Fetal heart rate and, where indicated, fetal movement counting guidance",
      "Repeat haemoglobin to detect anaemia; urine for protein (a marker of pre-eclampsia)",
      "Third Td/TT dose if the schedule was started late; continued IFA and calcium",
      "A growth/wellbeing ultrasound around 32 weeks where advised, to confirm growth, fluid and placental position",
    ],
  },
  {
    eyebrow: "Visit 4 · 36 weeks to term",
    title: "Approaching delivery",
    body:
      "From around 36 weeks, check-ups become more frequent as your due date nears. The aim is to confirm the baby is settling head-down, finalise the birth plan, and ensure both of you are ready for a safe delivery.",
    checks: [
      "Confirming the baby's presentation (head-down vs breech) and engagement; checking blood pressure and fundal height",
      "Fetal heart rate monitoring and review of fetal movements",
      "Final blood and urine checks as needed; review of haemoglobin before delivery",
      "Birth preparedness: planned place of delivery, transport, danger-sign recognition and whom to call",
      "Counselling on labour signs, breastfeeding, newborn care and postnatal follow-up",
    ],
  },
  {
    eyebrow: "Good to know",
    title: "4 visits or 8 contacts?",
    body:
      "India's Ministry of Health & Family Welfare (MoHFW) has historically recommended a minimum of 4 antenatal visits for a low-risk pregnancy. The World Health Organization's 2016 guidance moved to a model of 8 antenatal contacts to improve outcomes. More visits may be advised if your pregnancy is high-risk.",
    checks: [
      "Four visits is a minimum, not a ceiling — your doctor may schedule more based on your needs",
      "High-risk pregnancies (high BP, diabetes, anaemia, twins, previous complications) need closer monitoring",
      "Carry your MCP card to every visit so your full history travels with you",
      "Never skip a visit because you feel well; many important conditions are silent early on",
    ],
  },
];

const TESTS: string[] = [
  "Haemoglobin (Hb) — to detect and monitor anaemia",
  "Blood group and Rh typing — important for Rh-negative mothers",
  "Blood sugar / OGTT — screening for gestational diabetes (GDM)",
  "HIV test — with counselling, to prevent mother-to-child transmission",
  "Syphilis (VDRL / RPR) — treatable infection screened early",
  "HBsAg — screening for hepatitis B",
  "Urine routine — protein (pre-eclampsia) and sugar",
  "Blood pressure — checked at every visit for pre-eclampsia",
  "Weight and fundal height — to track growth at each visit",
  "Fetal heart rate — reassurance of the baby's wellbeing",
  "Td / TT immunisation — two doses (or a booster) in pregnancy",
  "IFA and calcium tablets — daily supplementation through pregnancy",
  "Dating ultrasound (~6–9 weeks) — confirms the due date",
  "NT scan (11–13+6 weeks) — early screening for chromosomal conditions",
  "Anomaly / TIFFA scan (18–22 weeks) — detailed structural survey",
  "Growth scan (~32 weeks) — growth, fluid and placental position",
];

export default function AncVisitsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Your check-up roadmap
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Antenatal visits
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Antenatal care (ANC) is the regular set of check-ups that keep you
            and your baby well through pregnancy. In India, the MoHFW has
            historically recommended a minimum of 4 visits, while the WHO&apos;s
            2016 guidance recommends 8 contacts for better outcomes. Through the
            PMSMA scheme, free specialist check-ups are offered on the 9th of
            every month for women in their 2nd and 3rd trimesters. Here is what a
            typical schedule looks like and what happens at each stage.
          </p>
        </header>
      </SectionReveal>

      <div className="space-y-6">
        {VISITS.map((v, i) => (
          <SectionReveal key={v.title} delay={i * 0.06}>
            <GlassCard>
              <SectionTitle eyebrow={v.eyebrow} title={v.title} />
              <p className="mt-3 text-sm leading-relaxed text-ink">{v.body}</p>
              <ul className="mt-4 space-y-2">
                {v.checks.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.12}>
        <GlassCard className="mt-6">
          <SectionTitle
            eyebrow="Routine through pregnancy"
            title="Common ANC tests"
          />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {TESTS.map((t) => (
              <li
                key={t}
                className="flex gap-3 text-sm leading-relaxed text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/scans"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta transition-colors hover:text-plum"
          >
            See the scan guide &rarr;
          </Link>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          The exact visit timing and tests are individualised by your
          obstetrician based on your pregnancy. This page is for education only
          and is not medical advice. In India, dial 108 for emergency medical
          help.
        </p>
      </SectionReveal>
    </main>
  );
}
