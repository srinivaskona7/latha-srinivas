"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, MORE_LINKS } from "./links";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="no-print sticky top-0 z-40 mx-auto mt-3 w-full max-w-6xl px-4 sm:px-6">
      <div className="glass flex items-center justify-between gap-3 rounded-full px-4 py-2 shadow-glass">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-peach/20 text-peach">
            <span aria-hidden className="animate-floaty text-lg">✶</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-plum">
            Baby&nbsp;Journey
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-peach/20 text-terracotta"
                  : "text-muted hover:bg-linen hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="More pages"
            aria-expanded={open}
            className="hidden h-10 items-center gap-1 rounded-full glass px-3 text-sm font-medium lg:flex"
          >
            More <span aria-hidden>{open ? "▲" : "▾"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mt-2 grid grid-cols-2 gap-1 rounded-3xl p-2 shadow-glass sm:grid-cols-3 lg:grid-cols-5">
          {MORE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-muted transition-colors hover:bg-linen hover:text-ink"
            >
              <span aria-hidden>{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
