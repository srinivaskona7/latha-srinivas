"use client";

// Typed, namespaced localStorage wrapper that degrades gracefully.

const PREFIX = "bjai:";

export type JournalEntry = {
  id: string;
  dateISO: string;
  text: string;
  milestone?: string;
};

export type GalleryItem = {
  id: string;
  dateISO: string;
  caption: string;
  dataUrl: string;
};

export type DoseStatus = "taken" | "missed";

export type Medication = {
  id: string;
  name: string;
  notes: string;
  schedule: string[]; // e.g. ["08:00", "20:00"] — display only
  doses: Record<string, DoseStatus>; // keyed by `${dateISO}@${time}`
};

function available(): boolean {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const k = `${PREFIX}__probe`;
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

export function read<T>(key: string, fallback: T): T {
  if (!available()) return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function write<T>(key: string, value: T): boolean {
  if (!available()) return false;
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/** Cheap unique id without external deps. */
export function uid(): string {
  return (
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 6)
  );
}

export const KEYS = {
  journal: "journal",
  gallery: "gallery",
  medications: "medications",
  theme: "theme",
} as const;
