"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getMorphology,
  heartRateBpm,
  sizeComparison,
  systemFirstWeek,
  VIEWER_SYSTEMS,
  type SystemId,
} from "@/lib/morphology";
import { getPregnancyState, istTodayISO, weekDayLabel } from "@/lib/pregnancy";
import { formatLength, formatWeight } from "@/lib/derive";

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

// Base path for GitHub Pages subdirectory deployment (e.g. /latha-srinivas)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Returns the public image path for the given gestational week.
 *  Each path is one of four photorealistic anchor renders (weeks 6, 10, 20, 32),
 *  chosen so the depicted development closely matches the current band. */
function babyImageForWeek(week: number): string {
  if (week <= 9)  return `${BASE}/fetus/week6.png`;   // embryo — large head, tail, dark eye
  if (week <= 16) return `${BASE}/fetus/week10.png`;  // early fetus — recognisably human
  if (week <= 28) return `${BASE}/fetus/week20.png`;  // clearly a baby, lean
  return `${BASE}/fetus/week32.png`;                  // plump, near term
}

/** Continuous, day-driven zoom so the baby visibly grows between stage swaps.
 *  Driven by the real length curve (displayScale ≈ 0.42→1.2), eased into a
 *  subtle 1.00→1.14 frame zoom — fast early, gentle later, matching biology. */
function babyZoom(displayScale: number): number {
  const t = Math.min(1, Math.max(0, (displayScale - 0.42) / 0.78));
  return 1 + t * 0.14;
}

/** Normalised hotspot positions (% of frame) for each anchor image, so taps on
 *  the actual photo land on the right organ. Only locatable systems are mapped. */
type Point = { x: number; y: number };
const HOTSPOTS: Record<string, Partial<Record<SystemId, Point>>> = {
  "/fetus/week6.png": {
    brain: { x: 40, y: 26 }, heart: { x: 46, y: 50 }, lungs: { x: 43, y: 47 },
    digestive: { x: 50, y: 60 }, skeleton: { x: 48, y: 64 }, muscles: { x: 53, y: 70 },
    umbilicalCord: { x: 70, y: 55 }, placenta: { x: 85, y: 36 },
  },
  "/fetus/week10.png": {
    brain: { x: 42, y: 25 }, heart: { x: 40, y: 52 }, lungs: { x: 43, y: 49 },
    digestive: { x: 40, y: 63 }, skeleton: { x: 46, y: 72 }, muscles: { x: 49, y: 74 },
    umbilicalCord: { x: 62, y: 60 }, placenta: { x: 84, y: 30 },
  },
  "/fetus/week20.png": {
    brain: { x: 45, y: 27 }, heart: { x: 44, y: 50 }, lungs: { x: 46, y: 47 },
    digestive: { x: 47, y: 58 }, skeleton: { x: 50, y: 72 }, muscles: { x: 53, y: 66 },
    umbilicalCord: { x: 68, y: 44 }, placenta: { x: 22, y: 56 },
  },
  "/fetus/week32.png": {
    brain: { x: 62, y: 27 }, heart: { x: 50, y: 48 }, lungs: { x: 52, y: 45 },
    digestive: { x: 48, y: 58 }, skeleton: { x: 40, y: 72 }, muscles: { x: 44, y: 64 },
    umbilicalCord: { x: 32, y: 30 }, placenta: { x: 80, y: 30 },
  },
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [prevImage, setPrevImage] = useState<string>("");

  // Viewing options
  const [motionOn, setMotionOn] = useState(true);
  const [hotspotsOn, setHotspotsOn] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

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

  const imageSrc = babyImageForWeek(morph.week);
  const zoom = babyZoom(morph.displayScale);
  const { title: stageTitle, desc: stageDesc } = stageDescription(morph.week);
  const active = selected;

  const bpm = heartRateBpm(morph.week);
  const beatSec = bpm > 0 ? 60 / bpm : 0;
  const size = sizeComparison(morph.week);

  // Animate image transition when week-stage changes
  useEffect(() => {
    if (imageSrc !== prevImage) {
      setImageLoaded(false);
      setPrevImage(imageSrc);
    }
  }, [imageSrc, prevImage]);

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
    beat();
    const id = window.setInterval(beat, beatSec * 1000);
    return () => window.clearInterval(id);
  }, [soundOn, beatSec]);

  // Release the audio context on unmount.
  useEffect(() => () => { void audioCtxRef.current?.close(); }, []);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      {/* === PHOTOREALISTIC BABY VIEW === */}
      {/* The renders already contain the full womb (sac, placenta, vessels, glow),
          so we present them edge-to-edge in a clean frame instead of layering a
          second, mismatched gradient womb on top. */}
      <div
        className="relative aspect-square w-full overflow-hidden rounded-4xl"
        style={{ background: "#160604" }}
      >
        {/* Zoom layer — continuous day-driven growth */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "50% 48%",
            transition: "transform 1.2s cubic-bezier(0.22,0.61,0.36,1)",
          }}
        >
          {/* Idle-motion layer — gentle breathing/float so the baby feels alive */}
          <div
            className="absolute inset-0"
            style={motionOn ? { animation: "baby-float 7s ease-in-out infinite" } : undefined}
          >
            <Image
              src={imageSrc}
              alt={`Baby at ${morph.week} weeks`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.7s ease",
              }}
              onLoad={() => setImageLoaded(true)}
              priority
            />

            {/* Organ hotspots — pinned to the baby so they track zoom + motion */}
            {hotspotsOn &&
              VIEWER_SYSTEMS.map((s) => {
                const pos = HOTSPOTS[imageSrc]?.[s];
                if (!pos || !morph.present[s]) return null;
                const isSel = selected === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSelected(s)}
                    aria-label={`Highlight ${LABELS[s]}`}
                    className="absolute z-20"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%,-50%)" }}
                  >
                    {isSel && (
                      <span
                        className="absolute left-1/2 top-1/2 block rounded-full"
                        style={{
                          width: 16, height: 16,
                          border: "2px solid rgba(255,180,90,0.9)",
                          transform: "translate(-50%,-50%)",
                          animation: "hotspot-ping 1.5s ease-out infinite",
                        }}
                      />
                    )}
                    <span
                      className="block rounded-full transition-all"
                      style={{
                        width: isSel ? 15 : 12,
                        height: isSel ? 15 : 12,
                        background: isSel ? "rgba(255,170,80,0.95)" : "rgba(255,220,180,0.55)",
                        border: "1.5px solid rgba(255,255,255,0.85)",
                        boxShadow: "0 0 8px rgba(0,0,0,0.5)",
                      }}
                    />
                  </button>
                );
              })}
          </div>
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

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,140,60,0.3) 0%, transparent 70%)",
                animation: "womb-pulse 1.5s ease-in-out infinite",
              }}
            />
          </div>
        )}

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
        </div>

        {/* Viewing toggles — top-right */}
        <div className="absolute right-4 top-4 z-30 flex gap-1.5">
          <button
            onClick={() => setMotionOn((v) => !v)}
            aria-pressed={motionOn}
            title="Toggle gentle motion"
            className="rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm transition-colors"
            style={{
              background: motionOn ? "rgba(255,150,60,0.85)" : "rgba(0,0,0,0.45)",
              color: motionOn ? "#1a0503" : "#FFB888",
              border: "1px solid rgba(255,160,60,0.3)",
            }}
          >
            ✷ Motion
          </button>
          <button
            onClick={() => setHotspotsOn((v) => !v)}
            aria-pressed={hotspotsOn}
            title="Toggle organ points on the baby"
            className="rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm transition-colors"
            style={{
              background: hotspotsOn ? "rgba(255,150,60,0.85)" : "rgba(0,0,0,0.45)",
              color: hotspotsOn ? "#1a0503" : "#FFB888",
              border: "1px solid rgba(255,160,60,0.3)",
            }}
          >
            ◉ Points
          </button>
        </div>

        {/* Stage name overlay — bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 px-5 pb-5 pt-10"
          style={{ background: "linear-gradient(to top, rgba(8,2,1,0.85) 0%, transparent 100%)" }}>
          <p className="font-display text-lg font-bold" style={{ color: "#FFD4A8" }}>{stageTitle}</p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,200,150,0.75)" }}>{stageDesc}</p>
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
            <button onClick={() => setDayClamped(day - 7)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">−7d</button>
            <button onClick={() => setDayClamped(day + 7)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">+7d</button>
            <button
              onClick={() => { setFollowToday(true); setDay(todayDay); }}
              className={`rounded-full px-3 py-1 text-xs font-medium ${followToday ? "bg-terracotta text-white" : "bg-linen text-muted hover:text-ink"}`}>
              Today ({todayDay})
            </button>
            <button onClick={() => setDayClamped(280)}
              className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">Birth</button>
          </div>
          <p className="mt-2 text-xs text-muted">
            Drag to see how your baby looks at every stage of pregnancy.
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

        {/* System selector + organ hotspots */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">Body systems</h3>
            <button
              onClick={() => setHotspotsOn((v) => !v)}
              aria-pressed={hotspotsOn}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                hotspotsOn ? "bg-terracotta text-white" : "bg-linen text-muted hover:text-ink"
              }`}
            >
              {hotspotsOn ? "Points: on" : "Points: off"}
            </button>
          </div>
          <p className="mt-1 text-sm text-muted">
            Tap a system — or a point on the baby — to learn about it. Greyed-out systems haven&apos;t formed yet at day {morph.day}.
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

      {/* Animations */}
      <style>{`
        @keyframes womb-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes baby-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.5deg); }
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
        @media (prefers-reduced-motion: reduce) {
          [style*="baby-float"], [style*="heartbeat"], [style*="hotspot-ping"], [style*="womb-pulse"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
