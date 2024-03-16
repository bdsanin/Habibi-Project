import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "text-stroke": {
          "0%": {
            fill: "#6C63FF00",
            stroke: "#6C63FF",
            "stroke-dashoffset": "25%",
            "stroke-dasharray": "0 50%",
            "stroke-width": "2",
          },
          "70%": {
            fill: "#6C63FF00",
            stroke: "#6C63FF",
          },
          "80%": {
            fill: "#6C63FF00",
            stroke: "#6C63FF",
            "stroke-width": "2",
          },
          "100%": {
            fill: "#6C63FF",
            stroke: "#6C63FF00",
            "stroke-dashoffset": "-25%",
            "stroke-dasharray": "50% 0",
            "stroke-width": "0",
          },
        },
      },
      animation: {
        "text-stroke": "text-stroke 5s alternate",
      },
      colors: {
        primary: "#6C63FF",
        primaryDark: "#4c46c5",
      },
    },
  },
  plugins: [],
};
export default config;
