// import type { Config } from 'tailwindcss/types/config' // Keep for local reference if needed

const config: any = { // Using 'any' to bypass build type issue
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scans the app directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you have a components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
