import type { PregnancyState } from "./types";

/** Fixed Last Menstrual Period for this journey (local civil date). */
export const LMP_ISO = "2026-04-14";

/** Total pregnancy length in days from LMP (40 weeks). */
export const TERM_DAYS = 280;

/** Week ranges per pregnancy month (lunar-month convention, 1-indexed inclusive). */
export const MONTH_WEEK_RANGES: Array<[number, number]> = [
  [1, 4], // M1
  [5, 8], // M2
  [9, 13], // M3
  [14, 17], // M4
  [18, 22], // M5
  [23, 27], // M6
  [28, 31], // M7
  [32, 35], // M8
  [36, 40], // M9
];

/** Parse a YYYY-MM-DD string into a UTC-midnight epoch (timezone-safe day math). */
function isoToUTC(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

/** Add `days` to a YYYY-MM-DD string, returning YYYY-MM-DD. */
export function addDaysISO(iso: string, days: number): string {
  const ms = isoToUTC(iso) + days * 86_400_000;
  return new Date(ms).toISOString().slice(0, 10);
}

/** Whole days between two YYYY-MM-DD strings (b - a). */
export function diffDaysISO(a: string, b: string): number {
  return Math.round((isoToUTC(b) - isoToUTC(a)) / 86_400_000);
}

/**
 * Today's civil date in Asia/Kolkata as YYYY-MM-DD, independent of device TZ.
 * en-CA formats as YYYY-MM-DD.
 */
export function istTodayISO(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Estimated due date = LMP + 280 days. */
export function eddISO(lmp: string = LMP_ISO): string {
  return addDaysISO(lmp, TERM_DAYS);
}

/** Map a gestational week (1..40) to a pregnancy month (1..9). */
export function weekToMonth(week: number): number {
  for (let i = 0; i < MONTH_WEEK_RANGES.length; i++) {
    const [lo, hi] = MONTH_WEEK_RANGES[i];
    if (week >= lo && week <= hi) return i + 1;
  }
  return week < 1 ? 1 : 9;
}

/** Trimester from gestational week. */
export function weekToTrimester(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

/** Clamp helper. */
const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

/**
 * Derive the live pregnancy state from an LMP and a "today" ISO date.
 * `todayISO` is injectable for testing; defaults to IST today.
 */
export function getPregnancyState(
  todayISO: string = istTodayISO(),
  lmp: string = LMP_ISO,
): PregnancyState {
  const rawDays = diffDaysISO(lmp, todayISO); // 0 on LMP day
  const preStart = rawDays < 0;
  const postTerm = rawDays > TERM_DAYS;

  // Day 1 of pregnancy corresponds to the LMP day itself.
  const dayOfPregnancy = clamp(rawDays + 1, 1, TERM_DAYS);
  const week = clamp(Math.floor((dayOfPregnancy - 1) / 7) + 1, 1, 40);
  const dayInWeek = ((dayOfPregnancy - 1) % 7) + 1;
  const month = weekToMonth(week);
  const trimester = weekToTrimester(week);

  // Completed gestational age (the conventional "X weeks Y days").
  const completed = clamp(rawDays, 0, TERM_DAYS);
  const gaWeeks = Math.floor(completed / 7);
  const gaDays = completed % 7;
  const gaLabel = `${gaWeeks} ${gaWeeks === 1 ? "week" : "weeks"} ${gaDays} ${
    gaDays === 1 ? "day" : "days"
  }`;

  const daysCompleted = completed;
  const daysRemaining = clamp(TERM_DAYS - completed, 0, TERM_DAYS);
  const progressPct = clamp((completed / TERM_DAYS) * 100, 0, 100);

  // Completed calendar months & days
  const lmpDate = new Date(isoToUTC(lmp));
  const todayDate = new Date(isoToUTC(todayISO));
  let completedCalendarMonths = todayDate.getFullYear() * 12 + todayDate.getMonth() - (lmpDate.getFullYear() * 12 + lmpDate.getMonth());
  let completedCalendarDays = todayDate.getDate() - lmpDate.getDate();
  if (completedCalendarDays < 0) {
    completedCalendarMonths--;
    const prevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
    completedCalendarDays += prevMonth.getDate();
  }

  // Completed 30-day months & days
  const completed30DayMonths = Math.floor(completed / 30);
  const completed30DayDays = completed % 30;

  return {
    todayISO,
    dayOfPregnancy,
    week,
    dayInWeek,
    gaWeeks,
    gaDays,
    gaLabel,
    month,
    trimester,
    eddISO: eddISO(lmp),
    daysCompleted,
    daysRemaining,
    progressPct,
    preStart,
    postTerm,
    completedCalendarMonths,
    completedCalendarDays,
    completed30DayMonths,
    completed30DayDays,
  };
}

/** Human-readable "Xw Yd" label for a day of pregnancy. */
export function weekDayLabel(dayOfPregnancy: number): string {
  const d = clamp(dayOfPregnancy, 1, TERM_DAYS);
  const week = Math.floor((d - 1) / 7) + 1;
  const day = ((d - 1) % 7) + 1;
  return `${week}w ${day}d`;
}

/** Format a YYYY-MM-DD as e.g. "19 January 2027". */
export function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(Date.UTC(y, m - 1, d));
}

/** Long date including the weekday, e.g. "Monday, 29 June 2026". */
export function formatWeekdayLong(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(Date.UTC(y, m - 1, d));
}
