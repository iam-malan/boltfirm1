/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        'law-gold': '#C5A572',
        'law-dark': '#2C3E50',
        'law-light': '#ECF0F1'
      }
    }
  },
  plugins: []
}
