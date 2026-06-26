"use client";

import { useRef } from "react";
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
  skeleton: "#E8DCC8",
  brain: "#C97FA0",
  heart: "#C65D46",
  lungs: "#E07A5F",
  digestive: "#D8A24A",
  muscles: "#B7553F",
  placenta: "#7C8E74",
  umbilicalCord: "#9AAE86",
};

/**
 * A stylized, abstract fetal form built from procedural geometry — no external
 * model. The `selected` system glows; `scale` reflects gestational growth.
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

  useFrame((_, delta) => {
    if (group.current && !reduce) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  const baseMat = (id: SystemId) =>
    selected === id ? ACCENT[id] : "#EBC9B8";
  const emissive = (id: SystemId) =>
    selected === id ? ACCENT[id] : "#000000";
  const emissiveI = (id: SystemId) => (selected === id ? 0.55 : 0);

  // Curled fetal pose: head (large sphere) + body (tapered) + limb hints.
  return (
    <group ref={group} scale={scale} position={[0, -0.2, 0]}>
      {/* Head */}
      <mesh
        position={[0, 1.05, 0.1]}
        onClick={() => onSelect("brain")}
        castShadow
      >
        <sphereGeometry args={[0.72, 48, 48]} />
        <meshStandardMaterial
          color={baseMat("brain")}
          emissive={emissive("brain")}
          emissiveIntensity={emissiveI("brain")}
          roughness={0.55}
          metalness={0.05}
        />
      </mesh>

      {/* Brain core (visible when selected) */}
      <mesh position={[0, 1.18, 0.1]} visible={selected === "brain"}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color={ACCENT.brain}
          emissive={ACCENT.brain}
          emissiveIntensity={0.7}
          roughness={0.3}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Curled body */}
      <mesh
        position={[0, 0.1, 0]}
        rotation={[0.5, 0, 0.2]}
        onClick={() => onSelect("muscles")}
      >
        <capsuleGeometry args={[0.62, 0.9, 16, 32]} />
        <meshStandardMaterial
          color={baseMat("muscles")}
          emissive={emissive("muscles")}
          emissiveIntensity={emissiveI("muscles")}
          roughness={0.6}
        />
      </mesh>

      {/* Skeleton hint — ribs as torus stack */}
      <group visible={selected === "skeleton"} position={[0, 0.3, 0.15]} rotation={[0.5, 0, 0.2]}>
        {[0.1, -0.05, -0.2, -0.35].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4 - i * 0.02, 0.04, 12, 32]} />
            <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>

      {/* Heart */}
      <mesh
        position={[0.18, 0.45, 0.4]}
        scale={selected === "heart" ? 1.2 : 0.9}
        onClick={() => onSelect("heart")}
      >
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color={ACCENT.heart}
          emissive={ACCENT.heart}
          emissiveIntensity={selected === "heart" ? 0.9 : 0.25}
          roughness={0.4}
        />
      </mesh>

      {/* Lungs */}
      <group onClick={() => onSelect("lungs")}>
        {[-0.2, 0.2].map((x) => (
          <mesh key={x} position={[x, 0.5, 0.32]}>
            <sphereGeometry args={[0.17, 24, 24]} />
            <meshStandardMaterial
              color={selected === "lungs" ? ACCENT.lungs : "#E3B6A6"}
              emissive={selected === "lungs" ? ACCENT.lungs : "#000"}
              emissiveIntensity={selected === "lungs" ? 0.6 : 0}
              roughness={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Digestive */}
      <mesh position={[0, 0.05, 0.4]} onClick={() => onSelect("digestive")} visible={selected === "digestive"}>
        <torusKnotGeometry args={[0.18, 0.05, 64, 8]} />
        <meshStandardMaterial color={ACCENT.digestive} emissive={ACCENT.digestive} emissiveIntensity={0.6} />
      </mesh>

      {/* Placenta — disc to the side */}
      <mesh
        position={[1.1, 0.4, -0.2]}
        rotation={[0, 0, Math.PI / 2.5]}
        onClick={() => onSelect("placenta")}
      >
        <cylinderGeometry args={[0.55, 0.55, 0.14, 40]} />
        <meshStandardMaterial
          color={selected === "placenta" ? ACCENT.placenta : "#9DAE8E"}
          emissive={selected === "placenta" ? ACCENT.placenta : "#000"}
          emissiveIntensity={selected === "placenta" ? 0.5 : 0}
          roughness={0.7}
        />
      </mesh>

      {/* Umbilical cord — curved tube from body to placenta */}
      <mesh onClick={() => onSelect("umbilicalCord")}>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(0.3, 0.2, 0.4),
              new THREE.Vector3(0.7, 0.1, 0.1),
              new THREE.Vector3(0.95, 0.35, -0.1),
            ]),
            32,
            selected === "umbilicalCord" ? 0.08 : 0.05,
            12,
            false,
          ]}
        />
        <meshStandardMaterial
          color={selected === "umbilicalCord" ? ACCENT.umbilicalCord : "#AFc09C"}
          emissive={selected === "umbilicalCord" ? ACCENT.umbilicalCord : "#000"}
          emissiveIntensity={selected === "umbilicalCord" ? 0.6 : 0}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}
