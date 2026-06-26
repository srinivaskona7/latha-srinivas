import type { OrganMap, SystemKey } from "@/lib/types";
import { SYSTEM_LABELS } from "@/lib/derive";

const STATUS_TONE: Record<string, string> = {
  forming: "bg-peach/15 text-terracotta border-peach/30",
  maturing: "bg-sage/15 text-sage border-sage/30",
  refining: "bg-plum/10 text-plum border-plum/20",
};

/** Grid of organ/system development cards for a given week's OrganMap. */
export function OrganGrid({
  organs,
  newlyForming = [],
}: {
  organs: OrganMap;
  newlyForming?: SystemKey[];
}) {
  const keys = Object.keys(organs) as SystemKey[];
  const fresh = new Set(newlyForming);

  if (keys.length === 0) {
    return (
      <p className="text-sm text-muted">
        In these earliest days the body&apos;s foundations are just being laid —
        organ systems begin to appear in the coming weeks.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => {
        const entry = organs[key]!;
        return (
          <div
            key={key}
            className="print-block glass flex flex-col gap-1.5 rounded-3xl p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-plum">
                {SYSTEM_LABELS[key]}
              </h3>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  STATUS_TONE[entry.status] ?? STATUS_TONE.forming
                }`}
              >
                {entry.status}
              </span>
            </div>
            {fresh.has(key) && (
              <span className="w-fit rounded-full bg-terracotta/15 px-2 py-0.5 text-[10px] font-semibold text-terracotta">
                ✶ newly forming
              </span>
            )}
            <p className="text-sm leading-relaxed text-muted">{entry.text}</p>
          </div>
        );
      })}
    </div>
  );
}
