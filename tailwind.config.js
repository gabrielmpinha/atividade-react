/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: { maxWidth: { "1/2": "50%" }, margin:{'1/4':'25%'}},
  },
  plugins: [],
};
