/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#1a202c', // Fondo oscuro
        primary: '#4a5568', // Color principal gris oscuro
        secondary: '#2d3748', // Segundo color gris oscuro
        accent: '#41ba75', // Azul claro para resaltar
        textPrimary: '#e2e8f0', // Texto claro
        textSecondary: '#a0aec0', // Texto secundario
        success: '#48bb78', // Verde para éxito
        danger: '#f56565', // Rojo para errores
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
