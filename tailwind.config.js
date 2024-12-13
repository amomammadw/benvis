/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#264653",
        secondary: "#2a9d8f",
        mustard: "#e9c46a",
        brick: "#e76f51",
      },
    },
  },
  plugins: [],
};
