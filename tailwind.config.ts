import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      fontFamily: {
        bnazanin: ["var(--font-b-nazanin)"],
      },
      fontSize: {
        10: "2.5rem",
        "4.5": "1.125rem",
      },
      lineHeight: {
        14: "3.5rem",
      },
      spacing: {
        "1/2.05": "48.70%",
        "33": "8.25rem",
      },
      transitionProperty: {
        "max-h": "max-height",
        color: "color",
      },
      backgroundImage: {
        "gradient-footer": "linear-gradient(73deg, rgba(15,91,90,1) 0%, rgba(8,36,39,1) 50%, rgba(8,34,37,1) 100%);",
        "gradient-tab": "linear-gradient(260deg, #00BABA -6.71%, #002437 161.27%);",
      },
      colors: {
        input: {
          bg: "rgba(0, 91, 91, 0.50)",
        },
        black: {
          100: "#001215",
        },
        green: {
          300: "#91A4BC",
          400: "#40CDCD",
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
          800: "#344456",
          900: "#253343",
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
