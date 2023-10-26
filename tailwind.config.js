//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "rgb(178, 239, 243)",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "blue-turquois": "#6DBEA8",
        "dark-blue": "rgb(38, 48, 63)",
        "dark-purple": "rgb(72,50,64)",
        "teal-medium": "rgb(90,141,146)",
        "blue-green": "#275F62",
        "dusty-pink": "#BC899A",
        "rown-pink": "#795F68",
        "light-blue": "#B7DEE3",

        "blue-green": "#318481",
        gradient: "background: rgb(177,242,231)",
        gradient1:
          "linear-gradient(90deg, rgba(177,242,231,1) 0%, rgba(182,218,216,1) 69%, rgba(5,89,106,1) 100%)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      // backgroundImage: {
      //   hero: "url('assets/images/hank1')",
      //   // card: "url('assets/images/thumbnail-background.svg')",
      // },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
