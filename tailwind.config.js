module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				raisonne: ["var(--font-raisonne)"],
			},
			screens: {
				fold: "290px",
				xsm: "584px",
			},
			fontSize: {
				heading: "5.5rem",
			},
			colors: {
				background: "var(--background)",
				altBackground: "rgb(27 30 36 / 0.5)",

				surface: "var(--surface)",
				inverseSurface:
					"var(--inverseSurface)",

				highlight: "var(--highlight)",
				inverseHighlight:
					"var(--inverseHighlight)",

				primary: "var(--primary)",
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
