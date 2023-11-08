import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionProperty: {
        "max-h": "max-height",
      },
      colors: {
        input: {
          bg: "rgba(0, 91, 91, 0.50)",
        },
        green: {
          700: "#008C8C",
          300: "#91A4BC",
          500: "#00BABA",
          600: "#00A7A7",
          900: "#005B5B",
        },
        gray: {
          200: "#B2C2D6",
          300: "#91A4BC",
          400: "#7A90AA",
          500: "#647E9A",
          700: "#465A71",
        },
        red: {
          500: "#EE5353",
          600: "#D64B4B",
        },
      },
    },
  },
} as Config;
