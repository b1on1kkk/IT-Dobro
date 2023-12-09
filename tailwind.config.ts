import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      width: {
        40: "40px",
        28: "28%",
        50: "50%"
      },
      height: {
        150: "150px",
        40: "40px",
        300: "300px",
        320: "320px",
        50: "50%"
      },
      backgroundColor: {
        main_green: "#c5d2b6",
        second_green: "#7e9a5c",
        catalog_button: "#d7d7d2"
      },
      padding: {
        170: "170px"
      },
      margin: {
        50: "50px"
      },
      borderColor: {
        main_green: "#c5d2b6",
        second_green: "#7e9a5c"
      },
      minWidth: {
        210: "210px"
      },
      fontFamily: {
        slide: ["Sequel Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
