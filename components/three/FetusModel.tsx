"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

export type SystemId =
  | "skeleton"
  | "brain"
  | "heart"
  | "lungs"
  | "digestive"
  | "muscles"
  | "placenta"
  | "umbilicalCord";

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

/** A limb segment: a capsule oriented to span from `start` to `end`. */
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
      <capsuleGeometry args={[radius, length, 16, 24]} />
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

/**
 * A stylized but recognizable curled fetus, built procedurally (no external
 * model). The whole form turns translucent when an internal organ is selected
 * so it can be seen inside; structural systems tint the body.
 */
export function FetusModel({
  selected,
  scale,
  onSelect,
}: {
  selected: SystemId | null;
  scale: number;
  onSelect: (id: SystemId) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduce) group.current.rotation.y += delta * 0.2;
    // gentle breathing bob
    const t = state.clock.elapsedTime;
    group.current.position.y = -0.15 + (reduce ? 0 : Math.sin(t * 0.8) * 0.03);
  });

  const seeInside = selected !== null && INTERNAL.includes(selected);
  const skinOpacity = seeInside ? 0.4 : 1;

  // Skin tone reacts to structural selections.
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

  const stop = (fn: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    fn();
  };

  return (
    <group ref={group} scale={scale * 0.85} position={[0, -0.15, 0]}>
      {/* ---- HEAD (bowed forward) ---- */}
      <group position={[0, 0.92, 0.18]} rotation={[0.32, 0, 0]}>
        <mesh onClick={stop(() => onSelect("brain"))} castShadow>
          <sphereGeometry args={[0.62, 64, 64]} />
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

        {/* nose hint */}
        <mesh position={[0, -0.04, 0.6]}>
          <sphereGeometry args={[0.08, 24, 24]} />
          <meshStandardMaterial color={skin.color} roughness={0.55} transparent={skin.opacity < 1} opacity={skin.opacity} />
        </mesh>
        {/* cheeks */}
        {[-0.26, 0.26].map((x) => (
          <mesh key={x} position={[x, -0.1, 0.46]}>
            <sphereGeometry args={[0.16, 24, 24]} />
            <meshStandardMaterial color={skin.color} roughness={0.55} transparent={skin.opacity < 1} opacity={skin.opacity} />
          </mesh>
        ))}
        {/* closed eyes */}
        {[-0.24, 0.24].map((x) => (
          <mesh key={x} position={[x, 0.06, 0.52]} scale={[1, 0.4, 0.5]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#8a5a4a" roughness={0.5} />
          </mesh>
        ))}
        {/* ears */}
        {[-0.58, 0.58].map((x) => (
          <mesh key={x} position={[x, 0, 0.02]} scale={[0.5, 1, 0.7]}>
            <sphereGeometry args={[0.16, 24, 24]} />
            <meshStandardMaterial color={skin.color} roughness={0.6} transparent={skin.opacity < 1} opacity={skin.opacity} />
          </mesh>
        ))}

        {/* brain (revealed when selected) */}
        <mesh visible={selected === "brain"} position={[0, 0.12, -0.02]}>
          <sphereGeometry args={[0.5, 48, 48]} />
          <meshStandardMaterial color={ACCENT.brain} emissive={ACCENT.brain} emissiveIntensity={0.8} roughness={0.35} />
        </mesh>
      </group>

      {/* ---- TORSO (curved, belly forward) ---- */}
      <group onClick={stop(() => onSelect("muscles"))}>
        <Bone start={[0, 0.55, 0.05]} end={[0, -0.25, 0.18]} radius={0.42} {...skin} />
        {/* belly */}
        <mesh position={[0, 0.05, 0.34]}>
          <sphereGeometry args={[0.4, 48, 48]} />
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

      {/* bottom / curl */}
      <mesh position={[0, -0.42, 0.05]} onClick={stop(() => onSelect("muscles"))} castShadow>
        <sphereGeometry args={[0.4, 48, 48]} />
        <meshStandardMaterial color={skin.color} roughness={0.6} transparent={skin.opacity < 1} opacity={skin.opacity} emissive={skin.emissive} emissiveIntensity={skin.emissiveIntensity} />
      </mesh>

      {/* ---- ARMS (folded up toward face) ---- */}
      {[-1, 1].map((s) => (
        <group key={`arm${s}`} onClick={stop(() => onSelect("muscles"))}>
          {/* upper arm: shoulder -> elbow */}
          <Bone start={[s * 0.34, 0.42, 0.18]} end={[s * 0.5, 0.12, 0.5]} radius={0.15} {...skin} />
          {/* forearm: elbow -> hand near chin */}
          <Bone start={[s * 0.5, 0.12, 0.5]} end={[s * 0.22, 0.52, 0.62]} radius={0.13} {...skin} />
          {/* hand */}
          <mesh position={[s * 0.2, 0.56, 0.64]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshStandardMaterial color={skin.color} roughness={0.6} transparent={skin.opacity < 1} opacity={skin.opacity} />
          </mesh>
        </group>
      ))}

      {/* ---- LEGS (knees drawn up to belly) ---- */}
      {[-1, 1].map((s) => (
        <group key={`leg${s}`} onClick={stop(() => onSelect("muscles"))}>
          {/* thigh: hip -> knee (out & forward) */}
          <Bone start={[s * 0.22, -0.4, 0.18]} end={[s * 0.46, -0.18, 0.6]} radius={0.18} {...skin} />
          {/* shin: knee -> foot (up toward belly) */}
          <Bone start={[s * 0.46, -0.18, 0.6]} end={[s * 0.24, 0.18, 0.66]} radius={0.14} {...skin} />
          {/* foot */}
          <mesh position={[s * 0.22, 0.2, 0.72]} scale={[1, 0.7, 1.3]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshStandardMaterial color={skin.color} roughness={0.6} transparent={skin.opacity < 1} opacity={skin.opacity} />
          </mesh>
        </group>
      ))}

      {/* ---- INTERNAL ORGANS (revealed via translucency) ---- */}
      {/* heart */}
      <mesh
        position={[0.12, 0.28, 0.28]}
        scale={selected === "heart" ? 1.25 : 1}
        onClick={stop(() => onSelect("heart"))}
      >
        <sphereGeometry args={[0.14, 32, 32]} />
        <meshStandardMaterial
          color={ACCENT.heart}
          emissive={ACCENT.heart}
          emissiveIntensity={selected === "heart" ? 1 : 0.3}
          roughness={0.35}
        />
      </mesh>

      {/* lungs */}
      <group onClick={stop(() => onSelect("lungs"))}>
        {[-0.16, 0.16].map((x) => (
          <mesh key={x} position={[x, 0.34, 0.24]} scale={[1, 1.3, 0.9]}>
            <sphereGeometry args={[0.13, 28, 28]} />
            <meshStandardMaterial
              color={ACCENT.lungs}
              emissive={ACCENT.lungs}
              emissiveIntensity={selected === "lungs" ? 0.8 : 0.18}
              roughness={0.45}
            />
          </mesh>
        ))}
      </group>

      {/* digestive coil */}
      <mesh
        position={[0, 0.0, 0.34]}
        onClick={stop(() => onSelect("digestive"))}
      >
        <torusKnotGeometry args={[0.15, 0.05, 80, 10]} />
        <meshStandardMaterial
          color={ACCENT.digestive}
          emissive={ACCENT.digestive}
          emissiveIntensity={selected === "digestive" ? 0.8 : 0.2}
          roughness={0.4}
        />
      </mesh>

      {/* skeleton: spine + ribs (only when selected) */}
      <group visible={selected === "skeleton"}>
        {[0.45, 0.3, 0.15, 0.0, -0.15].map((y, i) => (
          <mesh key={i} position={[0, y, 0.18 + i * 0.02]} rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[0.34 - i * 0.02, 0.03, 12, 32]} />
            <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.6} />
          </mesh>
        ))}
      </group>

      {/* ---- PLACENTA (disc beside baby) ---- */}
      <mesh
        position={[1.15, 0.35, -0.15]}
        rotation={[0.2, 0, Math.PI / 2.4]}
        onClick={stop(() => onSelect("placenta"))}
        castShadow
      >
        <cylinderGeometry args={[0.5, 0.5, 0.16, 48]} />
        <meshStandardMaterial
          color={selected === "placenta" ? ACCENT.placenta : "#93A585"}
          emissive={selected === "placenta" ? ACCENT.placenta : "#000000"}
          emissiveIntensity={selected === "placenta" ? 0.5 : 0}
          roughness={0.75}
        />
      </mesh>

      {/* ---- UMBILICAL CORD (helix from belly to placenta) ---- */}
      <Cord highlighted={selected === "umbilicalCord"} onClick={stop(() => onSelect("umbilicalCord"))} />
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
    const start = new THREE.Vector3(0.32, 0.05, 0.42);
    const end = new THREE.Vector3(1.05, 0.32, -0.1);
    const segs = 60;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const base = new THREE.Vector3().lerpVectors(start, end, u);
      const coil = 0.09 * Math.sin(u * Math.PI * 6);
      const coil2 = 0.09 * Math.cos(u * Math.PI * 6);
      base.y += coil;
      base.z += coil2;
      pts.push(base);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);

  return (
    <mesh onClick={onClick}>
      <tubeGeometry args={[curve, 80, highlighted ? 0.07 : 0.05, 12, false]} />
      <meshStandardMaterial
        color={highlighted ? ACCENT.umbilicalCord : "#A9BD96"}
        emissive={highlighted ? ACCENT.umbilicalCord : "#000000"}
        emissiveIntensity={highlighted ? 0.6 : 0}
        roughness={0.6}
      />
    </mesh>
  );
}
