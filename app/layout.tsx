import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/nav/ThemeProvider";
import { Header } from "@/components/nav/Header";
import { MobileNav } from "@/components/nav/MobileNav";
import { Disclaimer } from "@/components/common/Disclaimer";

// Base path is injected at build time (e.g. "/latha-srinivas" on GitHub Pages).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Baby Journey AI — Your Daily Pregnancy Companion",
  description:
    "A beautiful, educational day-by-day pregnancy companion. Track development, milestones, and maternal wellbeing. Not a substitute for prenatal care.",
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  applicationName: "Baby Journey AI",
  icons: {
    icon: `${BASE_PATH}/icons/icon-192.png`,
    apple: `${BASE_PATH}/icons/apple-touch-icon.png`,
  },
  appleWebApp: { capable: true, title: "Baby Journey", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#E07A5F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts loaded at runtime so the static build works fully offline.
            Falls back to Georgia / system-ui gracefully if unavailable. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@300..700&display=swap"
        />
      </head>
      <body className="bg-grain min-h-dvh font-sans antialiased">
        <div className="bg-ambient" aria-hidden />
        <ThemeProvider>
          <Header />
          <main className="mx-auto w-full max-w-6xl px-4 pb-32 pt-4 sm:px-6 lg:pb-16">
            {children}
          </main>
          <Disclaimer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
