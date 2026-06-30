/**
 * Pregnancy Plan — a pure, week-banded master plan that ties together care,
 * tests, nutrition, movement, mind and baby milestones into one timeline.
 * India-aware (ANC visits, IFA, TT/Tdap, OGTT) and cross-linked to the app's
 * guides so each phase points to deeper reading. No data dependency.
 */

export interface PlanLink {
  href: string;
  label: string;
}

export interface PlanPhase {
  id: string;
  /** Inclusive gestational-week band [from, to]. */
  weeks: [number, number];
  trimester: 1 | 2 | 3;
  title: string;
  stage: string;
  /** One-line focus for the phase. */
  focus: string;
  /** What the baby is doing / reaching. */
  baby: string;
  appointments: string[];
  tests: string[];
  nutrition: string[];
  movement: string[];
  mind: string[];
  /** Concrete actions to tick off this phase. */
  actions: string[];
  /** Deeper-reading links into the app. */
  links: PlanLink[];
}

export const PLAN: PlanPhase[] = [
  {
    id: "p1",
    weeks: [1, 4],
    trimester: 1,
    title: "The very beginning",
    stage: "Weeks 1–4",
    focus: "Lay the strongest possible foundation — often before a test is even positive.",
    baby: "From a single fertilised cell to a tiny ball of cells implanting in the womb lining.",
    appointments: [
      "If planning, see your doctor for a pre-pregnancy check and to review any medicines.",
      "Confirm the pregnancy with a home test, then a clinic test or early scan if advised.",
    ],
    tests: [
      "Baseline checks your doctor may suggest: haemoglobin, blood group, thyroid, sugar.",
    ],
    nutrition: [
      "Start (or continue) 400 mcg folic acid daily — it protects the baby's brain and spine.",
      "Eat a balanced, home-cooked diet rich in greens, dals, fruit and whole grains.",
    ],
    movement: [
      "Keep gently active with walking; there is no need to stop normal daily activity.",
    ],
    mind: [
      "Begin a calm daily habit — a few minutes of slow breathing or quiet reflection.",
    ],
    actions: [
      "Begin folic acid today if you have not already.",
      "Stop smoking and alcohol completely, and check every medicine with your doctor.",
      "Note the first day of your last period to help date the pregnancy.",
    ],
    links: [
      { href: "/folate-science", label: "Folate & the neural tube" },
      { href: "/meditation", label: "Meditation in pregnancy" },
      { href: "/nutrition", label: "Nutrition basics" },
    ],
  },
  {
    id: "p2",
    weeks: [5, 8],
    trimester: 1,
    title: "First steps in care",
    stage: "Weeks 5–8",
    focus: "Confirm the pregnancy, register for antenatal care, and settle early symptoms.",
    baby: "The heart begins to beat (~week 6), and limb buds and the neural tube form.",
    appointments: [
      "Book your first antenatal (ANC) visit and register at your hospital or PHC.",
      "A dating scan may be offered to confirm weeks and the heartbeat.",
    ],
    tests: [
      "First ANC bloods: haemoglobin, blood group and Rh, blood sugar, thyroid, HIV, HBsAg, VDRL.",
      "Urine test for infection, sugar and protein.",
    ],
    nutrition: [
      "Continue folic acid; eat small, frequent meals to ease nausea.",
      "Stay well hydrated, especially in the heat.",
    ],
    movement: [
      "Rest when tired; gentle walking is still ideal.",
    ],
    mind: [
      "Nausea and tiredness are normal — be kind to yourself and lower the bar.",
    ],
    actions: [
      "Attend and register your first ANC visit.",
      "Try ginger, small snacks and fluids for morning sickness.",
      "Tell your doctor about any bleeding or severe vomiting.",
    ],
    links: [
      { href: "/anc-visits", label: "Antenatal visits" },
      { href: "/morning-sickness", label: "Easing morning sickness" },
      { href: "/labs", label: "Lab tests explained" },
    ],
  },
  {
    id: "p3",
    weeks: [9, 13],
    trimester: 1,
    title: "Closing the first trimester",
    stage: "Weeks 9–13",
    focus: "Key first-trimester scan and screening, and starting iron-folic-acid.",
    baby: "Now a tiny, recognisable fetus — fingers, toes and gentle movements appear.",
    appointments: [
      "NT (nuchal translucency) scan between 11 and 13+6 weeks, with screening if you choose.",
      "Routine ANC review of your reports and blood pressure.",
    ],
    tests: [
      "Dual marker / combined screening (optional) around 11–13 weeks.",
      "NT ultrasound to date the pregnancy and check development.",
    ],
    nutrition: [
      "Begin daily iron-folic-acid (IFA) tablets as advised once the first trimester ends.",
      "Add vitamin-C foods (amla, guava, citrus) to absorb iron better.",
    ],
    movement: [
      "Energy often returns — ease back into comfortable walking or prenatal yoga.",
    ],
    mind: [
      "If worry is high before screening, lean on breathing and a trusted person.",
    ],
    actions: [
      "Schedule the NT scan in the 11–13+6 week window.",
      "Start IFA tablets when advised, away from tea or coffee.",
      "Save your scan and report copies in one folder.",
    ],
    links: [
      { href: "/scans", label: "Scans & ultrasounds" },
      { href: "/iron-science", label: "Iron, anaemia & the brain" },
      { href: "/yoga", label: "Prenatal yoga" },
    ],
  },
  {
    id: "p4",
    weeks: [14, 18],
    trimester: 2,
    title: "Settling into the second trimester",
    stage: "Weeks 14–18",
    focus: "The most comfortable stretch — build healthy routines and start bonding.",
    baby: "Hearing is switching on; the baby swims, stretches and tastes the fluid.",
    appointments: [
      "Routine ANC visit with weight, blood pressure and fundal-height check.",
      "Plan the anomaly scan for the 18–22 week window.",
    ],
    tests: [
      "Quad marker screening (optional) around 14–20 weeks if not screened earlier.",
    ],
    nutrition: [
      "Add DHA-rich foods (oily fish or algal/veg sources) for the baby's brain.",
      "Keep protein, calcium and iron steady across meals.",
    ],
    movement: [
      "Build a gentle routine: walking, prenatal yoga, pelvic-floor exercises.",
      "From ~16–20 weeks, avoid lying flat on your back for long holds.",
    ],
    mind: [
      "Start talking, singing and playing music — the baby is beginning to hear you.",
    ],
    actions: [
      "Book the anomaly scan now.",
      "Begin a daily bonding habit — a song, a story or a hand on the bump.",
      "Set up your side-sleeping with a pillow between the knees.",
    ],
    links: [
      { href: "/omega-dha", label: "Omega-3 & DHA for brain" },
      { href: "/music-and-baby", label: "Music & your baby" },
      { href: "/prenatal-bonding", label: "Prenatal bonding" },
    ],
  },
  {
    id: "p5",
    weeks: [19, 23],
    trimester: 2,
    title: "The anomaly scan & first kicks",
    stage: "Weeks 19–23",
    focus: "The detailed mid-pregnancy scan and the joy of feeling movement.",
    baby: "You may feel the first flutters (quickening); the baby responds to your voice.",
    appointments: [
      "Anomaly (TIFFA) scan between 18 and 22 weeks to check the baby's anatomy.",
      "Routine ANC visit to review growth and blood pressure.",
    ],
    tests: [
      "Detailed anatomy ultrasound; repeat haemoglobin if anaemia was found.",
    ],
    nutrition: [
      "Keep iron and calcium up; calcium tablets are often advised from the second trimester.",
      "Balance blood sugar with low-GI meals and fewer refined sweets.",
    ],
    movement: [
      "Continue gentle exercise; add hip-opening stretches for comfort.",
    ],
    mind: [
      "Reading aloud or a daily lullaby helps the baby learn your voice.",
    ],
    actions: [
      "Attend the anomaly scan and discuss the report with your doctor.",
      "Start noticing your baby's active and quiet times.",
      "Begin reading or singing the same gentle piece each day.",
    ],
    links: [
      { href: "/scans", label: "Scans & ultrasounds" },
      { href: "/blood-sugar", label: "Balancing blood sugar" },
      { href: "/reading-to-baby", label: "Reading to your baby" },
    ],
  },
  {
    id: "p6",
    weeks: [24, 28],
    trimester: 2,
    title: "Glucose, vaccines & growth",
    stage: "Weeks 24–28",
    focus: "Screen for gestational diabetes, get the Tdap vaccine, and watch growth.",
    baby: "Eyes open, the baby hears clearly and builds the first fat stores.",
    appointments: [
      "ANC visit; the Tdap (whooping cough) vaccine is given around 27–36 weeks.",
      "Discuss kick-counting as movements become regular and strong.",
    ],
    tests: [
      "Oral glucose tolerance test (OGTT) for gestational diabetes, usually 24–28 weeks.",
      "Repeat haemoglobin and, for Rh-negative mothers, anti-D as advised.",
    ],
    nutrition: [
      "If sugar is high, follow a low-GI plan and your doctor's guidance closely.",
      "Keep protein, iron and calcium steady; hydrate well.",
    ],
    movement: [
      "Keep moving gently; good posture and short walks ease back ache.",
    ],
    mind: [
      "Begin a daily kick-count routine once movements are well established.",
    ],
    actions: [
      "Complete the OGTT and the Tdap vaccine on schedule.",
      "Start counting daily movements at a regular time.",
      "Note your baby's normal movement pattern.",
    ],
    links: [
      { href: "/concerns", label: "Common concerns (GDM, anaemia)" },
      { href: "/vaccinations", label: "Vaccinations" },
      { href: "/kick-count", label: "Counting kicks" },
    ],
  },
  {
    id: "p7",
    weeks: [29, 34],
    trimester: 3,
    title: "Into the third trimester",
    stage: "Weeks 29–34",
    focus: "More frequent visits, growth monitoring, and preparing your body and mind.",
    baby: "Strong, regular movements; sleep cycles and practice breathing begin.",
    appointments: [
      "ANC visits become more frequent (often every 2 weeks).",
      "A growth scan may be advised to check the baby's size and fluid.",
    ],
    tests: [
      "Repeat haemoglobin; blood pressure and urine checks for pre-eclampsia.",
    ],
    nutrition: [
      "Smaller, frequent meals ease heartburn; keep iron, calcium and protein up.",
    ],
    movement: [
      "Prioritise left-side sleeping; gentle hip openers and pelvic tilts help.",
    ],
    mind: [
      "Practise calming breathing daily — it is a real tool for labour.",
    ],
    actions: [
      "Keep counting movements and report any reduction promptly.",
      "Start a simple birth plan and a hospital-bag list.",
      "Practise relaxation and breathing for labour.",
    ],
    links: [
      { href: "/sleep-science", label: "The science of sleep" },
      { href: "/breathing-science", label: "The science of breathing" },
      { href: "/kick-count", label: "Counting kicks" },
    ],
  },
  {
    id: "p8",
    weeks: [35, 40],
    trimester: 3,
    title: "Ready for birth",
    stage: "Weeks 35–40",
    focus: "Final checks, knowing the signs of labour, and being ready to go.",
    baby: "Plump and curled head-down, fully formed and ready to meet you.",
    appointments: [
      "Weekly ANC visits; position, presentation and readiness are checked.",
      "Discuss your birth plan and place of delivery with your team.",
    ],
    tests: [
      "Group B strep and final bloods if advised; ultrasound for position if needed.",
    ],
    nutrition: [
      "Eat regular, balanced meals and stay hydrated as labour approaches.",
    ],
    movement: [
      "Gentle walking and wall-supported squats; rest whenever you need to.",
    ],
    mind: [
      "Rehearse your calming breath and visualise a steady, supported birth.",
    ],
    actions: [
      "Pack the hospital bag and keep documents ready.",
      "Learn true vs false labour and when to go in.",
      "Save emergency and hospital numbers; in India dial 108 for ambulance.",
    ],
    links: [
      { href: "/labour-signs", label: "Signs of labour" },
      { href: "/hospital-bag", label: "Hospital bag & birth plan" },
      { href: "/skin-to-skin", label: "Skin-to-skin & oxytocin" },
    ],
  },
];

/** Resolve the plan phase covering a gestational week (clamped to 1–40). */
export function currentPhase(week: number): PlanPhase {
  const w = Math.min(40, Math.max(1, week));
  return PLAN.find((p) => w >= p.weeks[0] && w <= p.weeks[1]) ?? PLAN[0];
}
