/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'primary': '0 0px 15px 3px rgba(249, 250, 251, 0.3)',
      }
    },
    colors: {
      'dark-gray': '#202f46',
      'primary-gray': '#405069',
      'light-gray': '#f9fafb',

      'error': '#3dbcb1',

      'dark-blue' : '#03b5d1',
      'primary-blue' : '#06b6d4',
      'light-blue' : '#a5f3fc',

      'primary-green' : '#3dbcb1',

      'inherit': 'inherit'
    }
  },
  plugins: [],
}
