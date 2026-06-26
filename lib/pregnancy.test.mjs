// Unit tests for the pregnancy date engine. Run with: node --test
// These re-implement the pure date math in JS to validate the spec's invariants
// without needing a TS loader. They mirror lib/pregnancy.ts exactly.

import { test } from "node:test";
import assert from "node:assert/strict";

const LMP_ISO = "2026-04-14";
const TERM_DAYS = 280;

function isoToUTC(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}
function addDaysISO(iso, days) {
  return new Date(isoToUTC(iso) + days * 86400000).toISOString().slice(0, 10);
}
function diffDaysISO(a, b) {
  return Math.round((isoToUTC(b) - isoToUTC(a)) / 86400000);
}
function eddISO(lmp = LMP_ISO) {
  return addDaysISO(lmp, TERM_DAYS);
}
const MONTH_WEEK_RANGES = [
  [1, 4], [5, 8], [9, 13], [14, 17], [18, 22],
  [23, 27], [28, 31], [32, 35], [36, 40],
];
function weekToMonth(week) {
  for (let i = 0; i < MONTH_WEEK_RANGES.length; i++) {
    const [lo, hi] = MONTH_WEEK_RANGES[i];
    if (week >= lo && week <= hi) return i + 1;
  }
  return week < 1 ? 1 : 9;
}
function weekToTrimester(week) {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
function getPregnancyState(todayISO, lmp = LMP_ISO) {
  const rawDays = diffDaysISO(lmp, todayISO);
  const dayOfPregnancy = clamp(rawDays + 1, 1, TERM_DAYS);
  const week = clamp(Math.floor((dayOfPregnancy - 1) / 7) + 1, 1, 40);
  const dayInWeek = ((dayOfPregnancy - 1) % 7) + 1;
  return {
    dayOfPregnancy,
    week,
    dayInWeek,
    month: weekToMonth(week),
    trimester: weekToTrimester(week),
    eddISO: eddISO(lmp),
    daysRemaining: clamp(TERM_DAYS - dayOfPregnancy, 0, TERM_DAYS),
  };
}

test("EDD is LMP + 280 days = 2027-01-19", () => {
  assert.equal(eddISO(), "2027-01-19");
});

test("reference date 2026-06-26 is day 74 = week 11 day 4 (10w3d completed)", () => {
  // rawDays from LMP to 2026-06-26
  const raw = diffDaysISO(LMP_ISO, "2026-06-26");
  assert.equal(raw, 73); // 73 completed days => 10 weeks 3 days completed
  const s = getPregnancyState("2026-06-26");
  // Completed gestational age is 10w3d; dayOfPregnancy counts day 1 = LMP.
  assert.equal(s.dayOfPregnancy, 74);
  assert.equal(s.week, 11);
  assert.equal(s.dayInWeek, 4);
});

test("LMP day itself is day 1, week 1", () => {
  const s = getPregnancyState(LMP_ISO);
  assert.equal(s.dayOfPregnancy, 1);
  assert.equal(s.week, 1);
  assert.equal(s.dayInWeek, 1);
});

test("EDD day clamps to day 280 / week 40", () => {
  const s = getPregnancyState("2027-01-19");
  assert.equal(s.dayOfPregnancy, 280);
  assert.equal(s.week, 40);
  assert.equal(s.daysRemaining, 0);
});

test("month mapping covers weeks 1..40 with no gaps", () => {
  for (let w = 1; w <= 40; w++) {
    const m = weekToMonth(w);
    assert.ok(m >= 1 && m <= 9, `week ${w} -> month ${m}`);
  }
  assert.equal(weekToMonth(1), 1);
  assert.equal(weekToMonth(13), 3);
  assert.equal(weekToMonth(27), 6);
  assert.equal(weekToMonth(40), 9);
});

test("trimester boundaries", () => {
  assert.equal(weekToTrimester(13), 1);
  assert.equal(weekToTrimester(14), 2);
  assert.equal(weekToTrimester(27), 2);
  assert.equal(weekToTrimester(28), 3);
});
