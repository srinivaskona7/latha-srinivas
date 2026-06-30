import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Skin-to-skin & oxytocin — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "What it is",
    title: "Holding your baby against your skin",
    body: "Skin-to-skin care means placing your naked baby against your bare chest, often soon after birth, with a warm cover over both of you.",
    tips: [
      "This gentle contact is sometimes called kangaroo care, because the baby rests close like a joey against its mother.",
      "It can be done by the mother and also by the father or another loving caregiver.",
      "A light blanket over the baby's back keeps you both warm while skin stays in contact.",
      "It is simple, free, and can be offered in a hospital, a clinic, or at home.",
      "The baby usually rests upright on the chest, turned so breathing stays easy and clear.",
    ],
  },
  {
    eyebrow: "Oxytocin",
    title: "The calm and bonding chemistry",
    body: "Close, warm contact helps release oxytocin, a hormone linked with calm, closeness, and care.",
    tips: [
      "Oxytocin rises with gentle touch and helps both you and your baby feel calmer and more settled.",
      "It supports the let-down reflex that helps your milk flow during breastfeeding.",
      "This same chemistry deepens the natural pull you feel to protect and nurture your baby.",
      "A calmer parent and a calmer baby tend to settle into feeding and resting more easily.",
      "These feelings build over many small moments of holding, not in a single instant.",
    ],
  },
  {
    eyebrow: "The first hour",
    title: "Why the first hour is special",
    body: "The time soon after birth, often called the golden hour, is a natural window for first contact when the baby is alert.",
    tips: [
      "When it is safe, placing baby on your chest soon after birth helps with warmth, calm, and first feeds.",
      "Many babies, given time and quiet, will move towards the breast on their own in this early period.",
      "Early skin-to-skin can be offered after a vaginal birth and, when possible, after a caesarean too.",
      "If you or your baby need medical care first, this contact can still happen a little later, which is completely fine.",
      "A partner can hold the baby skin-to-skin if you are recovering, keeping that warmth and closeness going.",
    ],
  },
  {
    eyebrow: "The evidence",
    title: "What trials and studies have found",
    body: "Kangaroo care has been studied widely, with especially strong work in India and other lower-resource settings.",
    tips: [
      "Trials have found that kangaroo mother care can improve survival and stability for small and preterm babies.",
      "Studies suggest skin-to-skin helps newborns hold their temperature, heart rate, and breathing more steadily.",
      "Evidence indicates earlier and more successful breastfeeding when babies have early skin-to-skin contact.",
      "Research in Indian neonatal units has found kangaroo care to be safe, practical, and beneficial, even where equipment is limited.",
      "These findings come from many babies across many settings and describe general benefits, not promises for any one child.",
    ],
  },
  {
    eyebrow: "Warmth",
    title: "How your body keeps baby warm",
    body: "A newborn loses heat quickly, and a parent's chest is a remarkably good, responsive source of warmth.",
    tips: [
      "Your chest naturally adjusts its warmth to help keep your baby at a comfortable temperature.",
      "Staying warm helps a newborn use energy for growth rather than spending it staying warm.",
      "Skin-to-skin can be especially helpful for small babies, who lose heat fastest.",
      "A cap on the baby's head and a cover over the back reduce heat loss further.",
      "In Indian NICUs, kangaroo care is widely used to keep stable preterm babies warm and close.",
    ],
  },
  {
    eyebrow: "Feeding",
    title: "Supporting breastfeeding gently",
    body: "Skin-to-skin and breastfeeding support one another, helping feeds begin and continue more smoothly.",
    tips: [
      "Close contact helps babies show early hunger cues, such as stirring and mouthing, before they cry.",
      "The calm of skin-to-skin and the rise of oxytocin support your milk letting down.",
      "Babies who spend time skin-to-skin often latch and feed more readily in the early days.",
      "Quiet, unhurried contact gives you both time to learn feeding together without pressure.",
      "If feeding is hard, a lactation counsellor or your nurse can help while you keep baby close.",
    ],
  },
  {
    eyebrow: "Every birth",
    title: "Caesarean and other births are welcome too",
    body: "Skin-to-skin is for every family, whatever the birth, and there is never any judgement about how a baby arrives.",
    tips: [
      "After a caesarean, skin-to-skin can often begin in the operating theatre or recovery when you and baby are stable.",
      "If you need rest after surgery, your partner can hold the baby skin-to-skin in the meantime.",
      "However your baby was born, this closeness is available to you and is worth asking for.",
      "Tubes, monitors, or extra care do not have to rule out gentle contact; your team can guide what is possible.",
      "The way a baby is born does not change how deeply you can bond with them.",
    ],
  },
  {
    eyebrow: "Asking for it",
    title: "Speaking up for skin-to-skin",
    body: "It is completely reasonable to tell your care team that skin-to-skin matters to you.",
    tips: [
      "Mention in your birth plan that you would like early skin-to-skin if it is safe.",
      "Ask your nurse or doctor how soon contact can begin for your situation.",
      "If something interrupts the first contact, ask when you can resume it.",
      "Your care team can help you and your partner hold the baby safely and comfortably.",
      "Always follow medical advice if your baby needs urgent care first; closeness can come a little later.",
    ],
  },
];

export default function SkinToSkinPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">CLOSE FROM THE START</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Skin-to-skin & oxytocin</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">Holding your baby against your skin supports warmth, calm, bonding, and breastfeeding, and the evidence behind kangaroo care is especially strong in India and other lower-resource settings.</p>
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
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">This page is for education only and is not medical advice. Skin-to-skin is for every family and every kind of birth, with no judgement. Always follow the guidance of your own care team. In India, dial 108 for emergencies.</p>
      </SectionReveal>
    </main>
  );
}
