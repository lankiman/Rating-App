/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/result.html", "./src/**/*.js"],
  theme: {
    screens: {
      sm: "4px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    fontFamily: {
      sans: ["Overpass", "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        Blue: "hsl(213, 19%, 18%)",
        Grey: "hsl(217, 12%, 63%)",
        DGrey: "hsl(216, 12%, 54%)",
        Dblue: "hsl(216, 12%, 8%)"
      }
    }
  },
  plugins: []
};
