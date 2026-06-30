"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  getMorphology,
  heartRateBpm,
  movementProfile,
  sizeComparison,
  systemFirstWeek,
  VIEWER_SYSTEMS,
  wombInsight,
  type SystemId,
} from "@/lib/morphology";
import { getPregnancyState, istTodayISO, weekDayLabel, formatLongDate } from "@/lib/pregnancy";
import { formatLength, formatWeight } from "@/lib/derive";
import { bodyPartsForWeek, STATUS_LABEL, type PartStatus } from "@/lib/bodyParts";
import { FetusScene } from "./FetusScene";

const LABELS: Record<SystemId, string> = {
  brain: "Brain",
  heart: "Heart",
  lungs: "Lungs",
  digestive: "Digestive",
  skeleton: "Skeleton",
  muscles: "Muscles",
  placenta: "Placenta",
  umbilicalCord: "Cord",
};

const BLURBS: Record<SystemId, string> = {
  brain: "The brain grows rapidly throughout pregnancy — forming billions of neurons and folding into its characteristic shape as regions specialise.",
  heart: "One of the first organs to work. A simple tube loops and divides into four chambers, beating to circulate blood and nourishment.",
  lungs: "Airways branch and tiny air sacs form. The lungs mature late, making surfactant that lets them expand with that first breath.",
  digestive: "Stomach, intestines and liver take shape and practise — the baby swallows fluid as the gut coils and matures.",
  skeleton: "Soft cartilage gradually hardens into bone. The skull stays flexible with soft spots to ease birth and let the brain grow.",
  muscles: "Muscle tissue strengthens over time, powering the kicks, stretches and hiccups parents come to feel.",
  placenta: "The baby's lifeline organ — exchanging oxygen, nutrients and waste, and producing hormones that sustain the pregnancy.",
  umbilicalCord: "Two arteries and one vein carry nourishment from the placenta to the baby and return waste — the baby's supply line.",
};

const REFERENCE_ISO = "2026-06-26";

/** Deterministic floating-mote field (no random at render) for womb atmosphere. */
const MOTES: Array<{ x: number; y: number; s: number; d: number; delay: number }> = [
  { x: 12, y: 20, s: 4, d: 11, delay: 0 },
  { x: 78, y: 14, s: 3, d: 14, delay: 1.2 },
  { x: 30, y: 70, s: 5, d: 12, delay: 0.6 },
  { x: 64, y: 60, s: 3, d: 15, delay: 2.1 },
  { x: 22, y: 44, s: 2, d: 13, delay: 1.6 },
  { x: 88, y: 40, s: 4, d: 10, delay: 0.3 },
  { x: 50, y: 82, s: 3, d: 16, delay: 2.6 },
  { x: 70, y: 78, s: 2, d: 12, delay: 1.0 },
  { x: 40, y: 28, s: 3, d: 14, delay: 0.9 },
  { x: 16, y: 60, s: 2, d: 17, delay: 2.3 },
  { x: 84, y: 66, s: 3, d: 11, delay: 1.8 },
  { x: 58, y: 18, s: 2, d: 15, delay: 0.4 },
  { x: 34, y: 88, s: 4, d: 13, delay: 1.4 },
  { x: 92, y: 24, s: 2, d: 16, delay: 2.0 },
];

/** Soft, professional tone per development status (bg + text). */
const STATUS_TONE: Record<PartStatus, { bg: string; fg: string }> = {
  forming:    { bg: "rgb(var(--peach) / 0.18)",      fg: "rgb(var(--terracotta))" },
  developing: { bg: "rgb(var(--terracotta) / 0.14)", fg: "rgb(var(--terracotta))" },
  refining:   { bg: "rgb(var(--sage) / 0.18)",       fg: "rgb(var(--sage))" },
  maturing:   { bg: "rgb(var(--plum) / 0.12)",       fg: "rgb(var(--plum))" },
  ready:      { bg: "rgb(var(--sage) / 0.22)",       fg: "rgb(var(--sage))" },
};

/** Stage description shown next to the image */
function stageDescription(week: number): { title: string; desc: string } {
  if (week <= 4)  return { title: "Blastocyst", desc: "A tiny ball of cells has just implanted in the uterine wall. Your baby's journey begins." };
  if (week <= 8)  return { title: "Embryo", desc: "The heart is beating, limb buds are forming, and the neural tube that will become the brain and spine is closing." };
  if (week <= 12) return { title: "Early Fetus", desc: "All major organs have begun to form. Fingers and toes are visible, and baby can make small movements." };
  if (week <= 20) return { title: "Growing Fetus", desc: "Baby looks like a perfectly formed tiny human. You may feel the first kicks soon — called quickening." };
  if (week <= 28) return { title: "Developing Baby", desc: "Baby opens eyes, can hear your voice, and is building fat stores under the skin for warmth after birth." };
  if (week <= 36) return { title: "Almost Ready", desc: "Baby fills most of the womb now, practising breathing movements, sucking, and sleeping in regular cycles." };
  return { title: "Full Term", desc: "Baby is fully ready for the world — pink, plump, and waiting to meet you. Birth is very near." };
}

/** Synthesise one soft "thump" of a heartbeat via the Web Audio API. */
function playThump(ctx: AudioContext, delay: number) {
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(62, t);
  osc.frequency.exponentialRampToValueAtTime(34, t + 0.12);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.22);
}

export function FetusViewer() {
  const [todayISO, setTodayISO] = useState(REFERENCE_ISO);
  const [day, setDay] = useState<number>(74);
  const [selected, setSelected] = useState<SystemId | null>("heart");
  const [followToday, setFollowToday] = useState(true);

  // Viewing options
  const [motionOn, setMotionOn] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Growth time-lapse ("play the pregnancy as a film")
  const [playing, setPlaying] = useState(false);
  const soundByPlayRef = useRef(false);
  // Kick ripples — transient rings spawned on the baby, like a live scan
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const rippleSeq = useRef(0);
  const scrubbingRef = useRef(false);

  useEffect(() => {
    const iso = istTodayISO();
    setTodayISO(iso);
    const s = getPregnancyState(iso);
    setDay(s.dayOfPregnancy);
  }, []);

  const todayDay = useMemo(() => getPregnancyState(todayISO).dayOfPregnancy, [todayISO]);
  const morph = useMemo(() => getMorphology(day), [day]);

  useEffect(() => {
    if (selected && !morph.present[selected]) {
      const firstAvailable = VIEWER_SYSTEMS.find((s) => morph.present[s]) ?? null;
      setSelected(firstAvailable);
    }
  }, [morph, selected]);

  const setDayClamped = (n: number) => {
    setFollowToday(false);
    setDay(Math.min(280, Math.max(1, Math.round(n))));
  };

  // Seek the timeline from a pointer x-position on the scrub track.
  const seekFromClientX = (clientX: number, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setPlaying(false);
    setDayClamped(ratio * 280);
  };

  const { title: stageTitle, desc: stageDesc } = stageDescription(morph.week);
  const active = selected;

  const bpm = heartRateBpm(morph.week);
  const beatSec = bpm > 0 ? 60 / bpm : 0;
  const size = sizeComparison(morph.week);
  const move = movementProfile(morph.week);
  const womb = wombInsight(morph.week);
  const parts = useMemo(() => bodyPartsForWeek(morph.week), [morph.week]);
  const todayLongDate = useMemo(() => formatLongDate(todayISO), [todayISO]);

  // Drive the heartbeat audio at the week-accurate BPM while sound is enabled.
  useEffect(() => {
    if (!soundOn || beatSec <= 0 || typeof window === "undefined") return;
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = audioCtxRef.current ?? new Ctx();
    audioCtxRef.current = ctx;
    if (ctx.state === "suspended") void ctx.resume();

    const beat = () => {
      playThump(ctx, 0);          // lub
      playThump(ctx, beatSec * 0.32); // dub
    };
    if (!playing) beat(); // immediate beat on manual enable; during fast play the interval handles it (no bursts)
    const id = window.setInterval(beat, beatSec * 1000);
    return () => window.clearInterval(id);
  }, [soundOn, beatSec, playing]);

  // Release the audio context on unmount.
  useEffect(() => () => { void audioCtxRef.current?.close(); }, []);

  // Growth time-lapse: auto-advance the day so the whole pregnancy plays out
  // as a ~10s film (≈28 days/sec). Stops at term; restart replays from day 1.
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setDay((d) => {
        const next = d + 2;
        if (next >= 280) {
          setPlaying(false);
          return 280;
        }
        return next;
      });
    }, 70);
    return () => window.clearInterval(id);
  }, [playing]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setFollowToday(false);
    if (day >= 280) setDay(1); // replay from the beginning
    setPlaying(true);
    if (!soundOn && bpm > 0) {
      setSoundOn(true); // give the film a heartbeat soundtrack
      soundByPlayRef.current = true;
    }
  };

  // When playback stops, switch off the heartbeat soundtrack if play turned it on.
  useEffect(() => {
    if (!playing && soundByPlayRef.current) {
      setSoundOn(false);
      soundByPlayRef.current = false;
    }
  }, [playing]);

  // Kick ripples: from quickening onward, spawn soft expanding rings on the
  // baby at a cadence and size set by the week's movement profile.
  useEffect(() => {
    if (!motionOn || !move.feltByMother) return;
    if (typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const gapMs = move.periodSec * (playing ? 600 : 1000);
    const id = window.setInterval(() => {
      const rid = rippleSeq.current++;
      const ripple = {
        id: rid,
        x: 38 + Math.random() * 26, // % within the torso region
        y: 36 + Math.random() * 24,
        size: 48 + move.amplitudePx * 3 + Math.random() * 30,
      };
      setRipples((r) => [...r, ripple]);
      window.setTimeout(() => setRipples((r) => r.filter((p) => p.id !== rid)), 1800);
    }, gapMs);
    return () => window.clearInterval(id);
  }, [motionOn, move.feltByMother, move.periodSec, move.amplitudePx, playing]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      {/* === INTERACTIVE 3D BABY VIEW === */}
      {/* Procedural WebGL model driven by the day-accurate morphology. Drag to
          rotate, pinch/scroll to zoom, tap any system to spotlight it. */}
      <div className="space-y-3">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-4xl"
        style={{ background: "#160604" }}
      >
        <div className="absolute inset-0">
          <FetusScene
            morph={morph}
            selected={selected}
            onSelect={setSelected}
            autoRotate={motionOn}
          />
        </div>

        {/* Gentle amniotic shimmer — adds life without competing with the art */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 46%, rgba(255,180,90,0.07) 0%, transparent 70%)",
            animation: "womb-pulse 4s ease-in-out infinite",
          }}
        />

        {/* Subtle inner vignette to seat the image in the card */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ boxShadow: "inset 0 0 90px 20px rgba(10,2,1,0.55)" }}
        />

        {/* Floating amniotic motes — soft drifting particles add depth & life */}
        <div className="pointer-events-none absolute inset-0 z-[12] overflow-hidden">
          {MOTES.map((m, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${m.x}%`,
                top: `${m.y}%`,
                width: m.s,
                height: m.s,
                background: "rgba(255,214,170,0.55)",
                boxShadow: "0 0 6px rgba(255,190,130,0.45)",
                animation: motionOn ? `mote-drift ${m.d}s ease-in-out ${m.delay}s infinite` : undefined,
              }}
            />
          ))}
        </div>

        {/* Kick ripples — transient rings, like movement seen on a live scan */}
        <div className="pointer-events-none absolute inset-0 z-[15]">
          {ripples.map((r) => (
            <span
              key={r.id}
              className="absolute block rounded-full"
              style={{
                left: `${r.x}%`,
                top: `${r.y}%`,
                width: r.size,
                height: r.size,
                border: "2px solid rgba(255,200,140,0.55)",
                boxShadow: "0 0 18px rgba(255,170,90,0.35)",
                animation: "ripple-kick 1.8s ease-out forwards",
              }}
            />
          ))}
        </div>

        {/* Stage label overlay — top-left */}
        <div className="pointer-events-none absolute left-4 top-4 z-30 space-y-1.5">
          <div className="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.45)", color: "#FFD4A8", border: "1px solid rgba(255,160,60,0.25)" }}>
            {weekDayLabel(morph.day)} · Week {morph.week} · Day {morph.day}
          </div>
          <div className="rounded-full px-3 py-1 text-[11px] backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.35)", color: "#FFB888" }}>
            {formatLength(morph.lengthMm)} · {formatWeight(morph.weightG)}
          </div>
          {followToday && (
            <div className="rounded-full px-3 py-1 text-[11px] backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.35)", color: "#FFCBA0" }}>
              📅 {todayLongDate}
            </div>
          )}
        </div>

        {/* Viewing toggles — top-right */}
        <div className="absolute right-4 top-4 z-30 flex gap-1.5">
          <button
            onClick={() => setMotionOn((v) => !v)}
            aria-pressed={motionOn}
            title="Toggle auto-rotate"
            className="rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm transition-colors"
            style={{
              background: motionOn ? "rgba(255,150,60,0.85)" : "rgba(0,0,0,0.45)",
              color: motionOn ? "#1a0503" : "#FFB888",
              border: "1px solid rgba(255,160,60,0.3)",
            }}
          >
            ↻ Spin
          </button>
        </div>

        {/* Drag-to-rotate hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-30 rounded-full px-3 py-1 text-[11px] backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.4)", color: "#FFCBA0", border: "1px solid rgba(255,160,60,0.25)" }}>
          ✋ Drag to rotate · pinch to zoom
        </div>

        {/* Stage name overlay — bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 px-5 pb-5 pt-10"
          style={{ background: "linear-gradient(to top, rgba(8,2,1,0.85) 0%, transparent 100%)" }}>
          <p className="font-display text-lg font-bold" style={{ color: "#FFD4A8" }}>{stageTitle}</p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,200,150,0.75)" }}>{stageDesc}</p>
        </div>

        {/* Per-week narration caption — fades in on each new week while playing */}
        {playing && (
          <div
            key={morph.week}
            className="pointer-events-none absolute left-1/2 top-16 z-30 -translate-x-1/2 text-center"
            style={{ animation: "caption-in 0.6s ease-out" }}
          >
            <p className="font-display text-2xl font-bold" style={{ color: "#FFE4C4", textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
              Week {morph.week}
            </p>
            <p className="text-sm font-medium" style={{ color: "#FFC79A", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
              {move.title}
            </p>
          </div>
        )}

        {/* Time-lapse play/pause — bottom-right */}
        <button
          onClick={togglePlay}
          aria-pressed={playing}
          title={playing ? "Pause growth film" : "Play growth film"}
          className="absolute bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-lg shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
          style={{
            background: "rgba(255,150,60,0.92)",
            color: "#1a0503",
            border: "1px solid rgba(255,200,150,0.6)",
          }}
        >
          {playing ? "⏸" : "▶"}
        </button>
      </div>

      {/* Scrubbable timeline — trimester segments + week ticks under the film */}
      <div className="px-1">
        <div
          role="slider"
          aria-label="Scrub pregnancy timeline"
          aria-valuemin={1}
          aria-valuemax={280}
          aria-valuenow={day}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setDayClamped(day - 1);
            if (e.key === "ArrowRight") setDayClamped(day + 1);
          }}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            scrubbingRef.current = true;
            seekFromClientX(e.clientX, e.currentTarget);
          }}
          onPointerMove={(e) => {
            if (scrubbingRef.current) seekFromClientX(e.clientX, e.currentTarget);
          }}
          onPointerUp={() => { scrubbingRef.current = false; }}
          className="relative h-7 cursor-pointer touch-none select-none"
        >
          {/* Track with trimester bands (T1 ≤wk13, T2 ≤wk27, T3 →birth) */}
          <div
            className="absolute left-0 right-0 top-1/2 h-2.5 -translate-y-1/2 overflow-hidden rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgb(var(--peach) / 0.35) 0% 32.5%, rgb(var(--sage) / 0.35) 32.5% 67.5%, rgb(var(--plum) / 0.30) 67.5% 100%)",
            }}
          >
            {/* Progress fill */}
            <div
              className="h-full rounded-full"
              style={{ width: `${(day / 280) * 100}%`, background: "rgb(var(--terracotta))", transition: scrubbingRef.current || playing ? "none" : "width 0.2s ease" }}
            />
          </div>
          {/* Trimester divider ticks */}
          {[32.5, 67.5].map((p) => (
            <span key={p} className="absolute top-1/2 h-3.5 w-px -translate-y-1/2 bg-white/70" style={{ left: `${p}%` }} />
          ))}
          {/* Handle knob */}
          <span
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-terracotta shadow"
            style={{ left: `${(day / 280) * 100}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-medium text-muted">
          <span>T1</span>
          <span>T2</span>
          <span>T3</span>
          <span>Birth</span>
        </div>
      </div>
      </div>

      {/* === CONTROLS + INFO === */}
      <div className="space-y-4">
        {/* Day slider */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">Day of growth</h3>
            <span className="font-display text-xl font-semibold text-terracotta">{morph.day}</span>
          </div>
          <input
            type="range" min={1} max={280} step={1} value={day}
            onChange={(e) => setDayClamped(Number(e.target.value))}
            className="mt-3 w-full accent-[color:rgb(var(--terracotta))]"
            aria-label="Day of pregnancy"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={togglePlay}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                playing ? "bg-plum text-white" : "bg-terracotta text-white hover:opacity-90"
              }`}
            >
              {playing ? "⏸ Pause" : "▶ Play growth"}
            </button>
            <button onClick={() => setDayClamped(day - 7)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">−7d</button>
            <button onClick={() => setDayClamped(day + 7)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">+7d</button>
            <button
              onClick={() => { setPlaying(false); setFollowToday(true); setDay(todayDay); }}
              className={`rounded-full px-3 py-1 text-xs font-medium ${followToday ? "bg-terracotta text-white" : "bg-linen text-muted hover:text-ink"}`}>
              Today ({todayDay})
            </button>
            <button onClick={() => setDayClamped(280)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">Birth</button>
          </div>
          <p className="mt-2 text-xs text-muted">
            Drag to scrub, or press <span className="font-medium text-ink">Play growth</span> to watch your baby develop from day 1 to birth.
          </p>
        </div>

        {/* Size comparison */}
        <div className="glass rounded-4xl p-5">
          <h3 className="font-display text-lg font-semibold text-plum">Size of your baby</h3>
          <div className="mt-3 flex items-center gap-4">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-5xl"
              style={{ background: "rgb(var(--terracotta) / 0.10)" }}
              aria-hidden
            >
              {size.emoji}
            </div>
            <div>
              <p className="text-sm text-muted">About the size of a</p>
              <p className="font-display text-2xl font-semibold capitalize text-terracotta">{size.label}</p>
              <p className="mt-1 text-sm text-muted">
                {formatLength(morph.lengthMm)} · {formatWeight(morph.weightG)}
              </p>
            </div>
          </div>
        </div>

        {/* Heartbeat */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">Heartbeat</h3>
            {bpm > 0 && (
              <button
                onClick={() => setSoundOn((v) => !v)}
                aria-pressed={soundOn}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  soundOn ? "bg-terracotta text-white" : "bg-linen text-muted hover:text-ink"
                }`}
              >
                {soundOn ? "🔊 Sound on" : "🔈 Play sound"}
              </button>
            )}
          </div>
          {bpm > 0 ? (
            <div className="mt-3 flex items-center gap-4">
              <span
                className="text-5xl"
                style={{ animation: `heartbeat ${beatSec}s ease-in-out infinite`, transformOrigin: "center" }}
                aria-hidden
              >
                ❤️
              </span>
              <div>
                <p className="font-display text-3xl font-semibold text-terracotta">
                  {bpm} <span className="text-base font-normal text-muted">bpm</span>
                </p>
                <p className="text-sm text-muted">Week-typical fetal heart rate.</p>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted">
              The heart begins beating around week 6 — not detectable just yet.
            </p>
          )}
        </div>

        {/* Movements & moments this week */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">Movements this week</h3>
            <span
              className="rounded-full px-2.5 py-1 text-[11px] font-medium"
              style={
                move.feltByMother
                  ? { background: "rgb(var(--terracotta) / 0.14)", color: "rgb(var(--terracotta))" }
                  : { background: "rgba(0,0,0,0.05)", color: "rgb(var(--muted))" }
              }
            >
              {move.feltByMother ? "You can feel this" : "Too small to feel"}
            </span>
          </div>
          <p className="mt-2 font-display text-xl font-semibold text-terracotta">{move.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{move.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {move.motions.map((m) => (
              <span
                key={m}
                className="rounded-full bg-linen px-3 py-1 text-xs font-medium text-ink"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            The 3D baby moves the way it does around week {morph.week}. Drag to rotate it, or use ↻ Spin for a gentle auto-turn.
          </p>
        </div>

        {/* System selector */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">Body systems</h3>
          </div>
          <p className="mt-1 text-sm text-muted">
            Tap a system to spotlight it on the baby. Greyed-out systems haven&apos;t formed yet at day {morph.day}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {VIEWER_SYSTEMS.map((s) => {
              const formed = morph.present[s];
              return (
                <button
                  key={s}
                  disabled={!formed}
                  onClick={() => setSelected(s)}
                  title={formed ? undefined : `Forms around week ${systemFirstWeek(s)}`}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    selected === s
                      ? "bg-terracotta text-white"
                      : formed
                        ? "bg-linen text-muted hover:text-ink"
                        : "cursor-not-allowed bg-linen/40 text-muted/40"
                  }`}
                >
                  {LABELS[s]}
                </button>
              );
            })}
          </div>
        </div>

        {active && morph.present[active] && (
          <div className="glass rounded-4xl p-5">
            <h4 className="font-display text-xl font-semibold text-terracotta">{LABELS[active]}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{BLURBS[active]}</p>
          </div>
        )}
      </div>

      {/* === INSIDE YOUR WOMB RIGHT NOW (full width) === */}
      <div className="glass rounded-4xl p-5 sm:p-6 lg:col-span-2">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-plum sm:text-2xl">
            Inside your womb right now
          </h3>
          <span className="rounded-full bg-peach/15 px-3 py-1 text-xs font-medium text-terracotta">
            Week {morph.week} · Day {morph.day}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">
          What your baby is sensing and doing at this exact stage — and the world around them.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "👂", label: "Hearing", text: womb.hearing },
            { icon: "👁️", label: "Sight", text: womb.vision },
            { icon: "👅", label: "Taste & smell", text: womb.tasteSmell },
            { icon: "✋", label: "Touch", text: womb.touch },
            { icon: "😴", label: "Sleep & behaviour", text: womb.behaviour },
            { icon: "🌊", label: "Womb environment", text: womb.environment },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-linen/60 p-4">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden>{item.icon}</span>
                <span className="text-sm font-semibold text-plum">{item.label}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Connection tip for the mother */}
        <div className="mt-3 rounded-3xl border border-terracotta/25 bg-peach/15 p-4">
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden>💛</span>
            <span className="text-sm font-semibold text-terracotta">Connect with your baby</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink">{womb.connection}</p>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted">
          A gentle, research-informed guide to your baby&apos;s development — for education only,
          not a substitute for your clinician&apos;s advice.
        </p>
      </div>

      {/* === YOUR BABY'S BODY TODAY (full width, current-day driven) === */}
      <div className="glass rounded-4xl p-5 sm:p-6 lg:col-span-2">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              Part by part, today
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-plum sm:text-2xl">
              Your baby&apos;s body right now
            </h3>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full bg-terracotta/12 px-3 py-1 text-xs font-semibold text-terracotta">
              {todayLongDate}
            </span>
            <span className="text-xs text-muted">
              {weekDayLabel(morph.day)} · Week {morph.week} · Day {morph.day}
            </span>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted">
          Exactly what each part of your baby is doing at this stage. Tap an organ to spotlight it in the view above.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((p) => {
            const tone = STATUS_TONE[p.status];
            const selectable = Boolean(p.system && morph.present[p.system]);
            const isSel = selectable && selected === p.system;
            return (
              <button
                key={p.id}
                type="button"
                disabled={!selectable}
                onClick={() => selectable && p.system && setSelected(p.system)}
                className={`flex flex-col rounded-3xl p-4 text-left transition-all ${
                  isSel ? "bg-peach/15 ring-2 ring-terracotta/50" : "bg-linen/60"
                } ${selectable ? "cursor-pointer hover:-translate-y-0.5" : "cursor-default"}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden>{p.icon}</span>
                    <span className="text-sm font-semibold text-plum">{p.label}</span>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink">{p.detail}</p>
                {selectable && (
                  <span className="mt-2 text-[11px] font-medium text-terracotta">
                    {isSel ? "● Showing in view" : "Tap to spotlight →"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          These descriptions update automatically as your pregnancy day advances. Every baby grows
          at their own pace — this is a gentle, educational guide, not a medical assessment.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes womb-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes baby-bob {
          0%   { transform: translateY(var(--mv-amp)) scale(0.994); }
          50%  { transform: translateY(var(--mv-amp-neg)) scale(1.006); }
          100% { transform: translateY(var(--mv-amp)) scale(0.994); }
        }
        @keyframes baby-sway {
          0%   { transform: translateX(var(--mv-ampx-neg)) rotate(var(--mv-rot-neg)); }
          50%  { transform: translateX(var(--mv-ampx)) rotate(var(--mv-rot)); }
          100% { transform: translateX(var(--mv-ampx-neg)) rotate(var(--mv-rot-neg)); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.22); }
          30% { transform: scale(1); }
          45% { transform: scale(1.12); }
          60% { transform: scale(1); }
        }
        @keyframes hotspot-ping {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
        }
        @keyframes ripple-kick {
          0% { transform: translate(-50%,-50%) scale(0.25); opacity: 0.6; }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0; }
        }
        @keyframes kenburns {
          0%   { transform: scale(1) translate(0, 0); }
          50%  { transform: scale(1.06) translate(-2%, 1.5%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes caption-in {
          0%   { opacity: 0; transform: translate(-50%, 8px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes mote-drift {
          0%   { transform: translate(0, 0); opacity: 0.25; }
          50%  { transform: translate(6px, -14px); opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0.25; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="baby-bob"], [style*="baby-sway"], [style*="heartbeat"], [style*="hotspot-ping"], [style*="womb-pulse"], [style*="ripple-kick"], [style*="kenburns"], [style*="caption-in"], [style*="mote-drift"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
