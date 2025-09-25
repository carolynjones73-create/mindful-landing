/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // your custom palette
        "soft-ivory": "#FFF8F0",
        "pale-moon": "#F6F4EE",
        "warm-blush": "#FADADD",
        "soft-clay": "#C57B57",
        "muted-taupe": "#8B6F61",
        "greige": "#D8D3CC",
        "golden-cream": "#FCE9B6",
        "opal": "#A8D5D8",
        "soft-sky": "#CDE7FF",
        "sage-green": "#B7C8B5",
        "palm-green": "#2F6F4E",
        "stone-grey": "#2F2F2F",
        "warm-beige": "#EEDFD3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        serif: ["Crimson Text", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
