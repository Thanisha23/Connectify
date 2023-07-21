/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lilita: ["Lilita One", "cursive"],
      },
      backgroundImage: {
        "bg-3": "url('./public/assets/bg-3.png')",
        depth: "url('./src/images/depth.png')",
        footer: "url('./src/images/footer.jpg')",
      },
    },
  },
  plugins: [],
};
