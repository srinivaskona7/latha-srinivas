import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Mental Wellness — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "It’s normal",
    title: "Emotional ups and downs are part of pregnancy",
    body: "Pregnancy brings big hormonal shifts alongside one of life’s biggest changes, so feeling joyful one hour and tearful the next is completely normal. Mood swings, sensitivity and moments of doubt do not mean anything is wrong with you. Naming what you feel, rather than judging it, is the gentlest place to start.",
    tips: [
      "Expect a wide range of feelings — excitement, fear, irritability and tenderness can all coexist.",
      "Hormones (especially in the first trimester and near the end) genuinely affect mood, sleep and tears.",
      "A passing low day is different from a low mood that lingers for weeks — notice the difference.",
    ],
  },
  {
    eyebrow: "Reduce the stigma",
    title: "Anxiety and depression in pregnancy are common — and treatable",
    body: "Antenatal (during-pregnancy) anxiety and depression affect a large number of women and have nothing to do with being weak or a ’bad mother’. In many Indian families there is silence or shame around mental health, but struggling is not a character flaw — it is a health condition that responds well to support and treatment. Asking for help is a sign of strength and of caring for your baby.",
    tips: [
      "You did not cause this, and it does not predict the kind of parent you will be.",
      "Effective help exists — talking therapy, lifestyle support and, when needed, safe treatment.",
      "Telling one trusted person is often the hardest and most powerful first step.",
    ],
  },
  {
    eyebrow: "Know the signs",
    title: "When low mood or worry needs attention",
    body: "Everyone has hard days, but some signs suggest it is time to reach out. If difficult feelings last most of the day for two weeks or more, or get in the way of eating, sleeping or daily life, please speak to your obstetrician or a mental-health professional. You do not need to wait until things feel unbearable.",
    tips: [
      "Persistent low mood, hopelessness, or losing interest in things you used to enjoy.",
      "Excessive or constant worry, racing thoughts, or feeling on edge much of the time.",
      "Sleep or appetite changes beyond the usual aches and tiredness of pregnancy.",
      "Irritability, frequent crying, or intrusive frightening thoughts you cannot switch off.",
    ],
  },
  {
    eyebrow: "After the birth",
    title: "Baby blues, postpartum depression and postpartum psychosis",
    body: "After delivery, brief ’baby blues’ — tearfulness and mood swings in the first one to two weeks — are very common and usually settle on their own. Postpartum depression is deeper and longer-lasting and needs treatment. Postpartum psychosis is rare but is a medical emergency. Knowing the difference helps you and your family respond quickly.",
    tips: [
      "Baby blues: mild, short-lived, eases within about two weeks — rest and support usually help.",
      "Postpartum depression: persistent sadness, anxiety or detachment beyond two weeks — seek professional help.",
      "Postpartum psychosis: confusion, severe agitation, hallucinations or losing touch with reality — treat as an emergency and get urgent care.",
    ],
  },
  {
    eyebrow: "Build your circle",
    title: "Support from partner, family and friends",
    body: "You are not meant to carry this alone. Talking openly with your partner, family and friends, and letting them share the load, protects your wellbeing. A joint family can be a wonderful source of help with chores, cooking and care — and can also bring pressure or unsolicited advice. Both can be true at once.",
    tips: [
      "Ask directly for what helps — a meal, a nap, a listening ear — rather than waiting to be guessed.",
      "Share the mental load too: appointments, decisions and night-time care can be split.",
      "Stay connected to friends and other mothers; isolation makes everything feel heavier.",
    ],
  },
  {
    eyebrow: "Gentle boundaries",
    title: "Managing in-law and relationship dynamics",
    body: "Family expectations — about food, rituals, the baby’s gender or how you ’should’ feel — can add stress at an already tender time. Setting kind, clear boundaries is healthy, not disrespectful. You and your partner can present a united, gentle front and decide together what advice to take and what to set aside.",
    tips: [
      "Agree with your partner first, then share decisions together so you are not alone in saying no.",
      "It is okay to thank someone for advice and still do what feels right for you.",
      "Protect rest and quiet time — limiting visitors or comments is a fair boundary, not rudeness.",
    ],
  },
  {
    eyebrow: "Daily care",
    title: "Coping tools that genuinely help",
    body: "Small, regular practices steady the mind more than occasional big efforts. Rest, gentle movement and breathing are simple, free and effective. Be kind to yourself and lower the bar — a ’good enough’ day is a real success during pregnancy.",
    tips: [
      "Prioritise rest and sleep where you can; tiredness magnifies low mood and worry.",
      "Gentle movement such as walking or prenatal yoga lifts mood — check with your doctor first.",
      "Try slow breathing, meditation or pranayama for a few minutes to calm the nervous system.",
      "Journaling, realistic expectations and limiting upsetting news or social media all help.",
    ],
  },
  {
    eyebrow: "Where to turn",
    title: "Getting help in India",
    body: "Help is available and confidential. Your obstetrician is a good first point of contact and can refer you to a mental-health professional. National helplines offer free, confidential support in multiple languages, day or night. Reaching out early makes recovery faster and easier.",
    tips: [
      "Start with your obstetrician or family doctor — they can screen, reassure and refer.",
      "A psychologist, psychiatrist or counsellor can offer therapy and, if needed, safe treatment.",
      "Tele-MANAS national mental-health helpline: 14416 or 1-800-891-4416, available 24x7.",
      "KIRAN national mental-health helpline: 1800-599-0019, available 24x7 in many languages.",
    ],
  },
  {
    eyebrow: "Urgent",
    title: "Red flags that need help right away",
    body: "Some thoughts and symptoms need immediate attention — please do not wait or feel ashamed. If you have thoughts of harming yourself or your baby, or you feel you cannot keep yourself or your baby safe, this is an emergency. Reach out to someone you trust this minute and get help now.",
    tips: [
      "Thoughts of self-harm, suicide, or harming your baby — seek help immediately.",
      "Feeling unable to care for yourself or your baby, or losing touch with reality.",
      "In India, call Tele-MANAS 14416 or dial the emergency number 108 right away.",
      "Tell a trusted person now and ask them to stay with you until help arrives.",
    ],
  },
];

const HELPLINES: string[] = [
  "Tele-MANAS — national mental-health helpline: 14416 or 1-800-891-4416 (24x7, multiple languages)",
  "KIRAN — national mental-health helpline: 1800-599-0019 (24x7, free and confidential)",
  "Your obstetrician or family doctor — a safe first contact who can reassure and refer you",
  "Medical emergency in India — dial 108 if you or your baby are at risk right now",
];

export default function MentalWellnessPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Your mind matters too</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Mental wellness</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Caring for your baby starts with caring for you. Pregnancy can stir up joy, worry, tenderness and tears all at
            once, and that is normal. This is a gentle, judgement-free guide to your emotional wellbeing — what is
            common, when to seek help, and where to find support in India. You are not alone, and asking for help is a
            sign of strength.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <GlassCard className="border border-terracotta/25 bg-peach/15">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="peach">You are not alone</Badge>
            <h2 className="font-display text-xl font-semibold tracking-tight text-terracotta sm:text-2xl">Reach out for support</h2>
          </div>
          <ul className="mt-4 space-y-2">
            {HELPLINES.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <div className="mt-6 space-y-6">
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
          This page is for education and support only and is not a substitute for professional mental-health care. If you
          have thoughts of harming yourself or your baby, seek help immediately — in India call Tele-MANAS 14416 or
          dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
