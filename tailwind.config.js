/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      colors: {
        brand: {
          primary: 'var(--brand-primary, #C89B3C)',
          secondary: 'var(--brand-secondary, #0F1117)',
          accent: 'var(--brand-accent, #DE8959)',
        }
      }
    },
  },
  plugins: [],
}
