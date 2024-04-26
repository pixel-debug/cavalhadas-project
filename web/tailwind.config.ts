import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
        xm: "12px",
        md: "14px",
        base: "16px",
        xl: "18px",
        lg: "20px",
        xl2: "26px",
        "2xl": "33px",
        "3xl": "45px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          "50": "#ffffff",
          "100": "#e0e0e0",
          "200": "#dedede",
          "300": "#c6c6c6",
          "400": "#ababab",
          "500": "#818181",
          "600": "#6f6f6f",
          "700": "#4b4b4b",
          "800": "#404040",
          "900": "#000000",
        },
        blue: {
          "50": "#0001fc",
          "100": "#0001c8",
          "200": "#70acca",
        },
        red: {
          "50": "#ff0000",
          "100": "#d31818",
          "200": "#921212",
          "300": "#6f2200",
          "400": "#62341f",
          "500": "#97380e",
          "600": "#8d3b26",
        },
      },
    },
  },
  plugins: [],
};
export default config;
