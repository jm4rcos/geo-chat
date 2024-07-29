/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        brutalism: "3px 4px 0px #000",
        button: "2px 2px 0px #000",
      },
      colors: {
        primary: "var(--primary)",
        default: "var(--background)",
        foreground: "var(--foreground)",
        danger: "var(--danger)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        info: "var(--info)",
        pink: "var(--pink)",

        title: "var(--title)",
        text: "var(--text)",

        border: "var(--border-color)",
      },
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
      "caret-blink": {
        "0%,70%,100%": { opacity: "1" },
        "20%,50%": { opacity: "0" },
      },
      "open-sidebar": {
        from: { width: "60px" },
        to: { width: "300px" },
      },
      "close-sidebar": {
        from: { width: "300px" },
        to: { width: "60px" },
      },
      "fade-in": {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "caret-blink": "caret-blink 1.25s ease-out infinite",
      "open-sidebar": "open-sidebar 0.2s ease-out",
      "close-sidebar": "close-sidebar 0.2s ease-out",
      "fade-in": "fade-in 0.2s ease-out",
    },
    borderColors: {
      default: "#000",
      foreground: "var(--foreground)",
      danger: "var(--danger)",
      accent: "var(--accent)",
      success: "var(--success)",
      warning: "var(--warning)",
      info: "var(--info)",
      pink: "var(--pink)",
    },
  },
  plugins: [],
};
