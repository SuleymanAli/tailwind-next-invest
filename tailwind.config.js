/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#128C76",
      secondary: "#F56B8D",
      grey: {
        DEFAULT: "#333",
        light: "#999",
      },
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: "0px 24px 60px 0px #33333329",
      hover: "0px 80px 120px 0px #33333366",
    },
    extend: {
      fontSize: {
        "2xs": ["10px", "12px"],
      },
      spacing: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
