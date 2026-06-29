import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Twins & Multiples — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Types",
    title: "Identical vs fraternal",
    body: "Twins come in two broad kinds. Identical (monozygotic) twins form when one fertilised egg splits, so the babies share the same genes and look very alike. Fraternal (dizygotic) twins come from two separate eggs fertilised by two sperm, so they are like any other siblings born together and can be different sexes. Most twins in India are fraternal, but both kinds are healthy and normal.",
    tips: [
      "Identical (monozygotic): one egg splits — same genes, same sex, very similar looks.",
      "Fraternal (dizygotic): two eggs, two sperm — like ordinary siblings, can be boy and girl.",
      "Triplets or more (higher-order multiples) can be any mix of identical and fraternal.",
      "The type does not make one pregnancy ’better’ — it mainly guides what care you need.",
    ],
  },
  {
    eyebrow: "Placenta & sacs",
    title: "Why chorionicity matters",
    body: "Chorionicity describes how many placentas and sacs the babies have, and it is the single most important thing your doctor wants to know. Di/di (dichorionic-diamniotic) means each baby has its own placenta and sac — the lowest-risk pattern. Mono/di means one shared placenta but separate sacs. Mono/mono means one placenta and one shared sac — the rarest and most closely watched. Sharing a placenta raises specific risks, so knowing the pattern shapes the whole plan.",
    tips: [
      "Di/di: separate placenta + separate sac for each baby — usually the lowest risk.",
      "Mono/di: shared placenta, separate sacs — needs closer monitoring.",
      "Mono/mono: shared placenta and shared sac — rare, watched very carefully.",
      "Chorionicity is easiest and most accurate to confirm on an early scan, so dating matters.",
    ],
  },
  {
    eyebrow: "Detection",
    title: "How multiples are found",
    body: "Multiples are most often discovered on an early ultrasound, frequently the first dating scan in the first trimester. An early scan around 11 to 14 weeks is the best time to count the babies and confirm chorionicity reliably — the membrane signs that tell di/di from mono/di get harder to read later. If you have a strong family history of twins, fertility treatment, or unusually high pregnancy symptoms, mention it so the scan can confirm early.",
    tips: [
      "First-trimester ultrasound usually reveals twins and counts placentas and sacs.",
      "Best window to confirm chorionicity is roughly 11 to 14 weeks.",
      "Tell your clinician about any fertility treatment or family history of twins.",
      "Confirming type early means the right monitoring schedule starts on time.",
    ],
  },
  {
    eyebrow: "Antenatal care",
    title: "Extra care and monitoring",
    body: "A twin pregnancy needs more attention than a single one. Expect more frequent antenatal (ANC) visits and more ultrasound scans, especially growth scans to check both babies are growing well. Shared-placenta (mono) twins are scanned even more often. Many families are referred to a specialist or maternal-fetal medicine (MFM) team. This is routine and reassuring, not a sign that something is wrong — closer watching simply helps catch any concern early.",
    tips: [
      "More frequent ANC check-ups than a single pregnancy.",
      "Regular growth scans to compare both babies over time.",
      "Mono (shared-placenta) twins are usually monitored more often.",
      "Specialist or MFM care is common and is a positive, protective step.",
    ],
  },
  {
    eyebrow: "Nutrition",
    title: "Higher nutritional needs",
    body: "Two or more babies need more fuel. Most women carrying twins need extra calories and noticeably more protein, along with enough iron, folate (folic acid) and calcium — nutrients that matter even more when blood volume and demand are higher. Indian vegetarian diets can meet these needs with dals, paneer, milk, curd, eggs if you eat them, leafy greens, nuts and fortified foods. Do not self-prescribe; discuss exact amounts and any supplements with your clinician.",
    tips: [
      "Plan for extra calories and more protein than a single pregnancy.",
      "Iron, folate and calcium needs are higher — get levels checked.",
      "Vegetarian sources: dal, rajma, chana, paneer, milk, curd, leafy greens, nuts, seeds.",
      "Ask your doctor about the right supplements and quantities for you — no self-dosing.",
    ],
  },
  {
    eyebrow: "Weight gain",
    title: "More weight gain is expected",
    body: "Carrying twins normally means gaining more weight than with one baby, because there are two babies, more placenta and more fluid. The right target depends on your starting weight and health, so your clinician will set a sensible range for you and track it at each visit. Steady, gradual gain supported by good nutrition is the goal — sudden swings up or down are worth mentioning.",
    tips: [
      "Expect a higher total weight gain than a single pregnancy.",
      "Your clinician personalises the target to your build and health.",
      "Aim for steady, gradual gain rather than big jumps.",
      "Flag sudden weight changes or rapid swelling to your care team.",
    ],
  },
  {
    eyebrow: "What to watch",
    title: "Conditions to monitor",
    body: "Twin pregnancies carry a higher chance of some issues, which is exactly why monitoring is closer. These include anaemia, gestational diabetes (GDM), pre-eclampsia (raised blood pressure), preterm birth, and growth differences between the babies. Identical twins sharing one placenta have a specific risk called twin-to-twin transfusion syndrome (TTTS), where blood flow becomes unequal — another reason shared-placenta twins are scanned often. Knowing these does not mean they will happen; most twin pregnancies do well.",
    tips: [
      "Anaemia, GDM and pre-eclampsia are watched for at routine checks.",
      "Preterm birth (delivering early) is more common with multiples.",
      "Growth scans compare the babies to catch growth differences.",
      "TTTS is specific to identical twins sharing one placenta — hence frequent scans.",
    ],
  },
  {
    eyebrow: "Rest & support",
    title: "Rest and leaning on family",
    body: "A multiple pregnancy is more tiring, so rest is part of the care, not a luxury. Pace your day, lie on your side when resting, stay hydrated, and accept help with chores and cooking. India’s joint-family setup can be a real strength here — grandparents, siblings and in-laws can share the load of housework, older children and appointments. Emotional support matters too; talk openly about worries with your partner, family or doctor.",
    tips: [
      "Build in extra rest and short breaks through the day.",
      "Resting on your side and staying hydrated help comfort and circulation.",
      "Accept help with cooking, cleaning and older children — joint-family support counts.",
      "Share worries with your partner, family or clinician; you are not alone.",
    ],
  },
  {
    eyebrow: "Delivery",
    title: "Delivery considerations",
    body: "Twins are usually delivered earlier than single babies. For di/di twins, delivery is often planned around 37 weeks, and shared-placenta twins typically a bit earlier — your team will advise the safest timing for you. The mode of delivery (vaginal or caesarean) is individualised and depends on the babies’ positions, growth and your health. Plan to deliver at a well-equipped facility with a neonatal intensive care unit (NICU), so expert help is on hand if a baby needs it.",
    tips: [
      "Di/di twins are often delivered around 37 weeks; shared-placenta twins earlier.",
      "Vaginal or caesarean birth is decided case by case with your obstetrician.",
      "Choose a facility with a NICU and experienced staff for twins.",
      "Keep a hospital bag and travel plan ready a little earlier than usual.",
    ],
  },
  {
    eyebrow: "Practical prep",
    title: "Practical, financial & emotional readiness",
    body: "Twins mean roughly double of everything — feeds, nappies, clothes and sleepless nights — so a little planning eases the early months. Think ahead about costs, work leave and who will help at home, and line up family support in advance. Prepare emotionally too: caring for two newborns, possibly with a NICU stay, is intense but manageable with a plan and a support circle. Many Indian families find that organising the joint family early makes the biggest difference.",
    tips: [
      "Budget for roughly double of essentials — and check what can be shared or reused.",
      "Arrange leave and a rota of family helpers before the babies arrive.",
      "Be NICU-ready: know your hospital’s setup in case of a short stay.",
      "Set up a support circle so no single person carries the whole load.",
    ],
  },
  {
    eyebrow: "Reassurance",
    title: "The positives",
    body: "Carrying multiples can feel overwhelming, but there is a great deal to feel hopeful about. With good antenatal care, sensible nutrition, rest and the right delivery setting, most twin and multiple pregnancies go well and the babies thrive. The closer monitoring you receive is a safety net working in your favour. Many families describe the bond and the joy of multiples as a unique gift — double the love, grown from one pregnancy.",
    tips: [
      "Most twin pregnancies, well cared for, have healthy outcomes.",
      "Frequent scans and visits are protection, not a warning sign.",
      "Good nutrition, rest and support genuinely improve how you feel.",
      "It is doubly demanding — and, for many families, doubly rewarding.",
    ],
  },
];

export default function TwinsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Double the joy</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Twins & multiples</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Expecting two or more little ones is exciting and a little daunting. This guide explains the types of twins, why an early scan matters, the extra care and nutrition multiples need, what to watch for, and how to prepare practically and emotionally — written with Indian families and joint-family support in mind.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="peach">Twins & multiples</Badge>
            <Badge tone="sage">India focus</Badge>
            <Badge tone="plum">Education only</Badge>
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
          This page is for general education only and is not medical advice. Care for twins and multiples is individualised by your obstetrician or maternal-fetal medicine specialist — always follow their guidance for your pregnancy. In an emergency in India, dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
