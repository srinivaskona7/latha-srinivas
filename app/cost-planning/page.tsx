import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Cost Planning — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The big picture",
    title: "What pregnancy actually costs",
    body: "Pregnancy spending is rarely one large bill — it is many smaller ones spread across nine months, plus the delivery itself. Costs in India vary enormously by city, by hospital tier (government, charitable trust, mid-range private, or corporate), and by whether anything unexpected happens. The single most useful thing you can do early is map out the components so nothing catches you off guard.",
    tips: [
      "Think in three buckets: routine antenatal care, the delivery and hospital stay, and a buffer for the unexpected.",
      "A normal vaginal delivery costs far less than a C-section, and a C-section costs far less than a stay that needs newborn intensive care (NICU).",
      "Every number below is rough guidance only — confirm current prices with the hospitals near you before you plan.",
    ],
  },
  {
    eyebrow: "Routine care",
    title: "Antenatal visits, scans and lab tests",
    body: "Across a normal pregnancy you can expect several antenatal (ANC) check-ups, a handful of ultrasound scans (dating, anomaly, growth), and recurring blood and urine tests. Individually each is modest, but they add up over nine months. In a private setting a single consultation might run a few hundred rupees, a scan ₹800–₹3,000, and routine blood panels a few hundred to a couple of thousand each.",
    tips: [
      "List the standard schedule with your doctor up front so you can total the routine cost early.",
      "Ask whether your hospital offers a bundled antenatal package — it is often cheaper than paying visit-by-visit.",
      "Government facilities provide ANC check-ups and many tests free or at very low cost; see the schemes section below.",
    ],
  },
  {
    eyebrow: "Daily essentials",
    title: "Supplements, medicines and nutrition",
    body: "Iron and folic acid, calcium, and other prescribed supplements are taken for months, so even cheap tablets accumulate. Add occasional medicines for nausea, infections or other issues. These are usually a small share of the total, but worth budgeting because they are steady, month-after-month spending rather than one-time.",
    tips: [
      "Buy supplements on prescription and compare generic versus branded — generics can cost a fraction of the price.",
      "Government hospitals supply iron, folic acid and calcium free under their maternal health programmes.",
      "Keep receipts; supplements and medicines may be claimable if you have outpatient or maternity insurance cover.",
    ],
  },
  {
    eyebrow: "The delivery",
    title: "Normal delivery vs C-section",
    body: "Delivery is usually the single biggest line item. A normal (vaginal) delivery in a mid-range private hospital might fall in a broad range such as ₹30,000–₹80,000, while a Caesarean section commonly runs higher — often ₹70,000 to ₹1.5 lakh or more in private corporate hospitals in big cities. Government hospitals deliver babies, including C-sections, free under JSSK. Whether you need a C-section is often not known until late, so plan for the higher number even if you hope for the lower.",
    tips: [
      "Always budget as if a C-section is possible — it is one of the most common reasons a delivery costs more than expected.",
      "Ask for the package to be specified clearly: what is included, and what counts as ’extra’.",
      "Confirm whether the surgeon’s fee, anaesthetist, operation theatre and consumables are inside the quoted package or billed separately.",
    ],
  },
  {
    eyebrow: "The hospital bill",
    title: "Room stay, packages and itemised estimates",
    body: "The room category you choose (general ward, shared, private, deluxe) can change the total dramatically, because many other charges are calculated as a percentage of the room rent — including doctor visit fees and nursing. A longer stay, more medicines, or extra procedures all push the bill up. The most reliable defence is to get a written, itemised estimate before admission.",
    tips: [
      "Ask for an itemised pre-admission estimate and a clear delivery package price in writing.",
      "Understand that picking a costlier room can multiply other charges, not just the room line.",
      "Keep every bill, receipt and discharge summary — you will need them for insurance, scheme claims and your records.",
    ],
  },
  {
    eyebrow: "When things are complicated",
    title: "Newborn care and NICU",
    body: "If the baby is born early or needs special care, a neonatal intensive care unit (NICU) stay is the most common source of large, unexpected bills. NICU charges are typically billed per day and can run into thousands per day in private hospitals, sometimes adding up to a lakh or several lakhs over a longer admission. This is exactly why a financial buffer matters: most pregnancies are smooth, but the ones that are not can be expensive fast.",
    tips: [
      "Build a dedicated buffer for a possible NICU stay — it is the single biggest reason costs spike.",
      "Check that your health insurance specifically covers the newborn from day one, not only the mother.",
      "Government and many charitable-trust hospitals provide newborn and sick-baby care at far lower cost than private NICUs.",
    ],
  },
  {
    eyebrow: "Free and low-cost care",
    title: "Government facilities and JSSK",
    body: "Public hospitals are the lowest-cost route by far. Under Janani Shishu Suraksha Karyakram (JSSK), pregnant women delivering in public health facilities are entitled to free delivery — including Caesarean section — free drugs and consumables, free diagnostics, free diet during the hospital stay, free blood where needed, and free transport between home and facility. Sick newborns are similarly entitled to free treatment. For many families this turns the largest cost of the whole journey into almost nothing.",
    tips: [
      "If budget is tight, a government facility under JSSK can make delivery essentially free — including a C-section.",
      "JSSK covers drugs, diagnostics, diet, blood and transport in public hospitals, not just the delivery procedure.",
      "Visit your nearest government hospital or health centre early to register and understand exactly what is provided.",
    ],
  },
  {
    eyebrow: "Cash help and check-ups",
    title: "JSY, PMMVY and PMSMA",
    body: "Beyond free care, the government runs cash-benefit and free-check-up schemes. Janani Suraksha Yojana (JSY) gives a cash incentive to encourage institutional (in-hospital) delivery, with eligibility and amounts varying by state and category. Pradhan Mantri Matru Vandana Yojana (PMMVY) provides maternity benefit cash in instalments, conditional on registration and check-ups. Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) offers free, quality antenatal check-ups (typically on a fixed day each month) at government facilities.",
    tips: [
      "Ask your ANM, ASHA worker or government hospital which schemes you qualify for and what documents are needed.",
      "Eligibility, amounts and conditions vary by state and change over time — confirm the current rules locally.",
      "Register early and keep your records up to date; many cash benefits are tied to attending check-ups on time.",
    ],
  },
  {
    eyebrow: "Insurance done right",
    title: "Checking your health insurance maternity cover",
    body: "If you have health insurance, read the maternity section carefully — terms vary widely and gaps cause the worst surprises. Many policies impose a waiting period of two to four years before maternity is covered at all, set a sub-limit (a capped amount) for normal versus Caesarean delivery, and apply room-rent caps that quietly reduce what they pay across the whole bill. Check whether the newborn is covered, and use cashless treatment at a network hospital where possible so you do not have to pay upfront.",
    tips: [
      "Check the maternity waiting period first — often 2–4 years — and whether you have already crossed it.",
      "Look for sub-limits (separate caps for normal vs C-section), room-rent caps, and whether newborn cover is included.",
      "Prefer cashless at a network hospital; if you go reimbursement, keep every bill and pre-authorisation document.",
      "Declare the pregnancy correctly and on time — wrong or late disclosure is a common reason claims get rejected.",
    ],
  },
  {
    eyebrow: "Other cover you may already have",
    title: "Ayushman Bharat, ESIC, CGHS and employer plans",
    body: "You may have cover you have not fully tapped. Ayushman Bharat (PM-JAY) provides cashless hospitalisation cover for eligible lower-income families at empanelled hospitals. Salaried workers may be covered by ESIC (with maternity benefits), and central government employees and pensioners by CGHS, while ex-servicemen families use ECHS. Many private employers also provide group health insurance that includes maternity — often with a shorter or no waiting period than individual policies.",
    tips: [
      "Check whether your family is eligible for Ayushman Bharat (PM-JAY) and which nearby hospitals are empanelled.",
      "If you are salaried, ask HR about employer group insurance and ESIC maternity benefits before buying anything new.",
      "Confirm the network hospitals and the claim or cashless process for whichever scheme covers you.",
    ],
  },
  {
    eyebrow: "Putting it together",
    title: "Budgeting and avoiding surprises",
    body: "A good budget combines a realistic estimate of routine care, a delivery figure planned at the higher (C-section) end, and a separate buffer for complications or NICU. Compare two or three hospitals, ask each for a written package and itemised estimate, and confirm what your insurance or government scheme will actually pay. The families who avoid nasty surprises are the ones who asked the boring questions early and kept every document.",
    tips: [
      "Get written, itemised estimates from two or three hospitals and compare like-for-like packages.",
      "Plan the delivery budget at the C-section level and keep a separate emergency buffer on top.",
      "Confirm in advance exactly what insurance or your scheme covers, and keep all bills, prescriptions and discharge papers.",
      "Re-confirm prices close to your due date — quoted packages and scheme rules can change.",
    ],
  },
];

export default function CostPlanningPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
            Plan with confidence
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
            Cost planning
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A practical, India-focused guide to the money side of pregnancy and
            delivery — what the typical costs are, the free and low-cost
            government options, how to read your health insurance, and how to
            budget so the bills never take you by surprise.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>JSSK free delivery</Badge>
            <Badge>Insurance check</Badge>
            <Badge>Build a buffer</Badge>
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
                  <li
                    key={t}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          General information only — not financial, insurance or medical advice.
          Costs and the terms of government schemes and insurance policies vary
          widely by location and change over time. Always verify current prices,
          eligibility and coverage directly with hospitals, your insurer and the
          official government portals before making decisions.
        </p>
      </SectionReveal>
    </main>
  );
}
