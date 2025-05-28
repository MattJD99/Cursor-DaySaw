import type { Config } from 'tailwindcss/types/config'

const config: Config = {
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
