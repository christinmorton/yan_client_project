/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  darkMode: "class",
  theme: {
    screens: {
      xxs: "325px",
      xs: "540px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        // Fluid typography scale based on viewport width
        '2xs': ['calc(0.5rem + 0.25vw)', '.5rem'],
        'xs': ['calc(0.75rem + 0.5vw)', '1rem'],
        'sm': ['calc(0.875rem + 0.5vw)', '1.25rem'],
        'base': ['calc(1rem + 0.5vw)', '1.5rem'],
        'lg': ['calc(1.125rem + 0.5vw)', '1.75rem'],
        'xl': ['calc(1.25rem + 0.5vw)', '2rem'],
        '2xl': ['calc(1.5rem + 0.5vw)', '2.25rem'],
        '3xl': ['calc(1.875rem + 0.5vw)', '2.75rem'],
        '4xl': ['calc(2.25rem + 0.5vw)', '3rem'],
        '5xl': ['calc(3rem + 0.5vw)', '4rem'],
        '6xl': ['calc(3.75rem + 0.5vw)', '5rem'],
      },
      colors: {
        "picton-blue": {
          50: "#f1f8fe",
          100: "#e2f0fc",
          200: "#bee0f9",
          300: "#84c7f5",
          400: "#3ca8ec",
          500: "#1b91dc",
          600: "#0e72bb",
          700: "#0c5b98",
          800: "#0e4e7e",
          900: "#124168",
          950: "#0c2945",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
