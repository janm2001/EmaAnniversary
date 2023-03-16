/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", ...defaultTheme.fontFamily.sans],
        antonio: ["Antonio", ...defaultTheme.fontFamily.sans],
        leaguespartan: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        text: "text 5s ease infinite",
        fade: "fade 3s ease",
      },
      bg:{
        lightWhite: "#f7f7f7",
      },

      keyframes: (theme) => ({
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fade: {
          "0%": { opacity: 0},
          "100%": { opacity:1 },
        },
      }),
      backgroundImage: {
        love: "url('./src/assets/love.jpg')",
      },
      
    },

    plugins: [],
  },
};
