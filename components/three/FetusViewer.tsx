"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  getMorphology,
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

/** Returns the public image path for the given gestational week */
function babyImageForWeek(week: number): string {
  if (week <= 8)  return "/fetus/week6.png";
  if (week <= 15) return "/fetus/week10.png";
  if (week <= 26) return "/fetus/week20.png";
  return "/fetus/week32.png";
}

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

export function FetusViewer() {
  const [todayISO, setTodayISO] = useState(REFERENCE_ISO);
  const [day, setDay] = useState<number>(74);
  const [selected, setSelected] = useState<SystemId | null>("heart");
  const [followToday, setFollowToday] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [prevImage, setPrevImage] = useState<string>("");

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
  const { title: stageTitle, desc: stageDesc } = stageDescription(morph.week);
  const active = selected;

  // Animate image transition when week-stage changes
  useEffect(() => {
    if (imageSrc !== prevImage) {
      setImageLoaded(false);
      setPrevImage(imageSrc);
    }
  }, [imageSrc, prevImage]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      {/* === PHOTOREALISTIC BABY VIEW === */}
      <div className="relative overflow-hidden rounded-4xl" style={{ background: "radial-gradient(ellipse at center, #3d0f08 0%, #1a0503 55%, #0a0201 100%)" }}>

        {/* Womb glow background rings */}
        <div className="pointer-events-none absolute inset-0">
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 65% at 50% 52%, rgba(180,70,20,0.28) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 45% 42% at 50% 52%, rgba(255,140,40,0.13) 0%, transparent 65%)",
          }} />
        </div>

        {/* Baby image */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 460 }}>
          {/* Soft vignette overlay */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{
            background: "radial-gradient(ellipse 88% 85% at 50% 50%, transparent 40%, rgba(8,2,1,0.65) 100%)",
          }} />

          {/* Pulsing amniotic fluid shimmer */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{
            background: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255,160,60,0.06) 0%, transparent 70%)",
            animation: "womb-pulse 3.5s ease-in-out infinite",
          }} />

          <div
            className="relative z-20 transition-opacity duration-700"
            style={{ opacity: imageLoaded ? 1 : 0, width: "100%", maxWidth: 520 }}
          >
            <Image
              src={imageSrc}
              alt={`Baby at ${morph.week} weeks`}
              width={520}
              height={520}
              className="w-full object-contain"
              style={{
                filter: "drop-shadow(0 0 40px rgba(220,100,30,0.35)) drop-shadow(0 0 80px rgba(180,60,10,0.20))",
              }}
              onLoad={() => setImageLoaded(true)}
              priority
            />
          </div>

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,140,60,0.3) 0%, transparent 70%)",
                animation: "womb-pulse 1.5s ease-in-out infinite",
              }} />
            </div>
          )}
        </div>

        {/* Stage label overlay — top */}
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

        {/* System selector */}
        <div className="glass rounded-4xl p-5">
          <h3 className="font-display text-lg font-semibold text-plum">Body systems</h3>
          <p className="mt-1 text-sm text-muted">
            Tap a system to learn about it. Greyed-out systems haven&apos;t formed yet at day {morph.day}.
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

      {/* Womb pulse animation */}
      <style>{`
        @keyframes womb-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}
