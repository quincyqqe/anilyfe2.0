const { nextui } = require('@nextui-org/react')

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			colors: {
				'blue-primary': '#3253FA',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			defaultTheme: 'dark',
		}),
	],
}
