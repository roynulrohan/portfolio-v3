import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["emerald", "dark", "sunset"],
  },
}

