"use client";

import { useEffect, useState } from "react";
import {
  read,
  write,
  uid,
  KEYS,
  type JournalEntry,
} from "@/lib/storage";
import { GlassCard, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

const todayISO = () => new Date().toISOString().slice(0, 10);

function formatDate(iso: string): string {
  // Parse as local date to avoid timezone drift on a plain YYYY-MM-DD string.
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const inputBase =
  "w-full rounded-2xl border border-hairline bg-surface/60 px-4 py-2.5 text-ink placeholder:text-muted/70 transition focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30";

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [date, setDate] = useState(todayISO());
  const [text, setText] = useState("");
  const [milestone, setMilestone] = useState("");

  useEffect(() => {
    setEntries(read<JournalEntry[]>(KEYS.journal, []));
  }, []);

  function persist(next: JournalEntry[]) {
    setEntries(next);
    write(KEYS.journal, next);
  }

  function addEntry(e: React.FormEvent) {
    e.preventDefault();
    const body = text.trim();
    if (!body) return;
    const entry: JournalEntry = {
      id: uid(),
      dateISO: date || todayISO(),
      text: body,
      milestone: milestone.trim() || undefined,
    };
    persist([entry, ...entries]);
    setText("");
    setMilestone("");
    setDate(todayISO());
  }

  function remove(id: string) {
    persist(entries.filter((entry) => entry.id !== id));
  }

  const sorted = [...entries].sort((a, b) =>
    a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0,
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
      <SectionReveal>
        <header className="mb-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-plum sm:text-4xl">
            Daily Journal
          </h1>
          <p className="mt-2 max-w-prose text-muted">
            A gentle place to capture how today felt, the little wins, and the
            milestones worth remembering.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <GlassCard className="mb-10">
          <form onSubmit={addEntry} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
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
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Milestone <span className="font-normal lowercase">(optional)</span>
                </span>
                <input
                  type="text"
                  value={milestone}
                  onChange={(e) => setMilestone(e.target.value)}
                  placeholder="First kick, 20-week scan…"
                  className={inputBase}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                Notes
              </span>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                placeholder="Write a few lines about today…"
                className={`${inputBase} min-h-[120px] resize-y leading-relaxed`}
              />
            </label>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!text.trim()}
                className="rounded-full bg-terracotta px-6 py-2.5 font-medium text-white shadow-glass transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add entry
              </button>
            </div>
          </form>
        </GlassCard>
      </SectionReveal>

      {sorted.length === 0 ? (
        <SectionReveal delay={0.1}>
          <GlassCard className="text-center">
            <p className="font-display text-xl text-plum">No entries yet</p>
            <p className="mt-2 text-muted">
              Your first journal entry will appear here. Start with whatever is
              on your mind today.
            </p>
          </GlassCard>
        </SectionReveal>
      ) : (
        <ul className="space-y-5">
          {sorted.map((entry, i) => (
            <SectionReveal key={entry.id} delay={Math.min(i * 0.04, 0.3)}>
              <li>
                <GlassCard>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        dateTime={entry.dateISO}
                        className="font-display text-lg font-semibold text-plum"
                      >
                        {formatDate(entry.dateISO)}
                      </time>
                      {entry.milestone && (
                        <Badge tone="peach">★ {entry.milestone}</Badge>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(entry.id)}
                      aria-label="Delete entry"
                      className="rounded-full px-3 py-1 text-sm font-medium text-muted transition hover:bg-peach/15 hover:text-terracotta"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="whitespace-pre-wrap leading-relaxed text-ink">
                    {entry.text}
                  </p>
                </GlassCard>
              </li>
            </SectionReveal>
          ))}
        </ul>
      )}
    </div>
  );
}
