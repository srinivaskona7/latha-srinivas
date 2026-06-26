// Central type definitions for Baby Journey AI.

/** A developmental status for a single organ/body system in a given week. */
export type OrganStatus = "forming" | "maturing" | "refining";

/** The canonical set of body systems tracked across the pregnancy. */
export type SystemKey =
  | "brain"
  | "heart"
  | "spinalCord"
  | "limbs"
  | "face"
  | "eyes"
  | "ears"
  | "lungs"
  | "digestive"
  | "liver"
  | "kidney"
  | "bone"
  | "muscle"
  | "skin"
  | "placenta"
  | "umbilicalCord"
  | "nervousSystem"
  | "circulation"
  | "reproductive";

export interface OrganEntry {
  status: OrganStatus;
  text: string;
}

export type OrganMap = Partial<Record<SystemKey, OrganEntry>>;

/** One weekly content record (40 of these in data/weeks.json). */
export interface WeekRecord {
  week: number; // 1..40
  fruitComparison: string;
  sizeSummary: string;
  lengthMm: number; // crown-rump / crown-heel anchor, millimetres
  weightG: number; // grams anchor
  organs: OrganMap;
  milestone: string;
  motherChanges: string;
  symptoms: string[];
  prenatalQuestions: string[];
  tips: string[];
  variationNote: string;
}

/** One monthly content record (9 of these in data/months.json). */
export interface MonthRecord {
  month: number; // 1..9
  weeksRange: string; // e.g. "Weeks 9–13"
  title: string;
  developmentSummary: string;
  bodyChanges: string;
  nutritionFocus: string;
  exerciseGuidance: string;
  commonExperiences: string[];
  prenatalCare: string[];
}

export interface ScanRecord {
  name: string;
  whenWeeks: string;
  purpose: string;
  whatItChecks: string;
}

export interface LabRecord {
  name: string;
  sample: "Blood" | "Urine" | "Blood/Urine";
  measures: string;
  whyRecommended: string;
}

export interface NutritionData {
  intro: string;
  proteinSources: string[];
  ironRich: string[];
  calciumSources: string[];
  folateRich: string[];
  mealIdeas: string[];
  hydration: string[];
  avoidOrLimit: string[];
}

export interface PartnerStage {
  stage: string; // e.g. "First trimester"
  ideas: string[];
}

/** Live pregnancy state derived from LMP + today (IST). */
export interface PregnancyState {
  todayISO: string; // YYYY-MM-DD in IST
  dayOfPregnancy: number; // 1..280 day index (day 1 = first day lived)
  week: number; // 1..40 (week currently in progress)
  dayInWeek: number; // 1..7 (display)
  gaWeeks: number; // completed gestational weeks (e.g. 10)
  gaDays: number; // completed days into the current week (e.g. 3)
  gaLabel: string; // e.g. "10 weeks 3 days"
  month: number; // 1..9
  trimester: 1 | 2 | 3;
  eddISO: string; // YYYY-MM-DD
  daysCompleted: number; // completed days since LMP (0..280)
  daysRemaining: number; // calendar days to EDD (0..280)
  progressPct: number; // 0..100
  preStart: boolean; // today is before LMP
  postTerm: boolean; // past 280 days
}

/** Fully derived view of a single day (1..280). */
export interface DailyView {
  dayOfPregnancy: number;
  week: number;
  dayInWeek: number;
  month: number;
  trimester: 1 | 2 | 3;
  lengthMm: number; // interpolated
  weightG: number; // interpolated
  sizeSummary: string;
  fruitComparison: string;
  milestone: string;
  motherChanges: string;
  symptoms: string[];
  tips: string[];
  prenatalQuestions: string[];
  variationNote: string;
  organs: OrganMap;
  newlyForming: SystemKey[];
  maturing: SystemKey[];
}

export interface UpcomingScan {
  scan: ScanRecord;
  startWeek: number;
  weeksAway: number;
}
