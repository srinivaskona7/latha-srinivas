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

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpV = (a: Vec, b: Vec, t: number): Vec => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];

/**
 * BodyBlob — a squished sphere forming organic body parts.
 * Overlapping blobs create smooth, natural flesh with no hard edges.
 */
function BodyBlob({
  pos, scale, color, opacity = 1, roughness = 0.55,
  transmission = 0, thickness = 0.8, ior = 1.36,
  emissive = "#3A0E08", emissiveIntensity = 0.06,
}: {
  pos: Vec; scale: [number, number, number]; color: string;
  opacity?: number; roughness?: number; transmission?: number;
  thickness?: number; ior?: number; emissive?: string; emissiveIntensity?: number;
}) {
  return (
    <mesh position={pos} scale={scale} castShadow receiveShadow>
      <sphereGeometry args={[1, 40, 40]} />
      <meshPhysicalMaterial
        color={color} roughness={roughness} metalness={0.0}
        transparent={opacity < 1} opacity={opacity}
        emissive={emissive} emissiveIntensity={emissiveIntensity}
        transmission={transmission} thickness={thickness} ior={ior}
        sheen={0.9} sheenRoughness={0.6} sheenColor="#FFD4C2"
        clearcoat={0.08} clearcoatRoughness={0.3}
      />
    </mesh>
  );
}

/** Smooth capsule limb between two points. */
function Limb({
  from, to, r, color, opacity = 1, roughness = 0.55,
  transmission = 0, emissive = "#3A0E08", emissiveIntensity = 0.06,
}: {
  from: Vec; to: Vec; r: number; color: string;
  opacity?: number; roughness?: number; transmission?: number;
  emissive?: string; emissiveIntensity?: number;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const s = new THREE.Vector3(...from);
    const e = new THREE.Vector3(...to);
    const dir = new THREE.Vector3().subVectors(e, s);
    const len = Math.max(0.001, dir.length());
    const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { position: mid, quaternion: q, length: len };
  }, [from, to]);

  return (
    <mesh position={position} quaternion={quaternion} castShadow receiveShadow>
      <capsuleGeometry args={[r, length, 12, 24]} />
      <meshPhysicalMaterial
        color={color} roughness={roughness} metalness={0.0}
        transparent={opacity < 1} opacity={opacity}
        emissive={emissive} emissiveIntensity={emissiveIntensity}
        transmission={transmission} thickness={0.7} ior={1.36}
        sheen={0.9} sheenRoughness={0.6} sheenColor="#FFD4C2"
        clearcoat={0.08} clearcoatRoughness={0.3}
      />
    </mesh>
  );
}

export function FetusModel({
  morph, selected, onSelect, spin = true,
}: {
  morph: Morphology;
  selected: SystemId | null;
  onSelect: (id: SystemId) => void;
  /** Gentle self-rotation. Disable when OrbitControls auto-rotates instead. */
  spin?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduce && spin) group.current.rotation.y += delta * 0.08;
    const t = state.clock.elapsedTime;
    group.current.position.y = reduce ? 0 : Math.sin(t * 0.35) * 0.018;
  });

  const { headRatio, limbExtend, tail, chub, curl, hasFeatures, hasEyeSpots, displayScale } = morph;
  const seeInside = selected !== null && INTERNAL.includes(selected);

  const week = morph.week;
  const isEmbryo  = week < 8;
  const isFetus1  = week >= 8  && week < 14;
  const isFetus2  = week >= 14 && week < 24;

  const skinOpacity = seeInside ? 0.30 : morph.baseSkinOpacity;
  const baseTrans = seeInside ? 0.9
    : isEmbryo  ? 0.55
    : isFetus1  ? 0.28
    : isFetus2  ? 0.10
    : 0.02;
  const skinRough = isEmbryo ? 0.38 : isFetus1 ? 0.46 : isFetus2 ? 0.52 : 0.58;

  const skinColor =
    selected === "muscles"  ? "#BE4030"
    : selected === "skeleton" ? "#EFE2D0"
    : isEmbryo  ? "#FFAD96"
    : isFetus1  ? "#FFB89E"
    : isFetus2  ? "#FFBFA5"
    : "#F5BEA0";

  const skinEmissive = selected === "muscles" || selected === "skeleton"
    ? ACCENT[selected] : "#4A1510";
  const skinEmissiveI = selected === "muscles" ? 0.28
    : selected === "skeleton" ? 0.18
    : isEmbryo ? 0.18 : isFetus1 ? 0.10 : 0.05;

  // Shared skin props object
  const S = {
    color: skinColor, opacity: skinOpacity,
    emissive: skinEmissive, emissiveIntensity: skinEmissiveI,
    transmission: baseTrans, roughness: skinRough,
  };

  const stop = (fn: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation(); fn();
  };

  // Proportions
  const headR  = 0.38 + headRatio * 0.30;
  const headY  = 0.38 + headR * 0.58;
  const bodyW  = 0.22 + chub * 0.18;
  const bodyH  = 0.30 + chub * 0.12;
  const bellyW = 0.24 + chub * 0.20;
  const limbR  = 0.055 + limbExtend * 0.045 + chub * 0.022;
  const jR     = limbR * 1.15;
  const legCurl = 1 - curl * 0.6;

  const arm = (s: number) => {
    const shl: Vec = [s * 0.21, headY - headR * 1.05, 0.10];
    return {
      shoulder: shl,
      elbow: lerpV([s*0.28, headY-headR*1.20, 0.22], [s*0.36, headY-headR*1.50, 0.34], limbExtend),
      hand:  lerpV([s*0.26, headY-headR*1.10, 0.30], [s*0.12, headY-headR*0.88, 0.44], limbExtend),
    };
  };

  const leg = (s: number) => ({
    hip:  [s*0.18, -0.24, 0.08] as Vec,
    knee: lerpV([s*0.24, -0.20, 0.26], [s*0.42, -0.06, 0.44], legCurl),
    foot: lerpV([s*0.24, -0.28, 0.32], [s*0.18, 0.16, 0.50], legCurl),
  });

  // Shared material for joint spheres
  const jointMat = {
    color: skinColor, roughness: skinRough, metalness: 0,
    emissive: skinEmissive, emissiveIntensity: skinEmissiveI,
    transparent: skinOpacity < 1, opacity: skinOpacity,
    transmission: baseTrans, thickness: 0.7, ior: 1.36,
    sheen: 0.9, sheenRoughness: 0.6, sheenColor: "#FFD4C2" as const,
    clearcoat: 0.08, clearcoatRoughness: 0.3,
  };

  return (
    <group ref={group} scale={displayScale} position={[0, -0.08, 0]}>

      {/* ===== HEAD ===== */}
      <group
        position={[0, headY, 0.10]}
        rotation={[0.22, 0, 0]}
        onClick={stop(() => onSelect("brain"))}
      >
        {/* Main cranium */}
        <BodyBlob pos={[0,0,0]} scale={[headR*0.93, headR, headR*0.92]} {...S} />
        {/* Forehead dome */}
        <BodyBlob pos={[0, headR*0.22, headR*0.20]} scale={[headR*0.68, headR*0.48, headR*0.42]} {...S} />
        {/* Face fill */}
        <BodyBlob pos={[0, -headR*0.04, headR*0.70]} scale={[headR*0.66, headR*0.56, headR*0.26]} {...S} />

        {/* Sub-surface eye pigment (early, translucent skin) */}
        {hasEyeSpots && !hasFeatures && ([-1,1] as const).map(s => (
          <mesh key={`se${s}`} position={[s*headR*0.30, headR*0.06, headR*0.78]}>
            <sphereGeometry args={[headR*0.12, 16, 16]} />
            <meshStandardMaterial color="#2D1510" roughness={0.9} />
          </mesh>
        ))}

        {hasFeatures && (<>
          {/* Brow ridge */}
          <mesh position={[0, headR*0.15, headR*0.88]} scale={[headR*0.52, headR*0.09, headR*0.14]}>
            <sphereGeometry args={[1, 14, 14]} />
            <meshPhysicalMaterial color={skinColor} roughness={skinRough+0.05} metalness={0}
              emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
              transparent={skinOpacity<1} opacity={skinOpacity} />
          </mesh>

          {/* Eyes: eyeball + eyelid */}
          {([-1,1] as const).map(s => (
            <group key={`eye${s}`} position={[s*headR*0.28, headR*0.06, headR*0.88]}>
              <mesh>
                <sphereGeometry args={[headR*0.10, 16, 16]} />
                <meshStandardMaterial color="#1C0E0A" roughness={0.8} />
              </mesh>
              <mesh scale={[1.15, 0.45, 0.55]}>
                <sphereGeometry args={[headR*0.115, 14, 14]} />
                <meshPhysicalMaterial color={skinColor} roughness={skinRough} metalness={0}
                  emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                  transparent={skinOpacity<1} opacity={Math.min(1,skinOpacity+0.1)}
                  transmission={Math.max(0,baseTrans-0.1)} thickness={0.3} ior={1.36}
                  sheen={0.9} sheenRoughness={0.5} sheenColor="#FFD4C2"
                />
              </mesh>
            </group>
          ))}

          {/* Nose */}
          <group position={[0, -headR*0.08, headR*0.96]} rotation={[0.1,0,0]}>
            <mesh scale={[headR*0.11, headR*0.16, headR*0.12]}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshPhysicalMaterial color={skinColor} roughness={skinRough} metalness={0}
                emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                transparent={skinOpacity<1} opacity={skinOpacity}
                transmission={Math.max(0,baseTrans-0.05)} thickness={0.5} ior={1.36} />
            </mesh>
            <mesh position={[0,-headR*0.06,headR*0.06]} scale={[headR*0.12,headR*0.09,headR*0.09]}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshPhysicalMaterial color={skinColor} roughness={skinRough} metalness={0}
                emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                transparent={skinOpacity<1} opacity={skinOpacity}
                transmission={Math.max(0,baseTrans-0.05)} thickness={0.5} ior={1.36} />
            </mesh>
            {([-1,1] as const).map(s => (
              <mesh key={`nos${s}`} position={[s*headR*0.07,-headR*0.07,headR*0.06]}>
                <sphereGeometry args={[headR*0.04, 8, 8]} />
                <meshStandardMaterial color="#3A1010" roughness={0.9} />
              </mesh>
            ))}
          </group>

          {/* Cheeks */}
          {([-1,1] as const).map(s => (
            <BodyBlob key={`chk${s}`}
              pos={[s*headR*0.34, -headR*0.18, headR*0.84]}
              scale={[headR*0.24, headR*0.22, headR*0.18]} {...S} />
          ))}

          {/* Lips */}
          <group position={[0, -headR*0.25, headR*0.91]}>
            {([-1,0,1] as const).map(s => (
              <mesh key={`ul${s}`} position={[s*headR*0.065, headR*0.025, 0]}
                scale={[headR*(s===0?0.09:0.075), headR*0.05, headR*0.06]}>
                <sphereGeometry args={[1,10,10]} />
                <meshPhysicalMaterial
                  color={isEmbryo ? skinColor : "#F2A094"} roughness={skinRough+0.02} metalness={0}
                  emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                  transparent={skinOpacity<1} opacity={skinOpacity} />
              </mesh>
            ))}
            <mesh position={[0,-headR*0.032,0]} scale={[headR*0.15, headR*0.055, headR*0.07]}>
              <sphereGeometry args={[1,10,10]} />
              <meshPhysicalMaterial
                color={isEmbryo ? skinColor : "#EF9888"} roughness={skinRough+0.02} metalness={0}
                emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                transparent={skinOpacity<1} opacity={skinOpacity} />
            </mesh>
          </group>

          {/* Chin */}
          <BodyBlob pos={[0,-headR*0.36,headR*0.82]} scale={[headR*0.18,headR*0.14,headR*0.14]} {...S} />

          {/* Ears */}
          {([-1,1] as const).map(s => (
            <group key={`ear${s}`} position={[s*headR*0.88,-headR*0.08,0.0]} rotation={[0.06,s*0.12,0]}>
              <mesh scale={[headR*0.13, headR*0.24, headR*0.12]}>
                <sphereGeometry args={[1,14,14]} />
                <meshPhysicalMaterial color={skinColor} roughness={skinRough+0.05} metalness={0}
                  emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                  transparent={skinOpacity<1} opacity={skinOpacity}
                  transmission={Math.max(0,baseTrans-0.1)} thickness={0.4} ior={1.36}
                  sheen={0.7} sheenRoughness={0.6} sheenColor="#FFD4C2" />
              </mesh>
              <mesh position={[0,-headR*0.13,0]} scale={[headR*0.08,headR*0.08,headR*0.07]}>
                <sphereGeometry args={[1,10,10]} />
                <meshPhysicalMaterial color={skinColor} roughness={skinRough+0.05} metalness={0}
                  emissive={skinEmissive} emissiveIntensity={skinEmissiveI}
                  transparent={skinOpacity<1} opacity={skinOpacity} />
              </mesh>
            </group>
          ))}
        </>)}

        {/* Brain overlay */}
        <mesh visible={selected==="brain"} position={[0,headR*0.14,-0.04]} scale={[0.9,0.94,0.86]}>
          <sphereGeometry args={[headR*0.74, 36, 36]} />
          <meshStandardMaterial color={ACCENT.brain} emissive={ACCENT.brain} emissiveIntensity={0.8} roughness={0.35} />
        </mesh>
      </group>

      {/* ===== TORSO (smooth overlapping blobs) ===== */}
      <group onClick={stop(() => onSelect("muscles"))}>
        <Limb from={[0,headY-headR*0.92,0.10]} to={[0,headY-headR*1.38,0.14]} r={bodyW*0.60} {...S} />
        <BodyBlob pos={[0,headY-headR*1.55,0.14]} scale={[bodyW*1.12,bodyH*0.72,bodyW*0.92]} {...S} />
        <BodyBlob pos={[0,headY-headR*2.0,0.18]}  scale={[bodyW*1.18,bodyH*0.78,bodyW*0.96]} {...S} />
        <BodyBlob pos={[0,headY-headR*2.55,0.22]} scale={[bellyW*1.12,bodyH*0.80,bellyW*1.0]} {...S} />
        <BodyBlob pos={[0,headY-headR*3.05,0.18]} scale={[bodyW*1.05,bodyH*0.68,bodyW*0.88]} {...S} />
        <BodyBlob pos={[0,headY-headR*3.45,0.10]} scale={[bodyW*0.96,bodyH*0.52,bodyW*0.78]} {...S} />
      </group>

      {/* Embryonic tail */}
      {tail>0.02 && (
        <Limb
          from={[0,headY-headR*3.65,0.04]}
          to={[0,headY-headR*3.65-tail*0.28,-0.08-tail*0.12]}
          r={0.04*tail+0.015} {...S}
        />
      )}

      {/* ===== ARMS ===== */}
      {([-1,1] as const).map(s => {
        const a = arm(s);
        return (
          <group key={`arm${s}`} onClick={stop(() => onSelect("muscles"))}>
            <mesh position={a.shoulder}>
              <sphereGeometry args={[jR,16,16]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            <Limb from={a.shoulder} to={a.elbow} r={limbR} {...S} />
            <mesh position={a.elbow}>
              <sphereGeometry args={[jR*0.92,14,14]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            <Limb from={a.elbow} to={a.hand} r={limbR*0.80} {...S} />
            <mesh position={a.hand} scale={[limbR*2.2*(0.8+limbExtend*0.4), limbR*1.1, limbR*2.6]}>
              <sphereGeometry args={[1,16,16]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            {morph.hasDigits && ([-2,-1,0,1,2] as const).map(fi => {
              const fPos: Vec = [
                a.hand[0]+fi*limbR*0.32*s,
                a.hand[1]+Math.max(0,1-Math.abs(fi))*limbR*0.08,
                a.hand[2]+limbR*0.8,
              ];
              const fTip: Vec = [fPos[0]+fi*limbR*0.08*s, fPos[1]+limbR*0.12, fPos[2]+limbR*(0.55-Math.abs(fi)*0.04)];
              return (
                <group key={`f${fi}`}>
                  <Limb from={fPos} to={fTip} r={limbR*0.14} {...S} />
                  <mesh position={fTip}>
                    <sphereGeometry args={[limbR*0.16,8,8]} />
                    <meshPhysicalMaterial {...jointMat} />
                  </mesh>
                </group>
              );
            })}
          </group>
        );
      })}

      {/* ===== LEGS ===== */}
      {([-1,1] as const).map(s => {
        const l = leg(s);
        return (
          <group key={`leg${s}`} onClick={stop(() => onSelect("muscles"))}>
            <mesh position={l.hip}>
              <sphereGeometry args={[jR*1.3,16,16]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            <Limb from={l.hip} to={l.knee} r={limbR*1.12} {...S} />
            <mesh position={l.knee}>
              <sphereGeometry args={[jR*1.1,14,14]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            <Limb from={l.knee} to={l.foot} r={limbR*0.92} {...S} />
            <mesh position={l.foot} scale={[limbR*2.6,limbR*1.2,limbR*3.4]} rotation={[0.12,s*0.08,0]}>
              <sphereGeometry args={[1,16,16]} />
              <meshPhysicalMaterial {...jointMat} />
            </mesh>
            {morph.hasDigits && ([-2,-1,0,1,2] as const).map(ti => (
              <mesh key={`t${ti}`} position={[l.foot[0]+ti*limbR*0.30*s, l.foot[1]-limbR*0.1, l.foot[2]+limbR*0.9]}>
                <sphereGeometry args={[limbR*0.17,8,8]} />
                <meshPhysicalMaterial {...jointMat} />
              </mesh>
            ))}
          </group>
        );
      })}

      {/* ===== INTERNAL ORGANS ===== */}
      {morph.present.heart && (
        <mesh position={[0.06,headY-headR*1.82,0.20]} scale={selected==="heart"?1.4:1}
          onClick={stop(() => onSelect("heart"))}>
          <sphereGeometry args={[0.09,28,28]} />
          <meshStandardMaterial color={ACCENT.heart} emissive={ACCENT.heart}
            emissiveIntensity={selected==="heart"?1.1:0.35} roughness={0.35} />
        </mesh>
      )}

      {morph.present.lungs && (
        <group onClick={stop(() => onSelect("lungs"))}>
          {([-0.10,0.10] as const).map(x => (
            <mesh key={x} position={[x,headY-headR*1.78,0.18]} scale={[1,1.4,0.88]}>
              <sphereGeometry args={[0.09,22,22]} />
              <meshStandardMaterial color={ACCENT.lungs} emissive={ACCENT.lungs}
                emissiveIntensity={selected==="lungs"?0.9:0.18} roughness={0.45} />
            </mesh>
          ))}
        </group>
      )}

      {morph.present.digestive && (
        <mesh position={[0,headY-headR*2.48,0.22]} onClick={stop(() => onSelect("digestive"))}>
          <torusKnotGeometry args={[0.10,0.036,60,8]} />
          <meshStandardMaterial color={ACCENT.digestive} emissive={ACCENT.digestive}
            emissiveIntensity={selected==="digestive"?0.85:0.22} roughness={0.4} />
        </mesh>
      )}

      {morph.present.skeleton && (
        <group visible={selected==="skeleton"}>
          {[0,1,2,3,4].map(i => (
            <mesh key={i} position={[0,headY-headR*(1.6+i*0.44),0.12+i*0.018]}
              rotation={[Math.PI/2.2,0,0]}>
              <torusGeometry args={[(bodyW+0.01)-i*0.016, 0.020, 12, 28]} />
              <meshStandardMaterial color={ACCENT.skeleton} emissive={ACCENT.skeleton} emissiveIntensity={0.6} />
            </mesh>
          ))}
        </group>
      )}

      {/* ===== PLACENTA ===== */}
      {morph.present.placenta && (
        <mesh position={[1.02,0.22,-0.10]} rotation={[0.14,0,Math.PI/2.4]}
          onClick={stop(() => onSelect("placenta"))} castShadow>
          <cylinderGeometry args={[0.40+chub*0.10,0.40+chub*0.10,0.13,38]} />
          <meshStandardMaterial
            color={selected==="placenta"?ACCENT.placenta:"#9C3A2B"}
            emissive={selected==="placenta"?ACCENT.placenta:"#2A0E0A"}
            emissiveIntensity={selected==="placenta"?0.65:0.14} roughness={0.82} />
        </mesh>
      )}

      {/* ===== UMBILICAL CORD ===== */}
      {morph.present.umbilicalCord && (
        <UmbilicalCord
          highlighted={selected==="umbilicalCord"}
          bellyPos={[0,headY-headR*3.0,0.28]}
          onClick={stop(() => onSelect("umbilicalCord"))}
        />
      )}
    </group>
  );
}

function UmbilicalCord({
  highlighted, bellyPos, onClick,
}: {
  highlighted: boolean;
  bellyPos: Vec;
  onClick: (e: {stopPropagation:()=>void}) => void;
}) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const start = new THREE.Vector3(...bellyPos);
    const end   = new THREE.Vector3(0.96, 0.22, -0.06);
    const segs  = 72;
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const base = new THREE.Vector3().lerpVectors(start, end, u);
      base.y += 0.09 * Math.sin(u * Math.PI * 5.5);
      base.z += 0.08 * Math.cos(u * Math.PI * 5.5);
      base.x += 0.04 * Math.sin(u * Math.PI * 3.2);
      pts.push(base);
    }
    return new THREE.CatmullRomCurve3(pts);
  }, [bellyPos]);

  return (
    <mesh onClick={onClick}>
      <tubeGeometry args={[curve, 90, highlighted?0.052:0.036, 12, false]} />
      <meshPhysicalMaterial
        color={highlighted?ACCENT.umbilicalCord:"#D09088"}
        emissive={highlighted?ACCENT.umbilicalCord:"#5A1E14"}
        emissiveIntensity={highlighted?0.75:0.14}
        transmission={0.25} thickness={0.38} ior={1.34}
        roughness={0.50} clearcoat={0.10} />
    </mesh>
  );
}
