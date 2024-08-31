import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			primary: "#2166F0",
			secondary: "#667085",
			orange: "#E46A11",
			dark: "#0E1521",
			gray: {
				DEFAULT: "#67686d",
				dark: "#323232",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				xl: "0rem",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				xxl: "1400px",
			},
		},
	},
	plugins: [],
};
export default config;
