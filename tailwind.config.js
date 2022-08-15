/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        // Light Palete
        backgroundLight: "#fdfcfc",
        primaryLight: "#d60850",
        secondaryLight: "#cfcfcf",
        accentLight: "#f3f3f3",
        neutralLight: "#01030b",

        // None changeable
        errorLight: "#b60303",
        successLight: "#37b90b",

        // Dark Palete
        backgroundDark: "#141317",
        primaryDark: "#f71d69",
        secondaryDark: "#333333",
        accentDark: "#262626",
        neutralDark: "#f0f0f0"
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addVariant }) {
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
      addVariant("ascendent", "& *");
    }
  ]
};
