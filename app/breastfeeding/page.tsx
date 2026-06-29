import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Breastfeeding — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "First hour",
    title: "Early initiation within 1 hour",
    body: "India’s MAA (Mothers’ Absolute Affection) programme and WHO advise putting baby to the breast within the first hour of birth, including after a caesarean once you are awake and stable. Skin-to-skin contact on your chest keeps baby warm, steadies breathing and heartbeat, and triggers the reflexes that start feeding.",
    tips: [
      "Ask for skin-to-skin (kangaroo) contact in the labour room and let baby find the breast.",
      "Early, frequent suckling tells your body to begin making milk sooner.",
      "Even after a C-section, request help to start feeding as soon as you can hold baby.",
    ],
  },
  {
    eyebrow: "Liquid gold",
    title: "Colostrum — baby’s first vaccine",
    body: "The thick yellowish milk of the first few days is colostrum. It is small in volume but packed with antibodies and is rightly called baby’s ’first vaccine’. A newborn’s stomach is tiny, so these few drops are exactly enough. Colostrum must never be squeezed out and thrown away.",
    tips: [
      "Feed colostrum freely — it protects the gut and builds early immunity.",
      "Do not discard the first milk; this old custom is not recommended.",
      "Its mild laxative effect helps baby pass the first dark stools (meconium).",
    ],
  },
  {
    eyebrow: "0–6 months",
    title: "Exclusive breastfeeding for 6 months",
    body: "WHO, MoHFW and the IYCF (Infant and Young Child Feeding) guidelines recommend only breast milk — no water, no honey, no animal milk, no ghutti and no other prelacteal feeds — for the first six months. Breast milk already contains all the water a baby needs, even in Indian summers. Complementary foods begin at six months while breastfeeding continues.",
    tips: [
      "No water, honey, sugar water, gripe water or top milk before 6 months.",
      "Breast milk meets all fluid needs; extra water can fill the tummy and cause infection.",
      "At 6 months, start home-based complementary foods and keep breastfeeding up to 2 years and beyond.",
    ],
  },
  {
    eyebrow: "On demand",
    title: "Feeding frequency & cues",
    body: "Feed whenever baby is hungry, day and night — usually 8 to 12 times in 24 hours in the early weeks. Watch for early hunger cues rather than waiting for crying, which is a late sign. Let baby finish one breast fully before offering the other so they get the richer hindmilk.",
    tips: [
      "Early cues: stirring, mouth opening, turning toward the breast (rooting), hand-to-mouth.",
      "Do not time or ration feeds; feed on demand, including night feeds.",
      "Wake a very sleepy newborn to feed if more than 3 hours pass in the early days.",
    ],
  },
  {
    eyebrow: "Comfort & latch",
    title: "Good latch & positions",
    body: "A deep latch — where baby takes the nipple and a large part of the areola, with chin touching the breast and lips flanged out — makes feeding effective and pain-free. Pain or clicking usually means a shallow latch. Try different positions to find what is comfortable for you and baby.",
    tips: [
      "Common holds: cradle, cross-cradle, football (clutch) hold, and side-lying for rest.",
      "Bring baby to the breast, not the breast to baby; support the neck and shoulders.",
      "A good latch is wide-mouthed and feels like a tug, not a pinch.",
    ],
  },
  {
    eyebrow: "Getting enough",
    title: "Signs baby is getting enough",
    body: "Babies cannot tell us in millilitres, so we read their output and growth. From about day 5, expect at least 6 or more heavy wet nappies a day and regular stools. Steady weight gain after the first couple of weeks and rhythmic suck-swallow sounds during feeds are reassuring signs.",
    tips: [
      "6 or more wet nappies and pale, odourless urine each day suggests enough milk.",
      "Listen for swallowing; baby seems settled and releases the breast on their own.",
      "Track weight at immunisation visits — some early weight loss is normal, then steady gain.",
    ],
  },
  {
    eyebrow: "Supply",
    title: "How milk supply is built",
    body: "Milk works on supply and demand: the more often and more fully the breast is emptied, the more milk is made. Frequent feeding, a good latch and night feeds all boost supply. Most mothers make plenty of milk — true low supply is uncommon and stress, skipped feeds or unnecessary top-feeds are the usual culprits.",
    tips: [
      "Feed often and empty the breast; avoid bottles and formula unless medically advised.",
      "Skin-to-skin, rest and a calm feed help your let-down (milk ejection) reflex.",
      "If you fear low supply, see a lactation consultant before starting formula.",
    ],
  },
  {
    eyebrow: "Common problems",
    title: "Sore nipples, engorgement & mastitis",
    body: "Most feeding troubles come from latch or infrequent emptying. Sore or cracked nipples usually point to a shallow latch. Engorgement (overfull, hard breasts) and blocked ducts (a tender lump) ease with frequent feeding and warmth. Mastitis — a red, painful, warm area with fever and flu-like aches — needs prompt medical care.",
    tips: [
      "Fix the latch first; a few drops of expressed milk can soothe sore nipples.",
      "For engorgement or a blocked duct: feed often, gentle warmth before and massage during feeds.",
      "See a doctor for fever with breast pain, a spreading red patch, pus, or a hard lump that will not clear.",
    ],
  },
  {
    eyebrow: "Mother’s health",
    title: "Maternal nutrition & hydration",
    body: "A breastfeeding mother needs extra energy, protein and fluids. There is no need for special or expensive foods — a balanced Indian thali of cereals, dals and pulses, vegetables and fruit, milk or curd, and a little healthy fat works well. Drink to thirst and keep up the iron-folic acid and other supplements your doctor advises.",
    tips: [
      "Eat a varied, home-cooked diet and keep water or buttermilk handy at feed times.",
      "Continue prescribed iron, folic acid, calcium and vitamin supplements.",
      "No food is truly ’forbidden’; eat normally and notice only if baby clearly reacts.",
    ],
  },
  {
    eyebrow: "Expressing",
    title: "Expressing & storing milk",
    body: "Expressing by clean hands or a pump helps when you are away from baby, returning to work, or relieving fullness. Always wash hands and use clean, covered containers. Store milk safely and warm it gently — never boil it or use a microwave, which destroys protective factors and can scald baby.",
    tips: [
      "Freshly expressed milk keeps a few hours at room temperature and longer when refrigerated; label with date.",
      "Thaw and warm in a bowl of warm water; swirl gently and discard any leftover from a feed.",
      "Feed expressed milk by clean cup or paladai rather than a bottle to protect the latch.",
    ],
  },
  {
    eyebrow: "Working mothers",
    title: "Feeding & the Maternity Benefit Act",
    body: "India’s Maternity Benefit Act supports breastfeeding mothers at work: paid maternity leave, nursing breaks until the child is fifteen months old, and a crèche facility in larger establishments with visits allowed during the day. Planning expressing and storage helps you keep breastfeeding after you return to work.",
    tips: [
      "Know your entitlement to nursing breaks and, in eligible workplaces, a crèche near you.",
      "Build a small stored-milk stock before rejoining; express during the workday to keep supply.",
      "A caregiver can cup-feed your expressed milk while you continue to feed directly when together.",
    ],
  },
  {
    eyebrow: "Myth-busting",
    title: "Gently setting the record straight",
    body: "Many well-meaning customs can harm feeding. Colostrum is precious and must not be discarded. Prelacteal feeds such as honey, ghutti, janam ghutti, sugar water or top milk are not recommended and raise infection risk. Crying does not always mean hunger, and a mother almost always makes enough milk when baby feeds well and often.",
    tips: [
      "Myth: ’First milk is dirty.’ Fact: colostrum is the richest, most protective first food.",
      "Myth: ’Baby needs ghutti or honey.’ Fact: nothing but breast milk for the first 6 months.",
      "Myth: ’My milk is not enough.’ Fact: frequent feeding and a good latch build plenty of milk.",
    ],
  },
];

export default function BreastfeedingPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Nourish & bond</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Breastfeeding</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A practical, India-focused guide to breastfeeding — from the first golden hour and colostrum to latch,
            supply, common problems and feeding after you return to work. Based on MoHFW, WHO and IYCF guidance and
            India’s MAA programme.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="peach">Within 1 hour</Badge>
            <Badge tone="sage">Exclusive for 6 months</Badge>
            <Badge tone="plum">MAA programme</Badge>
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
          For education only and not a substitute for medical advice. Every mother and baby is different — for feeding
          difficulties, pain, fever, or worry about your milk or baby’s growth, please consult a lactation
          consultant, obstetrician or paediatrician. In an emergency in India, dial 108.
        </p>
      </SectionReveal>
    </main>
  );
}
