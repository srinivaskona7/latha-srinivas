import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Trimester Checklists — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Before you conceive",
    title: "Preconception (the 3 months before)",
    body: "A little planning before the test turns pink makes the early weeks calmer. Most of this is free or low-cost at a government or trusted private clinic.",
    tips: [
      "Start folic acid at least 1 month before trying to conceive — FOGSI and ICMR advise daily folic acid in the pre-pregnancy period to lower the risk of neural tube defects in the baby.",
      "Get baseline tests done: haemoglobin (anaemia is very common in India), blood group and Rh typing, blood sugar, thyroid (TSH), and screening for HIV, hepatitis B and syphilis.",
      "Ask about thalassaemia/haemoglobinopathy screening for both partners — ICMR recommends it given how common carriers are across many Indian communities.",
      "Update your tetanus status and review chronic conditions (thyroid, diabetes, BP, epilepsy) and current medicines with your doctor before conceiving.",
      "Cut alcohol and stop smoking/tobacco (including gutka), and start gentle daily activity and a balanced, iron- and protein-rich diet.",
    ],
  },
  {
    eyebrow: "First trimester · weeks 1–12",
    title: "Confirm, register and start supplements",
    body: "This is the registration trimester. The sooner you are in the system, the sooner you get free supplements, the MCP card and your first scan.",
    tips: [
      "Register your pregnancy for antenatal care (ANC) as early as possible and collect your Mother and Child Protection (MCP) card — under MoHFW guidance the goal is the first ANC visit in the first trimester.",
      "Continue folic acid through the first trimester; your provider will add iron–folic acid (IFA) and calcium supplements as pregnancy progresses, per ICMR/MoHFW antenatal protocols (do not self-dose).",
      "Get the first-trimester dating/viability scan and booking blood tests (haemoglobin, blood group/Rh, blood sugar, TSH, HIV, hepatitis B, syphilis, urine routine).",
      "Discuss the optional first-trimester combined screening (NT scan with blood markers, usually around weeks 11–13’6) for chromosomal conditions.",
      "Take the first Td (tetanus–diphtheria) dose when your provider advises — MoHFW now uses Td in place of TT in the pregnancy schedule.",
    ],
  },
  {
    eyebrow: "First trimester · lifestyle",
    title: "Settle into healthy daily habits",
    body: "Nausea and tiredness peak now. Small, steady habits matter more than big changes.",
    tips: [
      "Eat small frequent meals, stay hydrated, and keep up iron- and protein-rich foods; ask your provider before any herbal or traditional remedies.",
      "Avoid alcohol, tobacco and self-prescribed medicines; check every new medicine (including painkillers) with your doctor first.",
      "Note any danger signs — heavy bleeding, severe abdominal pain, high fever or fainting — and call your provider or dial 108 for emergency help.",
    ],
  },
  {
    eyebrow: "Second trimester · weeks 13–27",
    title: "The anomaly scan and core ANC checks",
    body: "Energy usually returns. This is the window for the key mid-pregnancy scan and for staying on top of routine checks.",
    tips: [
      "Book the anomaly (TIFFA/level-II) scan around weeks 18–22 to check the baby’s growth and organ development.",
      "Get screened for gestational diabetes — ICMR/MoHFW guidance is to test in pregnancy (commonly around weeks 24–28) and earlier if you have risk factors.",
      "Keep up routine ANC visits: weight, blood pressure, fundal height, foetal heartbeat, and repeat haemoglobin to catch anaemia early.",
      "Continue your prescribed IFA and calcium and complete the Td schedule (the second/booster dose) as your provider directs.",
      "Note your first foetal movements; tell your provider how and when to start counting them as you move toward the third trimester.",
    ],
  },
  {
    eyebrow: "Second trimester · arrange ahead",
    title: "Sort out paperwork while you feel well",
    body: "Use this calmer stretch to lock in finances, leave and where you will deliver.",
    tips: [
      "Check insurance maternity cover and waiting periods; if eligible, confirm your Ayushman Bharat (PM-JAY) entitlement and empanelled hospitals near you.",
      "Plan your leave: salaried women in covered establishments are entitled to paid maternity leave (up to 26 weeks for the first two children) under the Maternity Benefit Act, 1961 (as amended in 2017) — give your employer written notice.",
      "Choose your delivery hospital and obstetrician, and note the route and travel time for both daytime and night.",
      "Keep the MCP card, scan reports and ID documents together in one folder you can grab quickly.",
    ],
  },
  {
    eyebrow: "Third trimester · weeks 28–40",
    title: "Growth checks and getting delivery-ready",
    body: "Visits become more frequent. The focus shifts to the baby’s growth, your blood pressure and a clear plan for labour.",
    tips: [
      "Attend more frequent ANC visits and any growth/well-being scans your provider advises; report reduced foetal movements the same day.",
      "Watch for pre-eclampsia warning signs — severe headache, blurred vision, swelling of face/hands, or upper-abdomen pain — and seek care urgently.",
      "Discuss your birth plan: mode of delivery, pain relief, who will accompany you, and what happens in an emergency or C-section.",
      "Confirm newborn essentials with your provider: birth-dose vaccines (BCG, OPV-0, hepatitis B), vitamin K, early breastfeeding and skin-to-skin care.",
    ],
  },
  {
    eyebrow: "Third trimester · by week 36",
    title: "Hospital bag and the final go-list",
    body: "Pack early so a sudden labour never finds you unprepared.",
    tips: [
      "Pack the hospital bag by about week 36: MCP card and all reports, IDs, insurance/Ayushman details, maternity pads, comfortable clothes, baby clothes, and toiletries.",
      "Save key numbers on speed dial — your hospital, obstetrician, a backup driver, and 108 for ambulance — and keep cash plus a charged phone ready.",
      "Confirm transport for day and night and do a practice run to the hospital so the route is familiar.",
      "Know the signs of labour and when to leave for hospital, and keep your support person briefed on the plan.",
    ],
  },
  {
    eyebrow: "Across every trimester",
    title: "Look after your mind, not just your body",
    body: "Emotional health is part of antenatal care. Anxiety and low mood in pregnancy are common and treatable.",
    tips: [
      "Talk openly with your partner, family or provider about worries; persistent sadness, fear or sleeplessness deserves a check-in, not silence.",
      "Build a small support circle for after the birth — help with cooking, rest and the baby makes a real difference.",
      "If low mood, hopelessness or overwhelming anxiety appears, tell your obstetrician — perinatal mental health support is available and seeking it is a strength.",
    ],
  },
];

export default function TrimesterChecklistsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Stay one step ahead</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Trimester checklists</h1>
          <div className="mt-4">
            <Badge tone="sage">India focus</Badge>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A practical, trimester-by-trimester to-do list for pregnancy in India — what to book, which
            supplements and vaccines to expect, the paperwork to arrange, and how to prepare for the big day.
            It follows MoHFW, ICMR and FOGSI guidance, but your own provider’s advice always comes first.
          </p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          This page is for education only and is not medical advice. Tests, supplements, vaccine timing and
          delivery plans vary by person — always consult your obstetrician or registered ANC provider for
          guidance specific to you. In an emergency in India, dial 108 for an ambulance.
        </p>
      </SectionReveal>
    </main>
  );
}
