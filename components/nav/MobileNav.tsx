"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./links";

export function MobileNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="no-print fixed inset-x-0 bottom-0 z-40 px-3 pb-3 lg:hidden">
      <div className="glass mx-auto flex max-w-md items-center justify-between rounded-full px-2 py-1.5 shadow-lift">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-label={l.label}
            className={`flex flex-1 flex-col items-center gap-0.5 rounded-full py-1.5 text-[10px] font-medium transition-colors ${
              isActive(l.href) ? "text-terracotta" : "text-muted"
            }`}
          >
            <span aria-hidden className="text-base">{l.icon}</span>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
