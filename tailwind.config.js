/** @type {import('tailwindcss').Config} */
export default {
  // 1. The content array tells Tailwind which files to scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // 2. This tells Tailwind to use your useDarkMode hook
  darkMode: 'class', 
  
  theme: {
    extend: {
      colors: {
        'ph-blue': '#0038A8',
        'ph-red': '#CE1126',
        'ph-yellow': '#FCD116',
      },
    },
  },
  plugins: [],
}