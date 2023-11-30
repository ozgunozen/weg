import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        sm: '3rem',
        lg: '5rem',
        '2xl': '6rem'
      }
    },
  },
  plugins: [],
}
export default config
