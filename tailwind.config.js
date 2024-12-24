const { nextui } = require('@nextui-org/react')

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {},
		},
	},
	plugins: [
		nextui({
			defaultTheme: 'dark',
			themes: {
				blue: {
					extend: 'dark',
					colors: {
						primary: '#3B82F6',
						secondary: '#3B82F6',
						background: '#080808',
					},
				},
				rose: {
					extend: 'dark',
					colors: {
						primary: '#DB1058',
						secondary: '#DB1058',
						background: '#080808',
					},
				},
				purple: {
					extend: 'dark',
					colors: {
						primary: '#854BBF',
						secondary: '#854BBF',
						background: '#080808',
					},
				},
			},
		}),
		[require('tailwind-scrollbar')({ nocompatible: true })],
	],
}
