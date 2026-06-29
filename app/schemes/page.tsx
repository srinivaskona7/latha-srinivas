import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Maternity Schemes (India) — Baby Journey" };

interface Scheme {
  eyebrow: string;
  title: string;
  tag?: string;
  body: string;
  points: string[];
}

const SCHEMES: Scheme[] = [
  {
    eyebrow: "Cash incentive · first living child",
    title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    tag: "Cash benefit",
    body: "PMMVY is a centrally-sponsored maternity benefit scheme that gives a conditional cash incentive to pregnant women and lactating mothers, paid directly into the beneficiary’s bank or post-office account to partly compensate for wage loss and support better health and nutrition before and after delivery.",
    points: [
      "For the first living child, the benefit is paid in instalments on meeting conditions such as registering the pregnancy at an Anganwadi/health facility, receiving at least one antenatal check-up (ANC), and registering the child’s birth and first cycle of immunisation.",
      "Under the revised Mission Shakti framework, an additional benefit is provided for a second child only if the second child is a girl — paid after birth registration and completion of the child’s immunisation, to encourage the birth of the girl child and discourage sex-selection.",
      "You typically need Aadhaar (mother and husband), a bank/post-office account in the mother’s name, and the Mother & Child Protection (MCP) card to enrol.",
      "Enrol through the Anganwadi centre or your ASHA/ANM worker; registration is also done via the PMMVY portal / Poshan Tracker. Exact instalment amounts and conditions are revised over time.",
    ],
  },
  {
    eyebrow: "Institutional delivery · cash assistance",
    title: "Janani Suraksha Yojana (JSY)",
    tag: "Cash benefit",
    body: "JSY is a safe-motherhood intervention under the National Health Mission that promotes institutional delivery (giving birth in a government or accredited facility) among poor pregnant women by giving cash assistance to the mother, with a higher focus on Low Performing States (LPS).",
    points: [
      "Cash entitlement to the mother is higher in Low Performing States (LPS) than in High Performing States (HPS), and rural amounts are generally higher than urban amounts.",
      "The ASHA worker acts as the link between the pregnant woman and the health system, and receives a performance-based package for facilitating institutional delivery and follow-up.",
      "Eligibility rules differ by state category — in LPS the benefit is broadly available, while in HPS it is targeted at women from poorer households (for example BPL, SC/ST).",
      "Confirm your eligibility, documents, and current cash amount with your local ASHA/ANM or the health facility, as these are set at state level.",
    ],
  },
  {
    eyebrow: "Free care in govt facilities",
    title: "Janani Shishu Suraksha Karyakram (JSSK)",
    tag: "Free entitlement",
    body: "JSSK entitles every pregnant woman and sick newborn (and now sick infants) to completely free and cashless services in public health institutions, aiming to remove out-of-pocket costs as a barrier to seeking care.",
    points: [
      "Free delivery — including free caesarean (C-section) — in government health facilities, with no user charges.",
      "Free drugs and consumables, free diagnostics (lab tests, ultrasound), and free diet during the hospital stay (commonly up to 3 days for normal delivery and up to 7 days for C-section).",
      "Free blood when needed, and free transport — from home to the facility, between facilities for referrals, and a drop-back home after delivery.",
      "Entitlements also cover sick newborns and sick infants for free treatment in public facilities; ask the facility staff to ensure no charges are levied.",
    ],
  },
  {
    eyebrow: "Assured, dignified maternity care",
    title: "Surakshit Matritva Aashwasan (SUMAN)",
    tag: "Free entitlement",
    body: "SUMAN is an initiative to provide assured, dignified, respectful and quality healthcare at no cost — and zero tolerance for denial of services — to every woman and newborn visiting a public health facility, consolidating existing maternal and child health entitlements.",
    points: [
      "Covers the antenatal, delivery and postnatal period plus newborn care, building on existing schemes like JSY and JSSK as a single assured package.",
      "Includes at least four antenatal check-ups, free and cashless institutional delivery, and post-delivery care and follow-up for mother and baby.",
      "Emphasises respectful care and a grievance/feedback mechanism so that no eligible woman is turned away from a public facility.",
      "Available at government health facilities — ask the ANM, staff nurse, or facility about SUMAN entitlements when you register.",
    ],
  },
  {
    eyebrow: "Frontline health workers",
    title: "ASHA & ANM — your local support",
    body: "Most maternity entitlements reach you through frontline workers. The ASHA (Accredited Social Health Activist) is a trained community volunteer, and the ANM (Auxiliary Nurse Midwife) is a trained health worker at the sub-centre — together they are usually your first and easiest point of contact.",
    points: [
      "The ASHA helps you register the pregnancy, accompanies you for antenatal check-ups and institutional delivery, and guides you on JSY/PMMVY paperwork and follow-up visits.",
      "The ANM provides antenatal care, immunisation, iron-folic acid (IFA) tablets, tetanus protection, and counselling at the sub-centre or Village Health & Nutrition Day.",
      "They help you understand which schemes you qualify for and assist with the bank account, Aadhaar and MCP-card details needed to claim benefits.",
      "If you do not know your local ASHA/ANM, ask at the nearest sub-centre, Primary Health Centre (PHC), or Anganwadi.",
    ],
  },
  {
    eyebrow: "Nutrition support · ICDS",
    title: "Anganwadi & ICDS supplementary nutrition",
    tag: "Nutrition",
    body: "Anganwadi centres, run under the Integrated Child Development Services (ICDS) scheme, provide nutrition and health support to pregnant women, lactating mothers, and young children — a key resource throughout pregnancy and after delivery.",
    points: [
      "Supplementary nutrition is provided to pregnant and lactating women, often as Take-Home Rations (THR) to meet daily calorie and protein needs.",
      "Children below six years receive supplementary nutrition, immunisation support, health check-ups and pre-school education.",
      "The Anganwadi is also where many women first register for PMMVY and receive nutrition and breastfeeding counselling.",
      "Visit your nearest Anganwadi centre and speak to the Anganwadi Worker (AWW) to register and collect your rations.",
    ],
  },
  {
    eyebrow: "Your maternal-health record",
    title: "Mother & Child Protection (MCP) card",
    body: "The MCP card (also called the Mother and Child Protection card) is a free record book issued to track the health of the mother and child from pregnancy through early childhood, and is often required to claim benefits.",
    points: [
      "It records antenatal check-ups, weight, blood pressure, blood and other tests, IFA tablets, tetanus protection and danger signs to watch for.",
      "After birth it tracks the baby’s immunisation schedule, growth and developmental milestones.",
      "It is commonly required as proof of pregnancy registration and ANC for schemes like PMMVY — keep it safe and carry it to every visit.",
      "You receive it free of cost when you register your pregnancy at the Anganwadi or health facility.",
    ],
  },
  {
    eyebrow: "Routine pregnancy check-ups",
    title: "Free antenatal care (ANC) at govt centres",
    tag: "Free entitlement",
    body: "Routine antenatal care is provided free of cost at government health centres (sub-centres, PHCs, CHCs and district hospitals), and a minimum of four ANC visits is recommended during a normal pregnancy to catch problems early.",
    points: [
      "Each ANC visit typically includes weight and blood-pressure checks, abdominal examination, blood and urine tests, and counselling on nutrition and danger signs.",
      "You receive iron-folic acid (IFA) and calcium tablets, tetanus protection, and (where indicated) a free ultrasound.",
      "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) provides a fixed-day (commonly the 9th of each month) assured, comprehensive and free ANC check-up for pregnant women in the second and third trimesters.",
      "Attending ANC is also one of the conditions for receiving the PMMVY cash incentive — so it helps both your health and your benefit claim.",
    ],
  },
  {
    eyebrow: "Organised-sector employees",
    title: "Maternity Benefit (Amendment) Act, 2017",
    tag: "Paid leave",
    body: "The Maternity Benefit Act, as amended in 2017, gives women employees in the organised sector the legal right to paid maternity leave and related protections; it applies to establishments covered by the Act (broadly, those employing 10 or more persons).",
    points: [
      "Paid maternity leave was increased to 26 weeks for the first two children (12 weeks for the third child onwards), with leave for commissioning and adopting mothers as specified in the Act.",
      "Employers with 50 or more employees must provide a crèche facility, and the mother is allowed visits to the crèche during the day.",
      "Employers must inform every woman of her maternity benefits in writing at the time of appointment, and an option of work-from-home may be allowed where the nature of work permits.",
      "This is a labour-law entitlement separate from the health and cash schemes above; for disputes consult your employer’s HR or the labour authorities, not your ASHA.",
    ],
  },
  {
    eyebrow: "Newborn & child screening",
    title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    tag: "Child health",
    body: "RBSK is a child health screening and early-intervention programme covering children from birth up to 18 years, with a strong focus on screening newborns and young children for the “4 Ds” — Defects at birth, Diseases, Deficiencies and Developmental delays including disability.",
    points: [
      "Newborns are screened at the delivery point (facility-based) for birth defects and conditions, and follow-up screening continues at Anganwadi and school level.",
      "Children identified with a condition are referred for free further evaluation and management, including through District Early Intervention Centres (DEICs).",
      "Early detection of conditions such as congenital heart disease, hearing or vision problems, and developmental delay allows timely, often free, treatment.",
      "Ask the facility staff or ASHA about newborn screening before discharge, and keep your MCP card updated for follow-up.",
    ],
  },
  {
    eyebrow: "Getting started",
    title: "How & where to enrol",
    body: "Enrolling early helps you claim the maximum benefits, since several entitlements depend on registering the pregnancy in the first trimester and attending check-ups on time.",
    points: [
      "Register your pregnancy as early as possible with your ASHA/ANM, at the nearest Anganwadi centre, or at a government sub-centre / PHC — this triggers your MCP card and scheme eligibility.",
      "Keep ready: Aadhaar (and husband’s, where required), a bank or post-office account in the mother’s name, the MCP card, and your mobile number.",
      "Some schemes (such as PMMVY) can also be registered online through the official PMMVY portal / Poshan Tracker, often with help from the Anganwadi worker.",
      "If unsure which schemes you qualify for, ask your ASHA, ANM, or Anganwadi worker — they can check eligibility and complete the paperwork with you.",
    ],
  },
];

export default function SchemesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Support you are entitled to</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Government schemes</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            India runs several government schemes that support you through pregnancy, delivery and your baby’s early
            months — from free care and cash incentives to nutrition, frontline health workers and paid leave. This
            page summarises the main national maternity benefits and how to claim them, so you can ask the right
            questions to your local ASHA, ANM or Anganwadi worker.
          </p>
        </header>
      </SectionReveal>
      <div className="space-y-6">
        {SCHEMES.map((s, i) => (
          <SectionReveal key={s.title} delay={i * 0.06}>
            <GlassCard>
              <div className="flex flex-wrap items-center gap-2">
                {s.tag && <Badge tone="sage">{s.tag}</Badge>}
              </div>
              <SectionTitle eyebrow={s.eyebrow} title={s.title} className="mt-1" />
              <p className="mt-3 text-sm leading-relaxed text-ink">{s.body}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>
      <SectionReveal delay={0.15}>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Scheme names, eligibility rules and benefit amounts are indicative and change over time, and many details are
          decided at the state level. Always verify current details with your local ASHA / ANM / Anganwadi worker or the
          official government portals before relying on them. This page is for general education only and is not legal,
          medical or financial advice.
        </p>
      </SectionReveal>
    </main>
  );
}
