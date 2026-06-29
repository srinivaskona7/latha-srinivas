import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Working in Pregnancy — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The law",
    title: "Maternity Benefit (Amendment) Act, 2017",
    body: "India’s amended Maternity Benefit Act gives eligible women 26 weeks of paid maternity leave for the first two children, and 12 weeks from the third child onwards. The Act applies to establishments employing 10 or more people, including factories, shops, mines and most private offices. To qualify you generally need to have worked at least 80 days in the 12 months before your expected delivery date.",
    tips: [
      "26 weeks paid leave for the 1st and 2nd child; 12 weeks for the 3rd child and beyond.",
      "Of the 26 weeks, up to 8 weeks may be taken before the expected delivery date; the rest after.",
      "Leave is paid at your average daily wage, and your employer cannot make you work during the leave period.",
      "Keep proof of joining date and attendance so you can show the 80-day eligibility if asked.",
    ],
  },
  {
    eyebrow: "Beyond the basics",
    title: "Adoption, commissioning & special leave",
    body: "The 2017 amendment widened cover beyond biological mothers. A woman who legally adopts a child below three months of age, or a commissioning mother (whose egg is used to create an embryo carried by another woman), is entitled to 12 weeks of leave from the date the child is handed over. The Act also protects you across pregnancy loss and certain medical procedures.",
    tips: [
      "Adopting or commissioning mothers: 12 weeks of paid leave from the date the child is handed over.",
      "Miscarriage or medical termination of pregnancy (MTP): up to 6 weeks of paid leave from the date it occurs.",
      "Tubectomy operation: 2 weeks of paid leave from the date of the operation.",
      "An extra month of leave is allowed for illness arising out of pregnancy, delivery, premature birth or miscarriage, on production of proof.",
    ],
  },
  {
    eyebrow: "Workplace facilities",
    title: "Crèche, nursing breaks & work from home",
    body: "The amendment added workplace facilities meant to make returning to work realistic. Establishments with 50 or more employees must provide a crèche, and you have the right to visit it during the day. The law also recognises nursing breaks and, where the nature of work allows, work-from-home arrangements that you and your employer can agree on.",
    tips: [
      "Crèche facility is mandatory in establishments with 50 or more employees, within prescribed distance.",
      "You are allowed to visit the crèche a set number of times a day, in addition to your regular rest interval.",
      "Nursing breaks continue until the child is 15 months old, to express milk or feed your baby.",
      "Work-from-home may be agreed where the role permits, for a mutually decided period after the leave ends.",
    ],
  },
  {
    eyebrow: "Job security",
    title: "Protection from dismissal & discrimination",
    body: "Your job is legally protected during pregnancy and maternity leave. An employer cannot dismiss or discharge you because of your pregnancy or maternity leave, nor change your conditions of service to your disadvantage during this time. Any dismissal during pregnancy that strips you of maternity benefit is generally not permitted except in cases of proven gross misconduct.",
    tips: [
      "You cannot be dismissed or demoted simply for being pregnant or for taking maternity leave.",
      "Conditions of service must not be varied to your disadvantage while you are on protected leave.",
      "If you believe a decision is linked to your pregnancy, document dates and communications and raise it with HR.",
      "You may approach the labour authorities or an inspector under the Act if your maternity benefit is denied.",
    ],
  },
  {
    eyebrow: "ESIC cover",
    title: "Insured workers under ESIC",
    body: "If you are covered by the Employees’ State Insurance Corporation (ESIC) — typically lower-wage employees in covered establishments — your maternity benefit usually comes through ESIC rather than directly from the employer. ESIC provides paid maternity benefit plus medical care, subject to contribution and eligibility conditions, so it is worth confirming which scheme applies to you.",
    tips: [
      "ESIC offers paid maternity benefit for confinement, miscarriage and certain related conditions for insured women.",
      "Eligibility depends on contributions paid in the relevant contribution periods — check with your employer or the local ESIC branch.",
      "You generally cannot draw the same benefit twice, so confirm whether the Act or ESIC covers you.",
      "Keep your ESIC (insurance) number and dispensary details handy for claims and medical care.",
    ],
  },
  {
    eyebrow: "Daily wellbeing",
    title: "Comfort, posture & energy at work",
    body: "Long days are easier when your workspace works with your changing body. Small ergonomic adjustments, regular movement and steady fuel help you manage fatigue, swelling and the nausea that can hit during a working day. Most adjustments are low-cost and reasonable to request.",
    tips: [
      "Set up ergonomics: supportive chair with lumbar support, screen at eye level, feet flat or on a footrest.",
      "Move every 30 to 60 minutes — short walks and gentle stretches ease swelling, stiffness and back ache.",
      "Stay hydrated and keep light, frequent snacks at your desk to steady blood sugar and dampen nausea.",
      "Plan demanding tasks for your higher-energy times of day and take your rest interval; do not skip lunch.",
    ],
  },
  {
    eyebrow: "Stay safe",
    title: "Avoiding workplace hazards",
    body: "Some tasks carry more risk during pregnancy and are reasonable to adjust. Heavy lifting, prolonged standing, night shifts and exposure to chemicals or radiation can all be flagged. The Act itself protects you from work that is arduous, involves long standing, or is likely to interfere with pregnancy in the period close to delivery.",
    tips: [
      "Avoid heavy lifting and long periods of standing; ask for a stool, lighter duties or task rotation.",
      "Limit or step back from night shifts and very long hours where you can; raise it early with your manager.",
      "Avoid exposure to hazardous chemicals, fumes, radiation or extreme heat — ask for a risk assessment and reassignment if needed.",
      "Frame requests as reasonable adjustments and put the key ones in writing so they are on record.",
    ],
  },
  {
    eyebrow: "Planning",
    title: "Telling your employer & handing over",
    body: "There is no single ’right’ time to tell your employer, but doing so before you start your leave lets you formally claim your benefit, schedule antenatal care (ANC) appointments and plan a calm handover. A well-prepared handover protects your work and makes returning much smoother.",
    tips: [
      "Give written notice of your leave dates as required, so your maternity benefit is correctly processed.",
      "Block ANC appointments in advance and keep records; routine check-ups are an expected part of pregnancy.",
      "Document your responsibilities, key contacts and in-progress work in a simple handover note.",
      "Agree a return date and any phased return, work-from-home or adjusted hours before you leave.",
    ],
  },
  {
    eyebrow: "Coming back",
    title: "Return to work & continued breastfeeding",
    body: "Returning to work and continuing to breastfeed are fully compatible with your rights. Nursing breaks, a clean space to express or store milk, and the crèche provision (where applicable) all support this. Ease back in and use the facilities the law provides.",
    tips: [
      "Use your nursing breaks to feed or express milk; these continue until the child is 15 months old.",
      "Ask for a private, clean space and somewhere to refrigerate expressed milk if your workplace can provide it.",
      "Phase back in where possible, and revisit work-from-home or flexible hours as your routine settles.",
      "If a crèche is available, plan visits around your day so feeds and check-ins fit your schedule.",
    ],
  },
  {
    eyebrow: "If you are not covered",
    title: "Informal sector & government schemes",
    body: "Rights under the Maternity Benefit Act mainly reach the organised sector. If you work in the unorganised or informal economy — daily-wage, domestic, agricultural or gig work — you may not have the same statutory leave. Government schemes such as PMMVY (Pradhan Mantri Matru Vandana Yojana) offer maternity support, and ESIC may help where it applies.",
    tips: [
      "PMMVY provides cash benefit in instalments to support pregnant and lactating women, subject to scheme conditions.",
      "Apply through your local Anganwadi centre or approved health facility, with the documents the scheme requires.",
      "Check eligibility for state-level maternity and nutrition schemes, which can run alongside central ones.",
      "Keep your Aadhaar, bank account and health records ready, as most schemes need these for transfers.",
    ],
  },
];

export default function WorkingPregnancyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Work & wellbeing</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Working in pregnancy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Working through pregnancy in India means knowing both your rights and your day-to-day wellbeing. This guide
            walks through the Maternity Benefit (Amendment) Act, 2017, ESIC and government support, and the practical
            adjustments that keep you comfortable and safe at work — so you can plan your leave, your return and
            everything in between with confidence.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="peach">26 weeks paid leave</Badge>
            <Badge tone="sage">Workplace wellbeing</Badge>
            <Badge tone="plum">India focus</Badge>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          General information on workplace rights & wellbeing, not legal or medical advice. Laws, scheme rules and
          eligibility change over time — verify current law and your specific entitlements with official government
          sources or your HR team, and discuss any health matters with your obstetrician. In an emergency in India,
          dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
