/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        header: "#d4c6b2",
        info: "#f2e8dc",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      screens: {
        sm: "560px",
        xl: "1200px",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 100,
          },
        },
        "fade-out": {
          from: {
            opacity: 100,
          },
          to: {
            opacity: 0,
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(.3)",
          },
          "55%": {
            transform: "scale(1.05)",
          },
          "75%": {
            transform: "scale(.9)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        shake: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "65%": {
            transform: "rotate(-5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "fade-in-300": "fade-in 0.3s ease-in-out forwards",
        "fade-in-1000": "fade-in 1s ease-in-out forwards",
        "fade-out-300": "fade-out 0.3s ease-in-out forwards",
        "bounce-in-1000": "bounce-in 1s ease-in-out forwards",
        "shake-1200": "shake 1.2s linear infinite forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
