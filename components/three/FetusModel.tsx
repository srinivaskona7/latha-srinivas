"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import type { SystemId } from "@/lib/morphology";
import type { Morphology } from "@/lib/morphology";

export type { SystemId };

const ACCENT: Record<SystemId, string> = {
  skeleton: "#EAD9C2",
  brain: "#C97FA0",
  heart: "#C65D46",
  lungs: "#E69A86",
  digestive: "#D8A24A",
  muscles: "#B7553F",
  placenta: "#7C8E74",
  umbilicalCord: "#9AAE86",
};

const INTERNAL: SystemId[] = ["brain", "heart", "lungs", "digestive"];

type Vec = [number, number, number];

/** A limb segment: a capsule spanning from `start` to `end`. */
function Bone({
  start,
  end,
  radius,
  color,
  opacity = 1,
  emissive = "#000000",
  emissiveIntensity = 0,
}: {
  start: Vec;
  end: Vec;
  radius: number;
  color: string;
  opacity?: number;
  emissive?: string;
  emissiveIntensity?: number;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const dir = new THREE.Vector3().subVectors(e, s);
    const len = Math.max(0.02, dir.length() - radius);
    const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { position: mid, quaternion: q, length: len };
  }, [start, end, radius]);

  return (
    <mesh position={position} quaternion={quaternion} castShadow receiveShadow>
      <capsuleGeometry args={[radius, length, 12, 20]} />
      <meshStandardMaterial
        color={color}
        roughness={0.62}
        metalness={0.02}
        transparent={opacity < 1}
        opacity={opacity}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

const v = (a: Vec, b: Vec, t: number): Vec => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

/**
 * Day-driven stylized fetus. Every proportion (head size, limb extension,
 * tail, fat) comes from `morph`, so the form changes across the pregnancy.
 */
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
    if (!reduce) group.current.rotation.y += delta * 0.2;
    const t = state.clock.elapsedTime;
    group.current.position.y = -0.15 + (reduce ? 0 : Math.sin(t * 0.8) * 0.03);
  });

  const { headRatio, limbExtend, tail, chub, curl, hasFeatures, hasEyeSpots, displayScale } =
    morph;

  const seeInside = selected !== null && INTERNAL.includes(selected);
  const skinOpacity = seeInside ? 0.38 : morph.baseSkinOpacity;

  const skinColor =
    selected === "muscles"
      ? "#C56B52"
      : selected === "skeleton"
        ? "#E7D3C2"
        : "#E9B79E";
  const skinEmissive =
    selected === "muscles" || selected === "skeleton" ? ACCENT[selected] : "#000000";
  const skinEmissiveI =
    selected === "muscles" ? 0.25 : selected === "skeleton" ? 0.12 : 0;

  const skin = {
    color: skinColor,
    opacity: skinOpacity,
    emissive: skinEmissive,
    emissiveIntensity: skinEmissiveI,
  };
  const skinSolid = { color: skinColor, roughness: 0.6 };

  const stop = (fn: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    fn();
  };

  // ---- Derived proportions ----
  const headR = 0.42 + headRatio * 0.32; // larger head when headRatio high
  const headY = 0.5 + headR * 0.6;
  const bodyRadius = 0.3 + chub * 0.14;
  const bellyR = 0.32 + chub * 0.16;
  const limbRadius = 0.08 + limbExtend * 0.07 + chub * 0.03;

  // Arm joints interpolate from tucked buds (t=0) to folded limbs (t=1).
  const armSet = (s: number) => {
    const shoulder: Vec = [s * 0.3, 0.42, 0.16];
    const elbowBud: Vec = [s * 0.34, 0.34, 0.26];
    const elbowFull: Vec = [s * 0.5, 0.12, 0.5];
    const handBud: Vec = [s * 0.34, 0.3, 0.32];
    const handFull: Vec = [s * 0.22, 0.52, 0.62];
    return {
      shoulder,
      elbow: v(elbowBud, elbowFull, limbExtend),
      hand: v(handBud, handFull, limbExtend),
    };
  };
  const legSet = (s: number) => {
    const hip: Vec = [s * 0.2, -0.36, 0.16];
    const kneeBud: Vec = [s * 0.26, -0.3, 0.26];
    const kneeFull: Vec = [s * 0.46, -0.18, 0.6];
    const footBud: Vec = [s * 0.26, -0.34, 0.32];
    const footFull: Vec = [s * 0.24, 0.18, 0.66];
    return {
      hip,
      knee: v(kneeBud, kneeFull, limbExtend),
      foot: v(footBud, footFull, limbExtend),
    };
  };

  return (
    <group ref={group} scale={displayScale} position={[0, -0.15, 0]}>
      <group scale={curl < 0.8 ? 1.05 : 1}>
        {/* ---- HEAD ---- */}
        <group position={[0, headY, 0.18]} rotation={[0.32, 0, 0]}>
          <mesh onClick={stop(() => onSelect("brain"))} castShadow>
            <sphereGeometry args={[headR, 48, 48]} />
            <meshPhysicalMaterial
              color={skin.color}
              roughness={0.5}
              sheen={0.6}
              sheenColor="#F4C9B4"
              clearcoat={0.2}
              transparent={skin.opacity < 1}
              opacity={skin.opacity}
              emissive={skin.emissive}
              emissiveIntensity={skin.emissiveIntensity}
            />
          </mesh>

          {/* eye spots (early) or closed eyes (with features) */}
          {(hasEyeSpots || hasFeatures) &&
            [-1, 1].map((s) => (
              <mesh
                key={s}
                position={[s * headR * 0.42, headR * 0.12, headR * 0.82]}
                scale={hasFeatures ? [1, 0.4, 0.5] : [1, 1, 0.6]}
              >
                <sphereGeometry args={[headR * (hasFeatures ? 0.13 : 0.16), 16, 16]} />
                <meshStandardMaterial color="#5a3a30" roughness={0.5} />
              </mesh>
            ))}

          {hasFeatures && (
            <>
              {/* nose */}
              <mesh position={[0, -headR * 0.05, headR * 0.95]}>
                <sphereGeometry args={[headR * 0.13, 20, 20]} />
                <meshStandardMaterial {...skinSolid} transparent={skin.opacity < 1} opacity={skin.opacity} />
              </mesh>
              {/* cheeks */}
              {[-1, 1].map((s) => (
                <mesh key={s} position={[s * headR * 0.42, -headR * 0.16, headR * 0.72]}>
                  <sphereGeometry args={[headR * 0.26, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skin.opacity < 1} opacity={skin.opacity} />
                </mesh>
              ))}
              {/* ears */}
              {[-1, 1].map((s) => (
                <mesh key={s} position={[s * headR * 0.92, 0, 0.02]} scale={[0.5, 1, 0.7]}>
                  <sphereGeometry args={[headR * 0.26, 20, 20]} />
                  <meshStandardMaterial {...skinSolid} transparent={skin.opacity < 1} opacity={skin.opacity} />
                </mesh>
              ))}
            </>
          )}

          {/* brain (revealed) */}
          <mesh visible={selected === "brain"} position={[0, headR * 0.2, -0.02]}>
            <sphereGeometry args={[headR * 0.8, 40, 40]} />
            <meshStandardMaterial color={ACCENT.brain} emissive={ACCENT.brain} emissiveIntensity={0.8} roughness={0.35} />
          </mesh>
        </group>

        {/* ---- TORSO ---- */}
        <group onClick={stop(() => onSelect("muscles"))}>
          <Bone start={[0, 0.5, 0.05]} end={[0, -0.22, 0.16]} radius={bodyRadius} {...skin} />
          <mesh position={[0, 0.05, 0.26 + chub * 0.06]}>
            <sphereGeometry args={[bellyR, 40, 40]} />
            <meshPhysicalMaterial
              color={skin.color}
              roughness={0.5}
              sheen={0.5}
              sheenColor="#F4C9B4"
              transparent={skin.opacity < 1}
              opacity={skin.opacity}
              emissive={skin.emissive}
              emissiveIntensity={skin.emissiveIntensity}
            />
          </mesh>
        </group>

        {/* curl / bottom */}
        <mesh position={[0, -0.4, 0.05]} onClick={stop(() => onSelect("muscles"))} castShadow>
          <sphereGeometry args={[bodyRadius + 0.04, 40, 40]} />
          <meshStandardMaterial color={skin.color} roughness={0.6} transparent={skin.opacity < 1} opacity={skin.opacity} emissive={skin.emissive} emissiveIntensity={skin.emissiveIntensity} />
        </mesh>

        {/* ---- EMBRYONIC TAIL (regresses by ~wk8) ---- */}
        {tail > 0.02 && (
          <Bone
            start={[0, -0.5, -0.05]}
            end={[0, -0.5 - tail * 0.35, -0.2 - tail * 0.15]}
            radius={0.08 * tail + 0.03}
            {...skinSolid}
            opacity={skin.opacity}
          />
        )}

        {/* ---- ARMS ---- */}
        {[-1, 1].map((s) => {
          const a = armSet(s);
          return (
            <group key={`arm${s}`} onClick={stop(() => onSelect("muscles"))}>
              <Bone start={a.shoulder} end={a.elbow} radius={limbRadius} {...skin} />
              <Bone start={a.elbow} end={a.hand} radius={limbRadius * 0.9} {...skin} />
              <mesh position={a.hand}>
                <sphereGeometry args={[limbRadius * 1.05, 18, 18]} />
                <meshStandardMaterial {...skinSolid} transparent={skin.opacity < 1} opacity={skin.opacity} />
              </mesh>
            </group>
          );
        })}

        {/* ---- LEGS ---- */}
        {[-1, 1].map((s) => {
          const l = legSet(s);
          return (
            <group key={`leg${s}`} onClick={stop(() => onSelect("muscles"))}>
              <Bone start={l.hip} end={l.knee} radius={limbRadius * 1.15} {...skin} />
              <Bone start={l.knee} end={l.foot} radius={limbRadius} {...skin} />
              <mesh position={l.foot} scale={[1, 0.7, 1.3]}>
                <sphereGeometry args={[limbRadius * 1.05, 18, 18]} />
                <meshStandardMaterial {...skinSolid} transparent={skin.opacity < 1} opacity={skin.opacity} />
              </mesh>
            </group>
          );
        })}

        {/* ---- INTERNAL ORGANS (only when formed for this day) ---- */}
        {morph.present.heart && (
          <mesh
            position={[0.1, 0.26, 0.22]}
            scale={selected === "heart" ? 1.3 : 1}
            onClick={stop(() => onSelect("heart"))}
          >
            <sphereGeometry args={[0.12, 28, 28]} />
            <meshStandardMaterial color={ACCENT.heart} emissive={ACCENT.heart} emissiveIntensity={selected === "heart" ? 1 : 0.3} roughness={0.35} />
          </mesh>
        )}

        {morph.present.lungs && (
          <group onClick={stop(() => onSelect("lungs"))}>
            {[-0.14, 0.14].map((x) => (
              <mesh key={x} position={[x, 0.32, 0.2]} scale={[1, 1.3, 0.9]}>
                <sphereGeometry args={[0.12, 24, 24]} />
                <meshStandardMaterial color={ACCENT.lungs} emissive={ACCENT.lungs} emissiveIntensity={selected === "lungs" ? 0.8 : 0.18} roughness={0.45} />
              </mesh>
            ))}
          </group>
        )}

        {morph.present.digestive && (
          <mesh position={[0, 0.0, 0.26]} onClick={stop(() => onSelect("digestive"))}>
            <torusKnotGeometry args={[0.13, 0.045, 64, 8]} />
            <meshStandardMaterial color={ACCENT.digestive} emissive={ACCENT.digestive} emissiveIntensity={selected === "digestive" ? 0.8 : 0.2} roughness={0.4} />
          </mesh>
        )}

        {/* skeleton: spine + ribs (when bone present + selected) */}
        {morph.present.skeleton && (
          <group visible={selected === "skeleton"}>
            {[0.42, 0.28, 0.14, 0.0, -0.14].map((y, i) => (
              <mesh key={i} position={[0, y, 0.14 + i * 0.02]} rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[(bodyRadius + 0.02) - i * 0.02, 0.03, 12, 28]} />
                <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.6} />
              </mesh>
            ))}
          </group>
        )}
      </group>

      {/* ---- PLACENTA + CORD (only when formed) ---- */}
      {morph.present.placenta && (
        <mesh
          position={[1.05, 0.3, -0.12]}
          rotation={[0.2, 0, Math.PI / 2.4]}
          onClick={stop(() => onSelect("placenta"))}
          castShadow
        >
          <cylinderGeometry args={[0.42 + chub * 0.1, 0.42 + chub * 0.1, 0.16, 40]} />
          <meshStandardMaterial color={selected === "placenta" ? ACCENT.placenta : "#93A585"} emissive={selected === "placenta" ? ACCENT.placenta : "#000000"} emissiveIntensity={selected === "placenta" ? 0.5 : 0} roughness={0.75} />
        </mesh>
      )}

      {morph.present.umbilicalCord && (
        <Cord highlighted={selected === "umbilicalCord"} onClick={stop(() => onSelect("umbilicalCord"))} />
      )}
    </group>
  );
}

/** A coiled umbilical cord rendered as a helical tube. */
function Cord({
  highlighted,
  onClick,
}: {
  highlighted: boolean;
  onClick: (e: { stopPropagation: () => void }) => void;
}) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const start = new THREE.Vector3(0.28, 0.05, 0.34);
    const end = new THREE.Vector3(0.98, 0.28, -0.08);
    const segs = 60;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const base = new THREE.Vector3().lerpVectors(start, end, u);
      base.y += 0.09 * Math.sin(u * Math.PI * 6);
      base.z += 0.09 * Math.cos(u * Math.PI * 6);
      pts.push(base);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);

  return (
    <mesh onClick={onClick}>
      <tubeGeometry args={[curve, 80, highlighted ? 0.07 : 0.05, 12, false]} />
      <meshStandardMaterial color={highlighted ? ACCENT.umbilicalCord : "#A9BD96"} emissive={highlighted ? ACCENT.umbilicalCord : "#000000"} emissiveIntensity={highlighted ? 0.6 : 0} roughness={0.6} />
    </mesh>
  );
}
