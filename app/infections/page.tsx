import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Infections & Safety — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Most common",
    title: "Urinary tract infections (UTI)",
    body: "UTIs are among the most common infections in pregnancy because hormonal changes and a growing uterus slow the flow of urine. Left untreated, a bladder infection can climb to the kidneys and is linked with preterm labour and low birth weight, so it deserves prompt attention rather than a wait-and-watch approach.",
    tips: [
      "Drink water steadily through the day, especially in India’s hot months, to keep urine flowing and flush bacteria.",
      "Do not hold urine for long stretches; empty the bladder fully and pass urine after intercourse.",
      "Wipe front to back and choose breathable cotton innerwear to reduce irritation.",
      "Burning, urgency, cloudy or foul-smelling urine, or low backache means see your doctor the same day for testing.",
    ],
  },
  {
    eyebrow: "Mosquito-borne",
    title: "Dengue, malaria & chikungunya",
    body: "Mosquito-borne illnesses are a serious seasonal threat across much of India, particularly during and after the monsoon. In pregnancy they can cause high fever, dehydration and complications for both mother and baby, so bite prevention and prompt reporting of any fever are central to staying safe.",
    tips: [
      "Sleep under a bed net and use screens on windows; cover arms and legs at dawn and dusk when mosquitoes bite most.",
      "Use mosquito repellents that your doctor confirms are suitable in pregnancy.",
      "Remove stagnant water from coolers, pots, tyres and drains around the home every week to stop breeding.",
      "Any fever, body ache or rash in a mosquito season needs prompt medical review — do not self-treat.",
    ],
  },
  {
    eyebrow: "Food & water-borne",
    title: "Typhoid & food/water-borne illness",
    body: "Typhoid, hepatitis A/E and many stomach infections spread through contaminated food and water, which makes them an everyday risk in India. Severe vomiting and diarrhoea can dehydrate you quickly in pregnancy, so safe water and hygienic food are simple but powerful protections.",
    tips: [
      "Drink only water that is boiled, properly filtered or sealed bottled; the same applies to ice and drinks.",
      "Eat freshly cooked food served hot; avoid cut fruit, salads and chaat from roadside stalls.",
      "Wash hands with soap before eating and cooking, and keep raw and cooked foods separate.",
      "Persistent fever, vomiting or diarrhoea with poor fluid intake needs prompt medical review.",
    ],
  },
  {
    eyebrow: "Antenatal screening",
    title: "Hepatitis B",
    body: "Hepatitis B is a liver virus that can pass from mother to baby around birth. Because India has a meaningful carrier rate, an HBsAg blood test is part of routine antenatal screening — knowing your status early lets the care team protect the baby effectively at delivery.",
    tips: [
      "Complete the antenatal HBsAg screening test your doctor advises; it is a simple blood test.",
      "If you are positive, the baby can receive a birth-dose vaccine and, when indicated, immunoglobulin to greatly lower the risk of transmission.",
      "Avoid sharing razors, needles or toothbrushes, and ensure any injections use sterile equipment.",
      "Discuss your hepatitis B result and the baby’s vaccination plan with your doctor before delivery.",
    ],
  },
  {
    eyebrow: "TORCH group",
    title: "Toxoplasma, rubella, CMV & herpes",
    body: "TORCH infections are a cluster that can affect the developing baby. Toxoplasma spreads through undercooked meat and cat litter; rubella (German measles) is best prevented by immunity before pregnancy; CMV often spreads through young children’s saliva and urine; and herpes matters most around the time of delivery.",
    tips: [
      "Avoid raw or undercooked meat and wash fruits and vegetables well; cook meat thoroughly.",
      "Do not handle cat litter yourself, or wear gloves and wash hands afterwards, to lower toxoplasma risk.",
      "Rubella immunity is ideally confirmed or arranged before pregnancy; vaccination is not given during pregnancy.",
      "Wash hands often after contact with toddlers’ saliva and nappies to reduce CMV exposure, and tell your doctor about any history of genital herpes.",
    ],
  },
  {
    eyebrow: "Around delivery",
    title: "Group B Streptococcus awareness",
    body: "Group B Streptococcus (GBS) is a common bacterium that many healthy women carry without symptoms. It usually causes no problems, but it can occasionally affect a newborn during delivery. Being aware of it means you can follow your care team’s screening and delivery plan with confidence.",
    tips: [
      "Ask your doctor about their approach to GBS screening or risk assessment in late pregnancy.",
      "Share any history of GBS in a previous pregnancy with your current care team.",
      "Follow the delivery plan your doctor recommends, which is designed to protect the baby.",
      "Report waters breaking early or fever in labour promptly to the hospital team.",
    ],
  },
  {
    eyebrow: "Report changes",
    title: "Vaginal infections",
    body: "Vaginal infections such as thrush and bacterial vaginosis are common in pregnancy because of changing hormones and pH. Most are easily managed once identified, but some are linked with preterm labour, so unusual symptoms are worth reporting rather than ignoring.",
    tips: [
      "Tell your doctor about unusual discharge, itching, burning or odour so it can be checked.",
      "Wear breathable cotton innerwear and avoid harsh soaps, douches and perfumed washes in the intimate area.",
      "Do not use over-the-counter creams or remedies without your doctor’s guidance.",
      "Any unusual fluid leak, spotting or pelvic pain needs prompt medical review.",
    ],
  },
  {
    eyebrow: "Vaccination & hygiene",
    title: "COVID-19 & seasonal flu",
    body: "Respiratory infections like COVID-19 and influenza can be more serious in pregnancy because of changes in the immune system and lungs. Vaccination and everyday hygiene are the main ways to lower your risk and protect the baby in the early months after birth.",
    tips: [
      "Discuss recommended COVID-19 and flu vaccination with your doctor, who can advise on timing in pregnancy.",
      "Wash hands often, avoid crowded poorly-ventilated spaces during outbreaks, and wear a mask when advised.",
      "Keep distance from people who are unwell and ventilate rooms where possible.",
      "Fever, breathlessness or a persistent cough needs prompt medical review.",
    ],
  },
  {
    eyebrow: "Putting it together",
    title: "General prevention & when to see a doctor",
    body: "Most infections in pregnancy are prevented by a few consistent habits: clean hands, safe food and water, mosquito control and completing the screening tests your care team recommends. Just as important is knowing the warning signs that mean you should not wait at home.",
    tips: [
      "Wash hands with soap regularly, follow food and water hygiene, and keep up mosquito control at home.",
      "Attend antenatal visits and complete recommended screening tests on time.",
      "See your doctor promptly for fever, burning urine, unusual discharge or a new rash.",
      "Reduced or absent baby movements need urgent review; in an emergency in India, dial 108.",
    ],
  },
];

export default function InfectionsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Prevention is protection</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Infections & safety</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Many infections in pregnancy are preventable with simple, consistent habits — clean hands, safe water and food,
            mosquito control, and finishing the screening tests your doctor recommends. This India-focused guide explains why
            each one matters and the warning signs that mean you should reach out to your care team without delay.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>India focus</Badge>
            <Badge>Prevention first</Badge>
            <Badge>See your doctor</Badge>
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
          This page is for general education only and is not a diagnosis or treatment plan. It does not name medicines or
          doses. Any fever or new symptoms in pregnancy need prompt review by your own doctor, who knows your history. In an
          emergency in India, dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
