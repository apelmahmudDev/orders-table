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
			gray: {
				DEFAULT: "#F3F4F6",
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
