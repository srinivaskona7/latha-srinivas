"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import type { SystemId } from "@/lib/morphology";
import type { Morphology } from "@/lib/morphology";

export type { SystemId };

const ACCENT: Record<SystemId, string> = {
  skeleton: "#F8F1E5",
  brain: "#FFA8CD",
  heart: "#FF5E5B",
  lungs: "#FFA28E",
  digestive: "#FFBF69",
  muscles: "#E05A47",
  placenta: "#8EA885",
  umbilicalCord: "#A9C295",
};

const INTERNAL: SystemId[] = ["brain", "heart", "lungs", "digestive"];

type Vec = [number, number, number];

/** A limb segment capsule or joint connector. */
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
    const len = Math.max(0.01, dir.length() - radius);
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
        roughness={0.48}
        metalness={0.02}
        transparent={opacity < 1}
        opacity={opacity}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        transmission={transmission}
        thickness={thickness}
        ior={ior}
        sheen={0.6}
        sheenColor="#FFD3C4"
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
    if (!reduce) group.current.rotation.y += delta * 0.15;
    const t = state.clock.elapsedTime;
    group.current.position.y = -0.15 + (reduce ? 0 : Math.sin(t * 0.6) * 0.025);
  });

  const { headRatio, limbExtend, tail, chub, curl, hasFeatures, hasEyeSpots, displayScale } =
    morph;

  const seeInside = selected !== null && INTERNAL.includes(selected);
  
  // Early embryo/fetus is highly translucent and gelatinous; later becomes more opaque.
  const isEarly = morph.week < 11;
  const skinOpacity = seeInside ? 0.32 : morph.baseSkinOpacity;
  const baseTransmission = seeInside ? 0.85 : isEarly ? 0.68 : 0.28;
  const skinRoughness = isEarly ? 0.32 : 0.46;
  const skinClearcoat = isEarly ? 0.35 : 0.15;

  const skinColor =
    selected === "muscles"
      ? "#D86B52"
      : selected === "skeleton"
        ? "#F2E2D2"
        : "#EFA98E";

  const skinEmissive =
    selected === "muscles" || selected === "skeleton" ? ACCENT[selected] : "#A85D4D";
  const skinEmissiveI =
    selected === "muscles" ? 0.35 : selected === "skeleton" ? 0.18 : 0.08;

  const skinMat = {
    color: skinColor,
    opacity: skinOpacity,
    emissive: skinEmissive,
    emissiveIntensity: skinEmissiveI,
    transmission: baseTransmission,
    thickness: isEarly ? 0.4 : 0.8,
    ior: 1.38,
    roughness: skinRoughness,
    clearcoat: skinClearcoat,
    clearcoatRoughness: 0.2,
    sheen: 0.8,
    sheenColor: "#FFD3C4",
  };

  const skinSolid = {
    color: skinColor,
    roughness: skinRoughness + 0.05,
    metalness: 0.02,
  };

  const stop = (fn: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    fn();
  };

  // ---- Proportions & Positional Interpolations ----
  const headR = 0.42 + headRatio * 0.32;
  const headY = 0.46 + headR * 0.5;
  const bodyRadius = 0.28 + chub * 0.15;
  const bellyR = 0.3 + chub * 0.18;
  const limbRadius = 0.075 + limbExtend * 0.06 + chub * 0.025;

  // Arm joints naturally tucked near chest/face
  const armSet = (s: number) => {
    const shoulder: Vec = [s * 0.26, 0.34, 0.16];
    const elbowBud: Vec = [s * 0.32, 0.26, 0.24];
    const elbowFull: Vec = [s * 0.44, 0.06, 0.44];
    const handBud: Vec = [s * 0.32, 0.22, 0.3];
    const handFull: Vec = [s * 0.16, 0.36, 0.54]; // hands near face
    return {
      shoulder,
      elbow: v(elbowBud, elbowFull, limbExtend),
      hand: v(handBud, handFull, limbExtend),
    };
  };

  // Leg joints naturally curled up
  const legSet = (s: number) => {
    const hip: Vec = [s * 0.18, -0.32, 0.12];
    const kneeBud: Vec = [s * 0.24, -0.26, 0.24];
    const kneeFull: Vec = [s * 0.42, -0.14, 0.52];
    const footBud: Vec = [s * 0.24, -0.3, 0.3];
    const footFull: Vec = [s * 0.2, 0.18, 0.54]; // feet curled up
    return {
      hip,
      knee: v(kneeBud, kneeFull, limbExtend),
      foot: v(footBud, footFull, limbExtend),
    };
  };

  return (
    <group ref={group} scale={displayScale} position={[0, -0.15, 0]}>
      <group scale={curl < 0.8 ? 1.05 : 1}>
        
        {/* ---- HEAD (Organic Egg/Pear-shape) ---- */}
        <group position={[0, headY, 0.16]} rotation={[0.3, 0, 0]} scale={[0.9, 1.06, 0.95]}>
          <mesh onClick={stop(() => onSelect("brain"))} castShadow>
            <sphereGeometry args={[headR, 48, 48]} />
            <meshPhysicalMaterial {...skinMat} />
          </mesh>

          {/* Sub-surface eyes (shine through early translucent skin) */}
          {hasEyeSpots && !hasFeatures && (
            [-1, 1].map((s) => (
              <mesh
                key={`subeye-${s}`}
                position={[s * headR * 0.34, headR * 0.1, headR * 0.72]}
              >
                <sphereGeometry args={[headR * 0.16, 16, 16]} />
                <meshStandardMaterial color="#402018" roughness={0.9} />
              </mesh>
            ))
          )}

          {/* Eyelids & closed eyes (formed later) */}
          {hasFeatures && (
            [-1, 1].map((s) => (
              <group key={`eye-${s}`} position={[s * headR * 0.36, headR * 0.08, headR * 0.8]}>
                {/* Closed Eyelid Crease */}
                <mesh scale={[1, 0.4, 0.3]}>
                  <sphereGeometry args={[headR * 0.15, 16, 16]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              </group>
            ))
          )}

          {/* Organic Face Features */}
          {hasFeatures && (
            <>
              {/* Nose */}
              <mesh position={[0, -headR * 0.06, headR * 0.94]} scale={[0.8, 1, 1]}>
                <sphereGeometry args={[headR * 0.12, 20, 20]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              {/* Cheeks */}
              {[-1, 1].map((s) => (
                <mesh key={`cheek-${s}`} position={[s * headR * 0.36, -headR * 0.18, headR * 0.74]}>
                  <sphereGeometry args={[headR * 0.24, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              ))}
              {/* Ears */}
              {[-1, 1].map((s) => (
                <mesh key={`ear-${s}`} position={[s * headR * 0.88, -headR * 0.08, 0.04]} scale={[0.4, 0.9, 0.7]} rotation={[0.1, 0, -s * 0.1]}>
                  <sphereGeometry args={[headR * 0.26, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
                </mesh>
              ))}
              {/* Mouth Cleft */}
              <mesh position={[0, -headR * 0.24, headR * 0.84]} scale={[1.2, 0.35, 0.4]}>
                <sphereGeometry args={[headR * 0.09, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              {/* Chin */}
              <mesh position={[0, -headR * 0.34, headR * 0.72]}>
                <sphereGeometry args={[headR * 0.14, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
            </>
          )}

          {/* Brain (revealed) */}
          <mesh visible={selected === "brain"} position={[0, headR * 0.16, -0.04]} scale={[0.9, 0.95, 0.9]}>
            <sphereGeometry args={[headR * 0.76, 40, 40]} />
            <meshStandardMaterial color={ACCENT.brain} emissive={ACCENT.brain} emissiveIntensity={0.8} roughness={0.35} />
          </mesh>
        </group>

        {/* ---- ORGANIC C-CURVE TORSO (Continuous segmented spine nodes) ---- */}
        <group onClick={stop(() => onSelect("muscles"))}>
          {Array.from({ length: 9 }).map((_, idx) => {
            const t = idx / 8;
            const y = 0.36 - t * 0.72;
            const z = 0.06 - Math.sin(t * Math.PI) * 0.16 * curl;
            const r = bodyRadius * (1 - t * 0.15);
            return (
              <mesh key={`spine-${idx}`} position={[0, y, z]} castShadow>
                <sphereGeometry args={[r, 32, 32]} />
                <meshPhysicalMaterial {...skinMat} />
              </mesh>
            );
          })}

          {/* Neck bridge */}
          <mesh position={[0, 0.38, 0.1]} castShadow>
            <sphereGeometry args={[bodyRadius * 0.85, 24, 24]} />
            <meshPhysicalMaterial {...skinMat} />
          </mesh>

          {/* Belly & Chest Overlay (provides organic front profile) */}
          <mesh position={[0, 0.04, 0.22 + chub * 0.05]} castShadow>
            <sphereGeometry args={[bellyR, 32, 32]} />
            <meshPhysicalMaterial {...skinMat} />
          </mesh>
        </group>

        {/* ---- EMBRYONIC TAIL (regresses by ~wk8) ---- */}
        {tail > 0.02 && (
          <Bone
            start={[0, -0.48, -0.05]}
            end={[0, -0.5 - tail * 0.3, -0.16 - tail * 0.15]}
            radius={0.06 * tail + 0.03}
            color={skinColor}
            opacity={skinOpacity}
            transmission={baseTransmission}
            thickness={isEarly ? 0.4 : 0.8}
          />
        )}

        {/* ---- ARMS & DEVELOPING DIGITS ---- */}
        {[-1, 1].map((s) => {
          const a = armSet(s);
          return (
            <group key={`arm${s}`} onClick={stop(() => onSelect("muscles"))}>
              {/* Joint: Shoulder */}
              <mesh position={a.shoulder}>
                <sphereGeometry args={[limbRadius * 1.1, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={a.shoulder} end={a.elbow} radius={limbRadius} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              {/* Joint: Elbow */}
              <mesh position={a.elbow}>
                <sphereGeometry args={[limbRadius * 1.0, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={a.elbow} end={a.hand} radius={limbRadius * 0.85} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              
              {/* Hand Palm (tapers to fingers or paddle) */}
              <mesh position={a.hand} scale={[0.8, 0.5, 1.1]}>
                <sphereGeometry args={[limbRadius * 1.05, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>

              {/* Individual developing fingers */}
              {morph.hasDigits && [-2, -1, 0, 1, 2].map((fi) => {
                const fingerPos: Vec = [
                  a.hand[0] + fi * limbRadius * 0.22 * s,
                  a.hand[1] + (2 - Math.abs(fi)) * limbRadius * 0.06,
                  a.hand[2] + limbRadius * 0.35
                ];
                return (
                  <mesh key={`finger-${fi}`} position={fingerPos} scale={[0.9, 0.9, 1.2]} rotation={[0.3, 0, 0]}>
                    <capsuleGeometry args={[limbRadius * 0.16, limbRadius * 0.3, 4, 8]} />
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
              {/* Joint: Hip */}
              <mesh position={l.hip}>
                <sphereGeometry args={[limbRadius * 1.25, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={l.hip} end={l.knee} radius={limbRadius * 1.1} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              {/* Joint: Knee */}
              <mesh position={l.knee}>
                <sphereGeometry args={[limbRadius * 1.05, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>
              <Bone start={l.knee} end={l.foot} radius={limbRadius * 0.95} color={skinColor} opacity={skinOpacity} transmission={baseTransmission} />
              
              {/* Foot Arch (curled) */}
              <mesh position={l.foot} scale={[1, 0.5, 1.4]} rotation={[0.15, 0, 0]}>
                <sphereGeometry args={[limbRadius * 1.1, 16, 16]} />
                <meshStandardMaterial {...skinSolid} transparent={skinOpacity < 1} opacity={skinOpacity} />
              </mesh>

              {/* Individual developing toes */}
              {morph.hasDigits && [-2, -1, 0, 1, 2].map((ti) => {
                const toePos: Vec = [
                  l.foot[0] + ti * limbRadius * 0.2 * s,
                  l.foot[1] - limbRadius * 0.08,
                  l.foot[2] + limbRadius * 0.7
                ];
                return (
                  <mesh key={`toe-${ti}`} position={toePos} scale={[0.9, 0.9, 0.9]}>
                    <sphereGeometry args={[limbRadius * 0.16, 8, 8]} />
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
            position={[0.08, 0.22, 0.2]}
            scale={selected === "heart" ? 1.35 : 1}
            onClick={stop(() => onSelect("heart"))}
          >
            <sphereGeometry args={[0.11, 28, 28]} />
            <meshStandardMaterial color={ACCENT.heart} emissive={ACCENT.heart} emissiveIntensity={selected === "heart" ? 1 : 0.3} roughness={0.35} />
          </mesh>
        )}

        {morph.present.lungs && (
          <group onClick={stop(() => onSelect("lungs"))}>
            {[-0.12, 0.12].map((x) => (
              <mesh key={x} position={[x, 0.28, 0.18]} scale={[1, 1.3, 0.9]}>
                <sphereGeometry args={[0.11, 24, 24]} />
                <meshStandardMaterial color={ACCENT.lungs} emissive={ACCENT.lungs} emissiveIntensity={selected === "lungs" ? 0.8 : 0.18} roughness={0.45} />
              </mesh>
            ))}
          </group>
        )}

        {morph.present.digestive && (
          <mesh position={[0, -0.02, 0.24]} onClick={stop(() => onSelect("digestive"))}>
            <torusKnotGeometry args={[0.12, 0.04, 64, 8]} />
            <meshStandardMaterial color={ACCENT.digestive} emissive={ACCENT.digestive} emissiveIntensity={selected === "digestive" ? 0.8 : 0.2} roughness={0.4} />
          </mesh>
        )}

        {morph.present.skeleton && (
          <group visible={selected === "skeleton"}>
            {[0.36, 0.24, 0.12, 0.0, -0.12].map((y, i) => (
              <mesh key={i} position={[0, y, 0.12 + i * 0.02]} rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[(bodyRadius + 0.02) - i * 0.02, 0.025, 12, 28]} />
                <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.6} />
              </mesh>
            ))}
          </group>
        )}
      </group>

      {/* ---- PLACENTA & helical UMBILICAL CORD ---- */}
      {morph.present.placenta && (
        <mesh
          position={[1.05, 0.26, -0.1]}
          rotation={[0.15, 0, Math.PI / 2.4]}
          onClick={stop(() => onSelect("placenta"))}
          castShadow
        >
          <cylinderGeometry args={[0.42 + chub * 0.1, 0.42 + chub * 0.1, 0.15, 40]} />
          <meshStandardMaterial color={selected === "placenta" ? ACCENT.placenta : "#93A585"} emissive={selected === "placenta" ? ACCENT.placenta : "#000000"} emissiveIntensity={selected === "placenta" ? 0.5 : 0} roughness={0.75} />
        </mesh>
      )}

      {morph.present.umbilicalCord && (
        <Cord highlighted={selected === "umbilicalCord"} onClick={stop(() => onSelect("umbilicalCord"))} />
      )}
    </group>
  );
}

function Cord({
  highlighted,
  onClick,
}: {
  highlighted: boolean;
  onClick: (e: { stopPropagation: () => void }) => void;
}) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const start = new THREE.Vector3(0.24, 0.02, 0.3);
    const end = new THREE.Vector3(0.98, 0.24, -0.06);
    const segs = 60;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const base = new THREE.Vector3().lerpVectors(start, end, u);
      base.y += 0.08 * Math.sin(u * Math.PI * 6);
      base.z += 0.08 * Math.cos(u * Math.PI * 6);
      pts.push(base);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);

  return (
    <mesh onClick={onClick}>
      <tubeGeometry args={[curve, 80, highlighted ? 0.06 : 0.042, 12, false]} />
      <meshStandardMaterial color={highlighted ? ACCENT.umbilicalCord : "#A8BCA2"} emissive={highlighted ? ACCENT.umbilicalCord : "#000000"} emissiveIntensity={highlighted ? 0.6 : 0} roughness={0.6} />
    </mesh>
  );
}

