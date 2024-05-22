import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
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
          "50": "#EBF6F8",
          "100": "#D2D8E2",
          "200": "#B1B9CE",
          "300": "#909AB9",
          "400": "#6F78A5",
          "500": "#4E5F90",
          "600": "#2D476C",
          "700": "#0C2E57",
          "800": "#001640",
          "900": "#0001fc",
        },
        red: {
          "50": "#F9E7E6",
          "100": "#ECDAD8",
          "200": "#E3A9A0",
          "300": "#DA7872",
          "400": "#D2473E",
          "500": "#C9160B",
          "600": "#BF0000",
          "700": "#A40000",
          "800": "#880000",
          "900": "#FF0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
