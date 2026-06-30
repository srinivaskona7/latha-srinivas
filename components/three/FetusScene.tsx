"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { FetusModel, type SystemId } from "./FetusModel";
import type { Morphology } from "@/lib/morphology";

/**
 * AmnioticSac — a soft, translucent enclosing bubble so the baby reads as being
 * *inside* the womb rather than floating in void. Purely procedural (no assets),
 * so it works in the fully-offline static build.
 */
function AmnioticSac({ scale }: { scale: number }) {
  const r = 1.7 * scale;
  return (
    <mesh scale={[r, r * 1.12, r]} position={[0, 0.1, 0]}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshPhysicalMaterial
        color="#7A1E12"
        roughness={0.35}
        transmission={0.92}
        thickness={1.4}
        ior={1.34}
        transparent
        opacity={0.16}
        side={2 /* THREE.DoubleSide */}
        emissive="#3A0B06"
        emissiveIntensity={0.25}
        depthWrite={false}
      />
    </mesh>
  );
}

/**
 * FetusScene — interactive WebGL view of the procedural baby model.
 * Rotate (drag), zoom (pinch/scroll); tap any organ to select it. Lighting is a
 * three-point rig tuned for warm, soft, womb-like skin without any external HDR.
 */
export function FetusScene({
  morph,
  selected,
  onSelect,
  autoRotate = true,
}: {
  morph: Morphology;
  selected: SystemId | null;
  onSelect: (id: SystemId) => void;
  autoRotate?: boolean;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.25, 3.2], fov: 42, near: 0.1, far: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Warm womb ambience */}
      <color attach="background" args={["#1a0604"]} />
      <fog attach="fog" args={["#1a0604", 4.5, 9]} />

      {/* Three-point rig: warm key, cool fill, soft rim */}
      <ambientLight intensity={0.45} color="#FFE3D0" />
      <directionalLight
        position={[2.4, 3.2, 2.6]}
        intensity={2.1}
        color="#FFD9BC"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
      />
      <directionalLight position={[-2.8, 0.6, -1.5]} intensity={0.7} color="#FF8A6B" />
      <pointLight position={[0, -1.8, 2.0]} intensity={0.6} color="#FFB48C" />
      {/* Rim from behind to separate the baby from the dark womb */}
      <spotLight position={[0, 2.2, -3]} angle={0.9} penumbra={1} intensity={1.4} color="#FFCBA8" />

      <Suspense fallback={null}>
        <AmnioticSac scale={morph.displayScale} />
        <FetusModel morph={morph} selected={selected} onSelect={onSelect} spin={false} />
        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.5}
          scale={6}
          blur={2.6}
          far={3}
          color="#1a0402"
        />
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minDistance={1.8}
        maxDistance={6}
        minPolarAngle={0.4}
        maxPolarAngle={Math.PI - 0.4}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
