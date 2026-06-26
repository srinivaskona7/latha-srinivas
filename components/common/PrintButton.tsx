"use client";

export function PrintButton({ label = "Print / Save as PDF" }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03] active:scale-95"
    >
      <span aria-hidden>⎙</span> {label}
    </button>
  );
}
