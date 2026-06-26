"use client";

import { useEffect, useState } from "react";
import {
  read,
  write,
  uid,
  KEYS,
  type GalleryItem,
} from "@/lib/storage";
import { GlassCard, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

const todayISO = () => new Date().toISOString().slice(0, 10);

// localStorage is small; keep individual images modest. ~2.5MB raw file cap.
const MAX_BYTES = 2.5 * 1024 * 1024;

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const inputBase =
  "w-full rounded-2xl border border-hairline bg-surface/60 px-4 py-2.5 text-ink placeholder:text-muted/70 transition focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30";

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState(todayISO());
  const [dataUrl, setDataUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setItems(read<GalleryItem[]>(KEYS.gallery, []));
  }, []);

  function persist(next: GalleryItem[]) {
    setItems(next);
    const ok = write(KEYS.gallery, next);
    if (!ok) {
      setNotice(
        "Couldn't save — this device's storage may be full. Try removing a few photos.",
      );
    }
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    setNotice(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setNotice("Please choose an image file.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setNotice(
        "That image is a bit large (over ~2.5 MB). Please pick a smaller one so it fits on this device.",
      );
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setDataUrl(typeof reader.result === "string" ? reader.result : "");
      setFileName(file.name);
    };
    reader.onerror = () => setNotice("Sorry, that image couldn't be read.");
    reader.readAsDataURL(file);
  }

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!dataUrl) {
      setNotice("Choose a photo first.");
      return;
    }
    const item: GalleryItem = {
      id: uid(),
      dateISO: date || todayISO(),
      caption: caption.trim(),
      dataUrl,
    };
    persist([item, ...items]);
    setCaption("");
    setDate(todayISO());
    setDataUrl("");
    setFileName("");
    setNotice(null);
  }

  function remove(id: string) {
    persist(items.filter((it) => it.id !== id));
  }

  const sorted = [...items].sort((a, b) =>
    a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0,
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
      <SectionReveal>
        <header className="mb-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-plum sm:text-4xl">
            Bump &amp; Scan Gallery
          </h1>
          <p className="mt-2 max-w-prose text-muted">
            A private keepsake of bump photos and ultrasound scans. Photos stay
            only on this device — nothing is ever uploaded.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <GlassCard className="mb-10">
          <form onSubmit={addItem} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  className="block w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-peach/15 file:px-4 file:py-2 file:font-medium file:text-terracotta hover:file:bg-peach/25"
                />
                {fileName && (
                  <span className="mt-1.5 block truncate text-xs text-muted">
                    Selected: {fileName}
                  </span>
                )}
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Date
                </span>
                <input
                  type="date"
                  value={date}
                  max={todayISO()}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputBase}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                Caption <span className="font-normal lowercase">(optional)</span>
              </span>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Week 20 bump, anatomy scan…"
                className={inputBase}
              />
            </label>

            {dataUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dataUrl}
                alt="Preview of selected photo"
                className="max-h-56 w-auto rounded-2xl border border-hairline object-contain"
              />
            )}

            {notice && (
              <p className="rounded-2xl bg-peach/15 px-4 py-2.5 text-sm text-terracotta">
                {notice}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!dataUrl}
                className="rounded-full bg-terracotta px-6 py-2.5 font-medium text-white shadow-glass transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add photo
              </button>
            </div>
          </form>
        </GlassCard>
      </SectionReveal>

      {sorted.length === 0 ? (
        <SectionReveal delay={0.1}>
          <GlassCard className="text-center">
            <p className="font-display text-xl text-plum">No photos yet</p>
            <p className="mt-2 text-muted">
              Add your first bump or scan photo above. It will be saved privately
              on this device.
            </p>
          </GlassCard>
        </SectionReveal>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {sorted.map((item, i) => (
            <SectionReveal key={item.id} delay={Math.min(i * 0.03, 0.3)}>
              <GlassCard className="break-inside-avoid p-3 sm:p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.dataUrl}
                  alt={item.caption || "Pregnancy photo"}
                  className="w-full rounded-2xl object-cover"
                />
                <div className="px-1 pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="sage">{formatDate(item.dateISO)}</Badge>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      aria-label="Delete photo"
                      className="rounded-full px-3 py-1 text-sm font-medium text-muted transition hover:bg-peach/15 hover:text-terracotta"
                    >
                      Delete
                    </button>
                  </div>
                  {item.caption && (
                    <p className="mt-2 leading-relaxed text-ink">
                      {item.caption}
                    </p>
                  )}
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      )}
    </div>
  );
}
