export type NavLink = { href: string; label: string; icon: string };

/** Primary navigation, used by Header (desktop) and MobileNav. */
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Today", icon: "✶" },
  { href: "/timeline", label: "Timeline", icon: "↔" },
  { href: "/explore", label: "3D Baby", icon: "◉" },
  { href: "/health", label: "Health", icon: "♡" },
  { href: "/nutrition", label: "Nutrition", icon: "🍃" },
  { href: "/journal", label: "Journal", icon: "✎" },
];

/** Secondary links surfaced in the header menu / footer areas. */
export const MORE_LINKS: NavLink[] = [
  { href: "/scans", label: "Scans", icon: "◎" },
  { href: "/labs", label: "Lab tests", icon: "⚗" },
  { href: "/partner", label: "Partner", icon: "⚭" },
  { href: "/gallery", label: "Gallery", icon: "▣" },
  { href: "/medications", label: "Medications", icon: "✚" },
];
