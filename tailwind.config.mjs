/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  aspekta: ["Aspekta", "sans-serif"],
			  helvetica: ["Helvetica", "sans-serif"],
			  gotham: ["Gotham", "sans-serif"],
			  productSans: ['ProductSans', "sans-serif"],
			},
			colors: {
				'light-blue': '#A4EDE5',
				'dark-blue': '#246A73',
				'primary': '#EB0F8D',
			}
		},
	},
	plugins: [],
}
