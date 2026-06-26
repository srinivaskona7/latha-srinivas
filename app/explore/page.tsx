"use client";

import dynamic from "next/dynamic";
import { SectionTitle, GlassCard } from "@/components/ui";

// Lazy-load the 3D viewer client-side only — keeps Three.js out of initial load.
const FetusViewer = dynamic(
  () => import("@/components/three/FetusViewer").then((m) => m.FetusViewer),
  {
    ssr: false,
    loading: () => (
      <div className="glass grid h-[460px] place-items-center rounded-4xl sm:h-[560px]">
        <div className="flex flex-col items-center gap-3 text-muted">
          <span className="animate-floaty text-4xl" aria-hidden>◉</span>
          <span className="text-sm">Preparing your 3D baby…</span>
        </div>
      </div>
    ),
  },
);

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <SectionTitle
          eyebrow="Interactive"
          title="Explore your baby in 3D"
        />
        <p className="mt-2 max-w-2xl text-muted">
          A gentle, stylised view of how your baby&apos;s body systems take shape.
          Rotate, zoom, and tap any system to learn how it develops. This is an
          artistic educational model, not a medical scan.
        </p>
      </GlassCard>

      <FetusViewer />
    </div>
  );
}
