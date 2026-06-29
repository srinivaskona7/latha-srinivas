import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "High-Risk Pregnancy — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Start here",
    title: "What 'high-risk' really means",
    body:
      "A high-risk pregnancy simply means your doctor wants to watch you and your baby a little more closely than usual. It is a label for extra care and attention — not a prediction of a bad outcome. Many mothers carry this label, follow their care plan, and go on to have completely healthy babies. The goal of identifying risk early is to catch anything small before it becomes big.",
    tips: [
      "’High-risk’ describes the level of monitoring needed, not how your pregnancy will end.",
      "It can be temporary — a risk flagged early may settle and be removed later.",
      "Being identified as high-risk is a good thing: it means your care team is paying close attention.",
    ],
  },
  {
    eyebrow: "Risk factors",
    title: "Maternal age and past pregnancies",
    body:
      "Age and your obstetric history are among the most common reasons for extra monitoring. Teen pregnancy (under 18) and advanced maternal age (over 35) each need a little more watching. A previous caesarean section, or a complication in an earlier pregnancy, also means your team will plan ahead carefully this time — not because trouble is expected, but so they are ready.",
    tips: [
      "Under 18 or over 35: extra scans and check-ups are routine, and most pregnancies go well.",
      "Prior C-section: your doctor will discuss whether a planned repeat caesarean or a trial of labour suits you.",
      "Previous complications such as early delivery or pre-eclampsia simply guide a more watchful plan.",
    ],
  },
  {
    eyebrow: "Risk factors",
    title: "Twins and multiple pregnancy",
    body:
      "Carrying twins or more is wonderful news that also calls for closer care. Multiple pregnancies are watched more often because babies can grow at different rates and may arrive a little early. Your team will track each baby’s growth and plan the safest time and place for delivery.",
    tips: [
      "Expect more frequent scans to follow each baby’s growth and the placenta.",
      "Twins often arrive earlier, so delivery is usually planned at a well-equipped hospital.",
      "Eat well, rest when you can, and report any unusual tightening or bleeding promptly.",
    ],
  },
  {
    eyebrow: "Risk factors",
    title: "Pre-existing conditions (common in India)",
    body:
      "If you already live with a health condition, your pregnancy team will work alongside the right specialists to keep it well managed. In India, anaemia is especially common and easily treated, while diabetes, high blood pressure, thyroid problems, and heart or kidney conditions all benefit from steady, joined-up care from the start.",
    tips: [
      "Anaemia: iron and folic-acid tablets plus iron-rich food (dal, leafy greens, jaggery) are usually enough.",
      "Diabetes, thyroid, and blood-pressure conditions are managed well with regular review — keep taking prescribed treatment.",
      "Heart or kidney conditions: care is shared between your obstetrician and the relevant specialist.",
    ],
  },
  {
    eyebrow: "Risk factors",
    title: "Conditions that begin in pregnancy",
    body:
      "Some conditions only appear during pregnancy and are picked up through routine screening — which is exactly why those check-ups matter. Gestational diabetes (GDM), pre-eclampsia, placenta praevia, growth restriction (IUGR), and changes in fluid around the baby (too much or too little) are all manageable when found early.",
    tips: [
      "GDM is screened with a simple sugar test and often controlled with diet, monitoring, and gentle activity.",
      "Pre-eclampsia is watched through your blood pressure and urine at every visit — never skip these checks.",
      "Placenta praevia, IUGR, and fluid changes are tracked by scans so delivery can be planned safely.",
    ],
  },
  {
    eyebrow: "Risk factors",
    title: "Rh-negative, recurrent loss, and infections",
    body:
      "A few other situations call for specific, well-established care. If you are Rh-negative and your baby is Rh-positive, a protective anti-D injection is given as advised. A history of recurrent pregnancy loss means earlier, gentler support, and any infection is treated promptly to protect you both.",
    tips: [
      "Rh-negative mothers receive anti-D at the times your doctor recommends — it is routine and protective.",
      "After previous losses, your team offers closer early monitoring and reassurance.",
      "Report fever, burning urine, or unusual discharge early so infections can be treated quickly.",
    ],
  },
  {
    eyebrow: "Your care",
    title: "What extra care looks like",
    body:
      "Being high-risk usually means a few more visits, a few more scans, and a clear plan — nothing frightening. You may see your doctor more often, have extra growth scans or Doppler studies, and be referred to a specialist (a maternal-foetal medicine, or MFM, expert) if needed. Delivery is often planned in advance at a hospital equipped to support you and your baby.",
    tips: [
      "More antenatal (ANC) visits and additional ultrasound or Doppler scans to follow growth and blood flow.",
      "Referral to a specialist or MFM unit when closer expertise is helpful.",
      "A planned delivery at an equipped facility, with the timing chosen for the safest outcome.",
    ],
  },
  {
    eyebrow: "India support",
    title: "How India helps identify high-risk pregnancies",
    body:
      "India has dedicated programmes to find and follow high-risk pregnancies so no mother slips through the cracks. Under the National Health Mission (NHM), high-risk pregnancies (HRP) are tracked and flagged for follow-up. The Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) offers free, quality antenatal check-ups — including specialist review — on fixed days each month at government facilities.",
    tips: [
      "Ask at your health centre about HRP tracking under NHM if you have been told you are high-risk.",
      "PMSMA provides free antenatal check-ups, usually on the 9th of each month, with specialist input.",
      "Keep your Mother and Child Protection (MCP) card updated and carry it to every visit.",
    ],
  },
  {
    eyebrow: "Wellbeing",
    title: "Self-care, adherence, and emotional support",
    body:
      "The most powerful tool in a high-risk pregnancy is consistent, gentle self-care. Attending every appointment, taking your tablets and any prescribed treatment, eating nourishing food, and resting all add up. It is also completely normal to feel anxious — sharing those feelings with family or your care team is a strength, not a weakness.",
    tips: [
      "Never skip antenatal visits, scans, or medicines — consistency is what keeps risk low.",
      "Eat balanced meals, stay hydrated, and follow your doctor’s advice on rest and activity.",
      "Lean on your partner, family, and care team for emotional support; ask for help when you need it.",
    ],
  },
  {
    eyebrow: "Stay safe",
    title: "Danger signs to never ignore",
    body:
      "Knowing the warning signs means you can act fast if something feels wrong — and fast action keeps mothers and babies safe. If you notice any of the signs below, contact your doctor or go to your nearest equipped hospital right away. When in doubt, it is always better to get checked.",
    tips: [
      "Vaginal bleeding, severe or constant tummy pain, or leaking of fluid.",
      "Severe headache, blurred vision, swelling of face or hands, or a sudden fall in baby’s movements.",
      "High fever, fits, or trouble breathing — treat these as emergencies.",
      "In India, dial 108 for a free emergency ambulance, or go straight to the nearest equipped hospital.",
    ],
  },
  {
    eyebrow: "Reassurance",
    title: "Most high-risk pregnancies end happily",
    body:
      "Here is the most important message: a high-risk label means more care, not less hope. With regular check-ups, the right support, and the strong systems available in India, the great majority of high-risk pregnancies lead to healthy mothers and healthy babies. You are not alone — a whole team is walking this journey with you.",
    tips: [
      "Extra monitoring exists to protect you, and it works — most outcomes are healthy and happy.",
      "Stay engaged with your care plan and ask questions whenever you are unsure.",
      "Trust the process: identifying risk early is the very thing that keeps you and your baby safe.",
    ],
  },
];

export default function HighRiskPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Extra care, extra reassurance</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">High-risk pregnancy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A high-risk pregnancy means your care team wants to watch you and your baby a little more closely — it is
            about extra attention, not a warning of a bad outcome. With regular check-ups and the support available across
            India, most high-risk pregnancies end with a healthy mother and a healthy baby. Here is what it means, why it
            happens, and how good care keeps you both safe.
          </p>
          <div className="mt-4">
            <Badge>Educational · India</Badge>
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
          This page is for education only and does not replace personalised medical advice. Your obstetrician or specialist
          will tailor your care to you and your baby. In an emergency in India, dial 108 for a free ambulance or go to your
          nearest equipped hospital.
        </p>
      </SectionReveal>
    </main>
  );
}
