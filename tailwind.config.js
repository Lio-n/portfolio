/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        nero: '#151515',
        'vivid-blue': '#3b82f6',
      },
    },
  },
  safelist: [
    {
      pattern: /(text|decoration|border|nero)-(nero)/,
      pattern: /(decoration)-(vivid-blue)/,
    },
  ],
  plugins: [],
};
