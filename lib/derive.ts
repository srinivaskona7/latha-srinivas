import type { DailyView, OrganMap, SystemKey, WeekRecord } from "./types";
import { getWeek } from "./content";
import { weekToMonth, weekToTrimester, TERM_DAYS } from "./pregnancy";

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

/** Linear interpolation. */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Round to a sensible precision for display (mm/g). */
function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/**
 * Derive a full DailyView for a given day of pregnancy (1..280).
 * Numeric size fields are interpolated between the containing week's anchor
 * and the next week's anchor using the fractional position within the week.
 */
export function deriveDay(dayOfPregnancy: number): DailyView {
  const day = clamp(Math.round(dayOfPregnancy), 1, TERM_DAYS);
  const week = clamp(Math.floor((day - 1) / 7) + 1, 1, 40);
  const dayInWeek = ((day - 1) % 7) + 1;
  const t = (dayInWeek - 1) / 7; // 0 at start of week .. ~0.857 at day 7

  const current: WeekRecord = getWeek(week);
  const next: WeekRecord = getWeek(Math.min(40, week + 1));
  const prev: WeekRecord | null = week > 1 ? getWeek(week - 1) : null;

  const lengthMm = round1(lerp(current.lengthMm, next.lengthMm, t));
  const weightG = round1(lerp(current.weightG, next.weightG, t));

  const organs: OrganMap = current.organs;

  // Newly forming: present this week, absent last week.
  const prevKeys = new Set<string>(
    prev ? (Object.keys(prev.organs) as string[]) : [],
  );
  const newlyForming: SystemKey[] = [];
  const maturing: SystemKey[] = [];
  for (const key of Object.keys(organs) as SystemKey[]) {
    const entry = organs[key];
    if (!entry) continue;
    if (!prevKeys.has(key)) newlyForming.push(key);
    if (entry.status === "maturing" || entry.status === "refining") {
      maturing.push(key);
    }
  }

  return {
    dayOfPregnancy: day,
    week,
    dayInWeek,
    month: weekToMonth(week),
    trimester: weekToTrimester(week),
    lengthMm,
    weightG,
    sizeSummary: current.sizeSummary,
    fruitComparison: current.fruitComparison,
    milestone: current.milestone,
    motherChanges: current.motherChanges,
    symptoms: current.symptoms,
    tips: current.tips,
    prenatalQuestions: current.prenatalQuestions,
    variationNote: current.variationNote,
    organs,
    newlyForming,
    maturing,
  };
}

/** Human-friendly label for an organ/system key. */
export const SYSTEM_LABELS: Record<SystemKey, string> = {
  brain: "Brain",
  heart: "Heart",
  spinalCord: "Spinal cord",
  limbs: "Limbs",
  face: "Face",
  eyes: "Eyes",
  ears: "Ears",
  lungs: "Lungs",
  digestive: "Digestive system",
  liver: "Liver",
  kidney: "Kidneys",
  bone: "Bones",
  muscle: "Muscles",
  skin: "Skin",
  placenta: "Placenta",
  umbilicalCord: "Umbilical cord",
  nervousSystem: "Nervous system",
  circulation: "Blood circulation",
  reproductive: "Reproductive organs",
};

/** Format a length in mm into mm or cm as appropriate. */
export function formatLength(mm: number): string {
  if (mm < 10) return `${round1(mm)} mm`;
  return `${round1(mm / 10)} cm`;
}

/** Format a weight in grams into g or kg as appropriate. */
export function formatWeight(g: number): string {
  if (g < 1) return `< 1 g`;
  if (g < 1000) return `${Math.round(g)} g`;
  return `${round1(g / 1000)} kg`;
}
