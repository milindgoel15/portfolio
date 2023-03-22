import React from "react";
import Moon from "../Icons/Moon";

type themeMode = {
	setDarkMode: () => void;
};

let DarkModeButton = ({ setDarkMode }: themeMode) => {
	return (
		<>
			<button
				onClick={() => setDarkMode()}
				className="bg-slate-100 group outline-0 hover:outline hover:outline-2 outline-slate-400 rounded-lg p-2"
				title="Set Dark Mode"
			>
				<Moon />
			</button>
		</>
	);
};

export default DarkModeButton;
