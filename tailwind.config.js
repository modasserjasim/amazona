/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {

  //         "primary": "#E0A82E",

  //         "secondary": "#F9D72F",

  //         "accent": "#18182F",

  //         "neutral": "#18182F",

  //         "base-100": "#FFFFFF",

  //         "info": "#3ABFF8",

  //         "success": "#36D399",

  //         "warning": "#FBBD23",

  //         "error": "#F87272",
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF9900",

          "secondary": "#1C2B35",

          "accent": "#FFE0B3",

          "neutral": "#18182F",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FF3030",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
