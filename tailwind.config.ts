import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          red: "#DC2626",
          gold: "#F59E0B",
          charcoal: "#111827",
          soft: "#F8FAFC"
        }
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(120deg, rgba(15,23,42,0.92), rgba(15,23,42,0.7))"
      }
    }
  },
  plugins: []
};

export default config;
