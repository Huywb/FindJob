// tailwind.config.js
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
    extend: {
        colors: {
            primary: "hsl(var(--primary) / <alpha-value>)",
            "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
            background: "hsl(var(--background) / <alpha-value>)",
            foreground: "hsl(var(--foreground) / <alpha-value>)",
            secondary: "hsl(var(--secondary) / <alpha-value>)",
            border: "hsl(var(--border) / <alpha-value>)",
            ring: "hsl(var(--ring) / <alpha-value>)",
        },
    },
};
export const plugins = [
    require("tailwindcss-animate"),
];
