console.log(process.env.NODE_ENV);
const purge = process.env.NODE_ENV == "production" ? true : false;
const colors = require("tailwindcss/colors");

module.exports = {
  purge: { enabled: purge, content: ["./build/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Primary
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        // Neutral
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        body: ["Public Sans"],
      },
    },
  },
  variants: {
    extend: {},
    variants: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};