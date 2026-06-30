/**
 * Week-driven body-part development. Pure (no data dependency). For a given
 * gestational week, returns each major body part with a short, parent-facing
 * line describing *what is happening to it this week* and a development status.
 * Grounded in mainstream fetal-development science. Used by the viewer to show a
 * detailed, day-accurate "your baby's body today" breakdown.
 */

export type PartStatus = "forming" | "developing" | "refining" | "maturing" | "ready";

export interface BodyPart {
  id: string;
  label: string;
  icon: string;
  /** What is happening to this part at the current week. */
  detail: string;
  status: PartStatus;
  /** Optional viewer system this part maps to (for cross-highlighting). */
  system?: "brain" | "heart" | "lungs" | "digestive" | "skeleton" | "muscles";
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

interface PartDef {
  id: string;
  label: string;
  icon: string;
  system?: BodyPart["system"];
  /** [upperWeek, status, detail] bands, ascending. */
  bands: Array<[number, PartStatus, string]>;
}

const PARTS: PartDef[] = [
  {
    id: "brain", label: "Brain & head", icon: "🧠", system: "brain",
    bands: [
      [8, "forming", "The neural tube has closed and the brain is dividing into its main regions; the head is large and curved forward."],
      [13, "developing", "Neurons multiply at a remarkable pace and the brain begins directing tiny movements; the head is still about half the body."],
      [18, "developing", "Brain regions specialise and nerve connections form quickly; the head is growing more in proportion to the body."],
      [23, "refining", "The surface starts to fold into grooves, and the brain begins coordinating reflexes like sucking and grasping."],
      [28, "refining", "Deep grooves and folds appear as the brain grows rapidly; it now controls breathing-practice and body temperature."],
      [33, "maturing", "Billions of connections are wiring up; sleep cycles (including dream-like REM) are well established."],
      [40, "ready", "The brain is highly active and ready for birth, though it will keep growing fast in the first years of life."],
    ],
  },
  {
    id: "eyes", label: "Eyes", icon: "👁️",
    bands: [
      [8, "forming", "Eyes begin as dark spots on the sides of the head; the retina and lens are just starting to form."],
      [13, "developing", "Eyes have moved toward the front of the face and eyelids have formed and fused shut to protect them."],
      [18, "developing", "The retina becomes light-sensitive; eyes can detect bright light through the womb wall though lids stay closed."],
      [23, "refining", "Eyebrows and lashes appear; eye structures continue to mature behind closed lids."],
      [28, "maturing", "Eyelids open and close, and the pupils react to light shining on your belly."],
      [33, "maturing", "Eyes open during wakeful spells and can track a soft glow; colour is not yet final."],
      [40, "ready", "Vision is ready for birth — still blurry, but sharpest at about 20-30 cm, just far enough to see your face while feeding."],
    ],
  },
  {
    id: "ears", label: "Ears & hearing", icon: "👂",
    bands: [
      [8, "forming", "Tiny ear buds appear low on the neck and begin moving up toward their final position."],
      [13, "developing", "The outer ears take shape on the sides of the head; hearing has not started yet."],
      [18, "developing", "The inner-ear bones harden and hearing switches on — first your heartbeat, blood flow and tummy sounds."],
      [23, "refining", "Your baby clearly hears your voice and may startle to loud sounds or settle to familiar ones."],
      [28, "maturing", "Hearing sharpens enough to recognise your voice over others and turn toward it."],
      [33, "maturing", "Your baby remembers sounds and songs heard often, and is soothed by your familiar voice."],
      [40, "ready", "Hearing is fully formed and tuned to you — your voice is the most familiar sound in the world."],
    ],
  },
  {
    id: "face", label: "Nose, mouth & lips", icon: "👃",
    bands: [
      [8, "forming", "The face is taking shape — nostrils, a mouth opening and the beginnings of lips and jaw are appearing."],
      [13, "developing", "A clear profile forms; the baby can open and close the mouth and begins to swallow tiny amounts of fluid."],
      [18, "developing", "Taste buds work and the baby swallows amniotic fluid, sampling the flavours of your meals."],
      [23, "refining", "Lips are well defined; the baby practises sucking and may suck a thumb."],
      [28, "maturing", "Sucking and swallowing are coordinated, building the reflexes needed to feed after birth."],
      [33, "maturing", "Cheeks fill out with fat and the rooting and sucking reflexes strengthen."],
      [40, "ready", "Full, rounded face with strong sucking ready for the first feed; taste and smell are mature."],
    ],
  },
  {
    id: "heart", label: "Heart", icon: "❤️", system: "heart",
    bands: [
      [8, "developing", "The heart has begun to beat (around week 6) and is dividing from a simple tube into four chambers."],
      [13, "refining", "The four chambers and valves are formed; the heart beats fast (often 150-170 bpm) and can be seen on scan."],
      [18, "refining", "The heartbeat is strong and steady and pumps a growing volume of blood around the body."],
      [23, "maturing", "The heart is well developed; its rate gradually settles as the pregnancy advances."],
      [28, "maturing", "The heart efficiently circulates blood and responds to the baby's activity and rest."],
      [33, "maturing", "A strong, regular heartbeat around 140 bpm; the circulation is nearly ready for life outside."],
      [40, "ready", "The heart is fully formed and will reroute its circulation in the first breaths after birth."],
    ],
  },
  {
    id: "lungs", label: "Lungs", icon: "🫁", system: "lungs",
    bands: [
      [8, "forming", "Lung buds have appeared and the main airways are just beginning to branch."],
      [13, "forming", "The airway tree keeps branching; the lungs are solid and not yet able to breathe air."],
      [18, "developing", "Smaller airways and the first air-sac structures form as the lungs steadily mature."],
      [23, "developing", "Tiny air sacs develop and cells begin making surfactant, the substance that lets lungs expand."],
      [28, "maturing", "The baby 'practises breathing' amniotic fluid; surfactant production increases week by week."],
      [33, "maturing", "Lungs are nearly mature and producing more surfactant, improving the chances of easy breathing."],
      [40, "ready", "Lungs are ready to take that first breath of air at birth."],
    ],
  },
  {
    id: "skeleton", label: "Spine & skeleton", icon: "🦴", system: "skeleton",
    bands: [
      [8, "forming", "The spine and soft cartilage skeleton are laid down; the embryo is curled around it."],
      [13, "developing", "Cartilage begins hardening into bone (ossification); the spine straightens and tiny ribs form."],
      [18, "developing", "Bones harden further and the skeleton becomes visible on ultrasound; joints can move."],
      [23, "refining", "Bones strengthen and the baby's movements become more powerful against them."],
      [28, "maturing", "Bones continue to harden while the skull stays soft, with fontanelles (soft spots) to ease birth."],
      [33, "maturing", "The skeleton is firm and strong; bones are storing calcium quickly now."],
      [40, "ready", "Bones are fully formed but the skull stays flexible to pass through the birth canal."],
    ],
  },
  {
    id: "arms", label: "Arms & hands", icon: "🖐️", system: "muscles",
    bands: [
      [8, "forming", "Arm buds have grown into paddle-like hands; finger ridges are just appearing."],
      [13, "developing", "Fingers have fully separated, soft nails begin, and the baby can open and close tiny fists."],
      [18, "developing", "Unique fingerprints form; the baby grasps, touches its face and explores by hand."],
      [23, "refining", "Grip strengthens and fingernails reach the fingertips; movements are purposeful."],
      [28, "maturing", "A firm grasp develops; the baby may hold the cord and bring hands to the mouth."],
      [33, "maturing", "Strong, deliberate hand and arm movements, though space is getting tighter."],
      [40, "ready", "Fully formed hands with a strong grasp reflex, ready to grip your finger."],
    ],
  },
  {
    id: "legs", label: "Legs & feet", icon: "🦶", system: "muscles",
    bands: [
      [8, "forming", "Leg buds have formed into paddle-like feet; toe ridges are beginning to appear."],
      [13, "developing", "Toes have separated and the legs lengthen; the baby makes small, unfelt kicks."],
      [18, "developing", "Legs come into proportion; the first flutters of movement (quickening) may begin to be felt."],
      [23, "refining", "Stronger, more coordinated kicks and stretches that you can feel through the day."],
      [28, "maturing", "Powerful kicks, rolls and stretches; toenails are forming."],
      [33, "maturing", "Strong but more confined movements as the legs curl up in the smaller space."],
      [40, "ready", "Legs are fully formed and curled snugly, ready to stretch out after birth."],
    ],
  },
  {
    id: "digestive", label: "Tummy & digestion", icon: "🌀", system: "digestive",
    bands: [
      [8, "forming", "The stomach, intestines and liver are taking shape from the early gut tube."],
      [13, "developing", "The intestines, which formed partly in the cord, move into the abdomen; the baby swallows fluid."],
      [18, "developing", "The digestive tract practises by swallowing amniotic fluid; the kidneys make urine into the fluid."],
      [23, "refining", "The gut matures and the first stool (meconium) begins to collect in the bowel."],
      [28, "maturing", "Digestive organs are well developed and continue to practise swallowing and absorbing."],
      [33, "maturing", "The digestive system is nearly ready to handle milk after birth."],
      [40, "ready", "The gut is ready for the first feeds; meconium will pass in the early days."],
    ],
  },
  {
    id: "skin", label: "Skin", icon: "🧴",
    bands: [
      [8, "forming", "Skin is brand new, thin and almost translucent, so vessels show through."],
      [13, "developing", "Skin is still thin and see-through; the first downy lanugo hair follicles begin under it."],
      [18, "developing", "Fine lanugo hair covers the body and a creamy vernix coating begins to protect the skin in the fluid."],
      [23, "refining", "Skin is red and wrinkled, coated in protective vernix; sweat glands and pigment develop."],
      [28, "maturing", "Fat starts to smooth and fill out the skin; it looks less wrinkled each week."],
      [33, "maturing", "Skin becomes pinker and smoother as more fat builds beneath it; lanugo starts to shed."],
      [40, "ready", "Soft, smooth skin with most vernix and lanugo shed, ready to be held against yours."],
    ],
  },
];

/** Detailed body parts for the current gestational week. */
export function bodyPartsForWeek(week: number): BodyPart[] {
  const w = clamp(week, 1, 40);
  return PARTS.map((p) => {
    let chosen = p.bands[p.bands.length - 1];
    for (const b of p.bands) {
      if (w <= b[0]) { chosen = b; break; }
    }
    const [, status, detail] = chosen;
    return { id: p.id, label: p.label, icon: p.icon, system: p.system, status, detail };
  });
}

/** Short, friendly label for a development status. */
export const STATUS_LABEL: Record<PartStatus, string> = {
  forming: "Forming",
  developing: "Developing",
  refining: "Refining",
  maturing: "Maturing",
  ready: "Ready for birth",
};
