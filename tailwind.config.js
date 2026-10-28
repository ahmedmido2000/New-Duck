/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0D0204",
          red: "#FF0A2B",
          "red-hover": "#E00020",
          wine: "#7A0B1A",
          "wine-dark": "#3A0610",
          card: "#1A0509",
          "card-dark": "#12030A",
          "card-alt": "#2A0509",
          border: "#3A0C15",
          "border-dark": "#2E0A11",
          muted: "#C9A4A8",
          light: "#E6CDD0",
          pink: "#FFB3BE",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Cairo", "Tahoma", "sans-serif"],
      },
      keyframes: {
        flow: {
          from: { strokeDashoffset: "1.4" },
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        flow: "flow 5s linear infinite",
        "flow-slow": "flow 7s linear infinite",
        "flow-slower": "flow 6s linear infinite",
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
