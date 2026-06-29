import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Common Concerns (India) — Baby Journey" };

interface Concern {
  eyebrow: string;
  title: string;
  tag?: string;
  body: string;
  points: string[];
}

const CONCERNS: Concern[] = [
  {
    eyebrow: "Blood & iron",
    title: "Anaemia & iron deficiency",
    tag: ">50% prevalence",
    body: "Anaemia means too few healthy red blood cells to carry oxygen well, most often from low iron. National surveys (NFHS) show that more than half of pregnant women in India are anaemic, so it is screened for routinely rather than treated as unusual. Picking it up early helps protect your energy and your baby's growth.",
    points: [
      "Why it matters in India: high background prevalence plus diets often low in absorbable (heme) iron make screening a standard, expected part of antenatal care.",
      "Signs to mention: unusual tiredness, breathlessness on mild effort, pale skin or inner eyelids, dizziness, or a fast heartbeat. Many women have no obvious signs at all.",
      "How it is screened: a simple haemoglobin (Hb) blood test at booking and again later in pregnancy, in line with the Anaemia Mukt Bharat programme.",
      "General management: iron and folic acid (IFA) supplementation as advised, plus iron-rich foods (dark green leafy vegetables, legumes, jaggery) with vitamin-C foods to aid absorption; your doctor decides dose and follow-up.",
    ],
  },
  {
    eyebrow: "Blood sugar",
    title: "Gestational diabetes (GDM)",
    tag: "Higher risk in Indian women",
    body: "GDM is raised blood sugar that first appears in pregnancy. Indian women have a notably higher risk than many other populations, which is why universal screening is recommended here. Well-managed GDM usually leads to a healthy pregnancy.",
    points: [
      "Why it matters in India: South Asian ethnicity is itself a risk factor, so screening is offered to everyone, not only to those who seem high risk.",
      "How it is screened: the DIPSI single-step 75g oral glucose tolerance test (OGTT) is used widely across India and can be done in the non-fasting state, which suits busy clinics.",
      "Signs are often absent: GDM is usually silent, which is exactly why testing matters more than waiting for symptoms.",
      "General management: balanced meals, portion awareness, regular gentle activity, and home blood-glucose monitoring if advised; most women manage with diet and movement, and your obstetrician guides any further care.",
    ],
  },
  {
    eyebrow: "Thyroid",
    title: "Hypothyroidism",
    tag: "Common & screenable",
    body: "An underactive thyroid makes too little thyroid hormone. It is common in pregnancy and matters because thyroid hormone supports your baby's brain and nervous-system development, especially in early pregnancy before the baby's own thyroid is working.",
    points: [
      "Why it matters in India: thyroid disorders are frequently found in Indian women of reproductive age, so a TSH check is a sensible, low-cost screen.",
      "Signs to mention: persistent tiredness, feeling cold, constipation, dry skin, or unexpected weight changes — though mild cases often have no clear signs.",
      "How it is screened: a thyroid-stimulating hormone (TSH) blood test, sometimes early in pregnancy or before conception if you have risk factors.",
      "General management: clinician-guided monitoring and, where needed, thyroid hormone replacement with repeat TSH checks; never adjust any medicine yourself.",
    ],
  },
  {
    eyebrow: "Vitamin D",
    title: "Vitamin D deficiency",
    tag: "Widespread",
    body: "Vitamin D helps the body use calcium for healthy bones and supports overall wellbeing. Despite plentiful sunshine, low vitamin D is widespread across India because of indoor lifestyles, covered clothing, sunscreen, air pollution, and skin pigmentation that slows skin-based production.",
    points: [
      "Why it matters in India: very common even in sunny regions, so it is often discussed as part of routine antenatal nutrition.",
      "Signs to mention: vague bone or muscle aches, tiredness, or muscle weakness; many people notice nothing and it shows up only on testing.",
      "How it is screened: a blood test for 25-hydroxy vitamin D, ordered at your clinician's discretion based on your history.",
      "General management: sensible safe sun exposure, vitamin-D-supporting foods, and supplementation only at the dose your doctor recommends.",
    ],
  },
  {
    eyebrow: "Blood pressure",
    title: "Pre-eclampsia & pregnancy-induced hypertension",
    tag: "Monitor every visit",
    body: "Pregnancy-induced hypertension is high blood pressure that develops in pregnancy; pre-eclampsia adds signs such as protein in the urine. Most pregnancies stay normal, but because these conditions can develop quietly, blood pressure is checked at every antenatal visit so any change is caught early.",
    points: [
      "Why it matters: it is an important cause of maternal and newborn complications worldwide, and early detection makes a real difference.",
      "Signs to report promptly: a severe or persistent headache, vision changes (spots or blurring), upper-abdominal pain, or sudden swelling of the face and hands.",
      "How it is screened: routine blood-pressure measurement at each visit, plus a urine check for protein when indicated.",
      "General management: regular BP monitoring; clinicians may advise calcium for prevention, and low-dose aspirin only for selected higher-risk women — always started and supervised by your obstetrician.",
    ],
  },
  {
    eyebrow: "Inherited blood disorders",
    title: "Thalassaemia & haemoglobinopathy carrier screening",
    tag: "Community-relevant",
    body: "Thalassaemia and related haemoglobinopathies are inherited differences in how the body makes haemoglobin. Carrier rates are meaningful in several Indian communities. Knowing carrier status early lets couples understand the chance of passing on a more serious form and make informed choices with expert guidance.",
    points: [
      "Why it matters in India: certain regions and communities have higher carrier frequencies, so couple screening is increasingly encouraged.",
      "What it involves: a blood test (such as a complete blood count and haemoglobin electrophoresis or HPLC) to check carrier status, ideally before or early in pregnancy.",
      "If both partners are carriers: a genetic counsellor and specialist explain the options clearly and without pressure.",
      "General approach: screening and counselling only — decisions are personal and always supported by your clinical team.",
    ],
  },
  {
    eyebrow: "Early-pregnancy nausea",
    title: "Hyperemesis gravidarum",
    tag: "Beyond morning sickness",
    body: "Most nausea in early pregnancy is mild and settles. Hyperemesis gravidarum is the severe form, with persistent vomiting that makes it hard to keep food or fluids down. It is recognisable and manageable, and seeking help early prevents dehydration.",
    points: [
      "Signs to report: vomiting many times a day, inability to keep fluids down, very little urine, dizziness, or noticeable weight loss.",
      "Why it matters: dehydration and loss of nutrients can affect how you feel and function, so it deserves proper attention rather than just enduring it.",
      "How it is assessed: your clinician reviews symptoms, checks hydration, and may suggest tests to rule out other causes.",
      "General management: small frequent bland meals, sips of fluids, rest, and clinician-guided care; do not start any anti-nausea medicine on your own.",
    ],
  },
  {
    eyebrow: "Urinary health",
    title: "Urinary tract infection (UTI)",
    tag: "Easily screened",
    body: "UTIs are common in pregnancy and sometimes cause no symptoms at all (asymptomatic bacteriuria). Because untreated infection can occasionally lead to complications, a simple urine check is a routine, reassuring part of antenatal care.",
    points: [
      "Signs to mention: burning while passing urine, needing to go very often, lower-tummy discomfort, cloudy or strong-smelling urine, or fever and back pain.",
      "Why it matters: catching infection early keeps it simple to manage and protects your comfort and wellbeing.",
      "How it is screened: a urine test at antenatal visits, including screening for hidden (symptom-free) infection.",
      "General management: good hydration and clinician-guided treatment if an infection is confirmed; complete any course exactly as your doctor advises.",
    ],
  },
];

export default function ConcernsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Know &amp; screen early</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Common concerns</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A few conditions are notably common in pregnancy in India &mdash; anaemia, gestational diabetes, thyroid and
            vitamin&nbsp;D issues among them. The good news: most are picked up by simple, routine antenatal screening and
            managed well. This page explains what each one is, why it matters here, what to look out for, and how it&apos;s
            usually checked &mdash; so you can attend your visits informed and reassured, not anxious.
          </p>
        </header>
      </SectionReveal>
      <div className="space-y-6">
        {CONCERNS.map((c, i) => (
          <SectionReveal key={c.title} delay={i * 0.06}>
            <GlassCard>
              <div className="flex flex-wrap items-center gap-2">{c.tag && <Badge tone="sage">{c.tag}</Badge>}</div>
              <SectionTitle eyebrow={c.eyebrow} title={c.title} className="mt-1" />
              <p className="mt-3 text-sm leading-relaxed text-ink">{c.body}</p>
              <ul className="mt-4 space-y-2">
                {c.points.map((p) => (
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
          This page is for education only and is not a diagnosis or treatment advice. It does not list medicines or doses.
          Screening and management of any condition must be guided by your obstetrician or qualified clinician, based on
          your own history and tests. In India, dial 108 for medical emergencies.
        </p>
      </SectionReveal>
    </main>
  );
}
