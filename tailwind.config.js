/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom palette using CSS variables
        "soft-ivory": "var(--soft-ivory)",
        "pale-moon": "var(--pale-moon)",
        "warm-blush": "var(--warm-blush)",
        "soft-clay": "var(--soft-clay)",
        "muted-taupe": "var(--muted-taupe)",
        "greige": "var(--greige)",
        "golden-cream": "var(--golden-cream)",
        "opal": "var(--opal)",
        "soft-sky": "var(--soft-sky)",
        "sage-green": "var(--sage-green)",
        "palm-green": "var(--palm-green)",
        "stone-grey": "var(--stone-grey)",
        "warm-beige": "var(--warm-beige)",
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