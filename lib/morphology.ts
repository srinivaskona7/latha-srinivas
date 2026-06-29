import { deriveDay } from "./derive";
import { getWeek } from "./content";
import type { SystemKey } from "./types";

/** The 8 body systems the 3D viewer can highlight. */
export type SystemId =
  | "skeleton"
  | "brain"
  | "heart"
  | "lungs"
  | "digestive"
  | "muscles"
  | "placenta"
  | "umbilicalCord";

/** Map a viewer system to the content SystemKey used in data/weeks.json. */
export const VIEWER_SYSTEM_TO_KEY: Record<SystemId, SystemKey> = {
  skeleton: "bone",
  brain: "brain",
  heart: "heart",
  lungs: "lungs",
  digestive: "digestive",
  muscles: "muscle",
  placenta: "placenta",
  umbilicalCord: "umbilicalCord",
};

export const VIEWER_SYSTEMS: SystemId[] = [
  "brain",
  "heart",
  "lungs",
  "digestive",
  "skeleton",
  "muscles",
  "placenta",
  "umbilicalCord",
];

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * clamp(t, 0, 1);

/**
 * Week-accurate fetal heart rate (beats per minute), pure.
 * Rises from ~110 bpm at first detection (~wk6), peaks ~170 around wk9–10,
 * then eases to ~140 by term — the clinically observed curve.
 * Returns 0 before the heart is beating/detectable.
 */
export function heartRateBpm(week: number): number {
  const w = clamp(week, 1, 40);
  if (w < 6) return 0;
  if (w <= 9) return Math.round(lerp(110, 170, (w - 6) / 3)); // 6→9: 110→170
  if (w <= 14) return Math.round(lerp(170, 157, (w - 9) / 5)); // peak settles
  return Math.round(lerp(157, 140, (w - 14) / 26)); // gentle decline to term
}

/** A familiar size comparison (fruit/veg/object) for the current week. */
export interface SizeComparison {
  emoji: string;
  label: string;
}

/** Common week → object size progression. Pure; keyed by gestational week. */
const SIZE_TABLE: Record<number, SizeComparison> = {
  4: { emoji: "🌱", label: "poppy seed" },
  5: { emoji: "🌱", label: "sesame seed" },
  6: { emoji: "🫛", label: "sweet pea" },
  7: { emoji: "🫐", label: "blueberry" },
  8: { emoji: "🫘", label: "kidney bean" },
  9: { emoji: "🍒", label: "cherry" },
  10: { emoji: "🍓", label: "strawberry" },
  11: { emoji: "🫒", label: "fig" },
  12: { emoji: "🍋", label: "lime" },
  13: { emoji: "🟡", label: "lemon" },
  14: { emoji: "🍑", label: "peach" },
  15: { emoji: "🍎", label: "apple" },
  16: { emoji: "🥑", label: "avocado" },
  17: { emoji: "🍐", label: "pear" },
  18: { emoji: "🫑", label: "bell pepper" },
  19: { emoji: "🥭", label: "mango" },
  20: { emoji: "🍌", label: "banana" },
  21: { emoji: "🥕", label: "carrot" },
  22: { emoji: "🥬", label: "papaya" },
  23: { emoji: "🍈", label: "grapefruit" },
  24: { emoji: "🌽", label: "ear of corn" },
  25: { emoji: "🥬", label: "cauliflower" },
  26: { emoji: "🥬", label: "lettuce" },
  27: { emoji: "🥬", label: "cauliflower" },
  28: { emoji: "🍆", label: "eggplant" },
  29: { emoji: "🎃", label: "butternut squash" },
  30: { emoji: "🥬", label: "cabbage" },
  31: { emoji: "🥥", label: "coconut" },
  32: { emoji: "🎃", label: "squash" },
  33: { emoji: "🍍", label: "pineapple" },
  34: { emoji: "🍈", label: "cantaloupe" },
  35: { emoji: "🍈", label: "honeydew melon" },
  36: { emoji: "🥬", label: "romaine lettuce" },
  37: { emoji: "🥬", label: "Swiss chard" },
  38: { emoji: "🧅", label: "leek" },
  39: { emoji: "🍉", label: "mini watermelon" },
  40: { emoji: "🎃", label: "small pumpkin" },
};

/** Resolve the size comparison for a week, clamped to the known table range. */
export function sizeComparison(week: number): SizeComparison {
  const w = Math.round(clamp(week, 4, 40));
  return SIZE_TABLE[w] ?? SIZE_TABLE[4];
}

/**
 * Week-wise movement profile, pure. Describes the real motions a baby performs
 * at a given stage and the visual parameters used to animate them, so the
 * viewer's idle motion reflects *that week's* behaviour instead of a generic
 * float. Intensity ramps from imperceptible early flickers to strong, confined
 * kicks near term (when there's little room left to move).
 */
export interface MovementProfile {
  /** Headline motion for the stage, e.g. "First flutters". */
  title: string;
  /** One-line, parent-facing description of what's happening. */
  desc: string;
  /** Specific motions happening this week (chips). */
  motions: string[];
  /** Float travel in px for the idle animation (bigger = roomier movement). */
  amplitudePx: number;
  /** Sway rotation in degrees for the idle animation. */
  rotateDeg: number;
  /** Full motion-cycle duration in seconds (smaller = quicker, busier). */
  periodSec: number;
  /** Whether the baby is felt by the mother yet (quickening ~wk16–22). */
  feltByMother: boolean;
}

export function movementProfile(week: number): MovementProfile {
  const w = clamp(week, 1, 40);

  if (w < 7)
    return {
      title: "Stillness",
      desc: "Far too small to move — cells are dividing and the body plan is being laid down.",
      motions: ["Cell division", "Neural tube closing"],
      amplitudePx: 2,
      rotateDeg: 0.3,
      periodSec: 9,
      feltByMother: false,
    };
  if (w <= 9)
    return {
      title: "First flickers",
      desc: "The earliest spontaneous twitches begin as the spinal cord wires up — invisible from outside.",
      motions: ["Tiny twitches", "Startle flickers"],
      amplitudePx: 4,
      rotateDeg: 0.5,
      periodSec: 7,
      feltByMother: false,
    };
  if (w <= 12)
    return {
      title: "Wriggles & bends",
      desc: "Baby bends, hiccups, and curls — moving freely in the roomy sac, though still unfelt.",
      motions: ["Bending", "Hiccups", "Hand-to-face"],
      amplitudePx: 5,
      rotateDeg: 0.9,
      periodSec: 6,
      feltByMother: false,
    };
  if (w <= 15)
    return {
      title: "Stretches & swims",
      desc: "Stronger, more coordinated stretches and 'swimming' movements through the fluid.",
      motions: ["Stretching", "Swimming", "Yawning", "Thumb sucking"],
      amplitudePx: 6,
      rotateDeg: 1.1,
      periodSec: 6,
      feltByMother: false,
    };
  if (w <= 22)
    return {
      title: "Quickening",
      desc: "The first flutters you can feel — light 'butterfly' taps as kicks grow stronger.",
      motions: ["First kicks", "Flutters", "Rolling", "Hiccups"],
      amplitudePx: 7,
      rotateDeg: 1.2,
      periodSec: 5.5,
      feltByMother: true,
    };
  if (w <= 27)
    return {
      title: "Kicks & rolls",
      desc: "Clear, regular kicks, jabs and rolls — you may notice a daily rhythm of activity.",
      motions: ["Strong kicks", "Jabs", "Rolling", "Responds to sound"],
      amplitudePx: 8,
      rotateDeg: 1.4,
      periodSec: 5,
      feltByMother: true,
    };
  if (w <= 32)
    return {
      title: "Big movements",
      desc: "Powerful kicks and stretches, startle reflexes, and visible belly ripples.",
      motions: ["Powerful kicks", "Stretching", "Startles", "Practice breathing"],
      amplitudePx: 8,
      rotateDeg: 1.4,
      periodSec: 4.8,
      feltByMother: true,
    };
  if (w <= 36)
    return {
      title: "Squirms & jabs",
      desc: "Less tumbling now — more squirms, jabs and pokes as space gets tight.",
      motions: ["Squirming", "Jabs & pokes", "Hiccups", "Grasping"],
      amplitudePx: 6,
      rotateDeg: 1.0,
      periodSec: 5,
      feltByMother: true,
    };
  return {
    title: "Confined & strong",
    desc: "Snug and curled — movements are strong but small, mostly stretches, rolls and hiccups.",
    motions: ["Strong stretches", "Slow rolls", "Hiccups", "Presses & pushes"],
    amplitudePx: 4,
    rotateDeg: 0.8,
    periodSec: 5.5,
    feltByMother: true,
  };
}

/** Numeric growth curve for a gestational week (pure — no data dependency). */
export interface GrowthParams {
  /** Overall scene scale (compressive map of real length). */
  displayScale: number;
  /** Head size relative to body — huge early, shrinks with age. */
  headRatio: number;
  /** 0 = limb buds, 1 = fully extended limbs. */
  limbExtend: number;
  /** Recognizable facial features present. */
  hasFeatures: boolean;
  /** Dark eye spots visible (before full features). */
  hasEyeSpots: boolean;
  /** Separated fingers/toes. */
  hasDigits: boolean;
  /** Embryonic tail prominence, 0..1 (regresses by ~wk8). */
  tail: number;
  /** Fat/roundness, 0..1 (builds in the third trimester). */
  chub: number;
  /** How tightly curled the pose is, 0.6..1. */
  curl: number;
  /** Baseline skin opacity (early embryo is translucent). */
  baseSkinOpacity: number;
  stageLabel: string;
}

/**
 * Pure week → growth-parameter mapping. Exposed separately so the curve
 * invariants (monotonic scale, shrinking head, regressing tail) are testable
 * without the content/data layer.
 */
export function growthParams(week: number, lengthMm: number): GrowthParams {
  const w = clamp(week, 1, 40);

  // Compressive scale: real length spans ~4mm→510mm (>100×); map to ~0.42→1.2.
  const displayScale = 0.42 + 0.8 * Math.sqrt(clamp(lengthMm / 510, 0, 1));

  // Head dominates early (~0.92) and shrinks toward newborn proportions (~0.5).
  const headRatio = clamp(0.92 - Math.max(0, w - 8) * 0.013, 0.5, 0.92);

  // Limbs: buds (wk≤5) → paddles (6–9) → lengthening → full by ~wk16.
  let limbExtend: number;
  if (w <= 5) limbExtend = 0.05;
  else if (w <= 9) limbExtend = lerp(0.15, 0.55, (w - 5) / 4);
  else limbExtend = lerp(0.55, 1, (w - 9) / 7);

  const hasEyeSpots = w >= 6;
  const hasFeatures = w >= 9;
  const hasDigits = w >= 11;

  // Tail present in the embryonic period, gone by ~wk8.
  const tail = w <= 5 ? 1 : w <= 8 ? clamp(1 - (w - 5) / 3, 0, 1) : 0;

  // Subcutaneous fat fills out from ~wk28.
  const chub = w < 28 ? 0 : clamp((w - 28) / 12, 0, 1);

  const curl = clamp(1 - Math.max(0, w - 8) * 0.012, 0.6, 1);
  const baseSkinOpacity = w < 9 ? 0.72 : 1;

  const stageLabel =
    w <= 8 ? "Embryo" : w <= 12 ? "Early fetus" : w <= 27 ? "Growing fetus" : "Maturing fetus";

  return {
    displayScale,
    headRatio,
    limbExtend,
    hasFeatures,
    hasEyeSpots,
    hasDigits,
    tail,
    chub,
    curl,
    baseSkinOpacity,
    stageLabel,
  };
}

/** Full morphology for a given day, including which systems have formed. */
export interface Morphology extends GrowthParams {
  day: number;
  week: number;
  lengthMm: number;
  weightG: number;
  present: Record<SystemId, boolean>;
}

/** Derive the complete, day-driven morphology used to render the 3D baby. */
export function getMorphology(day: number): Morphology {
  const view = deriveDay(day);
  const params = growthParams(view.week, view.lengthMm);
  const weekRec = getWeek(view.week);

  const present = VIEWER_SYSTEMS.reduce(
    (acc, id) => {
      acc[id] = Boolean(weekRec.organs[VIEWER_SYSTEM_TO_KEY[id]]);
      return acc;
    },
    {} as Record<SystemId, boolean>,
  );

  return {
    ...params,
    day: view.dayOfPregnancy,
    week: view.week,
    lengthMm: view.lengthMm,
    weightG: view.weightG,
    present,
  };
}

/** First gestational week a given viewer system appears in the content. */
export function systemFirstWeek(id: SystemId): number {
  const key = VIEWER_SYSTEM_TO_KEY[id];
  for (let w = 1; w <= 40; w++) {
    if (getWeek(w).organs[key]) return w;
  }
  return 0;
}
