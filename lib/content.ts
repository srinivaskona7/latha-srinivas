import weeksRaw from "@/data/weeks.json";
import monthsRaw from "@/data/months.json";
import scansRaw from "@/data/scans.json";
import labsRaw from "@/data/labs.json";
import nutritionRaw from "@/data/nutrition.json";
import partnerRaw from "@/data/partner.json";
import type {
  WeekRecord,
  MonthRecord,
  ScanRecord,
  LabRecord,
  NutritionData,
  PartnerStage,
  UpcomingScan,
} from "./types";

export const WEEKS = weeksRaw as unknown as WeekRecord[];
export const MONTHS = monthsRaw as unknown as MonthRecord[];
export const SCANS = scansRaw as unknown as ScanRecord[];
export const LABS = labsRaw as unknown as LabRecord[];
export const NUTRITION = nutritionRaw as unknown as NutritionData;
export const PARTNER = partnerRaw as unknown as PartnerStage[];

/** Get a week record (1..40), clamped. */
export function getWeek(week: number): WeekRecord {
  const w = Math.min(40, Math.max(1, Math.round(week)));
  return WEEKS.find((r) => r.week === w) ?? WEEKS[WEEKS.length - 1];
}

/** Get a month record (1..9), clamped. */
export function getMonth(month: number): MonthRecord {
  const m = Math.min(9, Math.max(1, Math.round(month)));
  return MONTHS.find((r) => r.month === m) ?? MONTHS[MONTHS.length - 1];
}

/** Parse the starting week from a scan's whenWeeks string (e.g. "11–14" -> 11). */
function scanStartWeek(scan: ScanRecord): number {
  const match = scan.whenWeeks.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

/** Find the next upcoming scan relative to a gestational week. */
export function getUpcomingScan(currentWeek: number): UpcomingScan | null {
  const candidates = SCANS.map((scan) => ({
    scan,
    startWeek: scanStartWeek(scan),
  }))
    .filter((c) => c.startWeek >= currentWeek)
    .sort((a, b) => a.startWeek - b.startWeek);
  if (candidates.length === 0) return null;
  const next = candidates[0];
  return {
    scan: next.scan,
    startWeek: next.startWeek,
    weeksAway: Math.max(0, next.startWeek - currentWeek),
  };
}
