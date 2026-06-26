import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Editorial Wellness palette (driven by CSS vars for theming)
        cream: "rgb(var(--cream) / <alpha-value>)",
        linen: "rgb(var(--linen) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        plum: "rgb(var(--plum) / <alpha-value>)",
        peach: {
          DEFAULT: "rgb(var(--peach) / <alpha-value>)",
          soft: "rgb(var(--peach-soft) / <alpha-value>)",
        },
        terracotta: "rgb(var(--terracotta) / <alpha-value>)",
        sage: {
          DEFAULT: "rgb(var(--sage) / <alpha-value>)",
          soft: "rgb(var(--sage-soft) / <alpha-value>)",
        },
        surface: "rgb(var(--surface) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glass: "0 8px 40px -12px rgb(var(--ink) / 0.18)",
        lift: "0 20px 60px -20px rgb(var(--ink) / 0.28)",
      },
      backdropBlur: { xs: "2px" },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
