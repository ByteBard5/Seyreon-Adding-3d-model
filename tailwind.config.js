/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "glass-dark": "rgba(26,26,26,0.6)",
      },
      animation: {
        shine: "shine 2s linear infinite",
        textGlow: "textGlow 3s ease-in-out infinite",
        fadeIn: "fadeIn 1.2s ease-in-out forwards",
        scalePop: "scalePop 0.4s ease-out forwards",
        shimmer: "shimmer 8s linear infinite",
        slideLeft: "slideLeft 60s linear infinite",
        bounceStar: "bounceStar 0.8s ease-in-out infinite alternate",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        textGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px #a855f7)",
          },
          "50%": {
            filter: "drop-shadow(0 0 16px #d946ef)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scalePop: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% center",
          },
          "100%": {
            backgroundPosition: "200% center",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        bounceStar: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-2px)" },
        },
      },
    },
  },
  plugins: [],
};
