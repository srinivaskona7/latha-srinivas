import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Sleep & Comfort — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Position",
    title: "Sleep on your side (ideally left)",
    body: "From the second half of pregnancy, the safest and most comfortable way to rest is on your side. The simple phrase doctors use is SOS — ’sleep on side’. The left side is often suggested in the third trimester because it can ease the flow of blood and nutrients to the placenta and baby, though either side is far better than lying flat on your back.",
    tips: [
      "Settle on your side before drifting off, especially in the third trimester (after about 28 weeks).",
      "If you wake up on your back, simply roll back onto your side — no need to panic, just reposition.",
      "Left side is the gentle default, but switching between left and right through the night is perfectly fine for comfort.",
    ],
  },
  {
    eyebrow: "Avoid",
    title: "Why lying flat on your back is best avoided",
    body: "After roughly 16 to 20 weeks, the growing uterus can press on a large vein called the vena cava when you lie flat on your back, which may reduce blood return to the heart and leave you feeling dizzy, breathless or nauseous. Side-sleeping keeps that vein open.",
    tips: [
      "Tuck a pillow behind your back so that if you roll, you settle into a comfortable half-tilt rather than fully flat.",
      "If you ever feel light-headed or breathless while lying down, turn onto your side and the feeling usually eases quickly.",
      "Short periods propped up at an angle (back rest plus pillows) are fine if fully flat feels uncomfortable.",
    ],
  },
  {
    eyebrow: "Support",
    title: "Pillows are your best friend",
    body: "The right pillow setup takes pressure off your hips, back and bump. You do not need anything fancy — a long bolster or a few firm cotton pillows work beautifully, and a full-length maternity pillow can be a lovely upgrade if it fits your budget.",
    tips: [
      "Place a pillow between your knees to keep hips and lower back aligned.",
      "Slide a small, soft pillow under the bump to take its weight off your abdomen.",
      "Keep a pillow behind your back for support and to discourage rolling flat.",
      "A long bolster or C-shaped maternity pillow can replace several smaller pillows in one go.",
    ],
  },
  {
    eyebrow: "Discomfort",
    title: "Easing back pain and leg cramps",
    body: "Back pain and night-time leg cramps are among the most common pregnancy complaints. Gentle movement, good posture and steady hydration go a long way. Calf cramps often strike at night and can be eased by stretching and staying well hydrated.",
    tips: [
      "Sit and stand tall with support behind your lower back; avoid slouching for long stretches.",
      "Do gentle daily stretches and a short walk to keep your back and legs supple.",
      "For a calf cramp, flex your foot upward (toes toward you) and massage the muscle until it releases.",
      "Stay hydrated through the day; ask your doctor before taking any calcium or magnesium supplement.",
    ],
  },
  {
    eyebrow: "Digestion",
    title: "Managing heartburn at night",
    body: "Heartburn worsens in pregnancy as hormones relax the valve at the top of the stomach and the bump presses upward. Eating habits and a slightly raised head can make evenings far more comfortable.",
    tips: [
      "Eat small, frequent meals rather than one heavy dinner.",
      "Finish eating at least two to three hours before lying down.",
      "Prop your head and upper body slightly higher with an extra pillow.",
      "Note which foods (very spicy, oily or fried) trigger it for you and ease back on them in the evening.",
    ],
  },
  {
    eyebrow: "Night waking",
    title: "Frequent urination, breathlessness and swelling",
    body: "Waking to pee, feeling a little breathless, and puffy ankles are all common as pregnancy advances. Small timing and positioning changes help you rest better through the night.",
    tips: [
      "Drink plenty of fluids earlier in the day and taper off in the couple of hours before bed.",
      "If breathlessness bothers you, sleep propped up a little and lie on your side to open up the chest.",
      "Elevate your feet on a cushion in the evening to help mild ankle and foot swelling settle.",
      "Mild, even swelling is common; sudden or one-sided swelling deserves a call to your doctor.",
    ],
  },
  {
    eyebrow: "Restless legs",
    title: "Calming restless legs",
    body: "That crawling, can’t-keep-still feeling in the legs at bedtime — restless legs — is common in pregnancy and usually settles after delivery. Gentle routines and a check on your iron status (via your doctor) often help.",
    tips: [
      "Stretch your calves and take a slow walk in the evening to release tension.",
      "A warm bath or a gentle leg massage before bed can soothe the urge to move.",
      "Mention it to your doctor, who may check your iron levels and advise accordingly.",
    ],
  },
  {
    eyebrow: "Routine",
    title: "Simple sleep hygiene that works",
    body: "Good sleep habits help your body wind down even when comfort is hard to find. A cool, dark room and a calm pre-bed routine signal that it is time to rest, and short daytime naps are completely fine.",
    tips: [
      "Keep the bedroom cool, dark and quiet; a fan helps in the Indian heat.",
      "Build a calming wind-down — a warm bath, light reading or quiet music.",
      "Dim the lights and put screens away for an hour before bed to help your mind settle.",
      "A short afternoon nap (20 to 40 minutes) is fine and can top up lost night sleep.",
    ],
  },
  {
    eyebrow: "When to call",
    title: "When to tell your doctor",
    body: "Most sleep struggles in pregnancy are normal and manageable. A few signs, though, need prompt medical attention rather than waiting for your next visit.",
    tips: [
      "A severe or persistent headache, or any visual disturbance, especially with swelling.",
      "Very poor sleep that leaves you exhausted and unable to cope through the day.",
      "Loud snoring with daytime sleepiness or pauses in breathing — possible signs of sleep apnoea.",
      "Severe, one-sided calf pain, swelling, warmth or redness — get this checked urgently.",
      "Always ask your obstetrician before starting any supplement or sleep aid.",
    ],
  },
];

export default function SleepComfortPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Rest & restore</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Sleep & comfort</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Restful sleep can feel elusive as your bump grows, but a few gentle changes — how you lie, the pillows you use, and a calm bedtime routine — make a real difference. Here is a warm, practical guide to sleeping safely and comfortably through your pregnancy.
          </p>
          <div className="mt-5">
            <Badge>Education only · India</Badge>
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
          This page is for education only and is not a substitute for medical advice. Every pregnancy is different — please consult your obstetrician about your sleep, comfort and any supplements. In an emergency in India, dial 108 for ambulance services.
        </p>
      </SectionReveal>
    </main>
  );
}
