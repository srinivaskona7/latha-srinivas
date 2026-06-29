export type NavLink = { href: string; label: string; icon: string };

/** Primary navigation, used by Header (desktop) and MobileNav. */
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Today", icon: "✶" },
  { href: "/timeline", label: "Timeline", icon: "↔" },
  { href: "/explore", label: "3D Baby", icon: "◉" },
  { href: "/imagine", label: "Imagine", icon: "💭" },
  { href: "/guides", label: "Guides", icon: "✦" },
  { href: "/journal", label: "Journal", icon: "✎" },
];

/** Secondary links surfaced in the header menu / footer areas. */
export const MORE_LINKS: NavLink[] = [
  { href: "/health", label: "Health", icon: "♡" },
  { href: "/nutrition", label: "Nutrition", icon: "🍃" },
  { href: "/diet-plan", label: "Diet Plan", icon: "🍲" },
  { href: "/anc-visits", label: "ANC Visits", icon: "🩺" },
  { href: "/scans", label: "Scans", icon: "◎" },
  { href: "/labs", label: "Lab tests", icon: "⚗" },
  { href: "/vaccinations", label: "Vaccines", icon: "💉" },
  { href: "/concerns", label: "Concerns", icon: "🩹" },
  { href: "/warning-signs", label: "Warning Signs", icon: "⚠️" },
  { href: "/yoga", label: "Yoga", icon: "🧘" },
  { href: "/garbha-sanskar", label: "Garbha Sanskar", icon: "🪔" },
  { href: "/hospital-bag", label: "Hospital Bag", icon: "🧳" },
  { href: "/schemes", label: "Schemes", icon: "🏛️" },
  { href: "/postpartum", label: "Postpartum", icon: "🤱" },
  { href: "/partner", label: "Partner", icon: "⚭" },
  { href: "/gallery", label: "Gallery", icon: "▣" },
  { href: "/medications", label: "Medications", icon: "✚" },
];
