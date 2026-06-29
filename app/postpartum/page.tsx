import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Postpartum & Newborn — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Mother's recovery",
    title: "Healing in the early weeks",
    body: "The traditional jaapa or confinement of roughly 40 days reflects a sound instinct: a new mother needs warmth, rest, nourishing food and hands-on support while her body heals. Recovery is gradual, so be gentle with yourself and lean on family for the cooking, cleaning and night-time help that the custom is really about.",
    tips: [
      "Lochia (postnatal bleeding) is normal for a few weeks and slowly fades from red to pink to pale. Soak through a pad in under an hour, pass large clots, or notice a foul smell or fever? Seek care promptly.",
      "Afterpains as the womb shrinks are common, especially while breastfeeding and after a second or later baby; they ease over a few days.",
      "Keep a perineal tear or episiotomy clean and dry, wash with plain water, and change pads often. For a caesarean wound, keep it clean and dry and watch for redness, swelling, discharge or rising pain.",
      "Rest when the baby rests, accept help, and do not rush back to heavy housework. Sleep is part of recovery, not a luxury.",
      "Eat regular, balanced meals with dal, vegetables, whole grains, milk or curd, eggs or fish, and seasonal fruit; drink plenty of water, especially while breastfeeding.",
      "Continue iron-and-folic-acid (IFA) and calcium as advised to rebuild stores after birth and breastfeeding.",
      "Begin gentle pelvic-floor (Kegel) exercises once comfortable to help bladder control and core recovery.",
      "Attend the postnatal check-up around 6 weeks for both you and your baby, and use it to discuss healing, mood and contraception.",
    ],
  },
  {
    eyebrow: "Breastfeeding",
    title: "Feeding your baby well",
    body: "Breast milk is the ideal first food. India's MAA (Mothers' Absolute Affection) programme, alongside WHO and MoHFW Infant and Young Child Feeding (IYCF) guidance, promotes early and exclusive breastfeeding. Support from family and trained health workers makes a real difference in the first days.",
    tips: [
      "Start breastfeeding within the first hour of birth wherever possible; early skin-to-skin contact helps milk flow and bonding.",
      "Give the first thick yellow milk, colostrum, to your baby; it is rich in antibodies. Discarding colostrum is a custom that is not recommended.",
      "Aim for exclusive breastfeeding for the first 6 months: only breast milk, no water, honey, ghutti or animal milk. Such prelacteal feeds are not recommended as they raise infection risk and reduce milk supply.",
      "Feed on demand, day and night, roughly 8 to 12 times in 24 hours; frequent feeding builds your milk supply.",
      "Aim for a deep latch: baby's mouth wide, more of the lower areola in the mouth, chin touching the breast and no sharp pinching pain.",
      "Sore nipples, engorgement or worries about supply are common and usually fixable; ask an ASHA, ANM, lactation counsellor or doctor early rather than stopping.",
    ],
  },
  {
    eyebrow: "Newborn care",
    title: "Keeping your baby safe and warm",
    body: "A newborn needs warmth, clean care, frequent feeds and protection from infection. Many traditional rituals are loving and harmless, but a few well-meant practices around the cord and first feeds are best set aside in favour of simpler, safer care.",
    tips: [
      "Cord care: keep the stump clean and dry and let it fall off on its own. Applying oil, ash, cow dung, turmeric or any substance is not recommended and can cause serious infection.",
      "Keep the baby warm with skin-to-skin contact and a cap; for small or preterm babies, Kangaroo Mother Care (continuous skin-to-skin) is strongly encouraged.",
      "Watch for jaundice: mild yellowing of skin and eyes is common, but deepening colour, yellow palms or soles, poor feeding or a very sleepy baby needs same-day review.",
      "Track feeding and output: about 6 or more wet nappies a day and steady weight gain after the first week suggest your baby is getting enough.",
      "Begin immunisation at birth, BCG, the birth dose of OPV (oral polio) and Hepatitis B, then follow the national schedule on the MCP card.",
      "Complete birth registration and keep the Mother and Child Protection (MCP) card safe; it records growth, vaccines and visits.",
    ],
  },
  {
    eyebrow: "Danger signs",
    title: "When to seek help urgently",
    body: "Most days will be ordinary, but some signs in a mother or newborn need immediate attention. Trust your instincts: if something feels wrong, it is always right to get checked.",
    tips: [
      "Newborn warning signs: poor or no feeding, unusual drowsiness or floppiness, fever or a cold body, fast or laboured breathing, chest indrawing, fits, or yellowing that is spreading.",
      "Mother warning signs: heavy bleeding, foul-smelling discharge, high fever, severe headache or blurred vision, calf pain or swelling, breathlessness, or a hot painful breast.",
      "Do not wait it out for these signs; see a paediatrician or doctor the same day, or call the 108 ambulance service in an emergency.",
    ],
  },
  {
    eyebrow: "Mental health",
    title: "Caring for your mind too",
    body: "The fourth trimester is an emotional time, and your feelings matter as much as your physical recovery. Many mothers experience low mood; it is common, it is not a weakness, and support helps. Talking about it openly reduces stigma and helps families respond with kindness.",
    tips: [
      "Baby blues, tearfulness, mood swings and feeling overwhelmed in the first week or two, are very common and usually ease on their own with rest and support.",
      "Postpartum depression is different: low mood, loss of interest, sleep or appetite changes, hopelessness or trouble bonding lasting beyond two weeks deserves help, not silence.",
      "Reach out if you feel persistently sad or anxious, cannot cope, or have any thoughts of harming yourself or your baby; speak to your doctor right away.",
      "Family support is powerful medicine: share night feeds and chores, listen without judgement, and encourage the mother to rest and to talk.",
    ],
  },
  {
    eyebrow: "Family planning",
    title: "Spacing your next pregnancy",
    body: "Giving your body time to recover before the next pregnancy is good for both mother and baby. The postnatal check-up is a natural moment to discuss spacing and contraception with your doctor, in a way that fits your family's wishes.",
    tips: [
      "Healthy spacing of about 2 to 3 years between births supports recovery and improves outcomes for both mother and baby.",
      "Several options exist after birth, including spacing methods that are compatible with breastfeeding; your doctor or health worker can help you choose.",
      "Remember that full breastfeeding offers only partial, time-limited protection against pregnancy, so discuss a reliable method that suits you.",
    ],
  },
];

export default function PostpartumPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">The fourth trimester</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Postpartum &amp; newborn</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            The weeks after birth, the time of jaapa in many Indian homes, are for healing, feeding and bonding. Here is supportive, evidence-based guidance that honours tradition while keeping you and your baby safe.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="peach">Mother</Badge>
            <Badge tone="sage">Newborn</Badge>
            <Badge tone="plum">Wellbeing</Badge>
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
          This page is for education only and is not medical advice. Always follow your obstetrician and paediatrician for care decisions. If you or your baby show any warning signs, seek care immediately, in India dial 108 for emergency help.
        </p>
      </SectionReveal>
    </main>
  );
}
