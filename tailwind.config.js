/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color:{
        primary: "rgb(var(--primary) / <alpha-value>",
        base: "rgb(var(--ui-base) / <alpha-value)",
        secondary: "rgb(var(--ui-secondary) / <alpha-value>)",
        accent: "rgb(var(--ui-accent) / <alpha-value>)",
        tcolor: "rgb(var(--text-color) / <alpha-value>)",
        tmuted: "rgb(var(--text-muted) / <alpha-value>)",
        borderColor: "rgb(var(--border-color) / <alpha-value>)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Correctly include the forms plugin
  ],
}
