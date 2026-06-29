import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Prenatal Yoga — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Why it helps",
    title: "Benefits of gentle prenatal yoga",
    body: "Across India’s long yoga tradition, gentle movement and mindful breathing are valued for calming the mind and easing the body. In pregnancy, a regular, low-intensity practice can lift mood, support better sleep, and build the steady stamina that helps you through the months ahead.",
    tips: [
      "Eases everyday tension and lifts mood by encouraging slow, mindful movement.",
      "Can improve sleep quality when practised gently in the evening hours.",
      "Loosens the lower back and hips, helping relieve common pregnancy back pain.",
      "Builds stamina and body awareness that support comfort in daily life.",
      "Connecting breath with gentle stretches can help you feel calmer and more prepared for labour.",
    ],
  },
  {
    eyebrow: "Practise safely",
    title: "General safety first",
    body: "Yoga in pregnancy is about steadiness and ease, never strain. Get clearance from your obstetrician before you begin, and ideally practise with a qualified prenatal yoga teacher who can adapt poses for each stage. Listen to your body and stop the moment anything feels wrong.",
    tips: [
      "Get clinician clearance before starting, and learn under a qualified prenatal yoga instructor.",
      "Stay well hydrated and avoid overheating — skip hot or heated-room yoga entirely.",
      "Avoid deep twists, strong abdominal/core work, and any inversions or balancing on the head.",
      "From about 16–20 weeks, avoid lying flat on your back for long — use a side-lying or propped position.",
      "Avoid breath retention and forceful breathing such as Kapalbhati and Bhastrika.",
      "Stop and seek medical help if you feel dizzy, breathless, have pain, bleeding, or fluid leaking.",
    ],
  },
  {
    eyebrow: "First trimester",
    title: "Trimester 1 — keep it gentle",
    body: "Early on you may feel tired or nauseous, so go easy and let energy levels guide you. Focus on calm breathing, gentle stretching, and grounding poses rather than anything demanding.",
    tips: [
      "Favour gentle, restorative movement and plenty of rest between poses.",
      "Sit tall in Sukhasana (easy seated pose) for slow breathing and grounding.",
      "Try slow Tadasana (mountain pose) for posture and steady balance near support.",
      "Skip new, vigorous routines — this is a time to settle into a calm rhythm.",
    ],
  },
  {
    eyebrow: "Second trimester",
    title: "Trimester 2 — often the most comfortable",
    body: "Energy usually returns and the bump is still manageable, so many find this the easiest stage to practise. Keep movements smooth and supported, and start avoiding flat-on-back positions for longer holds.",
    tips: [
      "Cat-Cow (Marjariasana) on hands and knees to gently mobilise the spine.",
      "Konasana and butterfly (Baddha Konasana) to open the hips comfortably.",
      "Vajrasana (kneeling pose) for an easy, stable seat after light movement.",
      "Gentle pelvic tilts to relieve the lower back as the bump grows.",
      "Use props and a wall for support; keep balance work close to something steady.",
    ],
  },
  {
    eyebrow: "Third trimester",
    title: "Trimester 3 — hips, breath, and rest",
    body: "As the body gets heavier, shift the focus toward opening the hips, breathing well, and deep relaxation. Keep everything supported and unhurried, and rest whenever you need to.",
    tips: [
      "Wall-supported gentle squats and hip openers to prepare the pelvis.",
      "Supported Balasana (child’s pose) with cushions for a restful stretch.",
      "Side-lying Savasana with a pillow between the knees for deep relaxation.",
      "Spend more time on slow breathing and calming the nervous system.",
      "Avoid lying flat on the back; rest on your side instead.",
    ],
  },
  {
    eyebrow: "Breathe well",
    title: "Pranayama for calm",
    body: "Slow, gentle breathing is one of the most useful tools in pregnancy — it settles the mind and helps you stay present. Keep it soft and natural, and never hold the breath or force it.",
    tips: [
      "Slow Anulom Vilom (alternate-nostril breathing) without any breath holding.",
      "Deep diaphragmatic (belly) breathing to relax and oxygenate gently.",
      "Bhramari (humming breath) for a soothing, calming effect.",
      "Avoid Kapalbhati, Bhastrika, and any breath retention throughout pregnancy.",
    ],
  },
  {
    eyebrow: "When to pause",
    title: "When not to exercise",
    body: "Some conditions make yoga and exercise unsafe unless a doctor guides you closely. If any of the situations below apply, do not practise on your own — talk to your obstetrician first.",
    tips: [
      "Placenta praevia, a risk of preterm labour, or pre-eclampsia — only under medical guidance.",
      "Cervical problems (such as a weak or stitched cervix) or unexplained bleeding.",
      "Any pregnancy your clinician has flagged as high-risk.",
      "When in doubt, stop and check before continuing any movement or breathing practice.",
    ],
  },
  {
    eyebrow: "Beyond the mat",
    title: "Other safe exercise",
    body: "Yoga isn’t the only gentle option. Simple, steady activity most days — with your clinician’s okay — supports your strength and comfort through pregnancy.",
    tips: [
      "Walking at a comfortable pace is one of the safest, easiest choices.",
      "Swimming and water exercise feel supportive and take weight off the joints.",
      "Pelvic floor (Kegel) exercises help support the bladder and recovery.",
      "Build up slowly, keep it gentle, and rest whenever you feel tired.",
    ],
  },
];

export default function YogaPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Move with your breath</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Prenatal yoga</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            India’s yoga tradition offers gentle, grounding ways to move and breathe through pregnancy. Here is a
            trimester-wise guide to safe asanas, calming pranayama, and other gentle exercise — always with your
            clinician’s clearance and, ideally, a qualified prenatal yoga teacher by your side.
          </p>
          <div className="mt-5">
            <Badge>Education only &middot; not medical advice</Badge>
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
          This page is for education only and is not medical or fitness prescription. Every pregnancy is different
          — clear any exercise or yoga practice with your obstetrician, and stop and seek help if you feel unwell.
          In India, dial 108 for emergencies.
        </p>
      </SectionReveal>
    </main>
  );
}
