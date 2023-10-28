/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // fontFamily: {
      //   bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      // },
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 20%" },
          "10%": { "background-position": "20% 40%" },
          "20%": { "background-position": "40% 60%" },
          "30%": { "background-position": "60% 80%" },
          "0%": { "background-position": "80% 100%" },
          "50%": { "background-position": "100% 80%" },
          "60%": { "background-position": "80% 60%" },
          "70%": { "background-position": "60% 40%" },
          "80%": { "background-position": "40% 20%" },
          "90%": { "background-position": "20% 0%" },
          "100%": { "background-position": "50% 100%" },
        },
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/container-queries"),
    require("tailwindcss-bg-patterns"),
  ],
};
