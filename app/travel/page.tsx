import { GlassCard, SectionTitle, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

export const metadata = { title: "Travel in Pregnancy — Baby Journey" };

interface Section {
  eyebrow: string;
  title: string;
  body: string;
  tips: string[];
}

const SECTIONS: Section[] = [
  {
    eyebrow: "Timing",
    title: "When travel feels easiest",
    body:
      "For most uncomplicated pregnancies the second trimester (about 14–27 weeks) is the most comfortable window to travel: morning sickness has usually settled, energy is better, and the higher risks of early miscarriage and late preterm labour are lower. The first trimester can be tiring with nausea, and the third trimester brings a bigger bump, more fatigue, and tighter airline limits. Plan longer or important trips for the middle months when you can.",
    tips: [
      "Aim for roughly 14–27 weeks for long journeys when possible.",
      "Avoid travel close to your due date or if labour could start away from your hospital.",
      "Whatever the trimester, build in rest days and don’t over-pack the itinerary.",
    ],
  },
  {
    eyebrow: "By road",
    title: "Car travel and seatbelts",
    body:
      "You can travel by car throughout pregnancy, and you must always wear a seatbelt — it protects you and the baby far more than the small risk it poses. Wear the lap strap flat below your bump and low across your hips (not over the belly), and run the shoulder strap up between your breasts and to the side of the bump. On India’s long, bumpy or poorly surfaced routes, break the journey often and avoid marathon non-stop drives.",
    tips: [
      "Lap belt under the bump and across the hips; shoulder belt between the breasts.",
      "Never tuck the belt behind you or under your arm.",
      "Stop every 1.5–2 hours to walk, stretch, empty your bladder and drink water.",
      "Avoid very long or rough rides late in pregnancy; share the driving where you can.",
    ],
  },
  {
    eyebrow: "By rail",
    title: "Train travel in India",
    body:
      "Trains are often the most comfortable way for pregnant women to cover long distances in India: you can get up, walk, lie down and use a washroom on the way. Book a lower berth so you don’t have to climb, keep your essentials within reach, and stay well hydrated. Carry your own food and water and avoid unhygienic platform snacks.",
    tips: [
      "Book a lower berth and choose AC coaches for cleaner, cooler air where affordable.",
      "Get up and walk the aisle periodically to keep the blood moving.",
      "Carry safe snacks, sealed water, and a small medicine pouch for the journey.",
      "Keep ANC/MCP records and your doctor’s number handy in your hand luggage.",
    ],
  },
  {
    eyebrow: "By air",
    title: "Flying and airline policies",
    body:
      "Air travel is generally safe in an uncomplicated pregnancy. Most Indian airlines allow flying up to around 36 weeks for a single, uncomplicated pregnancy and around 32 weeks for twins, and many ask for a doctor’s ’fit to fly’ certificate after about 28 weeks. Policies and certificate validity differ by airline, so always confirm the exact rules before booking. On board, choose an aisle seat, keep moving, and drink water.",
    tips: [
      "Check your specific airline’s cut-off week and certificate rule before you book.",
      "Carry a recent ’fit to fly’ letter from your obstetrician after ~28 weeks.",
      "Pick an aisle seat so you can stand, stretch and reach the washroom easily.",
      "Wear the seatbelt low under the bump and across the hips when seated.",
    ],
  },
  {
    eyebrow: "Circulation",
    title: "Preventing clots (DVT) on long trips",
    body:
      "Pregnancy makes blood more likely to clot, and sitting still for hours — on flights, trains or long drives — adds to the risk of deep vein thrombosis (DVT). Move your legs regularly, stay hydrated, and consider graduated compression stockings for long journeys. If you ever get calf pain, swelling, redness or breathlessness, seek medical help promptly.",
    tips: [
      "Walk around or flex your ankles and calves every 30–60 minutes.",
      "Drink water steadily and limit caffeine, which can dehydrate you.",
      "Ask your doctor about compression stockings for journeys over a few hours.",
      "Report calf pain, one-sided leg swelling or sudden breathlessness immediately.",
    ],
  },
  {
    eyebrow: "Food & water",
    title: "Eating and drinking safely on the move",
    body:
      "Travellers’ diarrhoea is uncomfortable any time and risky in pregnancy because of dehydration. Stick to bottled or freshly boiled water, avoid ice of unknown source, and choose freshly cooked, piping-hot food over street stalls, cut fruit, salads and raw items. Carry safe snacks so you are never forced to grab risky food when hungry.",
    tips: [
      "Drink sealed bottled water or boiled-and-cooled water; skip unknown ice.",
      "Avoid street food, raw or undercooked items, cut fruit and unpasteurised dairy.",
      "Wash or sanitise hands before eating, especially during long journeys.",
      "Pack ORS sachets and tell your doctor if diarrhoea or vomiting sets in.",
    ],
  },
  {
    eyebrow: "Destinations",
    title: "Vaccines, malaria and risky areas",
    body:
      "Some destinations carry extra health risks in pregnancy, such as malaria-prone regions or areas needing specific vaccinations. Many live vaccines and some anti-malarial drugs are not suitable during pregnancy, so always discuss your travel plans with your obstetrician well in advance. Where possible, avoid high-malaria areas in pregnancy; if you must go, use strong mosquito precautions.",
    tips: [
      "Tell your doctor your destinations early so vaccines/medicines can be reviewed.",
      "Avoid known high-malaria zones during pregnancy where you can.",
      "Use mosquito nets, repellents safe in pregnancy, and cover-up clothing.",
      "Never self-prescribe anti-malarials or travel vaccines — confirm safety first.",
    ],
  },
  {
    eyebrow: "Documents",
    title: "Papers and your travel kit",
    body:
      "Carry your maternity records wherever you go so any doctor can quickly understand your pregnancy. Keep your MCP/ANC card, recent scan and blood reports, blood group, your obstetrician’s contact, and any insurance details together in your hand luggage. A small travel kit makes the trip smoother and safer.",
    tips: [
      "Carry the MCP/ANC card, latest reports and your blood group details.",
      "Save your doctor’s number and the nearest hospital at your destination.",
      "Keep insurance papers and ID accessible, not buried in checked baggage.",
      "Pack a kit: prescribed medicines, ORS, snacks, water, hand sanitiser and a refillable bottle.",
    ],
  },
  {
    eyebrow: "Caution",
    title: "When it is safer not to travel",
    body:
      "Some situations make travel unwise without specialist clearance. If you have bleeding, high blood pressure or pre-eclampsia, a risk of preterm labour, placenta praevia, a multiple pregnancy with complications, or any condition your doctor is watching closely, check before you make any journey. In high-risk pregnancy, staying near your hospital is often the safest choice.",
    tips: [
      "Get clearance first if you have bleeding, pre-eclampsia or high BP.",
      "Avoid long trips with preterm-labour risk, placenta praevia or cervical concerns.",
      "Don’t travel far late in pregnancy if labour could begin away from care.",
      "When in doubt, ask your obstetrician before booking — and dial 108 in any emergency.",
    ],
  },
];

export default function TravelPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionReveal>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">Journeys, safely</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">Travel in pregnancy</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Most women with an uncomplicated pregnancy can travel comfortably with a little planning. Here is a calm,
            India-focused guide to choosing the right time, getting around by road, rail and air, eating safely,
            preventing clots, and knowing when it is wiser to stay close to your hospital.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="peach">Best around 14–27 weeks</Badge>
            <Badge tone="sage">Move, hydrate, hygiene</Badge>
            <Badge tone="plum">Carry your records</Badge>
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
          This page is for education only and is not a substitute for medical advice. Always confirm your fitness to
          travel and the exact airline policy with your obstetrician before any journey. In an emergency in India, dial
          108.
        </p>
      </SectionReveal>
    </main>
  );
}
