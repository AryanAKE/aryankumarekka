/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/components/VE*.jsx',
    './src/pages/VideoEdit*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
