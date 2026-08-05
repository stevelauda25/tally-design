import preset from '@tally-ui/tokens/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tally-ui/ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
