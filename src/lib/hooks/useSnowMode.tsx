"use client";

import { defaultSnowState } from "@/core/constants";
import { ReactNode, createContext, useContext, useState } from "react";

const SnowModeContext = createContext({
	isWinter: defaultSnowState,
	toggleSnow: () => {},
});

const SnowModeProvider = ({ children }: { children: ReactNode }) => {
	const isServer = typeof window === "undefined";

	let isWinterMode = defaultSnowState;

	if (!isServer) {
		isWinterMode = JSON.parse(localStorage.getItem("isWinter") ?? `${defaultSnowState}`);
	}

	const [isWinter, setIsWinter] = useState(isWinterMode);

	const toggleSnow = () => {
		localStorage.setItem("isWinter", JSON.stringify(!isWinter));
		setIsWinter(!isWinter);
	};

	return (
		<>
			<SnowModeContext.Provider value={{ isWinter, toggleSnow }}>
				{children}
			</SnowModeContext.Provider>
		</>
	);
};

export default SnowModeProvider;

export const useSnowMode = () => {
	const context = useContext(SnowModeContext);
	if (!context) {
		throw new Error("useSnowMode must be used within a SnowModeProvider");
	}
	return context;
};
