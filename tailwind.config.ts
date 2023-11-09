import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionProperty: {
        "max-h": "max-height",
        color: "color",
      },
      colors: {
        input: {
          bg: "rgba(0, 91, 91, 0.50)",
        },
        green: {
          300: "#91A4BC",
          500: "#00BABA",
          600: "#00A7A7",
          700: "#008C8C",
          900: "#005B5B",
        },
        gray: {
          100: "#D1DBE8",
          200: "#B2C2D6",
          300: "#91A4BC",
          400: "#7A90AA",
          500: "#647E9A",
          600: "#566E88",
          700: "#465A71",
        },
        red: {
          500: "#EE5353",
          600: "#D64B4B",
        },
      },
      animation: {
        fillbar: "fillbar linear",
      },
      keyframes: {
        fillbar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
} as Config;
