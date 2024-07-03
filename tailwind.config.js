/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "white",
      black: "black",
      pink: "#FF7565",
      blue: "#040415",
      gray: "#8D9DBC",
      lightblue: "#161626",
      lightgray: "#98A7C3",
    },
    screens: {
      lg: { max: "1024px" },
      tab: { max: "991px" },
      mob: { max: "768px" },
    },
    extend: {
      backgroundImage: {},
      plugins: [],
    },
  },
};
