import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "The science of breathing — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "The big idea",
    title: "Your breath is a switch you can reach",
    body: "Breathing is the one part of the nervous system you can both let happen automatically and take over by choice. That makes slow breathing a rare, direct lever on how calm or alert your whole body feels.",
    tips: [
      "Fast, shallow breathing tells the body to brace; slow, deep breathing tells it that all is well.",
      "Because you control your breath consciously, you can deliberately shift your body out of stress mode.",
      "This is physiology, not just a feeling; the effects are measurable in heart rate and blood pressure.",
      "Unlike many calming tools, your breath is always with you and costs nothing to use.",
    ],
  },
  {
    eyebrow: "The vagus nerve",
    title: "The body's brake pedal",
    body: "The vagus nerve carries signals between brain and body and runs the parasympathetic, or rest-and-digest, system. Slow breathing, especially a long, gentle exhale, stimulates this nerve and applies the brakes on stress.",
    tips: [
      "A longer out-breath than in-breath is the key trigger for this calming, parasympathetic response.",
      "When the vagus nerve is active, the heart slows, muscles soften and the mind settles.",
      "Good vagal tone, which slow breathing helps build, is linked with better emotional steadiness.",
      "This is why a deep sigh after a fright feels so relieving; it is the vagus nerve at work.",
    ],
  },
  {
    eyebrow: "Heart and blood pressure",
    title: "Slower breath, calmer circulation",
    body: "Breathing slowly at around five to six breaths a minute brings the heart and breath into a gentle rhythm. This eases the workload on your heart and helps blood pressure settle.",
    tips: [
      "Slow breathing widens blood vessels slightly, which can lower blood pressure over time.",
      "The natural rise and fall of heart rate with each breath, called heart-rate variability, improves with practice.",
      "Higher heart-rate variability is generally a sign of a healthy, adaptable nervous system.",
      "This gentle support pairs well with, and never replaces, your antenatal blood-pressure checks.",
    ],
  },
  {
    eyebrow: "Oxygen for two",
    title: "Better, fuller breaths in a crowded belly",
    body: "As your baby grows, the womb presses upward and lungs have less room, so breaths feel shorter. Learning to breathe low into the belly helps you take in air efficiently for both of you.",
    tips: [
      "Belly breathing uses the diaphragm fully, drawing air to the lower lungs where oxygen exchange is richest.",
      "Place a hand on your bump and feel it gently rise on the in-breath to know you are breathing deeply.",
      "Good oxygenation supports your energy and the steady supply your baby receives through the placenta.",
      "Feeling a little more breathless in late pregnancy is normal, but mention sudden severe breathlessness to your doctor.",
    ],
  },
  {
    eyebrow: "From the studies",
    title: "What the research shows",
    body: "Slow, paced breathing has been studied across many settings, from blood pressure clinics to labour wards. The evidence is clear that it shifts the body toward calm.",
    tips: [
      "Studies suggest slow breathing lowers heart rate and blood pressure in the short term.",
      "Research indicates paced breathing increases heart-rate variability, a marker of nervous-system balance.",
      "Trials in labour have found that breathing techniques help women cope with pain and feel more in control.",
      "Evidence shows breathing practices reduce feelings of anxiety and physical tension.",
      "These findings hold whether the breathing is learned alone, in classes or through guided audio.",
    ],
  },
  {
    eyebrow: "Coping in labour",
    title: "Breath as your anchor through contractions",
    body: "In labour, panic and breath-holding make pain feel sharper and tire you out. A steady breathing rhythm keeps oxygen flowing and gives your mind something firm to hold on to.",
    tips: [
      "Slow breathing in early labour keeps you relaxed and conserves your energy for later.",
      "During strong contractions, a longer exhale, sometimes with a soft sound, helps you ride the wave.",
      "Breathing prevents the tense, breath-holding spiral that often makes pain feel worse.",
      "Practising your rhythm now means it will feel familiar and reassuring on the day.",
    ],
  },
  {
    eyebrow: "Simple techniques",
    title: "Two breaths worth learning",
    body: "You do not need anything fancy. Two gentle patterns cover most needs, one for everyday calm and one for sleep or anxious moments. Never strain or force the breath.",
    tips: [
      "Coherent breathing: breathe in for a slow count of four and out for six, for a few minutes.",
      "Extended exhale: in for four, out for six to eight, ideal when you feel anxious or want to sleep.",
      "Belly breathing: keep the chest still and let only the lower belly rise and fall.",
      "If you ever feel light-headed, simply return to your normal breathing; calm, not effort, is the goal.",
      "Pranayama traditions in India have taught these slow patterns for centuries; keep yours gentle in pregnancy.",
    ],
  },
  {
    eyebrow: "Gentle cautions",
    title: "Keep it soft and stay safe",
    body: "Breathing practice is very safe when kept gentle, but pregnancy is not the time for forceful or breath-holding techniques. Comfort is always the guide.",
    tips: [
      "Avoid rapid, forceful breathing such as vigorous kapalabhati or any long breath-holds while pregnant.",
      "Stop and rest if you feel dizzy, tingly or short of breath; ease back to natural breathing.",
      "If breathlessness is sudden, severe or comes with chest pain or swelling, seek medical help promptly.",
      "Learn intense techniques only with a teacher experienced in guiding pregnant women.",
    ],
  },
];

export default function BreathingSciencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Body and nervous system</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">The science of breathing</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Your breath is a direct line to your nervous system. Slow, gentle breathing wakes the vagus nerve, eases your heart and blood pressure, and becomes a reliable anchor for everyday calm and for labour itself.</p>
          <div className="mt-5">
            <Badge>Evidence-informed · not medical advice</Badge>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is educational and not a substitute for advice from your doctor or midwife. Keep all breathing practice gentle and stop if you feel unwell. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
