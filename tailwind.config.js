// tailwind.config.js (ESM)
import { claro } from "@/styles/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ✅ Estos nombres deben coincidir con los que usás en las clases (bg-primary-500, etc.)
        primary: claro.primary,
        surface: claro.surface,
        accent:  claro.accent,
      },
    },
  },
  plugins: [],
};
