import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        soft: "var(--color-soft)",
        line: "var(--color-line)",
        "line-strong": "var(--color-line-strong)",
        mint: {
          100: "var(--color-mint-100)",
          200: "var(--color-mint-200)",
          400: "var(--color-mint-400)",
          500: "var(--color-mint-500)",
        },
        navy: {
          700: "var(--color-navy-700)",
          900: "var(--color-navy-900)",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(12, 29, 58, 0.10)",
        glow: "0 14px 35px rgba(17, 71, 56, 0.18)",
        premium: "0 22px 70px rgba(13, 31, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
        float: "0 18px 48px rgba(13, 31, 60, 0.08), 0 6px 18px rgba(13, 31, 60, 0.05)",
      },
      borderRadius: {
        card: "28px",
        pill: "999px",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(137, 234, 196, 0.34), transparent 30%), radial-gradient(circle at top right, rgba(18, 38, 74, 0.08), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(242,247,245,0.88))",
        "footer-glow":
          "radial-gradient(circle at top, rgba(137,234,196,0.30), transparent 38%), linear-gradient(180deg, rgba(241,247,245,0.8), rgba(225,239,235,0.9))",
        "premium-card":
          "linear-gradient(180deg, rgba(255,255,255,0.94), rgba(248,251,252,0.88))",
      },
    },
  },
  plugins: [],
};

export default config;
