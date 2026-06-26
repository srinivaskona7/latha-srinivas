// Tests for the day-driven growth curve invariants (node --test).
// Mirrors the pure logic in lib/morphology.ts growthParams().

import { test } from "node:test";
import assert from "node:assert/strict";

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const lerp = (a, b, t) => a + (b - a) * clamp(t, 0, 1);

function growthParams(week, lengthMm) {
  const w = clamp(week, 1, 40);
  const displayScale = 0.42 + 0.8 * Math.sqrt(clamp(lengthMm / 510, 0, 1));
  const headRatio = clamp(0.92 - Math.max(0, w - 8) * 0.013, 0.5, 0.92);
  let limbExtend;
  if (w <= 5) limbExtend = 0.05;
  else if (w <= 9) limbExtend = lerp(0.15, 0.55, (w - 5) / 4);
  else limbExtend = lerp(0.55, 1, (w - 9) / 7);
  const tail = w <= 5 ? 1 : w <= 8 ? clamp(1 - (w - 5) / 3, 0, 1) : 0;
  const chub = w < 28 ? 0 : clamp((w - 28) / 12, 0, 1);
  return { displayScale, headRatio, limbExtend, tail, chub };
}

// Approx length anchors (mm) per week, matching data/weeks.json scale.
const LEN = { 5: 6, 8: 16, 12: 54, 20: 250, 28: 375, 40: 510 };

test("displayScale increases monotonically with length", () => {
  let prev = -1;
  for (const mm of [4, 16, 54, 116, 250, 375, 470, 510]) {
    const s = growthParams(20, mm).displayScale;
    assert.ok(s > prev, `scale should grow at ${mm}mm`);
    prev = s;
  }
});

test("head ratio shrinks from embryo to term", () => {
  assert.ok(growthParams(8, LEN[8]).headRatio > growthParams(20, LEN[20]).headRatio);
  assert.ok(growthParams(20, LEN[20]).headRatio > growthParams(40, LEN[40]).headRatio);
  assert.ok(growthParams(40, LEN[40]).headRatio >= 0.5);
});

test("limbs extend from buds to full", () => {
  assert.ok(growthParams(5, LEN[5]).limbExtend < 0.1, "wk5 buds");
  assert.ok(growthParams(8, LEN[8]).limbExtend < growthParams(16, 116).limbExtend);
  assert.equal(growthParams(16, 116).limbExtend, 1, "full by ~wk16");
});

test("embryonic tail regresses by week 8", () => {
  assert.equal(growthParams(5, LEN[5]).tail, 1);
  assert.ok(growthParams(7, 10).tail > 0 && growthParams(7, 10).tail < 1);
  assert.equal(growthParams(8, LEN[8]).tail, 0);
  assert.equal(growthParams(20, LEN[20]).tail, 0);
});

test("chub (fat) only builds in third trimester", () => {
  assert.equal(growthParams(20, LEN[20]).chub, 0);
  assert.equal(growthParams(28, LEN[28]).chub, 0);
  assert.ok(growthParams(34, 440).chub > 0);
  assert.equal(growthParams(40, LEN[40]).chub, 1);
});
