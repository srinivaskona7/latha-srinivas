"use client";

import { useEffect, useState } from "react";
import {
  read,
  write,
  uid,
  KEYS,
  type Medication,
} from "@/lib/storage";
import { GlassCard, Badge } from "@/components/ui";
import { SectionReveal } from "@/components/common/SectionReveal";

const todayISO = () => new Date().toISOString().slice(0, 10);
const doseKey = (time: string) => `${todayISO()}@${time}`;

const inputBase =
  "w-full rounded-2xl border border-hairline bg-surface/60 px-4 py-2.5 text-ink placeholder:text-muted/70 transition focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30";

function sortTimes(times: string[]): string[] {
  return [...times].sort();
}

export default function MedicationsPage() {
  const [meds, setMeds] = useState<Medication[]>([]);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [schedule, setSchedule] = useState<string[]>([]);
  const [timeInput, setTimeInput] = useState("");
  const [reminderMsg, setReminderMsg] = useState<string | null>(null);

  useEffect(() => {
    setMeds(read<Medication[]>(KEYS.medications, []));
  }, []);

  function persist(next: Medication[]) {
    setMeds(next);
    write(KEYS.medications, next);
  }

  function addTime() {
    const t = timeInput.trim();
    if (!t || schedule.includes(t)) return;
    setSchedule(sortTimes([...schedule, t]));
    setTimeInput("");
  }

  function removeTime(t: string) {
    setSchedule(schedule.filter((x) => x !== t));
  }

  function addMed(e: React.FormEvent) {
    e.preventDefault();
    const medName = name.trim();
    if (!medName) return;
    const med: Medication = {
      id: uid(),
      name: medName,
      notes: notes.trim(),
      schedule: sortTimes(schedule),
      doses: {},
    };
    persist([med, ...meds]);
    setName("");
    setNotes("");
    setSchedule([]);
    setTimeInput("");
  }

  function removeMed(id: string) {
    persist(meds.filter((m) => m.id !== id));
  }

  function toggleDose(medId: string, time: string) {
    const key = doseKey(time);
    persist(
      meds.map((m) => {
        if (m.id !== medId) return m;
        const doses = { ...m.doses };
        if (doses[key] === "taken") delete doses[key];
        else doses[key] = "taken";
        return { ...m, doses };
      }),
    );
  }

  async function requestReminders() {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setReminderMsg(
        "Reminders aren't supported on this browser, but your schedule is saved here.",
      );
      return;
    }
    try {
      const perm = await Notification.requestPermission();
      if (perm === "granted") {
        setReminderMsg(
          "Reminders enabled. Keep this app open to see schedule notes — it won't notify in the background.",
        );
      } else {
        setReminderMsg(
          "Notifications are off. You can still track doses here any time.",
        );
      }
    } catch {
      setReminderMsg("Couldn't request notification permission on this device.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
      <SectionReveal>
        <header className="mb-6">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-plum sm:text-4xl">
            Medication Tracker
          </h1>
          <p className="mt-2 max-w-prose text-muted">
            A simple way to remember and check off the medicines your clinician
            has already prescribed.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <div className="mb-8 rounded-4xl border border-terracotta/30 bg-peach/15 p-5 text-sm leading-relaxed text-ink">
          <strong className="font-semibold text-terracotta">
            Important:
          </strong>{" "}
          Only add medicines your own clinician has prescribed. This tool helps
          you remember and track — it does not provide medical or dosage advice.
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08}>
        <GlassCard className="mb-10">
          <form onSubmit={addMed} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                Medicine name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Prenatal vitamin"
                className={inputBase}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                Notes <span className="font-normal lowercase">(optional)</span>
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Dosage your clinician gave you, with food, etc."
                className={`${inputBase} min-h-[84px] resize-y leading-relaxed`}
              />
            </label>

            <div className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                Schedule times
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="time"
                  value={timeInput}
                  onChange={(e) => setTimeInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTime();
                    }
                  }}
                  className={`${inputBase} max-w-[10rem]`}
                />
                <button
                  type="button"
                  onClick={addTime}
                  disabled={!timeInput.trim()}
                  className="rounded-full border border-hairline bg-surface/60 px-4 py-2.5 font-medium text-plum transition hover:bg-peach/15 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Add time
                </button>
              </div>
              {schedule.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {schedule.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-sage/15 px-3 py-1 text-sm font-medium text-sage"
                    >
                      {t}
                      <button
                        type="button"
                        onClick={() => removeTime(t)}
                        aria-label={`Remove ${t}`}
                        className="text-sage/80 transition hover:text-terracotta"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!name.trim()}
                className="rounded-full bg-terracotta px-6 py-2.5 font-medium text-white shadow-glass transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add medication
              </button>
            </div>
          </form>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={requestReminders}
            className="rounded-full border border-hairline bg-surface/60 px-5 py-2 text-sm font-medium text-plum transition hover:bg-peach/15"
          >
            Remind me
          </button>
          {reminderMsg && (
            <span className="text-sm text-muted">{reminderMsg}</span>
          )}
        </div>
      </SectionReveal>

      {meds.length === 0 ? (
        <SectionReveal delay={0.12}>
          <GlassCard className="text-center">
            <p className="font-display text-xl text-plum">
              No medications added
            </p>
            <p className="mt-2 text-muted">
              Add a prescribed medicine above to start tracking your doses.
            </p>
          </GlassCard>
        </SectionReveal>
      ) : (
        <ul className="space-y-5">
          {meds.map((med, i) => (
            <SectionReveal key={med.id} delay={Math.min(i * 0.04, 0.3)}>
              <li>
                <GlassCard>
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold text-plum">
                      {med.name}
                    </h2>
                    <button
                      type="button"
                      onClick={() => removeMed(med.id)}
                      aria-label="Delete medication"
                      className="rounded-full px-3 py-1 text-sm font-medium text-muted transition hover:bg-peach/15 hover:text-terracotta"
                    >
                      Delete
                    </button>
                  </div>

                  {med.notes && (
                    <p className="mb-4 whitespace-pre-wrap leading-relaxed text-ink">
                      {med.notes}
                    </p>
                  )}

                  {med.schedule.length === 0 ? (
                    <p className="text-sm text-muted">No schedule times set.</p>
                  ) : (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        Today
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {med.schedule.map((time) => {
                          const taken = med.doses[doseKey(time)] === "taken";
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => toggleDose(med.id, time)}
                              aria-pressed={taken}
                              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                                taken
                                  ? "bg-sage text-white"
                                  : "border border-hairline bg-surface/60 text-plum hover:bg-peach/15"
                              }`}
                            >
                              <span className="tabular-nums">{time}</span>
                              <span>{taken ? "Taken ✓" : "Mark taken"}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </GlassCard>
              </li>
            </SectionReveal>
          ))}
        </ul>
      )}
    </div>
  );
}
