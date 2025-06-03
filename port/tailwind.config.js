import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bluearchive: ["var(--font-bluearchive)"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};