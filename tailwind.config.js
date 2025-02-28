/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3b82f6",
          "secondary": "#9333ea",
          "accent": "#22c55e",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "text-color": "#1f2937" // Asegura un color de texto oscuro en el tema claro
        },
        dark: {
          "primary": "#2563eb",
          "secondary": "#7c3aed",
          "accent": "#16a34a",
          "neutral": "#1e293b",
          "base-100": "#b32134",
          "text-color": "#ffffff" // Color claro en modo oscuro
        }
      }
    ]
  }
}