/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poetsenOne: ["Poetsen One"],
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
      },
      fontWeight: {
        "montserrat-regular": 400,
        "montserrat-bold": 900,
      },
    },
  },
  plugins: [],
};
