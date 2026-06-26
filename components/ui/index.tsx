import { ReactNode } from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className = "", children, ...rest }: DivProps & { children: ReactNode }) {
  return (
    <div
      className={`glass rounded-4xl p-5 shadow-glass sm:p-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function StatTile({
  label,
  value,
  sub,
  accent = "peach",
}: {
  label: string;
  value: ReactNode;
  sub?: string;
  accent?: "peach" | "sage" | "plum" | "terracotta";
}) {
  const accentClass = {
    peach: "text-terracotta",
    sage: "text-sage",
    plum: "text-plum",
    terracotta: "text-terracotta",
  }[accent];
  return (
    <div className="glass flex flex-col rounded-3xl p-4">
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
      <span className={`mt-1 font-display text-2xl font-semibold ${accentClass}`}>
        {value}
      </span>
      {sub && <span className="mt-0.5 text-xs text-muted">{sub}</span>}
    </div>
  );
}

export function Badge({
  children,
  tone = "peach",
}: {
  children: ReactNode;
  tone?: "peach" | "sage" | "plum";
}) {
  const tones = {
    peach: "bg-peach/15 text-terracotta",
    sage: "bg-sage/15 text-sage",
    plum: "bg-plum/10 text-plum",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-plum sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function ProgressBar({ pct }: { pct: number }) {
  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-full bg-linen"
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-peach to-terracotta transition-[width] duration-1000 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </div>
  );
}
