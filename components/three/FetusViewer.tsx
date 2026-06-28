"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import { FetusModel } from "./FetusModel";
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
  brain:
    "The brain grows rapidly throughout pregnancy — forming billions of neurons and folding into its characteristic shape as regions specialise.",
  heart:
    "One of the first organs to work. A simple tube loops and divides into four chambers, beating to circulate blood and nourishment.",
  lungs:
    "Airways branch and tiny air sacs form. The lungs mature late, making surfactant that lets them expand with that first breath.",
  digestive:
    "Stomach, intestines and liver take shape and practise — the baby swallows fluid as the gut coils and matures.",
  skeleton:
    "Soft cartilage gradually hardens into bone. The skull stays flexible with soft spots to ease birth and let the brain grow.",
  muscles:
    "Muscle tissue strengthens over time, powering the kicks, stretches and hiccups parents come to feel.",
  placenta:
    "The baby's lifeline organ — exchanging oxygen, nutrients and waste, and producing hormones that sustain the pregnancy.",
  umbilicalCord:
    "Two arteries and one vein carry nourishment from the placenta to the baby and return waste — the baby's supply line.",
};

const REFERENCE_ISO = "2026-06-26";

export function FetusViewer() {
  const [todayISO, setTodayISO] = useState(REFERENCE_ISO);
  const [day, setDay] = useState<number>(74);
  const [selected, setSelected] = useState<SystemId | null>("heart");
  const [followToday, setFollowToday] = useState(true);

  // On mount, sync to live IST today.
  useEffect(() => {
    const iso = istTodayISO();
    setTodayISO(iso);
    const s = getPregnancyState(iso);
    setDay(s.dayOfPregnancy);
  }, []);

  const todayDay = useMemo(
    () => getPregnancyState(todayISO).dayOfPregnancy,
    [todayISO],
  );

  const morph = useMemo(() => getMorphology(day), [day]);

  // Keep the selection valid — if the chosen system hasn't formed yet, fall back.
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

  const active = selected;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      {/* Canvas */}
      <div className="glass relative h-[460px] overflow-hidden rounded-4xl sm:h-[560px]">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [1.8, 1.0, 2.8], fov: 44 }}>
          <Suspense fallback={null}>
            {/* Warm deep amniotic fluid atmosphere */}
            <color attach="background" args={["#110504"]} />
            <fog attach="fog" args={["#200906", 6, 11]} />

            {/* Ambient — soft warm fill, simulates amniotic fluid scatter */}
            <ambientLight intensity={0.32} color="#FFEAE0" />

            {/* Key light — warm womb glow from upper front */}
            <directionalLight
              position={[2.5, 4.5, 3.5]}
              intensity={1.6}
              color="#FFD0B0"
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-camera-near={0.5}
              shadow-camera-far={12}
            />

            {/* Rim light — deep red/orange from behind, creates organic SSS rim glow */}
            <spotLight
              position={[-3.0, 2.5, -2.5]}
              angle={0.55}
              penumbra={0.9}
              intensity={3.2}
              color="#FF7040"
            />

            {/* Fill light — cool pinkish from the right to balance warm key */}
            <pointLight position={[2.5, -0.5, 1.5]} intensity={0.9} color="#FFB898" />

            {/* Under light — simulates translucent skin glow from below */}
            <pointLight position={[0, -2.0, 1.0]} intensity={0.7} color="#E8603A" />

            {/* Top highlight */}
            <pointLight position={[0, 3.5, 1.0]} intensity={0.45} color="#FFE8DC" />

            <FetusModel morph={morph} selected={selected} onSelect={setSelected} />
            <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={6} blur={2.8} far={3.5} />
            <OrbitControls enablePan enableZoom minDistance={1.5} maxDistance={7} target={[0, 0.15, 0.1]} />
          </Suspense>
        </Canvas>

        {/* Stage overlay */}
        <div className="pointer-events-none absolute left-4 top-4 space-y-1">
          <div className="rounded-full glass px-3 py-1 text-xs font-medium text-ink">
            Day {morph.day} · {weekDayLabel(morph.day)} · {morph.stageLabel}
          </div>
          <div className="rounded-full glass px-3 py-1 text-[11px] text-muted">
            {formatLength(morph.lengthMm)} · {formatWeight(morph.weightG)}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full glass px-3 py-1 text-[11px] text-muted">
          drag to rotate · scroll to zoom
        </div>
      </div>

      {/* Controls + info */}
      <div className="space-y-4">
        {/* DAY SLIDER — drives the whole model */}
        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-plum">
              Day of growth
            </h3>
            <span className="font-display text-xl font-semibold text-terracotta">
              {morph.day}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={280}
            step={1}
            value={day}
            onChange={(e) => setDayClamped(Number(e.target.value))}
            className="mt-3 w-full accent-[color:rgb(var(--terracotta))]"
            aria-label="Day of pregnancy"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <button onClick={() => setDayClamped(day - 7)} className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">−7d</button>
            <button onClick={() => setDayClamped(day + 7)} className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">+7d</button>
            <button
              onClick={() => { setFollowToday(true); setDay(todayDay); }}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                followToday ? "bg-terracotta text-white" : "bg-linen text-muted hover:text-ink"
              }`}
            >
              Today ({todayDay})
            </button>
            <button onClick={() => setDayClamped(280)} className="rounded-full bg-linen px-3 py-1 text-xs text-muted hover:text-ink">Birth</button>
          </div>
          <p className="mt-2 text-xs text-muted">
            The shape, proportions and visible organs all change with the day —
            an artistic educational model, not a medical scan.
          </p>
        </div>

        {/* SYSTEM SELECTOR */}
        <div className="glass rounded-4xl p-5">
          <h3 className="font-display text-lg font-semibold text-plum">Body systems</h3>
          <p className="mt-1 text-sm text-muted">
            Tap a system to highlight it. Greyed-out systems haven&apos;t formed yet at day {morph.day}.
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
            <h4 className="font-display text-xl font-semibold text-terracotta">
              {LABELS[active]}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{BLURBS[active]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
