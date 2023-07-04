module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(20 22 26)",
				secondary: "rgb(20 22 26 / 0.9)",
			},
			transitionDuration: {
				400: "400ms",
			},
			margin: {
				110: "30rem",
				128: "40rem",
				136: "48rem",
				162: "62rem",
				174: "68rem",
				180: "75rem",
			},
			spacing: {
				88: "22rem",
			},
			backgroundSize: {
				length: "300% 100%",
			},
		},
	},
	plugins: [],
};
