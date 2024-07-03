/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#FF0000",
        customSalmon: "#FFA27F",
        customCream: "#FFE8C5",
        customGreen: "#97BE5A",
      },
    },
  },
  plugins: [],
};
