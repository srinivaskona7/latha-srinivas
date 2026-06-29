import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Signs of Labour — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The countdown begins",
    title: "Early signs labour may be near",
    body: "In the days or weeks before labour, your body quietly prepares. These early signs can appear gradually and don’t always mean labour starts today, but they are gentle clues that your due date is approaching.",
    tips: [
      "Lightening: the baby ’drops’ lower into the pelvis, so you may breathe more easily but feel extra pressure on the bladder and pelvis.",
      "Show or mucus plug: a sticky, jelly-like discharge (sometimes tinged pink or brown) as the cervix softens — this can pass days before labour or as it begins.",
      "Nesting: a sudden burst of energy and the urge to clean or organise — rest too, so you save strength for the birth.",
      "Loose stools, mild backache and period-like cramps are common as hormones shift.",
    ],
  },
  {
    eyebrow: "Know the difference",
    title: "True labour vs false (Braxton Hicks)",
    body: "Braxton Hicks are ’practice’ contractions that warm up the uterus. True labour contractions get longer, stronger and closer together over time. Telling them apart helps you avoid an unnecessary hospital trip — or a delayed one.",
    tips: [
      "False (Braxton Hicks): irregular, often ease with rest, a warm bath, hydration or changing position; felt mainly at the front.",
      "True labour: regular and predictable, grows stronger and closer no matter what you do; often wraps from the back around to the front.",
      "True contractions usually intensify with walking; false ones tend to fade with movement or rest.",
      "If unsure, time several contractions for an hour and call your hospital or midwife for guidance.",
    ],
  },
  {
    eyebrow: "Waters breaking",
    title: "When your water breaks (PROM)",
    body: "The amniotic sac can release as a sudden gush or a slow trickle. If your waters break before contractions begin it is called PROM (pre-labour rupture of membranes). Always inform your hospital, even if you feel fine — they will advise when to come in.",
    tips: [
      "Note the time, colour and smell of the fluid; normal amniotic fluid is clear or pale straw-coloured and largely odourless.",
      "Use a clean pad (not a tampon) so staff can check the fluid, and keep the area clean to lower infection risk.",
      "Call your hospital or doctor right away — many will want you reviewed within a few hours, especially if labour does not start on its own.",
      "Go in urgently if the fluid is green, brown or foul-smelling, or if you notice heavy bleeding or reduced baby movements.",
    ],
  },
  {
    eyebrow: "What happens in labour",
    title: "Stage one: early, active and transition",
    body: "The first stage is the longest and is where the cervix opens (dilates) to about 10 cm. It moves through three phases, and first-time labours often take longer than later ones.",
    tips: [
      "Early (latent) phase: mild, spaced-out contractions thin and open the cervix to around 4–6 cm; rest, eat lightly and stay hydrated at home if advised.",
      "Active phase: stronger, regular contractions every few minutes as the cervix opens further — this is usually when you settle into hospital.",
      "Transition: the most intense, shortest phase as you reach full dilation; many feel shaky, nauseous or doubtful — it means birth is close.",
      "Move, sway, lean or use breathing to cope; an upright position can help labour progress.",
    ],
  },
  {
    eyebrow: "What happens in labour",
    title: "Stage two and three: pushing, birth and placenta",
    body: "Once the cervix is fully open, the second stage is the birth of your baby, followed by the third stage when the placenta is delivered.",
    tips: [
      "Second stage (pushing): you work with each contraction and the urge to push to bring the baby down and out — this may take minutes to a couple of hours.",
      "Your team guides your pushing and may support the perineum; an episiotomy is sometimes done if needed.",
      "Birth: baby is born, dried and usually placed on your chest for skin-to-skin contact and early feeding.",
      "Third stage: the placenta is delivered within about 5–30 minutes, often helped by a small injection to reduce bleeding.",
    ],
  },
  {
    eyebrow: "Timing & going in",
    title: "Counting contractions and the 5-1-1 rule",
    body: "Timing contractions tells you how labour is progressing and when to head to hospital. A widely used guide for full-term, low-risk pregnancies is the 5-1-1 rule — but always follow your own doctor’s instructions.",
    tips: [
      "Time from the start of one contraction to the start of the next (frequency), and how long each one lasts (duration).",
      "5-1-1 guidance: contractions about 5 minutes apart, each lasting around 1 minute, continuing for at least 1 hour.",
      "Go sooner if you live far from the hospital, this is not your first baby, or your doctor advised an earlier threshold.",
      "Keep your hospital bag, documents, ID and any antenatal/MCP card ready, and arrange transport in advance.",
    ],
  },
  {
    eyebrow: "Comfort & coping",
    title: "Pain-relief options in India",
    body: "Labour pain is managed in many ways, from simple comfort measures to medical options. Availability varies between government hospitals, private hospitals and birthing centres, so discuss your choices during antenatal visits.",
    tips: [
      "Non-medical: movement, upright positions, breathing techniques, warm compresses, massage, a birthing ball and continuous support from a companion.",
      "Epidural analgesia is offered in many private and larger hospitals; ask if an anaesthetist is available round the clock.",
      "Other medical options some hospitals provide include injectable pain relief or nitrous oxide (gas and air) — availability differs by centre.",
      "Discuss options, costs and your birth preferences early; let your team know if your pain feels unmanageable.",
    ],
  },
  {
    eyebrow: "Don’t wait",
    title: "Signs that need urgent care",
    body: "Most labours are straightforward, but some symptoms need immediate medical attention. When in doubt, get checked — it is always better to be seen. For emergencies in India, dial 108 for an ambulance.",
    tips: [
      "Heavy or bright-red vaginal bleeding, or passing clots.",
      "Reduced, absent or markedly changed baby movements.",
      "Waters that are green, brown or foul-smelling (a sign the baby may be in distress).",
      "Severe or persistent headache, blurred vision, sudden swelling of face or hands, or upper-tummy pain — possible signs of high blood pressure.",
      "High fever, severe continuous pain between contractions, or feeling faint — seek care immediately.",
    ],
  },
];

export default function LabourSignsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Getting ready for birth</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Signs of labour</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            As your due date nears, your body sends signals that birth is on the way. Learn the early
            signs, how to tell true labour from practice contractions, when your waters breaking
            matters, the three stages of labour, how to time contractions, and the red-flag symptoms
            that mean you should head in right away.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="peach">India focus</Badge>
            <Badge tone="sage">Emergency: dial 108</Badge>
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
          This page is for general education only and is not a substitute for medical advice. Every
          pregnancy is different — always consult your obstetrician or midwife about your own labour
          plan and symptoms. In an emergency in India, dial 108 for an ambulance or go to your nearest
          hospital immediately.
        </p>
      </SectionReveal>
    </main>
  );
}
