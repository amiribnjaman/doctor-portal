module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    mytheme: {
      "primary": "#19D3AE",
      "secondary": "#0FCFEC",
      "accent": "#3A4256",
      "neutral": "#3D4451",
      "base-100": "#FFFFFF",
      "info": "#3ABFF8",
      "success": "#36D399",
      "warning": "#FBBD23",
      "error": "#F87272",
    },
  },
  plugins: [require("daisyui")],
}