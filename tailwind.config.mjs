/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	daisyui: {	
		themes: ["dark"],
	},
	plugins: [require('tw-elements/dist/plugin'), require("daisyui")],
}
