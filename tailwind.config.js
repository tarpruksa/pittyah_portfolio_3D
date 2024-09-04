/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'suse': ['SUSE', 'sans-serif']
      },
      colors: {
        primary: "#050816",
        secondary: "#a6bbc3",
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        "black-md": "2px 4px 4px #000",
      },
      dropShadow: {
        "white-md": "0 0px 5px #dadada",
        "white-lg": "0 0px 8px #dadada",
        "black-xs": "2px 3px 3px #121212",
      }
    },
  },
  plugins: [],
};
