"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import type { SystemId } from "@/lib/morphology";
import type { Morphology } from "@/lib/morphology";

export type { SystemId };

const ACCENT: Record<SystemId, string> = {
  skeleton: "#FAF5EE",
  brain: "#FF9ebb",
  heart: "#FF4D4D",
  lungs: "#FF8E7E",
  digestive: "#FFB04C",
  muscles: "#D64C3B",
  placenta: "#A63A2B",
  umbilicalCord: "#C68E84",
};

const INTERNAL: SystemId[] = ["brain", "heart", "lungs", "digestive"];

type Vec = [number, number, number];

/** A limb segment or connector. */
function Bone({
  start,
  end,
  radius,
  color,
  opacity = 1,
  emissive = "#000000",
  emissiveIntensity = 0,
  transmission = 0,
  thickness = 0,
  ior = 1.38,
}: {
  start: Vec;
  end: Vec;
  radius: number;
  color: string;
  opacity?: number;
  emissive?: string;
  emissiveIntensity?: number;
  transmission?: number;
  thickness?: number;
  ior?: number;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const dir = new THREE.Vector3().subVectors(e, s);
    const len = Math.max(0.01, dir.length() - radius * 2);
    const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { position: mid, quaternion: q, length: len };
  }, [start, end, radius]);

  return (
    <mesh position={position} quaternion={quaternion} castShadow receiveShadow>
      <capsuleGeometry args={[radius, length, 16, 24]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.52}
        metalness={0.0}
        transparent={opacity < 1}
        opacity={opacity}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        transmission={transmission}
        thickness={thickness}
        ior={ior}
        sheen={0.8}
        sheenColor="#FFE3D4"
        clearcoat={0.05}
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
}

const v = (a: Vec, b: Vec, t: number): Vec => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

export function FetusModel({
  morph,
  selected,
  onSelect,
}: {
  morph: Morphology;
  selected: SystemId | null;
  onSelect: (id: SystemId) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduce) group.current.rotation.y += delta * 0.1;
    const t = state.clock.elapsedTime;
    group.current.position.y = -0.15 + (reduce ? 0 : Math.sin(t * 0.4) * 0.015);
  });

  const { headRatio, limbExtend, tail, chub, curl, hasFeatures, hasEyeSpots, displayScale } =
    morph;

  const seeInside = selected !== null && INTERNAL.includes(selected);
  
  // Real skin parameters to look natural (not like shiny glass balls)
  const isEarly = morph.week < 11;
  const isMid = morph.week >= 11 && morph.week < 24;
  const skinOpacity = seeInside ? 0.35 : morph.baseSkinOpacity;
  
  // Drastically reduced transmission to remove glassy balloon appearance
  const baseTransmission = seeInside ? 0.85 : isEarly ? 0.32 : isMid ? 0.06 : 0.0;
  const skinRoughness = isEarly ? 0.44 : isMid ? 0.52 : 0.56;
  const skinClearcoat = isEarly ? 0.12 : 0.02;

  const skinColor =
    selected === "muscles"
      ? "#C44C36"
      : selected === "skeleton"
        ? "#F2E2D2"
        : isEarly
          ? "#FFB09C"  // embryonic skin
          : isMid
            ? "#FFBEA8"  // warm peach pink
            : "#F3BEA2"; // healthy baby skin

  const skinEmissive =
    selected === "muscles" || selected === "skeleton" ? ACCENT[selected] : "#421812";
  const skinEmissiveI =
    selected === "muscles" ? 0.3 : selected === "skeleton" ? 0.15 : isEarly ? 0.15 : 0.05;

  const skinMat = {
    color: skinColor,
    opacity: skinOpacity,
    emissive: skinEmissive,
    emissiveIntensity: skinEmissiveI,
    transmission: baseTransmission,
    thickness: isEarly ? 0.4 : isMid ? 0.75 : 1.0,
    ior: 1.36,
    roughness: skinRoughness,
    clearcoat: skinClearcoat,
    clearcoatRoughness: 0.25,
    sheen: 0.85,
    sheenColor: "#FFE3D4",
  };

  const skinSolid = {
    color: skinColor,
    roughness: skinRoughness + 0.05,
    metalness: 0.0,
    emissive: skinEmissive,
    emissiveIntensity: skinEmissiveI,
  };

  const stop = (fn: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    fn();
  };

  // ---- Proportions & Positional Interpolations ----
  const headR = 0.42 + headRatio * 0.32;
  const headY = 0.44 + headR * 0.52;
  const bodyRadius = 0.26 + chub * 0.16;
  const bellyR = 0.28 + chub * 0.2;
  const limbRadius = 0.07 + limbExtend * 0.065 + chub * 0.028;

  // Arm joints naturally curled near chest/face
  const armSet = (s: number) => {
    const shoulder: Vec = [s * 0.24, 0.3, 0.12];
    const elbowBud: Vec = [s * 0.3, 0.22, 0.2];
    const elbowFull: Vec = [s * 0.4, 0.04, 0.38];
    const handBud: Vec = [s * 0.3, 0.18, 0.26];
    const handFull: Vec = [s * 0.14, 0.32, 0.48]; // hands near mouth
    return {
      shoulder,
      elbow: v(elbowBud, elbowFull, limbExtend),
      hand: v(handBud, handFull, limbExtend),
    };
  };

  // Leg joints naturally curled up
  const legSet = (s: number) => {
    const hip: Vec = [s * 0.16, -0.28, 0.08];
    const kneeBud: Vec = [s * 0.22, -0.22, 0.2];
    const kneeFull: Vec = [s * 0.38, -0.1, 0.46];
    const footBud: Vec = [s * 0.22, -0.26, 0.26];
    const footFull: Vec = [s * 0.16, 0.18, 0.48];
    return {
      hip,
      knee: v(kneeBud, kneeFull, limbExtend),
      foot: v(footBud, footFull, limbExtend),
    };
  };

  return (
    <group ref={group} scale={displayScale} position={[0, -0.1, 0]}>
      <group scale={curl < 0.8 ? 1.05 : 1}>
        
        {/* ---- HEAD (Organic Pear-shape, tilted forward) ---- */}
        <group position={[0, headY, 0.12]} rotation={[0.28, 0, 0]} scale={[0.88, 1.05, 0.96]}>
          <mesh onClick={stop(() => onSelect("brain"))} castShadow>
            <sphereGeometry args={[headR, 48, 48]} />
            <meshPhysicalMaterial {...skinMat} />
          </mesh>

          {/* Sub-surface eye spots (visible under early translucent skin) */}
          {hasEyeSpots && !hasFeatures && (
            [-1, 1].map((s) => (
              <mesh
                key={`subeye-${s}`}
                position={[s * headR * 0.34, headR * 0.08, headR * 0.72]}
              >
                <sphereGeometry args={[headR * 0.15, 16, 16]} />
                <meshStandardMaterial color="#3a1c16" roughness={0.9} />
              </mesh>
            ))
          )}

          {/* Brow Ridge (Month 3+) */}
          {hasFeatures && (
            <mesh position={[0, headR * 0.18, headR * 0.86]} scale={[1, 0.3, 0.3]}>
              <sphereGeometry args={[headR * 0.45, 16, 16]} />
              <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
            </mesh>
          )}

          {/* Eyelids & Closed Eyes (Month 3+) */}
          {hasFeatures && (
            [-1, 1].map((s) => (
              <group key={`eye-${s}`} position={[s * headR * 0.3, headR * 0.08, headR * 0.94]}>
                {/* Upper closed eyelid fold */}
                <mesh scale={[1, 0.4, 0.35]} rotation={[0, 0, -s * 0.08]}>
                  <sphereGeometry args={[headR * 0.12, 16, 16]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              </group>
            ))
          )}

          {/* Organic Face Features (positioned outside the sphere so they show!) */}
          {hasFeatures && (
            <>
              {/* Nose Bridge and Tip */}
              <group position={[0, -headR * 0.08, headR * 1.01]} scale={[0.8, 1.0, 0.95]} rotation={[0.08, 0, 0]}>
                <mesh>
                  <capsuleGeometry args={[headR * 0.09, headR * 0.14, 8, 12]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              </group>
              {/* Cheeks */}
              {[-1, 1].map((s) => (
                <mesh key={`cheek-${s}`} position={[s * headR * 0.36, -headR * 0.16, headR * 0.9]}>
                  <sphereGeometry args={[headR * 0.22, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              ))}
              {/* Ears */}
              {[-1, 1].map((s) => (
                <mesh key={`ear-${s}`} position={[s * headR * 0.86, -headR * 0.08, 0.02]} scale={[0.35, 0.85, 0.65]} rotation={[0.08, 0, -s * 0.15]}>
                  <sphereGeometry args={[headR * 0.26, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              ))}
              {/* Mouth & Lips (upper and lower lips) */}
              <group position={[0, -headR * 0.22, headR * 0.96]} scale={[1.1, 0.3, 0.35]}>
                <mesh position={[0, 0.03, 0]}>
                  <capsuleGeometry args={[headR * 0.05, headR * 0.14, 4, 8]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
                <mesh position={[0, -0.03, 0]}>
                  <capsuleGeometry args={[headR * 0.045, headR * 0.12, 4, 8]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              </group>
              {/* Chin */}
              <mesh position={[0, -headR * 0.34, headR * 0.88]}>
                <sphereGeometry args={[headR * 0.14, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
            </>
          )}

          {/* Brain (revealed) */}
          <mesh visible={selected === "brain"} position={[0, headR * 0.16, -0.04]} scale={[0.88, 0.94, 0.88]}>
            <sphereGeometry args={[headR * 0.76, 40, 40]} />
            <meshStandardMaterial color={ACCENT.brain} emissive={ACCENT.brain} emissiveIntensity={0.8} roughness={0.35} />
          </mesh>
        </group>

        {/* ---- ORGANIC SMOOTH TORSO (Overlapping Capsules instead of spheres) ---- */}
        <group onClick={stop(() => onSelect("muscles"))}>
          {/* Neck bridge */}
          <Bone
            start={[0, 0.42, 0.1]}
            end={[0, 0.3, 0.12]}
            radius={bodyRadius * 0.72}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
          {/* Upper Chest */}
          <Bone
            start={[0, 0.32, 0.12]}
            end={[0, 0.15, 0.16]}
            radius={bodyRadius * 0.98}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
          {/* Mid Abdomen (Belly) */}
          <Bone
            start={[0, 0.18, 0.16]}
            end={[0, -0.06, 0.2]}
            radius={bellyR * 1.02}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
          {/* Lower Abdomen */}
          <Bone
            start={[0, -0.04, 0.2]}
            end={[0, -0.22, 0.14]}
            radius={bellyR * 0.95}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
          {/* Pelvis */}
          <Bone
            start={[0, -0.18, 0.14]}
            end={[0, -0.34, 0.04]}
            radius={bodyRadius * 0.86}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
        </group>

        {/* ---- EMBRYONIC TAIL (regresses by ~wk8) ---- */}
        {tail > 0.02 && (
          <Bone
            start={[0, -0.42, -0.04]}
            end={[0, -0.45 - tail * 0.26, -0.12 - tail * 0.1]}
            radius={0.05 * tail + 0.02}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.3 : 0.6}
          />
        )}

        {/* ---- ARMS & DEVELOPING FINGERS ---- */}
        {[-1, 1].map((s) => {
          const a = armSet(s);
          return (
            <group key={`arm${s}`} onClick={stop(() => onSelect("muscles"))}>
              {/* Shoulder joint */}
              <mesh position={a.shoulder}>
                <sphereGeometry args={[limbRadius * 1.08, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={a.shoulder} end={a.elbow} radius={limbRadius} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              {/* Elbow joint */}
              <mesh position={a.elbow}>
                <sphereGeometry args={[limbRadius * 0.96, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={a.elbow} end={a.hand} radius={limbRadius * 0.82} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              
              {/* Hand Palm */}
              <mesh position={a.hand} scale={[0.8, 0.46, 1.1]}>
                <sphereGeometry args={[limbRadius * 1.0, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>

              {/* Individual fingers (Month 3+) */}
              {morph.hasDigits && [-2, -1, 0, 1, 2].map((fi) => {
                const fingerPos: Vec = [
                  a.hand[0] + fi * limbRadius * 0.2 * s,
                  a.hand[1] + (2 - Math.abs(fi)) * limbRadius * 0.05,
                  a.hand[2] + limbRadius * 0.32
                ];
                return (
                  <mesh key={`finger-${fi}`} position={fingerPos} scale={[0.85, 0.85, 1.15]} rotation={[0.25, 0, 0]}>
                    <capsuleGeometry args={[limbRadius * 0.15, limbRadius * 0.28, 4, 8]} />
                    <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                  </mesh>
                );
              })}
            </group>
          );
        })}

        {/* ---- LEGS & DEVELOPING TOES ---- */}
        {[-1, 1].map((s) => {
          const l = legSet(s);
          return (
            <group key={`leg${s}`} onClick={stop(() => onSelect("muscles"))}>
              {/* Hip joint */}
              <mesh position={l.hip}>
                <sphereGeometry args={[limbRadius * 1.2, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={l.hip} end={l.knee} radius={limbRadius * 1.05} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              {/* Knee joint */}
              <mesh position={l.knee}>
                <sphereGeometry args={[limbRadius * 1.0, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={l.knee} end={l.foot} radius={limbRadius * 0.9} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              
              {/* Foot arch */}
              <mesh position={l.foot} scale={[1, 0.46, 1.35]} rotation={[0.12, 0, 0]}>
                <sphereGeometry args={[limbRadius * 1.05, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>

              {/* Individual toes */}
              {morph.hasDigits && [-2, -1, 0, 1, 2].map((ti) => {
                const toePos: Vec = [
                  l.foot[0] + ti * limbRadius * 0.18 * s,
                  l.foot[1] - limbRadius * 0.06,
                  l.foot[2] + limbRadius * 0.65
                ];
                return (
                  <mesh key={`toe-${ti}`} position={toePos} scale={[0.85, 0.85, 0.85]}>
                    <sphereGeometry args={[limbRadius * 0.15, 8, 8]} />
                    <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                  </mesh>
                );
              })}
            </group>
          );
        })}

        {/* ---- INTERNAL ORGANS ---- */}
        {morph.present.heart && (
          <mesh
            position={[0.07, 0.22, 0.18]}
            scale={selected === "heart" ? 1.35 : 1}
            onClick={stop(() => onSelect("heart"))}
          >
            <sphereGeometry args={[0.1, 28, 28]} />
            <meshStandardMaterial color={ACCENT.heart} emissive={ACCENT.heart} emissiveIntensity={selected === "heart" ? 1 : 0.3} roughness={0.35} />
          </mesh>
        )}

        {morph.present.lungs && (
          <group onClick={stop(() => onSelect("lungs"))}>
            {[-0.11, 0.11].map((x) => (
              <mesh key={x} position={[x, 0.26, 0.16]} scale={[1, 1.3, 0.9]}>
                <sphereGeometry args={[0.1, 24, 24]} />
                <meshStandardMaterial color={ACCENT.lungs} emissive={ACCENT.lungs} emissiveIntensity={selected === "lungs" ? 0.8 : 0.18} roughness={0.45} />
              </mesh>
            ))}
          </group>
        )}

        {morph.present.digestive && (
          <mesh position={[0, -0.04, 0.2]} onClick={stop(() => onSelect("digestive"))}>
            <torusKnotGeometry args={[0.11, 0.038, 64, 8]} />
            <meshStandardMaterial color={ACCENT.digestive} emissive={ACCENT.digestive} emissiveIntensity={selected === "digestive" ? 0.8 : 0.2} roughness={0.4} />
          </mesh>
        )}

        {morph.present.skeleton && (
          <group visible={selected === "skeleton"}>
            {[0.32, 0.2, 0.08, -0.04, -0.16].map((y, i) => (
              <mesh key={i} position={[0, y, 0.1 + i * 0.02]} rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[(bodyRadius + 0.01) - i * 0.018, 0.022, 12, 28]} />
                <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.6} />
              </mesh>
            ))}
          </group>
        )}
      </group>

      {/* ---- ORGANIC DEEP-RED PLACENTA & UMBILICAL CORD ---- */}
      {morph.present.placenta && (
        <mesh
          position={[1.05, 0.24, -0.08]}
          rotation={[0.15, 0, Math.PI / 2.4]}
          onClick={stop(() => onSelect("placenta"))}
          castShadow
        >
          <cylinderGeometry args={[0.42 + chub * 0.1, 0.42 + chub * 0.1, 0.14, 40]} />
          <meshStandardMaterial
            color={selected === "placenta" ? ACCENT.placenta : "#9C3A2B"}
            emissive={selected === "placenta" ? ACCENT.placenta : "#2A0E0A"}
            emissiveIntensity={selected === "placenta" ? 0.6 : 0.15}
            roughness={0.82}
            metalness={0.0}
          />
        </mesh>
      )}

      {morph.present.umbilicalCord && (
        <Cord
          highlighted={selected === "umbilicalCord"}
          bellyPos={[0, -0.05, 0.26 + chub * 0.05]}
          onClick={stop(() => onSelect("umbilicalCord"))}
        />
      )}
    </group>
  );
}

function Cord({
  highlighted,
  bellyPos,
  onClick,
}: {
  highlighted: boolean;
  bellyPos: Vec;
  onClick: (e: { stopPropagation: () => void }) => void;
}) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const start = new THREE.Vector3(...bellyPos);
    const end = new THREE.Vector3(0.98, 0.22, -0.04);
    const segs = 60;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const base = new THREE.Vector3().lerpVectors(start, end, u);
      base.y += 0.07 * Math.sin(u * Math.PI * 6);
      base.z += 0.07 * Math.cos(u * Math.PI * 6);
      pts.push(base);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, [bellyPos]);

  return (
    <mesh onClick={onClick}>
      <tubeGeometry args={[curve, 80, highlighted ? 0.055 : 0.038, 12, false]} />
      <meshPhysicalMaterial
        color={highlighted ? ACCENT.umbilicalCord : "#D2988E"}
        emissive={highlighted ? ACCENT.umbilicalCord : "#5A1E14"}
        emissiveIntensity={highlighted ? 0.7 : 0.15}
        transmission={0.28}
        thickness={0.4}
        ior={1.34}
        roughness={0.48}
        clearcoat={0.1}
      />
    </mesh>
  );
}
