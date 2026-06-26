"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useState } from "react";
import { FetusModel, type SystemId } from "./FetusModel";

const SYSTEMS: { id: SystemId; label: string; blurb: string }[] = [
  {
    id: "brain",
    label: "Brain",
    blurb:
      "The brain grows rapidly throughout pregnancy, forming billions of neurons and folding into its characteristic shape. Early on the neural tube closes; later, regions specialise for movement, senses and, eventually, memory.",
  },
  {
    id: "heart",
    label: "Heart",
    blurb:
      "One of the first organs to function. It begins as a simple tube that loops and divides into four chambers, beating steadily to circulate blood and nourishment around the growing body.",
  },
  {
    id: "lungs",
    label: "Lungs",
    blurb:
      "The lungs form branching airways and, later, tiny air sacs. They mature late in pregnancy, producing surfactant that will let them expand with that very first breath at birth.",
  },
  {
    id: "skeleton",
    label: "Skeleton",
    blurb:
      "Soft cartilage gradually hardens into bone (ossification). The skull stays flexible with soft spots (fontanelles) to ease birth and allow the brain to keep growing.",
  },
  {
    id: "muscles",
    label: "Muscles",
    blurb:
      "Muscle tissue strengthens over time, powering the kicks, stretches and hiccups that parents come to feel. Practice movements help joints and limbs develop.",
  },
  {
    id: "digestive",
    label: "Digestive tract",
    blurb:
      "The stomach, intestines and liver take shape and begin practising. The baby swallows amniotic fluid, and the intestines coil and mature ready to absorb nutrients after birth.",
  },
  {
    id: "placenta",
    label: "Placenta",
    blurb:
      "The baby's lifeline organ. It exchanges oxygen, nutrients and waste between parent and baby, and produces hormones that sustain the pregnancy.",
  },
  {
    id: "umbilicalCord",
    label: "Umbilical cord",
    blurb:
      "A flexible cord of two arteries and one vein, carrying nourishment and oxygen from the placenta to the baby and returning waste — the baby's supply line.",
  },
];

export function FetusViewer({ initialScale = 1 }: { initialScale?: number }) {
  const [selected, setSelected] = useState<SystemId | null>("heart");
  const [growth, setGrowth] = useState(initialScale);

  const active = SYSTEMS.find((s) => s.id === selected) ?? null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      {/* Canvas */}
      <div className="glass relative h-[460px] overflow-hidden rounded-4xl sm:h-[560px]">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [2.4, 1.6, 3.4], fov: 42 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[4, 6, 4]}
              intensity={1.4}
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#E07A5F" />
            <FetusModel
              selected={selected}
              scale={0.9 * growth}
              onSelect={setSelected}
            />
            <ContactShadows
              position={[0, -1.1, 0]}
              opacity={0.35}
              scale={6}
              blur={2.4}
              far={3}
            />
            <Environment preset="sunset" />
            <OrbitControls
              enablePan
              enableZoom
              minDistance={2}
              maxDistance={7}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>

        <div className="pointer-events-none absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs text-muted">
          Drag to rotate · scroll to zoom · two-finger to pan
        </div>
      </div>

      {/* Controls + info */}
      <div className="space-y-4">
        <div className="glass rounded-4xl p-5">
          <h3 className="font-display text-lg font-semibold text-plum">
            Body systems
          </h3>
          <p className="mt-1 text-sm text-muted">
            Tap a system to highlight it and read how it develops.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SYSTEMS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  selected === s.id
                    ? "bg-terracotta text-white"
                    : "bg-linen text-muted hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {active && (
          <div className="glass rounded-4xl p-5">
            <h4 className="font-display text-xl font-semibold text-terracotta">
              {active.label}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {active.blurb}
            </p>
          </div>
        )}

        <div className="glass rounded-4xl p-5">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-ink">Growth progression</h4>
            <span className="text-xs text-muted">
              {Math.round(growth * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.01}
            value={growth}
            onChange={(e) => setGrowth(Number(e.target.value))}
            className="mt-3 w-full accent-[color:rgb(var(--terracotta))]"
            aria-label="Growth progression"
          />
          <p className="mt-2 text-xs text-muted">
            Slide to see the overall form scale across the pregnancy. This is an
            artistic, educational representation — not a medical scan.
          </p>
        </div>
      </div>
    </div>
  );
}
