import React from "react";
import Sun from "../Icons/Sun";

type themeMode = {
	setLightMode: () => void;
};

let LightModeButton = ({ setLightMode }: themeMode) => {
	return (
		<>
			<button
				onClick={() => setLightMode()}
				className="bg-gray-800 group outline-0 hover:outline hover:outline-2 outline-slate-700 rounded-lg p-2"
				title="Set Light Mode"
			>
				<Sun />
			</button>
		</>
	);
};

export default LightModeButton;
