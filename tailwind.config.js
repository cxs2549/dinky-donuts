/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#C63663",
        brandLight: "#EA1E8C",
        surface: "var(--gray-9)",
        surface2: "var(--gray-8)",
      },
    },
  },
  plugins: [],
}
